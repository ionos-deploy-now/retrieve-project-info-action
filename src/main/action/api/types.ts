export type Project = {
  id: string;
  domain: string;
  productionBranch: BranchOverview;
};

export type BranchOverview = {
  id: string;
  name: string;
};

export type Branch = {
  id: string;
  name: string;
  lastDeploymentDate: string | undefined;
  webSpace: { state: string; webSpace: WebSpace } | undefined;
};

export type WebSpace = {
  siteUrl: string;
  sshHost: string;
  quota: { storageQuota: string };
};
