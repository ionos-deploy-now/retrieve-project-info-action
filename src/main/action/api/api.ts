/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.36.1070 on 2022-12-01 11:18:32.

export interface Event {
    occurrenceDate: Date;
}

export class BranchChange implements Event {
    occurrenceDate: Date;
    type: BranchChangeType;
    projectId: string;
    branchId: string;

    constructor(data: BranchChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.projectId = data.projectId;
        this.branchId = data.branchId;
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
    type: InstallationChangeType;
    installationId: string;

    constructor(data: InstallationChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.installationId = data.installationId;
    }
}

export class ProjectChange implements Event {
    occurrenceDate: Date;
    type: ProjectChangeType;
    projectId: string;

    constructor(data: ProjectChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.projectId = data.projectId;
    }
}

export class TokenChange implements Event {
    occurrenceDate: Date;
    type: TokenChangeType;
    providerType: ProviderType;

    constructor(data: TokenChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.providerType = data.providerType;
    }
}

export class UserCreate implements Event {
    occurrenceDate: Date;
    id: string;
    username: string;
    expiryDate?: Date;

    constructor(data: UserCreate) {
        this.occurrenceDate = data.occurrenceDate;
        this.id = data.id;
        this.username = data.username;
        this.expiryDate = data.expiryDate;
    }
}

export class DeploymentChange implements Event {
    occurrenceDate: Date;
    type: DeploymentChangeType;
    projectId: string;
    branchId: string;
    deploymentId: string;

    constructor(data: DeploymentChange) {
        this.occurrenceDate = data.occurrenceDate;
        this.type = data.type;
        this.projectId = data.projectId;
        this.branchId = data.branchId;
        this.deploymentId = data.deploymentId;
    }
}

export class FeedbackInput {
    type: string;
    description: string;
    summary: string;
    errorId?: string;
    affectedProjectId?: string;
    supportUserInvited?: boolean;

    constructor(data: FeedbackInput) {
        this.type = data.type;
        this.description = data.description;
        this.summary = data.summary;
        this.errorId = data.errorId;
        this.affectedProjectId = data.affectedProjectId;
        this.supportUserInvited = data.supportUserInvited;
    }
}

export class DisconnectDomains {
    domains: string[];

    constructor(data: DisconnectDomains) {
        this.domains = data.domains;
    }
}

export class DetailedAccount {
    id: string;
    projectTypes: ProjectTypeCount[];
    provisioningId: string;
    stackInstanceId: string;
    market: string;
    wa3Id?: string;
    softLockedDate?: Date;
    hardLockedDate?: Date;
    deletedDate?: Date;
    gitConnections: GitConnectionUnion[];
    createdDate: Date;
    lastChangedDate: Date;

    constructor(data: DetailedAccount) {
        this.id = data.id;
        this.projectTypes = data.projectTypes;
        this.provisioningId = data.provisioningId;
        this.stackInstanceId = data.stackInstanceId;
        this.market = data.market;
        this.wa3Id = data.wa3Id;
        this.softLockedDate = data.softLockedDate;
        this.hardLockedDate = data.hardLockedDate;
        this.deletedDate = data.deletedDate;
        this.gitConnections = data.gitConnections;
        this.createdDate = data.createdDate;
        this.lastChangedDate = data.lastChangedDate;
    }
}

export class UpsellInformation {
    contractId: string;
    projectTypeShopLinks: Record<string, string>;

    constructor(data: UpsellInformation) {
        this.contractId = data.contractId;
        this.projectTypeShopLinks = data.projectTypeShopLinks;
    }
}

export class AccountPatch {
    welcomeShownPatch?: WelcomeShownPatch;
    feedbackTileShownPatch?: FeedbackTileShownPatch;

    constructor(data: AccountPatch) {
        this.welcomeShownPatch = data.welcomeShownPatch;
        this.feedbackTileShownPatch = data.feedbackTileShownPatch;
    }
}

export class Account {
    projectTypes: ProjectTypeCount[];
    showWelcome: boolean;
    showFeedbackTile: boolean;
    gitConnections: GitConnectionUnion[];

    constructor(data: Account) {
        this.projectTypes = data.projectTypes;
        this.showWelcome = data.showWelcome;
        this.showFeedbackTile = data.showFeedbackTile;
        this.gitConnections = data.gitConnections;
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
    name: string;
    id: string;
    productionBranch: boolean;
    webUrl: string;
    workflowPresent: boolean;
    deprecatedWorkflow?: boolean;
    deleted: boolean;
    deploymentCount: number;
    buildState?: BranchBuildState;
    deploymentState?: BranchDeploymentState;

    constructor(data: Branch) {
        this.name = data.name;
        this.id = data.id;
        this.productionBranch = data.productionBranch;
        this.webUrl = data.webUrl;
        this.workflowPresent = data.workflowPresent;
        this.deprecatedWorkflow = data.deprecatedWorkflow;
        this.deleted = data.deleted;
        this.deploymentCount = data.deploymentCount;
        this.buildState = data.buildState;
        this.deploymentState = data.deploymentState;
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
    version?: string;
    onlyFailed: boolean;

    constructor(data: DeploymentTriggerInput) {
        this.version = data.version;
        this.onlyFailed = data.onlyFailed;
    }
}

export class ConnectDomainInput {
    domain: string;
    force: boolean;

    constructor(data: ConnectDomainInput) {
        this.domain = data.domain;
        this.force = data.force;
    }
}

export class DeploymentInput {
    name: string;
    domain?: ConnectDomainInput;

    constructor(data: DeploymentInput) {
        this.name = data.name;
        this.domain = data.domain;
    }
}

export class Deployment {
    name: string;
    id: string;
    state: DetailedDeploymentState;
    domain: DeploymentDomain;
    webspace: DetailedWebspace;
    database?: DetailedDatabase;

    constructor(data: Deployment) {
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.domain = data.domain;
        this.webspace = data.webspace;
        this.database = data.database;
    }
}

export class DirectorySessionToken {
    sessionId: string;
    expireAt: Date;

    constructor(data: DirectorySessionToken) {
        this.sessionId = data.sessionId;
        this.expireAt = data.expireAt;
    }
}

export class PhpMyAdminSession {
    url: string;
    expireAt: Date;

    constructor(data: PhpMyAdminSession) {
        this.url = data.url;
        this.expireAt = data.expireAt;
    }
}

export class DeploymentPatch {
    phpVersionPatch?: DeploymentPhpVersionPatch;
    namePatch?: DeploymentNamePatch;

    constructor(data: DeploymentPatch) {
        this.phpVersionPatch = data.phpVersionPatch;
        this.namePatch = data.namePatch;
    }
}

export class DeploymentStateInput {
    state: string;
    externalId: string;

    constructor(data: DeploymentStateInput) {
        this.state = data.state;
        this.externalId = data.externalId;
    }
}

export class BuildStepCompletionInput {
    repository: RepositoryInputUnion;
    buildStepName: string;

    constructor(data: BuildStepCompletionInput) {
        this.repository = data.repository;
        this.buildStepName = data.buildStepName;
    }
}

export class BuildStep {
    runtime?: Runtime;
    name: string;
    displayName: string;
    complete: boolean;
    buildTool?: BuildTool;
    commands: string[];
    commandSuggestions: string[];
    variables: Record<string, string>;

    constructor(data: BuildStep) {
        this.runtime = data.runtime;
        this.name = data.name;
        this.displayName = data.displayName;
        this.complete = data.complete;
        this.buildTool = data.buildTool;
        this.commands = data.commands;
        this.commandSuggestions = data.commandSuggestions;
        this.variables = data.variables;
    }
}

export class TemplateFileCompletionInput {
    path: string;
    repository: RepositoryInputUnion;
    sourceFile?: string;
    templateCompletionType: string;
    databaseEnabled?: boolean;
    mailEnabled?: boolean;

    constructor(data: TemplateFileCompletionInput) {
        this.path = data.path;
        this.repository = data.repository;
        this.sourceFile = data.sourceFile;
        this.templateCompletionType = data.templateCompletionType;
        this.databaseEnabled = data.databaseEnabled;
        this.mailEnabled = data.mailEnabled;
    }
}

export class TemplateFile {
    content: string;
    path: string;
    completionType: string;

    constructor(data: TemplateFile) {
        this.content = data.content;
        this.path = data.path;
        this.completionType = data.completionType;
    }
}

export class DetectionInput {
    repository: RepositoryInputUnion;
    frameworkId?: string;

    constructor(data: DetectionInput) {
        this.repository = data.repository;
        this.frameworkId = data.frameworkId;
    }
}

export class FrameworkDefinitionInput {
    name: string;
    type: string;
    logoUrl: string;
    detections: DetectionUnion[];
    buildSteps: BuildStepDefinition[];
    deployStep: DeployStepDefinition;
    supported: SupportedInput;
    requiredFeatures: string[];
    templateFiles: TemplateFileDefinition[];

    constructor(data: FrameworkDefinitionInput) {
        this.name = data.name;
        this.type = data.type;
        this.logoUrl = data.logoUrl;
        this.detections = data.detections;
        this.buildSteps = data.buildSteps;
        this.deployStep = data.deployStep;
        this.supported = data.supported;
        this.requiredFeatures = data.requiredFeatures;
        this.templateFiles = data.templateFiles;
    }
}

export class FrameworkDefinition {
    name: string;
    id: string;
    type: FrameworkType;
    logoUrl: string;
    detections: DetectionUnion[];
    buildSteps: BuildStepDefinition[];
    deployStep: DeployStepDefinition;
    supported: Supported;
    requiredFeatures: Feature[];
    templateFiles: TemplateFileDefinition[];

    constructor(data: FrameworkDefinition) {
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.logoUrl = data.logoUrl;
        this.detections = data.detections;
        this.buildSteps = data.buildSteps;
        this.deployStep = data.deployStep;
        this.supported = data.supported;
        this.requiredFeatures = data.requiredFeatures;
        this.templateFiles = data.templateFiles;
    }
}

export class InstallationInput {
    code: string;
    externalId: number;

    constructor(data: InstallationInput) {
        this.code = data.code;
        this.externalId = data.externalId;
    }
}

export class Installation {
    id: string;
    account: GithubIdentity;
    externalId: string;
    suspended: boolean;
    necessaryPermissions: boolean;
    missingPermissions: Record<string, AppAccessType>;

    constructor(data: Installation) {
        this.id = data.id;
        this.account = data.account;
        this.externalId = data.externalId;
        this.suspended = data.suspended;
        this.necessaryPermissions = data.necessaryPermissions;
        this.missingPermissions = data.missingPermissions;
    }
}

export class ProjectInput {
    projectType: string;
    projectName: string;
    databaseEnabled: boolean;
    buildSteps: BuildStepInput[];
    templateStep?: TemplateStepInput;
    deployStep: DeployStepInput;
    sourceRepository?: RepositoryInputUnion;
    destinationRepository: DestinationRepositoryInput;
    automaticDeploymentEnabled: boolean;
    overwriteWorkflow?: boolean;
    mailAccountEnabled: boolean;
    visitorStatisticsEnabled: boolean;
    defaultPhpVersion?: string;

    constructor(data: ProjectInput) {
        this.projectType = data.projectType;
        this.projectName = data.projectName;
        this.databaseEnabled = data.databaseEnabled;
        this.buildSteps = data.buildSteps;
        this.templateStep = data.templateStep;
        this.deployStep = data.deployStep;
        this.sourceRepository = data.sourceRepository;
        this.destinationRepository = data.destinationRepository;
        this.automaticDeploymentEnabled = data.automaticDeploymentEnabled;
        this.overwriteWorkflow = data.overwriteWorkflow;
        this.mailAccountEnabled = data.mailAccountEnabled;
        this.visitorStatisticsEnabled = data.visitorStatisticsEnabled;
        this.defaultPhpVersion = data.defaultPhpVersion;
    }
}

export class Project {
    name: string;
    id: string;
    locked: boolean;
    productionBranchId: string;
    domains: string[];
    projectType: string;
    providerType: ProviderType;
    lastChangedDate: Date;
    deleted: boolean;
    permissionLost: boolean;
    gitRepository: GitRepository;
    productionDeploymentCount: number;
    stagingDeploymentCount: number;
    maxStagingDeploymentCount: number;
    automaticDeploymentEnabled: boolean;
    defaultPhpVersion?: string;
    databaseSettings?: DatabaseSettings;
    visitorStatisticsEnabled: boolean;
    spawningEnabled: boolean;
    siteUrls: string[];

    constructor(data: Project) {
        this.name = data.name;
        this.id = data.id;
        this.locked = data.locked;
        this.productionBranchId = data.productionBranchId;
        this.domains = data.domains;
        this.projectType = data.projectType;
        this.providerType = data.providerType;
        this.lastChangedDate = data.lastChangedDate;
        this.deleted = data.deleted;
        this.permissionLost = data.permissionLost;
        this.gitRepository = data.gitRepository;
        this.productionDeploymentCount = data.productionDeploymentCount;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.maxStagingDeploymentCount = data.maxStagingDeploymentCount;
        this.automaticDeploymentEnabled = data.automaticDeploymentEnabled;
        this.defaultPhpVersion = data.defaultPhpVersion;
        this.databaseSettings = data.databaseSettings;
        this.visitorStatisticsEnabled = data.visitorStatisticsEnabled;
        this.spawningEnabled = data.spawningEnabled;
        this.siteUrls = data.siteUrls;
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
    projectNamePatch?: ProjectNamePatch;
    automaticDeploymentEnabledPatch?: AutomaticDeploymentEnabledPatch;
    projectTypePatch?: ProjectTypePatch;
    defaultPhpVersionPatch?: DefaultPhpVersionPatch;
    visitorStatisticsEnabledPatch?: VisitorStatisticsEnabledPatch;

    constructor(data: ProjectPatch) {
        this.projectNamePatch = data.projectNamePatch;
        this.automaticDeploymentEnabledPatch = data.automaticDeploymentEnabledPatch;
        this.projectTypePatch = data.projectTypePatch;
        this.defaultPhpVersionPatch = data.defaultPhpVersionPatch;
        this.visitorStatisticsEnabledPatch = data.visitorStatisticsEnabledPatch;
    }
}

export class DeploymentNameValidationRequest {
    deploymentName: string;

    constructor(data: DeploymentNameValidationRequest) {
        this.deploymentName = data.deploymentName;
    }
}

export class ProjectType {
    name: string;
    group: string;
    availableFeatures: Feature[];
    stagingDeploymentCount: number;
    resourceLevel: string;
    diskQuotaPerBranch: number;
    databaseQuotaPerBranch?: number;
    orderable: boolean;

    constructor(data: ProjectType) {
        this.name = data.name;
        this.group = data.group;
        this.availableFeatures = data.availableFeatures;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.resourceLevel = data.resourceLevel;
        this.diskQuotaPerBranch = data.diskQuotaPerBranch;
        this.databaseQuotaPerBranch = data.databaseQuotaPerBranch;
        this.orderable = data.orderable;
    }
}

export class ProjectTypeInput {
    name: string;
    group: string;
    availableFeatures: string[];
    stagingDeploymentCount: number;
    resourceLevel: string;
    diskQuotaPerBranch: number;
    databaseQuotaPerBranch?: number;
    orderable: boolean;

    constructor(data: ProjectTypeInput) {
        this.name = data.name;
        this.group = data.group;
        this.availableFeatures = data.availableFeatures;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.resourceLevel = data.resourceLevel;
        this.diskQuotaPerBranch = data.diskQuotaPerBranch;
        this.databaseQuotaPerBranch = data.databaseQuotaPerBranch;
        this.orderable = data.orderable;
    }
}

export class TokenAuthInput {
    type: string;
    code: string;

    constructor(data: TokenAuthInput) {
        this.type = data.type;
        this.code = data.code;
    }
}

export class UserSession {
    frontendToken: string;

    constructor(data: UserSession) {
        this.frontendToken = data.frontendToken;
    }
}

export class ProjectTypeCount {
    name: string;
    total: number;
    used: number;

    constructor(data: ProjectTypeCount) {
        this.name = data.name;
        this.total = data.total;
        this.used = data.used;
    }
}

export interface GitConnection {
    type: "GITHUB";
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
    id: string;
    provisioningId: string;
    stackInstanceId: string;
    market: string;
    softLockedDate?: Date;
    hardLockedDate?: Date;
    deletedDate?: Date;
    createdDate: Date;
    lastChangedDate: Date;
    projectsCount: number;

    constructor(data: DetailedAccountOverview) {
        this.id = data.id;
        this.provisioningId = data.provisioningId;
        this.stackInstanceId = data.stackInstanceId;
        this.market = data.market;
        this.softLockedDate = data.softLockedDate;
        this.hardLockedDate = data.hardLockedDate;
        this.deletedDate = data.deletedDate;
        this.createdDate = data.createdDate;
        this.lastChangedDate = data.lastChangedDate;
        this.projectsCount = data.projectsCount;
    }
}

export class Domain {
    name: string;
    type: DomainType;
    inUse: boolean;

    constructor(data: Domain) {
        this.name = data.name;
        this.type = data.type;
        this.inUse = data.inUse;
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

export class FeedbackTileShownPatch implements Patch<Date> {
    operation: string;
    payload: Date;

    constructor(data: FeedbackTileShownPatch) {
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
    state?: BuildState;
    url?: string;
    lastBuildDate?: Date;

    constructor(data: BranchBuildState) {
        this.state = data.state;
        this.url = data.url;
        this.lastBuildDate = data.lastBuildDate;
    }
}

export class BranchDeploymentState {
    state: BranchDeploymentStateType;
    lastDeploymentDate?: Date;

    constructor(data: BranchDeploymentState) {
        this.state = data.state;
        this.lastDeploymentDate = data.lastDeploymentDate;
    }
}

export class BranchOverview {
    name: string;
    id: string;
    productionBranch: boolean;
    webUrl: string;
    workflowPresent: boolean;
    deprecatedWorkflow?: boolean;
    deleted: boolean;
    deploymentCount: number;
    buildState?: BranchBuildState;
    deploymentState?: BranchDeploymentState;

    constructor(data: BranchOverview) {
        this.name = data.name;
        this.id = data.id;
        this.productionBranch = data.productionBranch;
        this.webUrl = data.webUrl;
        this.workflowPresent = data.workflowPresent;
        this.deprecatedWorkflow = data.deprecatedWorkflow;
        this.deleted = data.deleted;
        this.deploymentCount = data.deploymentCount;
        this.buildState = data.buildState;
        this.deploymentState = data.deploymentState;
    }
}

export class BuildJobLog {
    name: string;
    steps: BuildStepLog[];

    constructor(data: BuildJobLog) {
        this.name = data.name;
        this.steps = data.steps;
    }
}

export class BranchBuild {
    name: string;
    id: string;
    state: BuildState;
    number: number;
    createdDate: Date;

    constructor(data: BranchBuild) {
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.number = data.number;
        this.createdDate = data.createdDate;
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

export class DetailedDeploymentState {
    state: DeploymentState;
    url?: string;
    lastDeployedDate?: Date;
    externalId: string;
    occurrenceTime: Date;

    constructor(data: DetailedDeploymentState) {
        this.state = data.state;
        this.url = data.url;
        this.lastDeployedDate = data.lastDeployedDate;
        this.externalId = data.externalId;
        this.occurrenceTime = data.occurrenceTime;
    }
}

export class DeploymentDomain {
    name: string;
    customDomain: boolean;

    constructor(data: DeploymentDomain) {
        this.name = data.name;
        this.customDomain = data.customDomain;
    }
}

export class DetailedWebspace {
    state: WebspaceState;
    webspace: Webspace;

    constructor(data: DetailedWebspace) {
        this.state = data.state;
        this.webspace = data.webspace;
    }
}

export class DetailedDatabase {
    state: DatabaseState;
    database: Database;

    constructor(data: DetailedDatabase) {
        this.state = data.state;
        this.database = data.database;
    }
}

export class DeploymentOverview {
    name: string;
    id: string;
    state: DetailedDeploymentState;
    domain: DeploymentDomain;
    webspace: WebspaceOverview;
    database?: DatabaseOverview;

    constructor(data: DeploymentOverview) {
        this.name = data.name;
        this.id = data.id;
        this.state = data.state;
        this.domain = data.domain;
        this.webspace = data.webspace;
        this.database = data.database;
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

export class Runtime {
    name: string;
    version?: string;

    constructor(data: Runtime) {
        this.name = data.name;
        this.version = data.version;
    }
}

export class BuildTool {
    name: string;
    version?: string;

    constructor(data: BuildTool) {
        this.name = data.name;
        this.version = data.version;
    }
}

export class DetectionResult {
    detectionBase: DetectionBase;
    buildSteps: BuildStep[];
    templateStep?: TemplateStep;
    deployStep: DeployStep;
    supported: Supported;
    requiredFeatures: Feature[];

    constructor(data: DetectionResult) {
        this.detectionBase = data.detectionBase;
        this.buildSteps = data.buildSteps;
        this.templateStep = data.templateStep;
        this.deployStep = data.deployStep;
        this.supported = data.supported;
        this.requiredFeatures = data.requiredFeatures;
    }
}

export interface Detection {
    type: "DEPENDENCY" | "FILE_CONTENT" | "FILE" | "LANGUAGE";
}

export class BuildStepDefinition {
    name: string;
    commands: string[];
    variables: Record<string, Variable>;
    completionHints: Record<string, string>;

    constructor(data: BuildStepDefinition) {
        this.name = data.name;
        this.commands = data.commands;
        this.variables = data.variables;
        this.completionHints = data.completionHints;
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

export class SupportedInput {
    reason?: string;
    supported: boolean;
    compensation?: string;

    constructor(data: SupportedInput) {
        this.reason = data.reason;
        this.supported = data.supported;
        this.compensation = data.compensation;
    }
}

export class TemplateFileDefinition {
    type: string;
    path: string;

    constructor(data: TemplateFileDefinition) {
        this.type = data.type;
        this.path = data.path;
    }
}

export class Supported {
    supported: boolean;
    reason?: string;
    compensation?: string;

    constructor(data: Supported) {
        this.supported = data.supported;
        this.reason = data.reason;
        this.compensation = data.compensation;
    }
}

export class GithubIdentity {
    name: string;
    type: GithubIdentityType;
    avatarUrl: string;

    constructor(data: GithubIdentity) {
        this.name = data.name;
        this.type = data.type;
        this.avatarUrl = data.avatarUrl;
    }
}

export class GithubRepository {
    fullName: string;
    inUse: boolean;
    httpCloneUrl: string;
    sshCloneUrl: string;
    defaultBranch: string;

    constructor(data: GithubRepository) {
        this.fullName = data.fullName;
        this.inUse = data.inUse;
        this.httpCloneUrl = data.httpCloneUrl;
        this.sshCloneUrl = data.sshCloneUrl;
        this.defaultBranch = data.defaultBranch;
    }
}

export class BuildStepDescription {
    name: string;
    displayName: string;
    description: string;
    runtimeName?: string;
    buildToolName?: string;
    exampleCommands: string[];
    exampleVariables: Record<string, Variable>;

    constructor(data: BuildStepDescription) {
        this.name = data.name;
        this.displayName = data.displayName;
        this.description = data.description;
        this.runtimeName = data.runtimeName;
        this.buildToolName = data.buildToolName;
        this.exampleCommands = data.exampleCommands;
        this.exampleVariables = data.exampleVariables;
    }
}

export class TemplateFileCompletionDescription {
    type: string;
    displayName: string;
    description: string;
    supportedInputs: string[];

    constructor(data: TemplateFileCompletionDescription) {
        this.type = data.type;
        this.displayName = data.displayName;
        this.description = data.description;
        this.supportedInputs = data.supportedInputs;
    }
}

export class BuildStepInput {
    name: string;
    commands: string[];
    variables: Record<string, VariableInput>;
    runtimeVersion?: string;
    buildToolVersion?: string;

    constructor(data: BuildStepInput) {
        this.name = data.name;
        this.commands = data.commands;
        this.variables = data.variables;
        this.runtimeVersion = data.runtimeVersion;
        this.buildToolVersion = data.buildToolVersion;
    }
}

export class TemplateStepInput {
    templateFiles: TemplateFileInput[];
    secrets: Record<string, string>;

    constructor(data: TemplateStepInput) {
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
    repository: RepositoryInputUnion;
    privateRepo?: boolean;

    constructor(data: DestinationRepositoryInput) {
        this.repository = data.repository;
        this.privateRepo = data.privateRepo;
    }
}

export class GitRepository {
    fullName: string;
    httpCloneUrl: string;
    sshCloneUrl: string;

    constructor(data: GitRepository) {
        this.fullName = data.fullName;
        this.httpCloneUrl = data.httpCloneUrl;
        this.sshCloneUrl = data.sshCloneUrl;
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
    name: string;
    id: string;
    locked: boolean;
    productionBranchId: string;
    domains: string[];
    projectType: string;
    providerType: ProviderType;
    lastChangedDate: Date;
    deleted: boolean;
    permissionLost: boolean;
    gitRepository: GitRepository;
    productionDeploymentCount: number;
    stagingDeploymentCount: number;
    spawningEnabled: boolean;
    siteUrls: string[];

    constructor(data: ProjectOverview) {
        this.name = data.name;
        this.id = data.id;
        this.locked = data.locked;
        this.productionBranchId = data.productionBranchId;
        this.domains = data.domains;
        this.projectType = data.projectType;
        this.providerType = data.providerType;
        this.lastChangedDate = data.lastChangedDate;
        this.deleted = data.deleted;
        this.permissionLost = data.permissionLost;
        this.gitRepository = data.gitRepository;
        this.productionDeploymentCount = data.productionDeploymentCount;
        this.stagingDeploymentCount = data.stagingDeploymentCount;
        this.spawningEnabled = data.spawningEnabled;
        this.siteUrls = data.siteUrls;
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

export class AutomaticDeploymentEnabledPatch implements Patch<boolean> {
    operation: string;
    payload: boolean;

    constructor(data: AutomaticDeploymentEnabledPatch) {
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

export class DefaultPhpVersionPatch implements Patch<string> {
    operation: string;
    payload: string;

    constructor(data: DefaultPhpVersionPatch) {
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
    name: string;
    log: string;

    constructor(data: BuildStepLog) {
        this.name = data.name;
        this.log = data.log;
    }
}

export class Webspace {
    id: string;
    username: string;
    sshHost: string;
    siteUrl: string;
    phpVersion?: string;
    quota?: WebspaceQuota;

    constructor(data: Webspace) {
        this.id = data.id;
        this.username = data.username;
        this.sshHost = data.sshHost;
        this.siteUrl = data.siteUrl;
        this.phpVersion = data.phpVersion;
        this.quota = data.quota;
    }
}

export class Database {
    name?: string;
    id: string;
    type: string;
    host?: string;
    version: string;
    username: string;
    databaseQuota?: DatabaseQuota;

    constructor(data: Database) {
        this.name = data.name;
        this.id = data.id;
        this.type = data.type;
        this.host = data.host;
        this.version = data.version;
        this.username = data.username;
        this.databaseQuota = data.databaseQuota;
    }
}

export class WebspaceOverview {
    id: string;
    sshHost: string;
    siteUrl: string;
    phpVersion?: string;

    constructor(data: WebspaceOverview) {
        this.id = data.id;
        this.sshHost = data.sshHost;
        this.siteUrl = data.siteUrl;
        this.phpVersion = data.phpVersion;
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
    owner: string;
    branch?: string;
    repo: string;

    constructor(data: GithubRepositoryInput) {
        this.type = data.type;
        this.owner = data.owner;
        this.branch = data.branch;
        this.repo = data.repo;
    }
}

export class DetectionBase {
    type: DetectionBaseType;
    framework?: FrameworkIdentifier;

    constructor(data: DetectionBase) {
        this.type = data.type;
        this.framework = data.framework;
    }
}

export class TemplateStep {
    templateFiles: TemplateFile[];
    secrets: Record<string, string>;

    constructor(data: TemplateStep) {
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

export class Variable {
    value: string;
    secret: boolean;

    constructor(data: Variable) {
        this.value = data.value;
        this.secret = data.secret;
    }
}

export class DeploymentConfiguration {
    excludes: string[];
    remoteCommands: RemoteCommands;

    constructor(data: DeploymentConfiguration) {
        this.excludes = data.excludes;
        this.remoteCommands = data.remoteCommands;
    }
}

export class VariableInput {
    value: string;
    secret: boolean;

    constructor(data: VariableInput) {
        this.value = data.value;
        this.secret = data.secret;
    }
}

export class TemplateFileInput {
    content: string;
    path: string;

    constructor(data: TemplateFileInput) {
        this.content = data.content;
        this.path = data.path;
    }
}

export class DeploymentConfigurationInput {
    excludes: string[];
    remoteCommands: RemoteCommands;

    constructor(data: DeploymentConfigurationInput) {
        this.excludes = data.excludes;
        this.remoteCommands = data.remoteCommands;
    }
}

export interface Patch<T> {
    payload: T;
    operation: string;
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

export interface FrameworkSearchRequestQueryParams {
    type?: string;
    supported?: boolean;
}

export interface PagingRequestQueryParams {
    pageNumber?: number;
    pageSize?: number;
}

export interface ProjectSearchRequestQueryParams {
    numberOfBranches?: number;
}

export interface BranchSearchRequestQueryParams {
    name?: string;
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

export type RestResponse<R> = Promise<Axios.GenericAxiosResponse<R>>;

export type GitConnectionUnion = GitHubConnection;

export type RepositoryInputUnion = GithubRepositoryInput;

export type DetectionUnion = DependencyDetection | FileContentDetection | FileDetection | LanguageDetection;

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

export enum TokenChangeType {
    REVOKE = "REVOKE",
}

export enum ProviderType {
    GITHUB = "GITHUB",
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

export enum FrameworkType {
    SSR = "SSR",
    SSG = "SSG",
    SPA = "SPA",
    PLAIN = "PLAIN",
}

export enum Feature {
    PHP = "PHP",
    MAIL = "MAIL",
    DB = "DB",
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

export enum DeploymentState {
    IN_CREATION = "IN_CREATION",
    CREATED = "CREATED",
    QUEUED = "QUEUED",
    RUNNING = "RUNNING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
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

export class AxiosIonosSpaceUserSessionApiClient extends IonosSpaceUserSessionApiClient<Axios.AxiosRequestConfig> {

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

export class AxiosIonosSpaceAccountInfoApiClient extends IonosSpaceAccountInfoApiClient<Axios.AxiosRequestConfig> {

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

export class AxiosIonosSpaceProjectApiClient extends IonosSpaceProjectApiClient<Axios.AxiosRequestConfig> {

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

export class AxiosIonosSpaceBranchApiClient extends IonosSpaceBranchApiClient<Axios.AxiosRequestConfig> {

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

export class AxiosIonosSpaceAccountApiClient extends IonosSpaceAccountApiClient<Axios.AxiosRequestConfig> {

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

export class AxiosIonosSpaceGithubWebhookApiClient extends IonosSpaceGithubWebhookApiClient<Axios.AxiosRequestConfig> {

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

export class AxiosIonosSpaceProjectTypesApiClient extends IonosSpaceProjectTypesApiClient<Axios.AxiosRequestConfig> {

    constructor(baseURL: string, axiosInstance: Axios.AxiosInstance = axios.create()) {
        axiosInstance.defaults.baseURL = baseURL;
        super(new AxiosHttpClient(axiosInstance));
    }
}

export class AxiosIonosSpaceGithubApiClient extends IonosSpaceGithubApiClient<Axios.AxiosRequestConfig> {

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
