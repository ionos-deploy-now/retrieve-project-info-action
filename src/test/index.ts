import { expect } from 'chai';
import { afterEach, describe } from 'mocha';
import * as sinon from 'sinon';
import * as uuid from 'uuid';
import DeployNowApi from '../action/api/deployNow';
import { retrieveProjectInfo } from '../action';
import { Branch, BranchOverview, Project } from '../action/api/types';

describe('Test main action function', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Info with production branch', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();

    const projectStub = sinon.stub().returns(project(projectId, branchId));
    const branchOverviewStub = sinon.stub().returns(branchOverview(branchId, 'main'));
    const branchStub = sinon.stub().returns(branch(branchId, 'main'));

    sinon.replace(DeployNowApi.prototype, 'getProject', projectStub);
    sinon.replace(DeployNowApi.prototype, 'findBranch', branchOverviewStub);
    sinon.replace(DeployNowApi.prototype, 'getBranch', branchStub);

    const projectInfo = await retrieveProjectInfo({ apiKey: '', branchName: 'main', projectId, serviceHost: '' });
    const expected = {
      'deployment-enabled': true,
      'branch-id': branchId,
      'site-url': 'https://test.com',
      'remote-host': 'access-5000266734.webspace-host.com',
      'storage-quota': '',
      'bootstrap-deploy': false,
    };

    expect(projectInfo).to.deep.equal(expected);
    expect(projectStub.calledOnceWith(projectId)).to.be.true;
    expect(branchOverviewStub.called).to.be.false;
    expect(branchStub.calledOnceWith(projectId, branchId)).to.be.true;
  });

  it('Info with staging branch', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();

    const projectStub = sinon.stub().returns(project(projectId, branchId));
    const branchOverviewStub = sinon.stub().returns(branchOverview(branchId, 'staging'));
    const branchStub = sinon.stub().returns(branch(branchId, 'staging'));

    sinon.replace(DeployNowApi.prototype, 'getProject', projectStub);
    sinon.replace(DeployNowApi.prototype, 'findBranch', branchOverviewStub);
    sinon.replace(DeployNowApi.prototype, 'getBranch', branchStub);

    const projectInfo = await retrieveProjectInfo({ apiKey: '', branchName: 'staging', projectId, serviceHost: '' });
    const expected = {
      'deployment-enabled': true,
      'branch-id': branchId,
      'site-url': 'https://home-5000266734.app-ionos.space',
      'remote-host': 'access-5000266734.webspace-host.com',
      'storage-quota': '',
      'bootstrap-deploy': false,
    };

    expect(projectInfo).to.deep.equal(expected);
    expect(projectStub.calledOnceWith(projectId)).to.be.true;
    expect(branchOverviewStub.calledOnceWith(projectId, 'staging')).to.be.true;
    expect(branchStub.calledOnceWith(projectId, branchId)).to.be.true;
  });
});

function project(id: string, branchId): Promise<Project> {
  return new Promise<Project>((resolve) =>
    resolve({
      id,
      domain: 'test.com',
      productionBranch: {
        id: branchId,
        name: 'main',
      },
    })
  );
}

function branchOverview(id: string, name: string): Promise<BranchOverview> {
  return new Promise<BranchOverview>((resolve) => resolve({ id, name }));
}

function branch(id: string, name: string): Promise<Branch> {
  return new Promise<Branch>((resolve) =>
    resolve({
      id,
      name,
      lastDeploymentDate: Date.now().toString(),
      webSpace: {
        state: 'created',
        webSpace: {
          quota: { storageQuota: '' },
          siteUrl: 'https://home-5000266734.app-ionos.space',
          sshHost: 'access-5000266734.webspace-host.com',
        },
      },
    })
  );
}
