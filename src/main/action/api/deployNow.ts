import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';
import * as qs from 'qs';
import { AxiosIonosSpaceBranchApiClient, AxiosIonosSpaceDeploymentApiClient } from './api';

export default class DeployNowClient {
  public readonly branchApi: AxiosIonosSpaceBranchApiClient;
  public readonly deploymentApi: AxiosIonosSpaceDeploymentApiClient;

  constructor(serviceHost: string, apiKey: string) {
    axiosRetry(axios, { retries: 3 });

    const axiosClientConfig: () => [string, AxiosInstance] = () => [
      `https://${serviceHost}`,
      axios.create({
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
        timeout: 10000,
        headers: { Authorization: `API-Key ${apiKey}` },
      }),
    ];

    this.branchApi = new AxiosIonosSpaceBranchApiClient(...axiosClientConfig());
    this.deploymentApi = new AxiosIonosSpaceDeploymentApiClient(...axiosClientConfig());
  }
}
