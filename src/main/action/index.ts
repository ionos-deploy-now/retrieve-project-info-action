import DeployNowClient from './api/deployNow';
import Types from './input/types';
import { DisabledProject, ProjectInfo } from './output/types';
import Retryable from './api/retry';
import { BranchOverview } from './api/api';
import { warning } from '@actions/core';

export async function retrieveProjectInfo(configuration: Types): Promise<ProjectInfo | DisabledProject> {
  const client = new DeployNowClient(configuration.serviceHost, configuration.apiKey);

  const branch = await new Retryable<BranchOverview>(
    async (retry, lastRetry) =>
      await client.branchApi
        .getBranches('me', configuration.projectId, { name: configuration.branchName })
        .then(({ data }) => {
          if (data.total === 0 || data.values[0].deploymentCount === 0) {
            if (lastRetry) {
              if (data.total === 0) {
                throw new Error(`Branch ${configuration.branchName} not found in DeployNow`);
              }
              return data.values[0];
            } else {
              return retry();
            }
          }
          return data.values[0];
        }),
    { count: 5 },
  ).run();

  if (branch.deploymentCount == 0) {
    warning('The deployment is disabled for this branch');
    return {
      'deployment-enabled': false,
    };
  }

  if (branch.deploymentCount > 1) {
    throw new Error("This action doesn't support multi deployments");
  }

  const deployments = await client.deploymentApi
    .getDeployments('me', configuration.projectId, branch.id)
    .then(({ data }) => data.values);

  const deployment = await client.deploymentApi
    .getDeployment('me', configuration.projectId, branch.id, deployments[0].id)
    .then(({ data }) => data);

  return {
    'deployment-enabled': deployments.length === 1,
    'branch-id': branch.id,
    'site-url': `https://${deployment.domain.name}`,
    'remote-host': deployment.webspace.webspace.sshHost,
    'storage-quota': deployment.webspace.webspace.quota!.storageQuota,
    'bootstrap-deploy': deployment.state.lastDeployedDate == null,
  };
}
