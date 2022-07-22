import * as core from '@actions/core';
import { ProjectInfo } from './types';

export function output(data: ProjectInfo): void {
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    core.setOutput(key, value);
  });
}
