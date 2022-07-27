import DeployNowApi from './api/deployNow';
import Types from './input/types';
import { DisabledProject, ProjectInfo } from './output/types';
import { warning } from '@actions/core';

export async function retrieveProjectInfo(configuration: Types): Promise<ProjectInfo | DisabledProject> {
  const deployNowApi = new DeployNowApi(configuration.serviceHost, configuration.apiKey);

  const project = await deployNowApi.getProject(configuration.projectId);
  const isProductionBranch = project.productionBranch.name === configuration.branchName;
  const branchOverview = await (async () => {
    if (isProductionBranch) {
      return project.productionBranch;
    } else {
      return await deployNowApi.findBranch(configuration.projectId, configuration.branchName);
    }
  })();

  if (!branchOverview.deploymentEnabled) {
    warning('The deployment is disabled for this branch');
    return { 'deployment-enabled': false };
  }

  const branch = await deployNowApi.getBranch(configuration.projectId, branchOverview.id);

  return {
    'deployment-enabled': branch.deploymentEnabled,
    'branch-id': branch.id,
    'site-url': isProductionBranch ? `https://${project.domain}` : branch.webSpace!.webSpace.siteUrl,
    'remote-host': branch.webSpace!.webSpace.sshHost,
    'storage-quota': branch.webSpace!.webSpace.quota.storageQuota,
    'bootstrap-deploy': branch.lastDeploymentDate == null,
  };
}
