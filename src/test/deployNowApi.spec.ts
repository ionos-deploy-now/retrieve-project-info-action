import chia, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { afterEach, describe } from 'mocha';
import * as sinon from 'sinon';
import * as tsSinon from 'ts-sinon';
import * as uuid from 'uuid';
import axios, { AxiosInstance } from 'axios';
import DeployNowApi from '../main/action/api/deployNow';
import { Branch, BranchOverview, Project } from '../main/action/api/types';

describe('Test deployNow api interaction', () => {
  before(() => {
    chia.should();
    chia.use(chaiAsPromised);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Get project', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();

    const mock = tsSinon.stubInterface<AxiosInstance>();
    mock.get.withArgs(`/v3/accounts/me/projects/${projectId}`).returns(project(projectId, branchId));
    sinon.replace(axios, 'create', () => mock);

    const result = await new DeployNowApi('', '').getProject(projectId);
    const expected = {
      id: projectId,
      domain: 'https://test.com',
      productionBranch: {
        id: branchId,
        name: 'main',
      },
    };

    expect(result).to.deep.equal(expected);
  });

  it('Find branch', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();
    const branchName = 'main';

    const mock = tsSinon.stubInterface<AxiosInstance>();
    mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches?name=${branchName}`)
      .returns(branchOverview(branchId, branchName));
    sinon.replace(axios, 'create', () => mock);

    const result = await new DeployNowApi('', '').findBranch(projectId, branchName);
    const expected = {
      id: branchId,
      name: branchName,
    };

    expect(result).to.deep.equal(expected);
  });

  it('Find branch with retry', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();
    const branchName = 'main';

    const mock = tsSinon.stubInterface<AxiosInstance>();
    const emptyStub = mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches?name=${branchName}`)
      .onFirstCall()
      .returns(emptyBranchOverview());
    const stub = mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches?name=${branchName}`)
      .onSecondCall()
      .returns(branchOverview(branchId, branchName));
    sinon.replace(axios, 'create', () => mock);

    const result = await new DeployNowApi('', '').findBranch(projectId, branchName);
    const expected = {
      id: branchId,
      name: branchName,
    };

    expect(result).to.deep.equal(expected);
    expect(emptyStub.called).to.be.true;
    expect(stub.called).to.be.true;
  });

  it('Find branch with retry fails', async () => {
    const projectId = uuid.v4();
    const branchName = 'main';

    const mock = tsSinon.stubInterface<AxiosInstance>();
    mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches?name=${branchName}`)
      .returns(emptyBranchOverview());
    sinon.replace(axios, 'create', () => mock);

    await new DeployNowApi('', '')
      .findBranch(projectId, branchName)
      .should.be.rejectedWith(`Branch ${branchName} not found in DeployNow`);
  });

  it('Get branch', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();
    const branchName = 'main';

    const mock = tsSinon.stubInterface<AxiosInstance>();
    mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches/${branchId}`)
      .returns(branch(branchId, branchName));
    sinon.replace(axios, 'create', () => mock);

    const result = await new DeployNowApi('', '').getBranch(projectId, branchId);
    const expected = {
      id: branchId,
      lastDeploymentDate: 'now',
      name: branchName,
      webSpace: {
        state: 'CREATED',
        webSpace: {
          quota: {
            storageQuota: '',
          },
          siteUrl: 'https://home-5000266734.app-ionos.space',
          sshHost: 'access-5000266734.webspace-host.com',
        },
      },
    };

    expect(result).to.deep.equal(expected);
  });

  it('Get branch with retry', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();
    const branchName = 'main';

    const mock = tsSinon.stubInterface<AxiosInstance>();
    const emptyStub = mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches/${branchId}`)
      .onFirstCall()
      .returns(notInitializedBranch(branchId, branchName));
    const stub = mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches/${branchId}`)
      .onSecondCall()
      .returns(branch(branchId, branchName));
    sinon.replace(axios, 'create', () => mock);

    const result = await new DeployNowApi('', '').getBranch(projectId, branchId);
    const expected = {
      id: branchId,
      lastDeploymentDate: 'now',
      name: branchName,
      webSpace: {
        state: 'CREATED',
        webSpace: {
          quota: {
            storageQuota: '',
          },
          siteUrl: 'https://home-5000266734.app-ionos.space',
          sshHost: 'access-5000266734.webspace-host.com',
        },
      },
    };

    expect(result).to.deep.equal(expected);
    expect(emptyStub.called).to.be.true;
    expect(stub.called).to.be.true;
  });

  it('Get branch with retry fails', async () => {
    const projectId = uuid.v4();
    const branchId = uuid.v4();
    const branchName = 'main';

    const mock = tsSinon.stubInterface<AxiosInstance>();
    mock.get
      .withArgs(`/v3/accounts/me/projects/${projectId}/branches/${branchId}`)
      .returns(notInitializedBranch(branchId, branchName));
    sinon.replace(axios, 'create', () => mock);

    await new DeployNowApi('', '')
      .getBranch(projectId, branchId)
      .should.be.rejectedWith('The setup of this DeployNow project is not fully completed yet');
  });
});

function project(id: string, branchId): Promise<{ data: Project }> {
  return new Promise<{ data: Project }>((resolve) =>
    resolve({
      data: {
        id,
        domain: 'https://test.com',
        productionBranch: {
          id: branchId,
          name: 'main',
        },
      },
    })
  );
}

function emptyBranchOverview(): Promise<{ data: { values: BranchOverview[] } }> {
  return new Promise<{ data: { values: BranchOverview[] } }>((resolve) => resolve({ data: { values: [] } }));
}

function branchOverview(id: string, name: string): Promise<{ data: { values: BranchOverview[] } }> {
  return new Promise<{ data: { values: BranchOverview[] } }>((resolve) =>
    resolve({ data: { values: [{ id, name }] } })
  );
}

function branch(id: string, name: string): Promise<{ data: Branch }> {
  return new Promise<{ data: Branch }>((resolve) =>
    resolve({
      data: {
        id,
        name,
        lastDeploymentDate: 'now',
        webSpace: {
          state: 'CREATED',
          webSpace: {
            quota: { storageQuota: '' },
            siteUrl: 'https://home-5000266734.app-ionos.space',
            sshHost: 'access-5000266734.webspace-host.com',
          },
        },
      },
    })
  );
}

function notInitializedBranch(id: string, name: string): Promise<{ data: Branch }> {
  return new Promise<{ data: Branch }>((resolve) =>
    resolve({
      data: {
        id,
        name,
        lastDeploymentDate: 'now',
        webSpace: undefined,
      },
    })
  );
}
