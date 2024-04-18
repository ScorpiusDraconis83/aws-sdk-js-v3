// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { EMRServerlessServiceException as __BaseException } from "./EMRServerlessServiceException";

/**
 * @public
 * @enum
 */
export const Architecture = {
  ARM64: "ARM64",
  X86_64: "X86_64",
} as const;

/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * <p>The configuration for an application to automatically start on job submission.</p>
 * @public
 */
export interface AutoStartConfig {
  /**
   * <p>Enables the application to automatically start on job submission. Defaults to
   *          true.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * <p>The configuration for an application to automatically stop after a certain amount of
 *          time being idle.</p>
 * @public
 */
export interface AutoStopConfig {
  /**
   * <p>Enables the application to automatically stop after a certain amount of time being idle.
   *          Defaults to true.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The amount of idle time in minutes after which your application will automatically stop.
   *          Defaults to 15 minutes.</p>
   * @public
   */
  idleTimeoutMinutes?: number;
}

/**
 * <p>The applied image configuration.</p>
 * @public
 */
export interface ImageConfiguration {
  /**
   * <p>The image URI.</p>
   * @public
   */
  imageUri: string | undefined;

  /**
   * <p>The SHA256 digest of the image URI. This indicates which specific image the application
   *          is configured for. The image digest doesn't exist until an application has started.</p>
   * @public
   */
  resolvedImageDigest?: string;
}

/**
 * <p>The cumulative configuration requirements for every worker instance of the worker
 *          type.</p>
 * @public
 */
export interface WorkerResourceConfig {
  /**
   * <p>The CPU requirements for every worker instance of the worker type.</p>
   * @public
   */
  cpu: string | undefined;

  /**
   * <p>The memory requirements for every worker instance of the worker type.</p>
   * @public
   */
  memory: string | undefined;

  /**
   * <p>The disk requirements for every worker instance of the worker type.</p>
   * @public
   */
  disk?: string;

  /**
   * <p>The disk type for every worker instance of the work type. Shuffle optimized disks have higher performance
   *          characteristics and are better for shuffle heavy workloads. Default is <code>STANDARD</code>.</p>
   * @public
   */
  diskType?: string;
}

/**
 * <p>The initial capacity configuration per worker.</p>
 * @public
 */
export interface InitialCapacityConfig {
  /**
   * <p>The number of workers in the initial capacity configuration.</p>
   * @public
   */
  workerCount: number | undefined;

  /**
   * <p>The resource configuration of the initial capacity configuration.</p>
   * @public
   */
  workerConfiguration?: WorkerResourceConfig;
}

/**
 * <p>The maximum allowed cumulative resources for an application. No new resources will be
 *          created once the limit is hit.</p>
 * @public
 */
export interface MaximumAllowedResources {
  /**
   * <p>The maximum allowed CPU for an application.</p>
   * @public
   */
  cpu: string | undefined;

  /**
   * <p>The maximum allowed resources for an application.</p>
   * @public
   */
  memory: string | undefined;

  /**
   * <p>The maximum allowed disk for an application.</p>
   * @public
   */
  disk?: string;
}

/**
 * <p>The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs
 *          to send log information to CloudWatch.</p>
 * @public
 */
export interface CloudWatchLoggingConfiguration {
  /**
   * <p>Enables CloudWatch logging.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The name of the log group in Amazon CloudWatch Logs where you want to publish your
   *          logs.</p>
   * @public
   */
  logGroupName?: string;

  /**
   * <p>Prefix for the CloudWatch log stream name.</p>
   * @public
   */
  logStreamNamePrefix?: string;

  /**
   * <p>The Key Management Service (KMS) key ARN to encrypt the logs that you store in CloudWatch Logs.</p>
   * @public
   */
  encryptionKeyArn?: string;

  /**
   * <p>The types of logs that you want to publish to CloudWatch. If you don't specify
   *          any log types, driver STDOUT and STDERR logs will be published to CloudWatch Logs by
   *          default. For more information including the supported worker types for Hive and Spark, see
   *             <a href="https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/logging.html#jobs-log-storage-cw">Logging for
   *             EMR Serverless with CloudWatch</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Key Valid Values</b>: <code>SPARK_DRIVER</code>,
   *                   <code>SPARK_EXECUTOR</code>, <code>HIVE_DRIVER</code>,
   *                <code>TEZ_TASK</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Array Members Valid Values</b>: <code>STDOUT</code>,
   *                   <code>STDERR</code>, <code>HIVE_LOG</code>, <code>TEZ_AM</code>,
   *                   <code>SYSTEM_LOGS</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  logTypes?: Record<string, string[]>;
}

/**
 * <p>The managed log persistence configuration for a job run.</p>
 * @public
 */
export interface ManagedPersistenceMonitoringConfiguration {
  /**
   * <p>Enables managed logging and defaults to true. If set to false, managed logging will be
   *          turned off.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The KMS key ARN to encrypt the logs stored in managed log persistence.</p>
   * @public
   */
  encryptionKeyArn?: string;
}

/**
 * <p>The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.</p>
 * @public
 */
export interface PrometheusMonitoringConfiguration {
  /**
   * <p>The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
   */
  remoteWriteUrl?: string;
}

/**
 * <p>The Amazon S3 configuration for monitoring log publishing. You can configure your jobs
 *          to send log information to Amazon S3.</p>
 * @public
 */
export interface S3MonitoringConfiguration {
  /**
   * <p>The Amazon S3 destination URI for log publishing.</p>
   * @public
   */
  logUri?: string;

  /**
   * <p>The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.</p>
   * @public
   */
  encryptionKeyArn?: string;
}

/**
 * <p>The configuration setting for monitoring.</p>
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * <p>The Amazon S3 configuration for monitoring log publishing.</p>
   * @public
   */
  s3MonitoringConfiguration?: S3MonitoringConfiguration;

  /**
   * <p>The managed log persistence configuration for a job run.</p>
   * @public
   */
  managedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration;

  /**
   * <p>The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs
   *          to send log information to CloudWatch.</p>
   * @public
   */
  cloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration;

  /**
   * <p>The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.</p>
   * @public
   */
  prometheusMonitoringConfiguration?: PrometheusMonitoringConfiguration;
}

/**
 * <p>The network configuration for customer VPC connectivity.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>The array of subnet Ids for customer VPC connectivity.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The array of security group Ids for customer VPC connectivity.</p>
   * @public
   */
  securityGroupIds?: string[];
}

/**
 * @public
 * @enum
 */
export const ApplicationState = {
  CREATED: "CREATED",
  CREATING: "CREATING",
  STARTED: "STARTED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type ApplicationState = (typeof ApplicationState)[keyof typeof ApplicationState];

/**
 * <p>The specifications for a worker type.</p>
 * @public
 */
export interface WorkerTypeSpecification {
  /**
   * <p>The image configuration for a worker type.</p>
   * @public
   */
  imageConfiguration?: ImageConfiguration;
}

/**
 * <p>The summary of attributes associated with an application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application, such as Spark or Hive.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The state of the application.</p>
   * @public
   */
  state: ApplicationState | undefined;

  /**
   * <p>The state details of the application.</p>
   * @public
   */
  stateDetails?: string;

  /**
   * <p>The date and time when the application was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>The image configuration.</p>
 * @public
 */
export interface ImageConfigurationInput {
  /**
   * <p>The URI of an image in the Amazon ECR registry. This field is required when you create a
   *          new application. If you leave this field blank in an update, Amazon EMR will remove
   *          the image configuration.</p>
   * @public
   */
  imageUri?: string;
}

/**
 * <p>The specifications for a worker type.</p>
 * @public
 */
export interface WorkerTypeSpecificationInput {
  /**
   * <p>The image configuration for a worker type.</p>
   * @public
   */
  imageConfiguration?: ImageConfigurationInput;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The output contains the application ID.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the name of the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The output contains the ARN of the application.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Request processing failed because of an error or failure with the service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the application that will be deleted.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The ID of the application that will be described.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The token for the next set of application results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of applications that can be listed.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>An optional filter for application states. Note that if this filter contains multiple
   *          states, the resulting list will be grouped by the state.</p>
   * @public
   */
  states?: ApplicationState[];
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The output lists the specified applications.</p>
   * @public
   */
  applications: ApplicationSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of application results. This is required
   *          for pagination and is available as a response of the previous request.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The maximum number of resources per account has been reached.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * <p>The ID of the application to start.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationResponse {}

/**
 * @public
 */
export interface StopApplicationRequest {
  /**
   * <p>The ID of the application to stop.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface StopApplicationResponse {}

/**
 * @public
 */
export interface CancelJobRunRequest {
  /**
   * <p>The ID of the application on which the job run will be canceled.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run to cancel.</p>
   * @public
   */
  jobRunId: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRunResponse {
  /**
   * <p>The output contains the application ID on which the job run is cancelled.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the ID of the cancelled job run.</p>
   * @public
   */
  jobRunId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardForJobRunRequest {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobRunId: string | undefined;
}

/**
 * @public
 */
export interface GetDashboardForJobRunResponse {
  /**
   * <p>The URL to view job run's dashboard.</p>
   * @public
   */
  url?: string;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * <p>The ID of the application on which the job run is submitted.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobRunId: string | undefined;
}

/**
 * <p>The resource utilization for memory, storage, and vCPU for jobs.</p>
 * @public
 */
export interface ResourceUtilization {
  /**
   * <p>The aggregated vCPU used per hour from the time the job starts executing until the job
   *          is terminated.</p>
   * @public
   */
  vCPUHour?: number;

  /**
   * <p>The aggregated memory used per hour from the time the job starts executing until the job
   *          is terminated.</p>
   * @public
   */
  memoryGBHour?: number;

  /**
   * <p>The aggregated storage used per hour from the time the job starts executing until the
   *          job is terminated.</p>
   * @public
   */
  storageGBHour?: number;
}

/**
 * <p>The configurations for the Hive job driver.</p>
 * @public
 */
export interface Hive {
  /**
   * <p>The query for the Hive job run.</p>
   * @public
   */
  query: string | undefined;

  /**
   * <p>The query file for the Hive job run.</p>
   * @public
   */
  initQueryFile?: string;

  /**
   * <p>The parameters for the Hive job run.</p>
   * @public
   */
  parameters?: string;
}

/**
 * <p>The configurations for the Spark submit job driver.</p>
 * @public
 */
export interface SparkSubmit {
  /**
   * <p>The entry point for the Spark submit job run.</p>
   * @public
   */
  entryPoint: string | undefined;

  /**
   * <p>The arguments for the Spark submit job run.</p>
   * @public
   */
  entryPointArguments?: string[];

  /**
   * <p>The parameters for the Spark submit job run.</p>
   * @public
   */
  sparkSubmitParameters?: string;
}

/**
 * <p>The driver that the job runs on.</p>
 * @public
 */
export type JobDriver = JobDriver.HiveMember | JobDriver.SparkSubmitMember | JobDriver.$UnknownMember;

/**
 * @public
 */
export namespace JobDriver {
  /**
   * <p>The job driver parameters specified for Spark.</p>
   * @public
   */
  export interface SparkSubmitMember {
    sparkSubmit: SparkSubmit;
    hive?: never;
    $unknown?: never;
  }

  /**
   * <p>The job driver parameters specified for Hive.</p>
   * @public
   */
  export interface HiveMember {
    sparkSubmit?: never;
    hive: Hive;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sparkSubmit?: never;
    hive?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sparkSubmit: (value: SparkSubmit) => T;
    hive: (value: Hive) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: JobDriver, visitor: Visitor<T>): T => {
    if (value.sparkSubmit !== undefined) return visitor.sparkSubmit(value.sparkSubmit);
    if (value.hive !== undefined) return visitor.hive(value.hive);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const JobRunState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * <p>The aggregate vCPU, memory, and storage resources used from the time job start executing
 *          till the time job is terminated, rounded up to the nearest second.</p>
 * @public
 */
export interface TotalResourceUtilization {
  /**
   * <p>The aggregated vCPU used per hour from the time job start executing till the time job is
   *          terminated.</p>
   * @public
   */
  vCPUHour?: number;

  /**
   * <p>The aggregated memory used per hour from the time job start executing till the time job
   *          is terminated.</p>
   * @public
   */
  memoryGBHour?: number;

  /**
   * <p>The aggregated storage used per hour from the time job start executing till the time job
   *          is terminated.</p>
   * @public
   */
  storageGBHour?: number;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * <p>The ID of the application for which to list the job run.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The token for the next set of job run results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of job runs that can be listed.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The lower bound of the option to filter by creation date and time.</p>
   * @public
   */
  createdAtAfter?: Date;

  /**
   * <p>The upper bound of the option to filter by creation date and time.</p>
   * @public
   */
  createdAtBefore?: Date;

  /**
   * <p>An optional filter for job run states. Note that if this filter contains multiple
   *          states, the resulting list will be grouped by the state.</p>
   * @public
   */
  states?: JobRunState[];
}

/**
 * <p>The summary of attributes associated with a job run.</p>
 * @public
 */
export interface JobRunSummary {
  /**
   * <p>The ID of the application the job is running on.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ARN of the job run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the job run was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The state of the job run.</p>
   * @public
   */
  state: JobRunState | undefined;

  /**
   * <p>The state details of the job run.</p>
   * @public
   */
  stateDetails: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application your job is running
   *          on.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of job run, such as Spark or Hive.</p>
   * @public
   */
  type?: string;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * <p>The output lists information about the specified job runs.</p>
   * @public
   */
  jobRuns: JobRunSummary[] | undefined;

  /**
   * <p>The output displays the token for the next set of job run results. This is required for
   *          pagination and is available as a response of the previous request.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * <p>This output displays the application ID on which the job run was submitted.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The output contains the ID of the started job run.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>This output displays the ARN of the job run..</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *          Currently, the supported resources are Amazon EMR Serverless applications and job
   *          runs.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *          Currently, the supported resources are Amazon EMR Serverless applications and job
   *          runs.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list the tags for.
   *          Currently, the supported resources are Amazon EMR Serverless applications and job
   *          runs.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>A configuration specification to be used when provisioning an application. A
 *          configuration consists of a classification, properties, and optional nested configurations.
 *          A classification refers to an application-specific configuration file. Properties are the
 *          settings you want to change in that file.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   * @public
   */
  classification: string | undefined;

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   * @public
   */
  properties?: Record<string, string>;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   * @public
   */
  configurations?: Configuration[];
}

/**
 * <p>Information about an application. Amazon EMR Serverless uses applications to run
 *          jobs.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application, such as Spark or Hive.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The state of the application.</p>
   * @public
   */
  state: ApplicationState | undefined;

  /**
   * <p>The state details of the application.</p>
   * @public
   */
  stateDetails?: string;

  /**
   * <p>The initial capacity of the application.</p>
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig>;

  /**
   * <p>The maximum capacity of the application. This is cumulative across all workers at any
   *          given point in time during the lifespan of the application is created. No new resources
   *          will be created once any one of the defined limits is hit.</p>
   * @public
   */
  maximumCapacity?: MaximumAllowedResources;

  /**
   * <p>The date and time when the application run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the application run was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags assigned to the application.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   * @public
   */
  autoStartConfiguration?: AutoStartConfig;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of
   *          time being idle.</p>
   * @public
   */
  autoStopConfiguration?: AutoStopConfig;

  /**
   * <p>The network configuration for customer VPC connectivity for the application.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture;

  /**
   * <p>The image configuration applied to all worker types.</p>
   * @public
   */
  imageConfiguration?: ImageConfiguration;

  /**
   * <p>The specification applied to each worker type.</p>
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecification>;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html">Configuration</a>
   *          specifications of an application. Each configuration consists of a classification and properties. You use this
   *       parameter when creating or updating an application. To see the runtimeConfiguration object of an application,
   *       run the <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html">GetApplication</a> API operation.</p>
   * @public
   */
  runtimeConfiguration?: Configuration[];

  /**
   * <p>The configuration setting for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration;
}

/**
 * <p>A configuration specification to be used to override existing configurations.</p>
 * @public
 */
export interface ConfigurationOverrides {
  /**
   * <p>The override configurations for the application.</p>
   * @public
   */
  applicationConfiguration?: Configuration[];

  /**
   * <p>The override configurations for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon EMR release associated with the application.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The type of application you want to start, such as Spark or Hive.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The client idempotency token of the application to create. Its value must be unique for
   *          each request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The capacity to initialize when the application is created.</p>
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig>;

  /**
   * <p>The maximum capacity to allocate when the application is created. This is cumulative
   *          across all workers at any given point in time, not just when an application is created. No
   *          new resources will be created once any one of the defined limits is hit.</p>
   * @public
   */
  maximumCapacity?: MaximumAllowedResources;

  /**
   * <p>The tags assigned to the application.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   * @public
   */
  autoStartConfiguration?: AutoStartConfig;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of
   *          time being idle.</p>
   * @public
   */
  autoStopConfiguration?: AutoStopConfig;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture;

  /**
   * <p>The image configuration for all worker types. You can either set this parameter or
   *             <code>imageConfiguration</code> for each worker type in
   *             <code>workerTypeSpecifications</code>.</p>
   * @public
   */
  imageConfiguration?: ImageConfigurationInput;

  /**
   * <p>The key-value pairs that specify worker type to
   *             <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker
   *          types for a Spark or Hive application. Valid worker types include <code>Driver</code> and
   *             <code>Executor</code> for Spark applications and <code>HiveDriver</code> and
   *             <code>TezTask</code> for Hive applications. You can either set image details in this
   *          parameter for each worker type, or in <code>imageConfiguration</code> for all worker
   *          types.</p>
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html">Configuration</a>
   *          specifications to use when creating an application. Each configuration consists of a classification and properties.
   *       This configuration is applied to all the job runs submitted under the application.</p>
   * @public
   */
  runtimeConfiguration?: Configuration[];

  /**
   * <p>The configuration setting for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The ID of the application to update.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The client idempotency token of the application to update. Its value must be unique for
   *          each request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The capacity to initialize when the application is updated.</p>
   * @public
   */
  initialCapacity?: Record<string, InitialCapacityConfig>;

  /**
   * <p>The maximum capacity to allocate when the application is updated. This is cumulative
   *          across all workers at any given point in time during the lifespan of the application. No
   *          new resources will be created once any one of the defined limits is hit.</p>
   * @public
   */
  maximumCapacity?: MaximumAllowedResources;

  /**
   * <p>The configuration for an application to automatically start on job submission.</p>
   * @public
   */
  autoStartConfiguration?: AutoStartConfig;

  /**
   * <p>The configuration for an application to automatically stop after a certain amount of
   *          time being idle.</p>
   * @public
   */
  autoStopConfiguration?: AutoStopConfig;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The CPU architecture of an application.</p>
   * @public
   */
  architecture?: Architecture;

  /**
   * <p>The image configuration to be used for all worker types. You can either set this
   *          parameter or <code>imageConfiguration</code> for each worker type in
   *             <code>WorkerTypeSpecificationInput</code>.</p>
   * @public
   */
  imageConfiguration?: ImageConfigurationInput;

  /**
   * <p>The key-value pairs that specify worker type to
   *             <code>WorkerTypeSpecificationInput</code>. This parameter must contain all valid worker
   *          types for a Spark or Hive application. Valid worker types include <code>Driver</code> and
   *             <code>Executor</code> for Spark applications and <code>HiveDriver</code> and
   *             <code>TezTask</code> for Hive applications. You can either set image details in this
   *          parameter for each worker type, or in <code>imageConfiguration</code> for all worker
   *          types.</p>
   * @public
   */
  workerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>;

  /**
   * <p>The Amazon EMR release label for the application. You can change the release
   *          label to use a different release of Amazon EMR.</p>
   * @public
   */
  releaseLabel?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html">Configuration</a>
   *          specifications to use when updating an application. Each configuration consists of a classification and properties.
   *       This configuration is applied across all the job runs submitted under the application.</p>
   * @public
   */
  runtimeConfiguration?: Configuration[];

  /**
   * <p>The configuration setting for monitoring.</p>
   * @public
   */
  monitoringConfiguration?: MonitoringConfiguration;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The output displays information about the specified application.</p>
   * @public
   */
  application: Application | undefined;
}

/**
 * <p>Information about a job run. A job run is a unit of work, such as a Spark JAR, Hive
 *          query, or SparkSQL query, that you submit to an Amazon EMR Serverless
 *          application.</p>
 * @public
 */
export interface JobRun {
  /**
   * <p>The ID of the application the job is running on.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   * @public
   */
  jobRunId: string | undefined;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The user who created the job run.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The date and time when the job run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the job run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The execution role ARN of the job run.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The state of the job run.</p>
   * @public
   */
  state: JobRunState | undefined;

  /**
   * <p>The state details of the job run.</p>
   * @public
   */
  stateDetails: string | undefined;

  /**
   * <p>The Amazon EMR release associated with the application your job is running
   *          on.</p>
   * @public
   */
  releaseLabel: string | undefined;

  /**
   * <p>The configuration settings that are used to override default configuration.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The job driver for the job run.</p>
   * @public
   */
  jobDriver: JobDriver | undefined;

  /**
   * <p>The tags assigned to the job run.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The aggregate vCPU, memory, and storage resources used from the time the job starts to
   *          execute, until the time the job terminates, rounded up to the nearest second.</p>
   * @public
   */
  totalResourceUtilization?: TotalResourceUtilization;

  /**
   * <p>The network configuration for customer VPC connectivity.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration;

  /**
   * <p>The job run total execution duration in seconds. This field is only available for job
   *          runs in a <code>COMPLETED</code>, <code>FAILED</code>, or <code>CANCELLED</code>
   *          state.</p>
   * @public
   */
  totalExecutionDurationSeconds?: number;

  /**
   * <p>Returns the job run timeout value from the <code>StartJobRun</code> call. If no timeout
   *          was specified, then it returns the default timeout of 720 minutes.</p>
   * @public
   */
  executionTimeoutMinutes?: number;

  /**
   * <p>The aggregate vCPU, memory, and storage that Amazon Web Services has billed for the job
   *          run. The billed resources include a 1-minute minimum usage for workers, plus additional
   *          storage over 20 GB per worker. Note that billed resources do not include usage for idle
   *          pre-initialized workers.</p>
   * @public
   */
  billedResourceUtilization?: ResourceUtilization;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * <p>The ID of the application on which to run the job.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The client idempotency token of the job run to start. Its value must be unique for each
   *          request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The execution role ARN for the job run.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The job driver for the job run.</p>
   * @public
   */
  jobDriver?: JobDriver;

  /**
   * <p>The configuration overrides for the job run.</p>
   * @public
   */
  configurationOverrides?: ConfigurationOverrides;

  /**
   * <p>The tags assigned to the job run.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The maximum duration for the job run to run. If the job run runs beyond this duration,
   *          it will be automatically cancelled.</p>
   * @public
   */
  executionTimeoutMinutes?: number;

  /**
   * <p>The optional job run name. This doesn't have to be unique.</p>
   * @public
   */
  name?: string;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>Information about the updated application.</p>
   * @public
   */
  application: Application | undefined;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * <p>The output displays information about the job run.</p>
   * @public
   */
  jobRun: JobRun | undefined;
}

/**
 * @internal
 */
export const HiveFilterSensitiveLog = (obj: Hive): any => ({
  ...obj,
  ...(obj.query && { query: SENSITIVE_STRING }),
  ...(obj.initQueryFile && { initQueryFile: SENSITIVE_STRING }),
  ...(obj.parameters && { parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SparkSubmitFilterSensitiveLog = (obj: SparkSubmit): any => ({
  ...obj,
  ...(obj.entryPoint && { entryPoint: SENSITIVE_STRING }),
  ...(obj.entryPointArguments && { entryPointArguments: SENSITIVE_STRING }),
  ...(obj.sparkSubmitParameters && { sparkSubmitParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const JobDriverFilterSensitiveLog = (obj: JobDriver): any => {
  if (obj.sparkSubmit !== undefined) return { sparkSubmit: SparkSubmitFilterSensitiveLog(obj.sparkSubmit) };
  if (obj.hive !== undefined) return { hive: HiveFilterSensitiveLog(obj.hive) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
  ...(obj.configurations && {
    configurations: obj.configurations.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ApplicationFilterSensitiveLog = (obj: Application): any => ({
  ...obj,
  ...(obj.runtimeConfiguration && {
    runtimeConfiguration: obj.runtimeConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ConfigurationOverridesFilterSensitiveLog = (obj: ConfigurationOverrides): any => ({
  ...obj,
  ...(obj.applicationConfiguration && {
    applicationConfiguration: obj.applicationConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
  ...(obj.runtimeConfiguration && {
    runtimeConfiguration: obj.runtimeConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
  ...(obj.runtimeConfiguration && {
    runtimeConfiguration: obj.runtimeConfiguration.map((item) => ConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetApplicationResponseFilterSensitiveLog = (obj: GetApplicationResponse): any => ({
  ...obj,
  ...(obj.application && { application: ApplicationFilterSensitiveLog(obj.application) }),
});

/**
 * @internal
 */
export const JobRunFilterSensitiveLog = (obj: JobRun): any => ({
  ...obj,
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
});

/**
 * @internal
 */
export const StartJobRunRequestFilterSensitiveLog = (obj: StartJobRunRequest): any => ({
  ...obj,
  ...(obj.jobDriver && { jobDriver: JobDriverFilterSensitiveLog(obj.jobDriver) }),
  ...(obj.configurationOverrides && {
    configurationOverrides: ConfigurationOverridesFilterSensitiveLog(obj.configurationOverrides),
  }),
});

/**
 * @internal
 */
export const UpdateApplicationResponseFilterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
  ...obj,
  ...(obj.application && { application: ApplicationFilterSensitiveLog(obj.application) }),
});

/**
 * @internal
 */
export const GetJobRunResponseFilterSensitiveLog = (obj: GetJobRunResponse): any => ({
  ...obj,
  ...(obj.jobRun && { jobRun: JobRunFilterSensitiveLog(obj.jobRun) }),
});
