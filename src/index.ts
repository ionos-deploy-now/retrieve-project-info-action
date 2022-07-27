import { retrieveProjectInfo } from './main';
import { ProjectInfo } from './main/action/output/types';
import Configuration from './main/action/input/types';
import Action from '@ionos-deploy-now/actions-core';

Action.run<Configuration, ProjectInfo>(
  retrieveProjectInfo,
  (input, context) =>
    <Configuration>{
      serviceHost: input.required('service-host'),
      apiKey: input.required('api-key'),
      projectId: input.required('project-id'),
      branchName: context.required('ref').replace(/refs\/heads\//g, ''),
    }
);
