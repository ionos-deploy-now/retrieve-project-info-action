import * as core from '@actions/core';
import * as github from '@actions/github';

export default class Configuration {
  constructor(
    readonly serviceHost: string,
    readonly apiKey: string,
    readonly projectId: string,
    readonly branchName: string
  ) {}

  static fromInput(): Configuration {
    return new Configuration(
      core.getInput('service-host'),
      core.getInput('api-key'),
      core.getInput('project-id'),
      github.context.ref.replace(/refs\/heads\//g, '')
    );
  }
}
