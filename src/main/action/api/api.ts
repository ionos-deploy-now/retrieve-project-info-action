/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.36.1070 on 2024-05-13 07:35:24.

export interface Event {
    occurrenceDate: Date;
}

export class BranchChange implements Event {
    occurrenceDate: Date;
    branchId: string;
    projectId: string;
    type: BranchChangeType;

    constructor(data: BranchChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.branchId = data.branchId;
        this.projectId = data.projectId;
        this.type = data.type;
    }
}

export class ContractChange implements Event {
    occurrenceDate: Date;
    type: ContractChangeType;

    constructor(data: ContractChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
    }
}

export class InstallationChange implements Event {
    occurrenceDate: Date;
    installationId: string;
    type: InstallationChangeType;

    constructor(data: InstallationChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.installationId = data.installationId;
        this.type = data.type;
    }
}

export class ProjectChange implements Event {
    occurrenceDate: Date;
    projectId: string;
    type: ProjectChangeType;

    constructor(data: ProjectChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.projectId = data.projectId;
        this.type = data.type;
    }
}

export class TokenChange implements Event {
    occurrenceDate: Date;
    providerType: ProviderType;
    type: TokenChangeType;

    constructor(data: TokenChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.providerType = data.providerType;
        this.type = data.type;
    }
}

export class UserCreate implements Event {
    occurrenceDate: Date;
    expiryDate?: Date;
    username: string;
    id: string;

    constructor(data: UserCreate) {
        this.occurrenceDate = data.occurrenceDate;
        this.expiryDate = data.expiryDate;
        this.username = data.username;
        this.id = data.id;
    }
}

export class DeploymentChange implements Event {
    occurrenceDate: Date;
    deploymentId: string;
    branchId: string;
    projectId: string;
    type: DeploymentChangeType;

    constructor(data: DeploymentChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.deploymentId = data.deploymentId;
        this.branchId = data.branchId;
        this.projectId = data.projectId;
        this.type = data.type;
    }
}

export class FeedbackInput {
    supportUserInvited?: boolean;
    affectedProjectId?: string;
    errorId?: string;
    summary: string;
    description: string;
    type: string;

    constructor(data: FeedbackInput) {
        this.supportUserInvited = data.supportUserInvited;
        this.affectedProjectId = data.affectedProjectId;
        this.errorId = data.errorId;
        this.summary = data.summary;
        this.description = data.description;
        this.type = data.type;
    }
}

export class DisconnectDomains {
    domains: string[];

    constructor(data: DisconnectDomains) {
        this.domains = data.domains;
    }
}

export class DetailedAccount {
    provisioningId: string;
    stackInstanceId: string;
    softLockedDate?: Date;
    hardLockedDate?: Date;
    deletedDate?: Date;
    gitConnections: GitConnectionUnion[];
    createdDate: Date;
    lastChangedDate: Date;
    market: string;
    wa3Id?: string;
    projectTypes: ProjectTypeCount[];
    id: string;

    constructor(data: DetailedAccount) {
        this.provisioningId = data.provisioningId;
        this.stackInstanceId = data.stackInstanceId;
        this.softLockedDate = data.softLockedDate;
        this.hardLockedDate = data.hardLockedDate;
        this.deletedDate = data.deletedDate;
        this.gitConnections = data.gitConnections;
        this.createdDate = data.createdDate;
        this.lastChangedDate = data.lastChangedDate;
        this.market = data.market;
        this.wa3Id = data.wa3Id;
        this.projectTypes = data.projectTypes;
        this.id = data.id;
    }
}

export class UpsellInformation {
    projectTypeShopLinks: Record<string, string>;
    contractId: string;

    constructor(data: UpsellInformation) {
        this.projectTypeShopLinks = data.projectTypeShopLinks;
        this.contractId = data.contractId;
    }
}

export class AccountPatch {
    feedbackTileShownPatch?: FeedbackTileShownPatch;
    welcomeShownPatch?: WelcomeShownPatch;

    constructor(data: AccountPatch) {
        this.feedbackTileShownPatch = data.feedbackTileShownPatch;
        this.welcomeShownPatch = data.welcomeShownPatch;
    }
}

export class Account {
    gitConnections: GitConnectionUnion[];
    showWelcome: boolean;
    showFeedbackTile: boolean;
    projectTypes: ProjectTypeCount[];

    constructor(data: Account) {
        this.gitConnections = data.gitConnections;
        this.showWelcome = data.showWelcome;
        this.showFeedbackTile = data.showFeedbackTile;
        this.projectTypes = data.projectTypes;
    }
}

export class ProjectNameValidationRequest {
    projectName: string;

    constructor(data: ProjectNameValidationRequest) {
        this.projectName = data.projectName;
    }
}

export class AccountInfo {
    usableAccount: Account;
    unusableAccounts: UnusableAccount[];

    constructor(data: AccountInfo) {
        this.usableAccount = data.usableAccount;
        this.unusableAccounts = data.unusableAccounts;
    }
}

export class ArtifactDownload {
    url: string;

    constructor(data: ArtifactDownload) {
        this.url = data.url;
    }
}

export class ArtifactUploadInput {
    size: number;

    constructor(data: ArtifactUploadInput) {
        this.size = data.size;
    }
}

export class ArtifactUpload {
    urls: string[];

    constructor(data: ArtifactUpload) {
        this.urls = data.urls;
    }
}

export class BranchDeleteOperation {
    deleteRemoteBranch: boolean;

    constructor(data: BranchDeleteOperation) {
        this.deleteRemoteBranch = data.deleteRemoteBranch;
    }
}

export class Branch {
    productionBranch: boolean;
    workflowPresent: boolean;
    deploymentCount: number;
    buildState?: BranchBuildState;
    deploymentState?: BranchDeploymentState;
    deprecatedWorkflow?: boolean;
    webUrl: string;
    deleted: boolean;
    name: string;
    id: string;

    constructor(data: Branch) {
        this.productionBranch = data.productionBranch;
        this.workflowPresent = data.workflowPresent;
        this.deploymentCount = data.deploymentCount;
        this.buildState = data.buildState;
        this.deploymentState = data.deploymentState;
        this.deprecatedWorkflow = data.deprecatedWorkflow;
        this.webUrl = data.webUrl;
        this.deleted = data.deleted;
        this.name = data.name;
        this.id = data.id;
    }
}

export class BuildLog {
    jobs: BuildJobLog[];

    constructor(data: BuildLog) {
        this.jobs = data.jobs;
    }
}

export class BranchPatch {
    phpVersionPatch?: PhpVersionPatch;

    constructor(data: BranchPatch) {
        this.phpVersionPatch = data.phpVersionPatch;
    }
}

export class DeploymentTriggerInput {
    onlyFailed: boolean;
    version?: string;

    constructor(data: DeploymentTriggerInput) {
        this.onlyFailed = data.onlyFailed;
        this.version = data.version;
    }
}

export class ConnectDomainInput {
    force: boolean;
    domain: string;

    constructor(data: ConnectDomainInput) {
        this.force = data.force;
        this.domain = data.domain;
    }
}

export class DeploymentInput {
    domain?: ConnectDomainInput;
    name: string;

    constructor(data: DeploymentInput) {
        this.domain = data.domain;
        this.name = data.name;
    }
}

export class Deployment {
    webspace: DetailedWebspace;
    database?: DetailedDatabase;
    domain: DeploymentDomain;
    name: string;
    id: string;
    state: DetailedDeploymentState;

    constructor(data: Deployment) {
        this.webspace = data.webspace;
        this.database = data.database;
        this.domain = data.domain;
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
    }
}

export class DirectorySessionToken {
    expireAt: Date;
    sessionId: string;

    constructor(data: DirectorySessionToken) {
        this.expireAt = data.expireAt;
        this.sessionId = data.sessionId;
    }
}

export class PhpMyAdminSession {
    expireAt: Date;
    url: string;

    constructor(data: PhpMyAdminSession) {
        this.expireAt = data.expireAt;
        this.url = data.url;
    }
}

export class DeploymentPatch {
    phpVersionPatch?: DeploymentPhpVersionPatch;
    deploymentRootPathPatch?: DeploymentRootPathPatch;
    namePatch?: DeploymentNamePatch;

    constructor(data: DeploymentPatch) {
        this.phpVersionPatch = data.phpVersionPatch;
        this.deploymentRootPathPatch = data.deploymentRootPathPatch;
        this.namePatch = data.namePatch;
    }
}

export class DeploymentStateInput {
    externalId: string;
    state: string;

    constructor(data: DeploymentStateInput) {
        this.externalId = data.externalId;
        this.state = data.state;
    }
}

export class BuildStepCompletionInput {
    buildStepName: string;
    repository: RepositoryInputUnion;

    constructor(data: BuildStepCompletionInput) {
        this.buildStepName = data.buildStepName;
        this.repository = data.repository;
    }
}

export class BuildStep {
    commandSuggestions: string[];
    buildTool?: BuildTool;
    commands: string[];
    variables: Record<string, string>;
    complete: boolean;
    runtime?: Runtime;
    name: string;
    displayName: string;

    constructor(data: BuildStep) {
        this.commandSuggestions = data.commandSuggestions;
        this.buildTool = data.buildTool;
        this.commands = data.commands;
        this.variables = data.variables;
        this.complete = data.complete;
        this.runtime = data.runtime;
        this.name = data.name;
        this.displayName = data.displayName;
    }
}

export class TemplateFileCompletionInput {
    databaseEnabled?: boolean;
    mailEnabled?: boolean;
    templateCompletionType: string;
    sourceFile?: string;
    repository: RepositoryInputUnion;
    path: string;

    constructor(data: TemplateFileCompletionInput) {
        this.databaseEnabled = data.databaseEnabled;
        this.mailEnabled = data.mailEnabled;
        this.templateCompletionType = data.templateCompletionType;
        this.sourceFile = data.sourceFile;
        this.repository = data.repository;
        this.path = data.path;
    }
}

export class TemplateFile {
    completionType: string;
    content: string;
    path: string;

    constructor(data: TemplateFile) {
        this.completionType = data.completionType;
        this.content = data.content;
        this.path = data.path;
    }
}

export class DetectionInput {
    frameworkId?: string;
    repository: RepositoryInputUnion;

    constructor(data: DetectionInput) {
        this.frameworkId = data.frameworkId;
        this.repository = data.repository;
    }
}

export class FrameworkDefinitionInput {
    buildSteps: BuildStepDefinition[];
    deployStep: DeployStepDefinition;
    requiredFeatures: string[];
    detections: DetectionUnion[];
    domainRootPath: string;
    templateFiles: TemplateFileDefinition[];
    supported: SupportedInput;
    logoUrl: string;
    name: string;
    type: string;

    constructor(data: FrameworkDefinitionInput) {
        this.buildSteps = data.buildSteps;
        this.deployStep = data.deployStep;
        this.requiredFeatures = data.requiredFeatures;
        this.detections = data.detections;
        this.domainRootPath = data.domainRootPath;
        this.templateFiles = data.templateFiles;
        this.supported = data.supported;
        this.logoUrl = data.logoUrl;
        this.name = data.name;
        this.type = data.type;
    }
}

export class FrameworkDefinition {
    buildSteps: BuildStepDefinition[];
    deployStep: DeployStepDefinition;
    requiredFeatures: Feature[];
    detections: DetectionUnion[];
    domainRootPath: string;
    templateFiles: TemplateFileDefinition[];
    supported: Supported;
    logoUrl: string;
    name: string;
    id: string;
    type: FrameworkType;

    constructor(data: FrameworkDefinition) {
        this.buildSteps = data.buildSteps;
        this.deployStep = data.deployStep;
        this.requiredFeatures = data.requiredFeatures;
        this.detections = data.detections;
        this.domainRootPath = data.domainRootPath;
        this.templateFiles = data.templateFiles;
        this.supported = data.supported;
        this.logoUrl = data.logoUrl;
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
    }
}

export class InstallationInput {
    externalId: number;
    code: string;

    constructor(data: InstallationInput) {
        this.externalId = data.externalId;
        this.code = data.code;
    }
}

export class Installation {
    externalId: string;
    necessaryPermissions: boolean;
    missingPermissions: Record<string, AppAccessType>;
    suspended: boolean;
    account: GithubIdentity;
    id: string;

    constructor(data: Installation) {
        this.externalId = data.externalId;
        this.necessaryPermissions = data.necessaryPermissions;
        this.missingPermissions = data.missingPermissions;
        this.suspended = data.suspended;
        this.account = data.account;
        this.id = data.id;
    }
}

export class ProjectInput {
    databaseEnabled: boolean;
    automaticDeploymentEnabled: boolean;
    buildSteps: BuildStepInput[];
    runtimeStep?: RuntimeStepInput;
    deployStep: DeployStepInput;
    destinationRepository: DestinationRepositoryInput;
    mailAccountEnabled: boolean;
    visitorStatisticsEnabled: boolean;
    sourceRepository?: RepositoryInputUnion;
    overwriteWorkflow?: boolean;
    defaultPhpVersion?: string;
    projectName: string;
    projectType: string;

    constructor(data: ProjectInput) {
        this.databaseEnabled = data.databaseEnabled;
        this.automaticDeploymentEnabled = data.automaticDeploymentEnabled;
        this.buildSteps = data.buildSteps;
        this.runtimeStep = data.runtimeStep;
        this.deployStep = data.deployStep;
        this.destinationRepository = data.destinationRepository;
        this.mailAccountEnabled = data.mailAccountEnabled;
        this.visitorStatisticsEnabled = data.visitorStatisticsEnabled;
        this.sourceRepository = data.sourceRepository;
        this.overwriteWorkflow = data.overwriteWorkflow;
        this.defaultPhpVersion = data.defaultPhpVersion;
        this.projectName = data.projectName;
        this.projectType = data.projectType;
    }
}

export class Project {
    productionBranchId: string;
    productionDeploymentCount: number;
    stagingDeploymentCount: number;
    maxStagingDeploymentCount: number;
    automaticDeploymentEnabled: boolean;
    defaultDomainRootPath: string;
    visitorStatisticsEnabled: boolean;
    defaultPhpVersion?: string;
    permissionLost: boolean;
    gitRepository: GitRepository;
    databaseSettings?: DatabaseSettings;
    spawningEnabled: boolean;
    lastChangedDate: Date;
    siteUrls: string[];
    deleted: boolean;
    providerType: ProviderType;
    projectType: string;
    domains: string[];
    name: string;
    id: string;
    locked: boolean;

    constructor(data: Project) {
        this.productionBranchId = data.productionBranchId;
        this.productionDeploymentCount = data.productionDeploymentCount;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.maxStagingDeploymentCount = data.maxStagingDeploymentCount;
        this.automaticDeploymentEnabled = data.automaticDeploymentEnabled;
        this.defaultDomainRootPath = data.defaultDomainRootPath;
        this.visitorStatisticsEnabled = data.visitorStatisticsEnabled;
        this.defaultPhpVersion = data.defaultPhpVersion;
        this.permissionLost = data.permissionLost;
        this.gitRepository = data.gitRepository;
        this.databaseSettings = data.databaseSettings;
        this.spawningEnabled = data.spawningEnabled;
        this.lastChangedDate = data.lastChangedDate;
        this.siteUrls = data.siteUrls;
        this.deleted = data.deleted;
        this.providerType = data.providerType;
        this.projectType = data.projectType;
        this.domains = data.domains;
        this.name = data.name;
        this.id = data.id;
        this.locked = data.locked;
    }
}

export class ProjectDeleteOperation {
    deleteRepository: boolean;

    constructor(data: ProjectDeleteOperation) {
        this.deleteRepository = data.deleteRepository;
    }
}

export class UpgradeInformation {
    possibleTargetProjectTypes: string[];

    constructor(data: UpgradeInformation) {
        this.possibleTargetProjectTypes = data.possibleTargetProjectTypes;
    }
}

export class ProjectPatch {
    automaticDeploymentEnabledPatch?: AutomaticDeploymentEnabledPatch;
    defaultDomainRootPathPatch?: DefaultDomainRootPathPatch;
    visitorStatisticsEnabledPatch?: VisitorStatisticsEnabledPatch;
    defaultPhpVersionPatch?: DefaultPhpVersionPatch;
    projectNamePatch?: ProjectNamePatch;
    projectTypePatch?: ProjectTypePatch;

    constructor(data: ProjectPatch) {
        this.automaticDeploymentEnabledPatch = data.automaticDeploymentEnabledPatch;
        this.defaultDomainRootPathPatch = data.defaultDomainRootPathPatch;
        this.visitorStatisticsEnabledPatch = data.visitorStatisticsEnabledPatch;
        this.defaultPhpVersionPatch = data.defaultPhpVersionPatch;
        this.projectNamePatch = data.projectNamePatch;
        this.projectTypePatch = data.projectTypePatch;
    }
}

export class DeploymentNameValidationRequest {
    deploymentName: string;

    constructor(data: DeploymentNameValidationRequest) {
        this.deploymentName = data.deploymentName;
    }
}

export class ProjectType {
    stagingDeploymentCount: number;
    diskQuotaPerBranch: number;
    databaseQuotaPerBranch?: number;
    resourceLevel: string;
    orderable: boolean;
    availableFeatures: Feature[];
    group: string;
    name: string;

    constructor(data: ProjectType) {
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.diskQuotaPerBranch = data.diskQuotaPerBranch;
        this.databaseQuotaPerBranch = data.databaseQuotaPerBranch;
        this.resourceLevel = data.resourceLevel;
        this.orderable = data.orderable;
        this.availableFeatures = data.availableFeatures;
        this.group = data.group;
        this.name = data.name;
    }
}

export class ProjectTypeInput {
    stagingDeploymentCount: number;
    diskQuotaPerBranch: number;
    databaseQuotaPerBranch?: number;
    resourceLevel: string;
    orderable: boolean;
    availableFeatures: string[];
    group: string;
    name: string;

    constructor(data: ProjectTypeInput) {
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.diskQuotaPerBranch = data.diskQuotaPerBranch;
        this.databaseQuotaPerBranch = data.databaseQuotaPerBranch;
        this.resourceLevel = data.resourceLevel;
        this.orderable = data.orderable;
        this.availableFeatures = data.availableFeatures;
        this.group = data.group;
        this.name = data.name;
    }
}

export class TokenAuthInput {
    code: string;
    type: string;

    constructor(data: TokenAuthInput) {
        this.code = data.code;
        this.type = data.type;
    }
}

export class UserSession {
    frontendToken: string;

    constructor(data: UserSession) {
        this.frontendToken = data.frontendToken;
    }
}

export interface GitConnection {
    type: "GITHUB";
}

export class ProjectTypeCount {
    used: number;
    total: number;
    name: string;

    constructor(data: ProjectTypeCount) {
        this.used = data.used;
        this.total = data.total;
        this.name = data.name;
    }
}

export class SortField {
    name: string;
    direction: string;

    constructor(data: SortField) {
        this.name = data.name;
        this.direction = data.direction;
    }
}

export class Page<T> {
    pageNumber: number;
    pageSize: number;
    total: number;
    values: T[];

    constructor(data: Page<T>) {
        this.pageNumber = data.pageNumber;
        this.pageSize = data.pageSize;
        this.total = data.total;
        this.values = data.values;
    }
}

export class DetailedAccountOverview {
    provisioningId: string;
    stackInstanceId: string;
    membershipType: MembershipType;
    softLockedDate?: Date;
    hardLockedDate?: Date;
    deletedDate?: Date;
    createdDate: Date;
    lastChangedDate: Date;
    availableProjectsCount: number;
    connectedGitProvider: ProviderType[];
    projectsCount: number;
    welcomeShownDate?: Date;
    market: string;
    id: string;

    constructor(data: DetailedAccountOverview) {
        this.provisioningId = data.provisioningId;
        this.stackInstanceId = data.stackInstanceId;
        this.membershipType = data.membershipType;
        this.softLockedDate = data.softLockedDate;
        this.hardLockedDate = data.hardLockedDate;
        this.deletedDate = data.deletedDate;
        this.createdDate = data.createdDate;
        this.lastChangedDate = data.lastChangedDate;
        this.availableProjectsCount = data.availableProjectsCount;
        this.connectedGitProvider = data.connectedGitProvider;
        this.projectsCount = data.projectsCount;
        this.welcomeShownDate = data.welcomeShownDate;
        this.market = data.market;
        this.id = data.id;
    }
}

export class Domain {
    inUse: boolean;
    name: string;
    type: DomainType;

    constructor(data: Domain) {
        this.inUse = data.inUse;
        this.name = data.name;
        this.type = data.type;
    }
}

export class FeedbackTileShownPatch implements Patch<Date> {
    operation: string;
    payload: Date;

    constructor(data: FeedbackTileShownPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class WelcomeShownPatch implements Patch<Date> {
    operation: string;
    payload: Date;

    constructor(data: WelcomeShownPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class UnusableAccount {
    contractToolLink: string;

    constructor(data: UnusableAccount) {
        this.contractToolLink = data.contractToolLink;
    }
}

export class CompletedPart {
    number: number;
    eTag: string;

    constructor(data: CompletedPart) {
        this.number = data.number;
        this.eTag = data.eTag;
    }
}

export class BranchBuildState {
    lastBuildDate?: Date;
    url?: string;
    state?: BuildState;

    constructor(data: BranchBuildState) {
        this.lastBuildDate = data.lastBuildDate;
        this.url = data.url;
        this.state = data.state;
    }
}

export class BranchDeploymentState {
    lastDeploymentDate?: Date;
    state: BranchDeploymentStateType;

    constructor(data: BranchDeploymentState) {
        this.lastDeploymentDate = data.lastDeploymentDate;
        this.state = data.state;
    }
}

export class BranchOverview {
    productionBranch: boolean;
    workflowPresent: boolean;
    deploymentCount: number;
    buildState?: BranchBuildState;
    deploymentState?: BranchDeploymentState;
    deprecatedWorkflow?: boolean;
    webUrl: string;
    deleted: boolean;
    name: string;
    id: string;

    constructor(data: BranchOverview) {
        this.productionBranch = data.productionBranch;
        this.workflowPresent = data.workflowPresent;
        this.deploymentCount = data.deploymentCount;
        this.buildState = data.buildState;
        this.deploymentState = data.deploymentState;
        this.deprecatedWorkflow = data.deprecatedWorkflow;
        this.webUrl = data.webUrl;
        this.deleted = data.deleted;
        this.name = data.name;
        this.id = data.id;
    }
}

export class BuildJobLog {
    steps: BuildStepLog[];
    name: string;

    constructor(data: BuildJobLog) {
        this.steps = data.steps;
        this.name = data.name;
    }
}

export class BranchBuild {
    createdDate: Date;
    name: string;
    id: string;
    state: BuildState;
    number: number;

    constructor(data: BranchBuild) {
        this.createdDate = data.createdDate;
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.number = data.number;
    }
}

export class PhpVersionPatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: PhpVersionPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class CronJob {
    command: string;
    schedule: string;

    constructor(data: CronJob) {
        this.command = data.command;
        this.schedule = data.schedule;
    }
}

export class DetailedWebspace {
    webspace: Webspace;
    state: WebspaceState;

    constructor(data: DetailedWebspace) {
        this.webspace = data.webspace;
        this.state = data.state;
    }
}

export class DetailedDatabase {
    database: Database;
    state: DatabaseState;

    constructor(data: DetailedDatabase) {
        this.database = data.database;
        this.state = data.state;
    }
}

export class DeploymentDomain {
    customDomain: boolean;
    name: string;

    constructor(data: DeploymentDomain) {
        this.customDomain = data.customDomain;
        this.name = data.name;
    }
}

export class DetailedDeploymentState {
    externalId: string;
    occurrenceTime: Date;
    lastDeployedDate?: Date;
    url?: string;
    state: DeploymentState;

    constructor(data: DetailedDeploymentState) {
        this.externalId = data.externalId;
        this.occurrenceTime = data.occurrenceTime;
        this.lastDeployedDate = data.lastDeployedDate;
        this.url = data.url;
        this.state = data.state;
    }
}

export class DeploymentOverview {
    webspace: WebspaceOverview;
    database?: DatabaseOverview;
    domain: DeploymentDomain;
    name: string;
    id: string;
    state: DetailedDeploymentState;

    constructor(data: DeploymentOverview) {
        this.webspace = data.webspace;
        this.database = data.database;
        this.domain = data.domain;
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
    }
}

export class DeploymentPhpVersionPatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: DeploymentPhpVersionPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class DeploymentRootPathPatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: DeploymentRootPathPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class DeploymentNamePatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: DeploymentNamePatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export interface RepositoryInput {
    type: "GITHUB";
}

export class BuildTool {
    name: string;
    version?: string;

    constructor(data: BuildTool) {
        this.name = data.name;
        this.version = data.version;
    }
}

export class Runtime {
    name: string;
    version?: string;

    constructor(data: Runtime) {
        this.name = data.name;
        this.version = data.version;
    }
}

export class DetectionResult {
    detectionBase: DetectionBase;
    buildSteps: BuildStep[];
    runtimeStep?: RuntimeStep;
    deployStep: DeployStep;
    requiredFeatures: Feature[];
    supported: Supported;

    constructor(data: DetectionResult) {
        this.detectionBase = data.detectionBase;
        this.buildSteps = data.buildSteps;
        this.runtimeStep = data.runtimeStep;
        this.deployStep = data.deployStep;
        this.requiredFeatures = data.requiredFeatures;
        this.supported = data.supported;
    }
}

export class BuildStepDefinition {
    commands: string[];
    variables: Record<string, Variable>;
    completionHints: Record<string, string>;
    name: string;

    constructor(data: BuildStepDefinition) {
        this.commands = data.commands;
        this.variables = data.variables;
        this.completionHints = data.completionHints;
        this.name = data.name;
    }
}

export class DeployStepDefinition {
    deploymentFolder?: string;
    bootstrapConfig?: DeploymentConfiguration;
    recurringConfig?: DeploymentConfiguration;
    cronJobs: CronJob[];

    constructor(data: DeployStepDefinition) {
        this.deploymentFolder = data.deploymentFolder;
        this.bootstrapConfig = data.bootstrapConfig;
        this.recurringConfig = data.recurringConfig;
        this.cronJobs = data.cronJobs;
    }
}

export interface Detection {
    type: "DEPENDENCY" | "FILE_CONTENT" | "FILE" | "LANGUAGE";
}

export class TemplateFileDefinition {
    type: string;
    path: string;

    constructor(data: TemplateFileDefinition) {
        this.type = data.type;
        this.path = data.path;
    }
}

export class SupportedInput {
    supported: boolean;
    compensation?: string;
    reason?: string;

    constructor(data: SupportedInput) {
        this.supported = data.supported;
        this.compensation = data.compensation;
        this.reason = data.reason;
    }
}

export class Supported {
    compensation?: string;
    supported: boolean;
    reason?: string;

    constructor(data: Supported) {
        this.compensation = data.compensation;
        this.supported = data.supported;
        this.reason = data.reason;
    }
}

export class GithubIdentity {
    avatarUrl: string;
    name: string;
    type: GithubIdentityType;

    constructor(data: GithubIdentity) {
        this.avatarUrl = data.avatarUrl;
        this.name = data.name;
        this.type = data.type;
    }
}

export class GithubRepository {
    httpCloneUrl: string;
    sshCloneUrl: string;
    defaultBranch: string;
    inUse: boolean;
    fullName: string;

    constructor(data: GithubRepository) {
        this.httpCloneUrl = data.httpCloneUrl;
        this.sshCloneUrl = data.sshCloneUrl;
        this.defaultBranch = data.defaultBranch;
        this.inUse = data.inUse;
        this.fullName = data.fullName;
    }
}

export class BuildStepDescription {
    runtimeName?: string;
    buildToolName?: string;
    exampleCommands: string[];
    exampleVariables: Record<string, Variable>;
    description: string;
    name: string;
    displayName: string;

    constructor(data: BuildStepDescription) {
        this.runtimeName = data.runtimeName;
        this.buildToolName = data.buildToolName;
        this.exampleCommands = data.exampleCommands;
        this.exampleVariables = data.exampleVariables;
        this.description = data.description;
        this.name = data.name;
        this.displayName = data.displayName;
    }
}

export class TemplateFileCompletionDescription {
    supportedInputs: string[];
    description: string;
    type: string;
    displayName: string;

    constructor(data: TemplateFileCompletionDescription) {
        this.supportedInputs = data.supportedInputs;
        this.description = data.description;
        this.type = data.type;
        this.displayName = data.displayName;
    }
}

export class BuildStepInput {
    commands: string[];
    variables: Record<string, VariableInput>;
    runtimeVersion?: string;
    buildToolVersion?: string;
    name: string;

    constructor(data: BuildStepInput) {
        this.commands = data.commands;
        this.variables = data.variables;
        this.runtimeVersion = data.runtimeVersion;
        this.buildToolVersion = data.buildToolVersion;
        this.name = data.name;
    }
}

export class RuntimeStepInput {
    domainRootPath: string;
    templateFiles: FileInput[];
    secrets: Record<string, string>;

    constructor(data: RuntimeStepInput) {
        this.domainRootPath = data.domainRootPath;
        this.templateFiles = data.templateFiles;
        this.secrets = data.secrets;
    }
}

export class DeployStepInput {
    deploymentFolder: string;
    bootstrapConfig?: DeploymentConfigurationInput;
    recurringConfig?: DeploymentConfigurationInput;
    cronJobs: CronJob[];

    constructor(data: DeployStepInput) {
        this.deploymentFolder = data.deploymentFolder;
        this.bootstrapConfig = data.bootstrapConfig;
        this.recurringConfig = data.recurringConfig;
        this.cronJobs = data.cronJobs;
    }
}

export class DestinationRepositoryInput {
    privateRepo?: boolean;
    repository: RepositoryInputUnion;

    constructor(data: DestinationRepositoryInput) {
        this.privateRepo = data.privateRepo;
        this.repository = data.repository;
    }
}

export class GitRepository {
    httpCloneUrl: string;
    sshCloneUrl: string;
    ownershipMissing: boolean;
    fullName: string;

    constructor(data: GitRepository) {
        this.httpCloneUrl = data.httpCloneUrl;
        this.sshCloneUrl = data.sshCloneUrl;
        this.ownershipMissing = data.ownershipMissing;
        this.fullName = data.fullName;
    }
}

export class DatabaseSettings {
    type: string;
    version: string;

    constructor(data: DatabaseSettings) {
        this.type = data.type;
        this.version = data.version;
    }
}

export class ProjectOverview {
    productionBranchId: string;
    productionDeploymentCount: number;
    stagingDeploymentCount: number;
    permissionLost: boolean;
    gitRepository: GitRepository;
    spawningEnabled: boolean;
    lastChangedDate: Date;
    siteUrls: string[];
    deleted: boolean;
    providerType: ProviderType;
    projectType: string;
    domains: string[];
    name: string;
    id: string;
    locked: boolean;

    constructor(data: ProjectOverview) {
        this.productionBranchId = data.productionBranchId;
        this.productionDeploymentCount = data.productionDeploymentCount;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.permissionLost = data.permissionLost;
        this.gitRepository = data.gitRepository;
        this.spawningEnabled = data.spawningEnabled;
        this.lastChangedDate = data.lastChangedDate;
        this.siteUrls = data.siteUrls;
        this.deleted = data.deleted;
        this.providerType = data.providerType;
        this.projectType = data.projectType;
        this.domains = data.domains;
        this.name = data.name;
        this.id = data.id;
        this.locked = data.locked;
    }
}

export class AutomaticDeploymentEnabledPatch implements Patch<boolean> {
    operation: string;
    payload: boolean;

    constructor(data: AutomaticDeploymentEnabledPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class DefaultDomainRootPathPatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: DefaultDomainRootPathPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class VisitorStatisticsEnabledPatch implements Patch<boolean> {
    operation: string;
    payload: boolean;

    constructor(data: VisitorStatisticsEnabledPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class DefaultPhpVersionPatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: DefaultPhpVersionPatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class ProjectNamePatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: ProjectNamePatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class ProjectTypePatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: ProjectTypePatch) {
        this.operation = data.operation;
        this.payload = data.payload;
    }
}

export class Token {
    type: ProviderType;

    constructor(data: Token) {
        this.type = data.type;
    }
}

export class GitHubConnection implements GitConnection {
    type: "GITHUB";
    installationId: string;

    constructor(data: GitHubConnection) {
        this.type = data.type;
        this.installationId = data.installationId;
    }
}

export class BuildStepLog {
    log: string;
    name: string;

    constructor(data: BuildStepLog) {
        this.log = data.log;
        this.name = data.name;
    }
}

export class Webspace {
    domainRootPath?: string;
    quota?: WebspaceQuota;
    siteUrl: string;
    sshHost: string;
    phpVersion?: string;
    username: string;
    id: string;

    constructor(data: Webspace) {
        this.domainRootPath = data.domainRootPath;
        this.quota = data.quota;
        this.siteUrl = data.siteUrl;
        this.sshHost = data.sshHost;
        this.phpVersion = data.phpVersion;
        this.username = data.username;
        this.id = data.id;
    }
}

export class Database {
    databaseQuota?: DatabaseQuota;
    username: string;
    name?: string;
    id: string;
    type: string;
    host?: string;
    version: string;

    constructor(data: Database) {
        this.databaseQuota = data.databaseQuota;
        this.username = data.username;
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.host = data.host;
        this.version = data.version;
    }
}

export class WebspaceOverview {
    siteUrl: string;
    sshHost: string;
    phpVersion?: string;
    id: string;

    constructor(data: WebspaceOverview) {
        this.siteUrl = data.siteUrl;
        this.sshHost = data.sshHost;
        this.phpVersion = data.phpVersion;
        this.id = data.id;
    }
}

export class DatabaseOverview {
    name?: string;
    id: string;
    type: string;
    host?: string;
    version: string;

    constructor(data: DatabaseOverview) {
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.host = data.host;
        this.version = data.version;
    }
}

export class GithubRepositoryInput implements RepositoryInput {
    type: "GITHUB";
    repo: string;
    branch?: string;
    owner: string;

    constructor(data: GithubRepositoryInput) {
        this.type = data.type;
        this.repo = data.repo;
        this.branch = data.branch;
        this.owner = data.owner;
    }
}

export class DetectionBase {
    framework?: FrameworkIdentifier;
    type: DetectionBaseType;

    constructor(data: DetectionBase) {
        this.framework = data.framework;
        this.type = data.type;
    }
}

export class RuntimeStep {
    domainRootPath: string;
    templateFiles: TemplateFile[];
    secrets: Record<string, string>;

    constructor(data: RuntimeStep) {
        this.domainRootPath = data.domainRootPath;
        this.templateFiles = data.templateFiles;
        this.secrets = data.secrets;
    }
}

export class DeployStep {
    deploymentFolder?: string;
    bootstrapConfig?: DeploymentConfiguration;
    recurringConfig?: DeploymentConfiguration;
    cronJobs: CronJob[];

    constructor(data: DeployStep) {
        this.deploymentFolder = data.deploymentFolder;
        this.bootstrapConfig = data.bootstrapConfig;
        this.recurringConfig = data.recurringConfig;
        this.cronJobs = data.cronJobs;
    }
}

export class Variable {
    secret: boolean;
    value: string;

    constructor(data: Variable) {
        this.secret = data.secret;
        this.value = data.value;
    }
}

export class DeploymentConfiguration {
    remoteCommands: RemoteCommands;
    excludes: string[];

    constructor(data: DeploymentConfiguration) {
        this.remoteCommands = data.remoteCommands;
        this.excludes = data.excludes;
    }
}

export class DependencyDetection implements Detection {
    type: "DEPENDENCY";
    filename: string;
    patterns: string[];

    constructor(data: DependencyDetection) {
        this.type = data.type;
        this.filename = data.filename;
        this.patterns = data.patterns;
    }
}

export class FileContentDetection implements Detection {
    type: "FILE_CONTENT";
    filename: string;
    patterns: string[];

    constructor(data: FileContentDetection) {
        this.type = data.type;
        this.filename = data.filename;
        this.patterns = data.patterns;
    }
}

export class FileDetection implements Detection {
    type: "FILE";
    filename: string;

    constructor(data: FileDetection) {
        this.type = data.type;
        this.filename = data.filename;
    }
}

export class LanguageDetection implements Detection {
    type: "LANGUAGE";
    language: string;

    constructor(data: LanguageDetection) {
        this.type = data.type;
        this.language = data.language;
    }
}

export class VariableInput {
    secret: boolean;
    value: string;

    constructor(data: VariableInput) {
        this.secret = data.secret;
        this.value = data.value;
    }
}

export class FileInput {
    content: string;
    path: string;

    constructor(data: FileInput) {
        this.content = data.content;
        this.path = data.path;
    }
}

export class DeploymentConfigurationInput {
    remoteCommands: RemoteCommands;
    excludes: string[];

    constructor(data: DeploymentConfigurationInput) {
        this.remoteCommands = data.remoteCommands;
        this.excludes = data.excludes;
    }
}

export interface Patch<T> {
    operation: string;
    payload: T;
}

export class WebspaceQuota {
    storageQuota: number;
    storageUsage: number;
    fileQuota: number;
    fileUsage: number;

    constructor(data: WebspaceQuota) {
        this.storageQuota = data.storageQuota;
        this.storageUsage = data.storageUsage;
        this.fileQuota = data.fileQuota;
        this.fileUsage = data.fileUsage;
    }
}

export class DatabaseQuota {
    tableSpaceQuota: number;
    tableSpaceUsage: number;

    constructor(data: DatabaseQuota) {
        this.tableSpaceQuota = data.tableSpaceQuota;
        this.tableSpaceUsage = data.tableSpaceUsage;
    }
}

export class FrameworkIdentifier {
    name: string;
    id: string;

    constructor(data: FrameworkIdentifier) {
        this.name = data.name;
        this.id = data.id;
    }
}

export class RemoteCommands {
    preDeployment: string[];
    postDeployment: string[];

    constructor(data: RemoteCommands) {
        this.preDeployment = data.preDeployment;
        this.postDeployment = data.postDeployment;
    }
}

export interface HttpClient<O> {

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: O; }): RestResponse<R>;
}

export interface PagingRequestQueryParams {
    pageNumber?: number;
    pageSize?: number;
}

export interface AccountSearchRequestQueryParams {
    customerId?: string;
    provisioningId?: string;
    stackInstanceId?: string;
    githubUser?: string;
    market?: string;
    includeLocked?: boolean;
    includeDeleted?: boolean;
    domain?: string;
    githubConnected?: boolean;
    membershipType?: MembershipType;
    welcomeScreenAcknowledged?: boolean;
    projectTypeGroup?: string;
}

export interface FrameworkSearchRequestQueryParams {
    type?: string;
    supported?: boolean;
}

export interface BranchSearchRequestQueryParams {
    name?: string;
}

export interface ProjectSearchRequestQueryParams {
    numberOfBranches?: number;
}

export class IonosSpaceGithubApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/github-installations
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.createInstallation
     */
    createInstallation(accountId: string, installation: InstallationInput, options?: O): RestResponse<Installation> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/github-installations`, data: installation, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/github-installations/{installationId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.getInstallation
     */
    getInstallation(accountId: string, installationId: string, options?: O): RestResponse<Installation> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/github-installations/${installationId}`, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/github-installations/{installationId}/repositories
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.getRepositories
     */
    getRepositories(accountId: string, installationId: string, queryParams?: PagingRequestQueryParams, options?: O): RestResponse<Page<GithubRepository>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/github-installations/${installationId}/repositories`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP HEAD /v4/accounts/{accountId}/github-installations/{installationId}/repositories/{owner}/{repo}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.existsGithubRepository
     */
    existsGithubRepository(accountId: string, installationId: string, owner: string, repo: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "HEAD", url: uriEncoding`v4/accounts/${accountId}/github-installations/${installationId}/repositories/${owner}/${repo}`, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/github-installations/{installationId}/repositories/{owner}/{repo}/branches
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.getBranches
     */
    getBranches(accountId: string, installationId: string, owner: string, repo: string, queryParams?: PagingRequestQueryParams, options?: O): RestResponse<Page<string>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/github-installations/${installationId}/repositories/${owner}/${repo}/branches`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP HEAD /v4/accounts/{accountId}/github-installations/{installationId}/repositories/{owner}/{repo}/branches/{branchName}/workflows
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubApi.existsIonosSpaceWorkflow
     */
    existsIonosSpaceWorkflow(accountId: string, installationId: string, owner: string, repo: string, branchName: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "HEAD", url: uriEncoding`v4/accounts/${accountId}/github-installations/${installationId}/repositories/${owner}/${repo}/branches/${branchName}/workflows`, options: options });
    }
}

export class IonosSpaceArtifactApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/artifacts/{version}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceArtifactApi.getArtifact
     */
    getArtifact(accountId: string, projectId: string, branchId: string, version: string, options?: O): RestResponse<ArtifactDownload> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/artifacts/${version}`, options: options });
    }

    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/artifacts/{version}/complete
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceArtifactApi.completeUpload
     */
    completeUpload(accountId: string, projectId: string, branchId: string, version: string, input: CompletedPart[], options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/artifacts/${version}/complete`, data: input, options: options });
    }

    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/artifacts/{version}/prepare
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceArtifactApi.prepareUpload
     */
    prepareUpload(accountId: string, projectId: string, branchId: string, version: string, input: ArtifactUploadInput, options?: O): RestResponse<ArtifactUpload> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/artifacts/${version}/prepare`, data: input, options: options });
    }
}

export class IonosSpaceGithubWebhookApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/github-hooks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceGithubWebhookApi.onHook
     */
    onHook(payload: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/github-hooks`, data: payload, options: options });
    }
}

export class IonosSpaceAccountInfoApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/account-info
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountInfoApi.getAccountInfo
     */
    getAccountInfo(options?: O): RestResponse<AccountInfo> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/account-info`, options: options });
    }
}

export class IonosSpaceTokensApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/tokens
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceTokensApi.createToken
     */
    createToken(accountId: string, tokenAuth: TokenAuthInput, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/tokens`, data: tokenAuth, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/tokens
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceTokensApi.getTokens
     */
    getTokens(accountId: string, options?: O): RestResponse<Token[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/tokens`, options: options });
    }

    /**
     * HTTP DELETE /v4/accounts/{accountId}/tokens/{type}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceTokensApi.deleteToken
     */
    deleteToken(accountId: string, type: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`v4/accounts/${accountId}/tokens/${type}`, options: options });
    }
}

export class IonosSpaceEventsApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/events
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceEventsApi.receiveAndRegister
     */
    receiveAndRegister(accountId: string, queryParams?: { lastEventId?: string; }, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/events`, queryParams: queryParams, options: options });
    }
}

export class IonosSpaceAccountApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/accounts
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getAccounts
     */
    getAccounts(queryParams?: AccountSearchRequestQueryParams & PagingRequestQueryParams & { sort?: SortField[]; }, options?: O): RestResponse<Page<DetailedAccountOverview>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getAccount
     */
    getAccount(accountId: string, options?: O): RestResponse<DetailedAccount> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}`, options: options });
    }

    /**
     * HTTP PATCH /v4/accounts/{accountId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.patchAccount
     */
    patchAccount(accountId: string, accountPatch: AccountPatch, options?: O): RestResponse<Account> {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding`v4/accounts/${accountId}`, data: accountPatch, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/disconnect-domains
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.disconnectDomains
     */
    disconnectDomains(accountId: string, input: DisconnectDomains, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/disconnect-domains`, data: input, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/domains
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getDomains
     */
    getDomains(accountId: string, queryParams?: { inUse?: boolean; }, options?: O): RestResponse<Domain[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/domains`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/feedbacks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.createFeedback
     */
    createFeedback(accountId: string, feedback: FeedbackInput, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/feedbacks`, data: feedback, options: options });
    }

    /**
     * HTTP PUT /v4/accounts/{accountId}/reset
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.resetAccount
     */
    resetAccount(accountId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/accounts/${accountId}/reset`, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/upsell-information
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.getUpsellInformation
     */
    getUpsellInformation(accountId: string, options?: O): RestResponse<UpsellInformation> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/upsell-information`, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/validate-project-name
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceAccountApi.validateProjectName
     */
    validateProjectName(accountId: string, projectNameValidationRequest: ProjectNameValidationRequest, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/validate-project-name`, data: projectNameValidationRequest, options: options });
    }
}

export class IonosSpaceFrameworkApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/frameworks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.createFramework
     */
    createFramework(frameworkDefinition: FrameworkDefinitionInput, options?: O): RestResponse<FrameworkDefinition> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/frameworks`, data: frameworkDefinition, options: options });
    }

    /**
     * HTTP GET /v4/frameworks
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.getFrameworks
     */
    getFrameworks(queryParams?: FrameworkSearchRequestQueryParams & PagingRequestQueryParams & { sort?: SortField[]; }, options?: O): RestResponse<Page<FrameworkDefinition>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/frameworks`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP DELETE /v4/frameworks/{frameworkId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.deleteFramework
     */
    deleteFramework(frameworkId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`v4/frameworks/${frameworkId}`, options: options });
    }

    /**
     * HTTP GET /v4/frameworks/{frameworkId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.getFramework
     */
    getFramework(frameworkId: string, options?: O): RestResponse<FrameworkDefinition> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/frameworks/${frameworkId}`, options: options });
    }

    /**
     * HTTP PUT /v4/frameworks/{frameworkId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceFrameworkApi.updateFramework
     */
    updateFramework(frameworkId: string, frameworkDefinition: FrameworkDefinitionInput, options?: O): RestResponse<FrameworkDefinition> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/frameworks/${frameworkId}`, data: frameworkDefinition, options: options });
    }
}

export class IonosSpaceBranchApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBranches
     */
    getBranches(accountId: string, projectId: string, queryParams?: PagingRequestQueryParams & BranchSearchRequestQueryParams, options?: O): RestResponse<Page<BranchOverview>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.deleteBranch
     */
    deleteBranch(accountId: string, projectId: string, branchId: string, branchDeleteOperation: BranchDeleteOperation, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}`, data: branchDeleteOperation, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBranch
     */
    getBranch(accountId: string, projectId: string, branchId: string, options?: O): RestResponse<Branch> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}`, options: options });
    }

    /**
     * HTTP PATCH /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.patchBranch
     */
    patchBranch(accountId: string, projectId: string, branchId: string, branchPatch: BranchPatch, options?: O): RestResponse<Branch> {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}`, data: branchPatch, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/builds
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBuilds
     */
    getBuilds(accountId: string, projectId: string, branchId: string, queryParams?: PagingRequestQueryParams, options?: O): RestResponse<Page<BranchBuild>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/builds`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/builds/{buildId}/logs
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.getBuildLogs
     */
    getBuildLogs(accountId: string, projectId: string, branchId: string, buildId: string, options?: O): RestResponse<BuildLog> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/builds/${buildId}/logs`, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/finish-deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.finishDeployments
     */
    finishDeployments(accountId: string, projectId: string, branchId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/finish-deployments`, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/trigger-deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceBranchApi.triggerDeployments
     */
    triggerDeployments(accountId: string, projectId: string, branchId: string, input: DeploymentTriggerInput, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/trigger-deployments`, data: input, options: options });
    }
}

export class IonosSpaceUserSessionApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/user-session
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceUserSessionApi.createUserSession
     */
    createUserSession(options?: O): RestResponse<UserSession> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/user-session`, options: options });
    }
}

export class IonosSpaceDetectionApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/complete-build-step
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDetectionApi.completeBuildStep
     */
    completeBuildStep(accountId: string, completionInput: BuildStepCompletionInput, options?: O): RestResponse<BuildStep> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/complete-build-step`, data: completionInput, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/complete-template-file
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDetectionApi.completeTemplateFile
     */
    completeTemplateFile(accountId: string, completionInput: TemplateFileCompletionInput, options?: O): RestResponse<TemplateFile> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/complete-template-file`, data: completionInput, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/detect-steps
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDetectionApi.detectWorkflow
     */
    detectWorkflow(accountId: string, detection: DetectionInput, options?: O): RestResponse<DetectionResult[]> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/detect-steps`, data: detection, options: options });
    }
}

export class IonosSpaceProjectApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.createProject
     */
    createProject(accountId: string, project: ProjectInput, options?: O): RestResponse<Project> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects`, data: project, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.getProjects
     */
    getProjects(accountId: string, queryParams?: PagingRequestQueryParams & ProjectSearchRequestQueryParams & { sort?: SortField[]; }, options?: O): RestResponse<Page<ProjectOverview>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.deleteProject
     */
    deleteProject(accountId: string, projectId: string, projectDeleteOperation: ProjectDeleteOperation, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}`, data: projectDeleteOperation, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.getProject
     */
    getProject(accountId: string, projectId: string, options?: O): RestResponse<Project> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}`, options: options });
    }

    /**
     * HTTP PATCH /v4/accounts/{accountId}/projects/{projectId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.patchProject
     */
    patchProject(accountId: string, projectId: string, projectPatch: ProjectPatch, options?: O): RestResponse<Project> {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}`, data: projectPatch, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/create-workflow-migration-pull-request
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.createWorkflowMigrationPullRequest
     */
    createWorkflowMigrationPullRequest(accountId: string, projectId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/create-workflow-migration-pull-request`, options: options });
    }

    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/lock
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.lockProject
     */
    lockProject(accountId: string, projectId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/lock`, options: options });
    }

    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}/lock
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.unlockProject
     */
    unlockProject(accountId: string, projectId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/lock`, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/possible-upgrades
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.getUpgrades
     */
    getUpgrades(accountId: string, projectId: string, options?: O): RestResponse<UpgradeInformation> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/possible-upgrades`, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/validate-deployment-name
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectApi.validateDeploymentName
     */
    validateDeploymentName(accountId: string, projectId: string, deploymentNameValidationRequest: DeploymentNameValidationRequest, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/validate-deployment-name`, data: deploymentNameValidationRequest, options: options });
    }
}

export class IonosSpaceDeploymentApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.createDeployment
     */
    createDeployment(accountId: string, projectId: string, branchId: string, deployment: DeploymentInput, options?: O): RestResponse<Deployment> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments`, data: deployment, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.getDeployments
     */
    getDeployments(accountId: string, projectId: string, branchId: string, queryParams?: PagingRequestQueryParams, options?: O): RestResponse<Page<DeploymentOverview>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP DELETE /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.deleteDeployment
     */
    deleteDeployment(accountId: string, projectId: string, branchId: string, deploymentId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "DELETE", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}`, options: options });
    }

    /**
     * HTTP GET /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.getDeployment
     */
    getDeployment(accountId: string, projectId: string, branchId: string, deploymentId: string, options?: O): RestResponse<Deployment> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}`, options: options });
    }

    /**
     * HTTP PATCH /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.patchDeployment
     */
    patchDeployment(accountId: string, projectId: string, branchId: string, deploymentId: string, deploymentPatch: DeploymentPatch, options?: O): RestResponse<Deployment> {
        return this.httpClient.request({ method: "PATCH", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}`, data: deploymentPatch, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/connect-domain
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.connectDomain
     */
    connectDomain(accountId: string, projectId: string, branchId: string, deploymentId: string, connectDomain: ConnectDomainInput, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/connect-domain`, data: connectDomain, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/databases/{databaseId}/phpmyadmin-sessions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.createPhpMyAdminSession
     */
    createPhpMyAdminSession(accountId: string, projectId: string, branchId: string, deploymentId: string, databaseId: string, options?: O): RestResponse<PhpMyAdminSession> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/databases/${databaseId}/phpmyadmin-sessions`, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/disconnect-domain
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.disconnectDomain
     */
    disconnectDomain(accountId: string, projectId: string, branchId: string, deploymentId: string, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/disconnect-domain`, options: options });
    }

    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/state
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.updateDeploymentState
     */
    updateDeploymentState(accountId: string, projectId: string, branchId: string, deploymentId: string, deploymentState: DeploymentStateInput, options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/state`, data: deploymentState, options: options });
    }

    /**
     * HTTP PUT /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/webspaces/{webspaceId}/cron-jobs
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.configureCronJobs
     */
    configureCronJobs(accountId: string, projectId: string, branchId: string, deploymentId: string, webspaceId: string, cronJobs: CronJob[], options?: O): RestResponse<void> {
        return this.httpClient.request({ method: "PUT", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/webspaces/${webspaceId}/cron-jobs`, data: cronJobs, options: options });
    }

    /**
     * HTTP POST /v4/accounts/{accountId}/projects/{projectId}/branches/{branchId}/deployments/{deploymentId}/webspaces/{webspaceId}/directory-sessions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceDeploymentApi.createDirectorySession
     */
    createDirectorySession(accountId: string, projectId: string, branchId: string, deploymentId: string, webspaceId: string, options?: O): RestResponse<DirectorySessionToken> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/accounts/${accountId}/projects/${projectId}/branches/${branchId}/deployments/${deploymentId}/webspaces/${webspaceId}/directory-sessions`, options: options });
    }
}

export class IonosSpaceProjectTypesApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/project-types
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectTypesApi.getProjectTypes
     */
    getProjectTypes(queryParams?: PagingRequestQueryParams, options?: O): RestResponse<Page<ProjectType>> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/project-types`, queryParams: queryParams, options: options });
    }

    /**
     * HTTP POST /v4/project-types
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectTypesApi.save
     */
    save(projectType: ProjectTypeInput, options?: O): RestResponse<ProjectType> {
        return this.httpClient.request({ method: "POST", url: uriEncoding`v4/project-types`, data: projectType, options: options });
    }

    /**
     * HTTP GET /v4/project-types/{name}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceProjectTypesApi.getProjectType
     */
    getProjectType(name: string, options?: O): RestResponse<ProjectType> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/project-types/${name}`, options: options });
    }
}

export class IonosSpaceMetadataApiClient<O> {

    constructor(protected httpClient: HttpClient<O>) {
    }

    /**
     * HTTP GET /v4/metadata/build-step-descriptions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceMetadataApi.getBuildStepDescriptions
     */
    getBuildStepDescriptions(options?: O): RestResponse<BuildStepDescription[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/metadata/build-step-descriptions`, options: options });
    }

    /**
     * HTTP GET /v4/metadata/template-file-descriptions
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceMetadataApi.getTemplateFileCompletionDescriptions
     */
    getTemplateFileCompletionDescriptions(options?: O): RestResponse<TemplateFileCompletionDescription[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/metadata/template-file-descriptions`, options: options });
    }

    /**
     * HTTP GET /v4/metadata/versions/{toolName}
     * Java method: com.ionos.beat.ionos.space.api.v4.IonosSpaceMetadataApi.getAvailableVersions
     */
    getAvailableVersions(toolName: string, options?: O): RestResponse<string[]> {
        return this.httpClient.request({ method: "GET", url: uriEncoding`v4/metadata/versions/${toolName}`, options: options });
    }
}

export type RestResponse<R> = Promise<Axios.GenericAxiosResponse<R>>;

export type GitConnectionUnion = GitHubConnection;

export type RepositoryInputUnion = GithubRepositoryInput;

export type DetectionUnion = DependencyDetection | FileContentDetection | FileDetection | LanguageDetection;

export enum MembershipType {
    FREE = "FREE",
    PAID = "PAID",
}

export enum BranchChangeType {
    CREATE = "CREATE",
    DELETE = "DELETE",
    PURGE = "PURGE",
    UN_DELETE = "UN_DELETE",
    BUILD_STATE = "BUILD_STATE",
    WORKFLOW_PRESENT = "WORKFLOW_PRESENT",
    DEPLOYMENT_STATE = "DEPLOYMENT_STATE",
}

export enum ContractChangeType {
    LOCK = "LOCK",
    UNLOCK = "UNLOCK",
    PROJECT_TYPES = "PROJECT_TYPES",
    GITHUB_CONNECTION = "GITHUB_CONNECTION",
}

export enum InstallationChangeType {
    SUSPEND = "SUSPEND",
    UNSUSPEND = "UNSUSPEND",
    DELETE = "DELETE",
}

export enum ProjectChangeType {
    CREATE = "CREATE",
    DELETE = "DELETE",
    PURGE = "PURGE",
    REPO_RENAME = "REPO_RENAME",
    PROJECT_TYPE = "PROJECT_TYPE",
    LOCK = "LOCK",
    UNLOCK = "UNLOCK",
    AUTOMATIC_DEPLOYMENT = "AUTOMATIC_DEPLOYMENT",
    LOSE_PERMISSION = "LOSE_PERMISSION",
    RESTORE_PERMISSION = "RESTORE_PERMISSION",
    DEFAULT_PHP_VERSION = "DEFAULT_PHP_VERSION",
    NAME = "NAME",
}

export enum ProviderType {
    GITHUB = "GITHUB",
}

export enum TokenChangeType {
    REVOKE = "REVOKE",
}

export enum DeploymentChangeType {
    CREATE = "CREATE",
    DELETE = "DELETE",
    DEPLOYMENT_STATE = "DEPLOYMENT_STATE",
    WEBSPACE = "WEBSPACE",
    DATABASE = "DATABASE",
    DOMAIN_CONNECT = "DOMAIN_CONNECT",
    DOMAIN_DISCONNECT = "DOMAIN_DISCONNECT",
    NAME = "NAME",
}

export enum Feature {
    PHP = "PHP",
    MAIL = "MAIL",
    DB = "DB",
}

export enum FrameworkType {
    SSR = "SSR",
    SSG = "SSG",
    SPA = "SPA",
    PLAIN = "PLAIN",
}

export enum AppAccessType {
    READ = "READ",
    WRITE = "WRITE",
}

export enum DomainType {
    MAIN = "MAIN",
    SUBDOMAIN = "SUBDOMAIN",
    XDOMAIN = "XDOMAIN",
}

export enum BuildState {
    AWAITING_BUILD = "AWAITING_BUILD",
    SUCCESS = "SUCCESS",
    RUNNING = "RUNNING",
    FAILED = "FAILED",
    UNKNOWN = "UNKNOWN",
}

export enum BranchDeploymentStateType {
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    PARTLY_FAILED = "PARTLY_FAILED",
}

export enum WebspaceState {
    IN_CREATION = "IN_CREATION",
    CREATED = "CREATED",
    DELETED = "DELETED",
}

export enum DatabaseState {
    IN_CREATION = "IN_CREATION",
    CREATED = "CREATED",
    DELETED = "DELETED",
}

export enum DeploymentState {
    IN_CREATION = "IN_CREATION",
    CREATED = "CREATED",
    QUEUED = "QUEUED",
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
}

export enum Type {
    DEPENDENCY = "DEPENDENCY",
    FILE_CONTENT = "FILE_CONTENT",
    FILE = "FILE",
    LANGUAGE = "LANGUAGE",
}

export enum GithubIdentityType {
    USER = "USER",
    ORGANIZATION = "ORGANIZATION",
}

export enum DetectionBaseType {
    FRAMEWORK = "FRAMEWORK",
    IONOS_YAML = "IONOS_YAML",
}

function uriEncoding(template: TemplateStringsArray, ...substitutions: any[]): string {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += template[i];
        result += encodeURIComponent(substitutions[i]);
    }
    result += template[template.length - 1];
    return result;
}


// Added by 'AxiosClientExtension' extension

import axios from "axios";
import * as Axios from "axios";

declare module "axios" {
    export interface GenericAxiosResponse<R> extends Axios.AxiosResponse {
        data: R;
    }
}

class AxiosHttpClient implements HttpClient<Axios.AxiosRequestConfig> {

    constructor(private axios: Axios.AxiosInstance) {
    }

    request<R>(requestConfig: { method: string; url: string; queryParams?: any; data?: any; copyFn?: (data: R) => R; options?: Axios.AxiosRequestConfig; }): RestResponse<R> {
        function assign(target: any, source?: any) {
            if (source != undefined) {
                for (const key in source) {
                    if (source.hasOwnProperty(key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        }

        const config: Axios.AxiosRequestConfig = {};
        config.method = requestConfig.method as typeof config.method;  // `string` in axios 0.16.0, `Method` in axios 0.19.0
        config.url = requestConfig.url;
        config.params = requestConfig.queryParams;
        config.data = requestConfig.data;
        assign(config, requestConfig.options);
        const copyFn = requestConfig.copyFn;

        const axiosResponse = this.axios.request(config);
        return axiosResponse.then(axiosResponse => {
            if (copyFn && axiosResponse.data) {
                (axiosResponse as any).originalData = axiosResponse.data;
                axiosResponse.data = copyFn(axiosResponse.data);
            }
            return axiosResponse;
        });
    }
}

export class AxiosIonosSpaceGithubApiClient extends IonosSpaceGithubApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceArtifactApiClient extends IonosSpaceArtifactApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceGithubWebhookApiClient extends IonosSpaceGithubWebhookApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceAccountInfoApiClient extends IonosSpaceAccountInfoApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceTokensApiClient extends IonosSpaceTokensApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceEventsApiClient extends IonosSpaceEventsApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceAccountApiClient extends IonosSpaceAccountApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceFrameworkApiClient extends IonosSpaceFrameworkApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceBranchApiClient extends IonosSpaceBranchApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceUserSessionApiClient extends IonosSpaceUserSessionApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceDetectionApiClient extends IonosSpaceDetectionApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceProjectApiClient extends IonosSpaceProjectApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceDeploymentApiClient extends IonosSpaceDeploymentApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceProjectTypesApiClient extends IonosSpaceProjectTypesApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceMetadataApiClient extends IonosSpaceMetadataApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}
