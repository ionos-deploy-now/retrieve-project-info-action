import DeployNowApi from './api/deployNow';
import Types from './input/types';
import { ProjectInfo } from './output/types';

export async function retrieveProjectInfo(configuration: Types): Promise<ProjectInfo> {
  const deployNowApi = new DeployNowApi(configuration.serviceHost, configuration.apiKey);

  const project = await deployNowApi.getProject(configuration.projectId);
  const isProductionBranch = project.productionBranch.name === configuration.branchName;
  const branchId = await (async () => {
    if (isProductionBranch) {
      return project.productionBranch.id;
    } else {
      return (await deployNowApi.findBranch(configuration.projectId, configuration.branchName)).id;
    }
  })();
  const branch = await deployNowApi.getBranch(configuration.projectId, branchId);

  return {
    'deployment-enabled': true,
    'branch-id': branchId,
    'site-url': isProductionBranch ? `https://${project.domain}` : branch.webSpace!.webSpace.siteUrl,
    'remote-host': branch.webSpace!.webSpace.sshHost,
    'storage-quota': branch.webSpace!.webSpace.quota.storageQuota,
    'bootstrap-deploy': branch.lastDeploymentDate == null,
  };
}
