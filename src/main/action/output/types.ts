export type ProjectInfo = {
  'deployment-enabled': boolean;
  'branch-id': string;
  'site-url': string;
  'remote-host': string;
  'storage-quota': number;
  'bootstrap-deploy': boolean;
};

export type DisabledProject = {
  'deployment-enabled': boolean;
};
