import { retrieveProjectInfo } from './action';
import { ProjectInfo } from './action/output/types';
import Configuration from './action/input/types';
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
