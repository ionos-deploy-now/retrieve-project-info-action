type Project = {
    id: string
    domain: string
    productionBranch: BranchOverview
}

type BranchOverview = {
    id: string
    name: string
}

type Branch = {
    id: string
    name: string
    lastDeploymentDate: string | undefined
    webSpace: { state: string, webSpace: WebSpace } | undefined
}

type WebSpace = {
    siteUrl: string
    sshHost: string
    quota: { storageQuota: string }
}