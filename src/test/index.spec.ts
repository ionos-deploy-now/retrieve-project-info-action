import chai, { expect } from 'chai';
import { afterEach, describe } from 'mocha';
import * as sinon from 'sinon';
import * as uuid from 'uuid';
import { retrieveProjectInfo } from '../main/action';
import {
  AxiosIonosSpaceBranchApiClient,
  AxiosIonosSpaceDeploymentApiClient,
  BranchOverview,
  Deployment,
  DeploymentOverview,
  DeploymentState,
  Page,
  WebspaceState,
} from '../main/action/api/api';
import * as core from '@actions/core';
import chaiAsPromised from 'chai-as-promised';

describe('Test main action function', () => {
  before(() => {
    chai.should();
    chai.use(chaiAsPromised);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Info', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();
    const deploymentId = uuid.v4();
    const domain = 'test.com';

    const branchesStub = sinon.stub().resolves(response(page(branchOverview(branchId, 'main', 1))));
    const deploymentsStub = sinon.stub().resolves(response(page(deploymentOverview(deploymentId))));
    const deploymentStub = sinon.stub().resolves(response(deployment(deploymentId, domain, new Date())));

    sinon.replace(AxiosIonosSpaceBranchApiClient.prototype, 'getBranches', branchesStub);
    sinon.replace(AxiosIonosSpaceDeploymentApiClient.prototype, 'getDeployments', deploymentsStub);
    sinon.replace(AxiosIonosSpaceDeploymentApiClient.prototype, 'getDeployment', deploymentStub);

    const projectInfo = await retrieveProjectInfo({ apiKey: '', branchName: 'main', projectId, serviceHost: '' });
    const expected = {
      'deployment-enabled': true,
      'branch-id': branchId,
      'site-url': 'https://test.com',
      'remote-host': 'access-5000266734.webspace-host.com',
      'storage-quota': 10,
      'bootstrap-deploy': false,
    };

    expect(projectInfo).to.deep.equal(expected);
    expect(branchesStub.calledOnceWith('me', projectId, { name: 'main' })).to.be.true;
    expect(deploymentsStub.calledOnceWith('me', projectId, branchId)).to.be.true;
    expect(deploymentStub.calledOnceWith('me', projectId, branchId, deploymentId)).to.be.true;
  });

  it('Disabled deployment', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();

    const branchesStub = sinon.stub().resolves(response(page(branchOverview(branchId, 'staging', 0))));
    const warningFake = sinon.fake();

    sinon.replace(AxiosIonosSpaceBranchApiClient.prototype, 'getBranches', branchesStub);
    sinon.replace(core, 'warning', warningFake);

    const projectInfo = await retrieveProjectInfo({ apiKey: '', branchName: 'staging', projectId, serviceHost: '' });
    const expected = {
      'deployment-enabled': false,
    };

    expect(projectInfo).to.deep.equal(expected);
    expect(branchesStub.calledWithExactly('me', projectId, { name: 'staging' })).to.be.true;
    expect(warningFake.calledOnceWith('The deployment is disabled for this branch')).to.be.true;
  });

  it('Multi deployments not supported', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();

    const branchesStub = sinon.stub().resolves(response(page(branchOverview(branchId, 'main', 2))));

    sinon.replace(AxiosIonosSpaceBranchApiClient.prototype, 'getBranches', branchesStub);

    retrieveProjectInfo({ apiKey: '', branchName: 'staging', projectId, serviceHost: '' }).should.be.rejectedWith(
      "This action doesn't support multi deployments"
    );

    expect(branchesStub.calledOnceWith('me', projectId, { name: 'staging' })).to.be.true;
  });

  it('Branch not found', async () => {
    const projectId = uuid.v4();

    const branchesStub = sinon
      .stub()
      .resolves(response(new Page<BranchOverview>({ total: 0, pageSize: 10, pageNumber: 0, values: [] })));

    sinon.replace(AxiosIonosSpaceBranchApiClient.prototype, 'getBranches', branchesStub);

    retrieveProjectInfo({ apiKey: '', branchName: 'staging', projectId, serviceHost: '' }).should.be.rejectedWith(
      'Branch staging not found in DeployNow'
    );

    expect(branchesStub.calledWithExactly('me', projectId, { name: 'staging' })).to.be.true;
  });
});

function branchOverview(id: string, name: string, deploymentCount: number): BranchOverview {
  return {
    id,
    name,
    deleted: false,
    deploymentCount: deploymentCount,
    productionBranch: false,
    webUrl: '',
    workflowPresent: false,
  };
}

function deploymentOverview(id: string): DeploymentOverview {
  return {
    id,
    domain: { name: 'test.de', customDomain: true },
    name: 'test',
    state: {
      state: DeploymentState.QUEUED,
      occurrenceTime: new Date(),
      externalId: '1234',
    },
    webspace: {
      id: uuid.v4(),
      siteUrl: 'https://test-site-url',
      sshHost: 'test-ssh-host',
    },
  };
}

function deployment(id: string, domain: string, lastDeployedDate?: Date): Deployment {
  return {
    id,
    domain: { name: domain, customDomain: true },
    name: 'test',
    state: {
      state: DeploymentState.QUEUED,
      occurrenceTime: new Date(),
      externalId: '1234',
      lastDeployedDate,
    },
    webspace: {
      webspace: {
        id: uuid.v4(),
        siteUrl: 'https://test-site-url',
        sshHost: 'access-5000266734.webspace-host.com',
        username: 'test-user',
        quota: {
          storageQuota: 10,
          storageUsage: 5,
          fileQuota: 500,
          fileUsage: 50,
        },
      },
      state: WebspaceState.CREATED,
    },
  };
}

function page<T>(value: T): Page<T> {
  return { pageNumber: 0, pageSize: 10, total: 1, values: [value] };
}

function response(data: any): any {
  return { data };
}
