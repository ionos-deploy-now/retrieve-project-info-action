import DeployNowApi from "./api/deployNow";
import Configuration from "./input/configuration";
import * as core from "@actions/core";
import {output} from "./output";

async function run(): Promise<void> {
    try {
        let configuration = Configuration.fromInput();
        let deployNowApi = new DeployNowApi(configuration.serviceHost, configuration.apiKey);

        const project = await deployNowApi.getProject(configuration.projectId);

        const branchId = await (async () => {
            if (project.productionBranch.name === configuration.branchName) {
                return project.productionBranch.id
            } else {
                return (await deployNowApi.findBranch(configuration.projectId, configuration.branchName)).id;
            }
        })()

        let branch = await deployNowApi.getBranch(configuration.projectId, branchId);
        output({
                   "deployment-enabled": true,
                   "branch-id": branchId,
                   "site-url": project.productionBranch.name === configuration.branchName ? project.domain : branch.webSpace!.webSpace.siteUrl,
                   "remote-host": branch.webSpace!.webSpace.sshHost,
                   "storage-quota": branch.webSpace!.webSpace.quota.storageQuota,
                   "bootstrap-deploy": branch.lastDeploymentDate == null
               })
    } catch (err) {
        core.setFailed((err as Error).message)
    }
}

run()