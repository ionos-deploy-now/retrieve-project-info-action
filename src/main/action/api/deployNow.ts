import axios, { AxiosInstance } from 'axios';
import Retryable from './retry';
import axiosRetry from 'axios-retry';
import { Branch, BranchOverview, Project } from './types';

export default class DeployNowApi {
  private instance: AxiosInstance;

  constructor(serviceHost: string, apiKey: string) {
    axiosRetry(axios, { retries: 3 });

    this.instance = axios.create({
      baseURL: `https://${serviceHost}`,
      timeout: 10000,
      headers: { Authorization: `API-Key ${apiKey}` },
    });
  }

  getProject(projectId: string): Promise<Project> {
    return this.instance.get(`/v3/accounts/me/projects/${projectId}`).then((res) => res.data as Project);
  }

  findBranch(projectId: string, branchName: string): Promise<BranchOverview> {
    return new Retryable<BranchOverview>(
      async (retry, lastRetry) =>
        await this.instance.get(`/v3/accounts/me/projects/${projectId}/branches?name=${branchName}`).then((res) => {
          const branches = res.data.values.filter((branch) => branch.name === branchName);
          if (branches.length === 0) {
            if (lastRetry) {
              throw new Error(`Branch ${branchName} not found in DeployNow`);
            } else {
              return retry();
            }
          }
          return branches[0] as BranchOverview;
        }),
      { count: 5 }
    ).run();
  }

  getBranch(projectId: string, branchId: string): Promise<Branch> {
    return new Retryable<Branch>(
      async (retry, lastRetry) =>
        await this.instance.get(`/v3/accounts/me/projects/${projectId}/branches/${branchId}`).then((res) => {
          const branch = res.data as Branch;
          if (branch.webSpace === null || branch.webSpace === undefined || branch.webSpace.state !== 'CREATED') {
            if (lastRetry) {
              throw new Error('The setup of this DeployNow project is not fully completed yet');
            } else {
              return retry();
            }
          }
          return branch;
        }),
      { count: 5 }
    ).run();
  }
}
