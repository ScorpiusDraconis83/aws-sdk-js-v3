// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeSourceServersRequest,
  DescribeSourceServersResponse,
  DescribeSourceServersResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeSourceServersCommand, se_DescribeSourceServersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSourceServersCommand}.
 */
export interface DescribeSourceServersCommandInput extends DescribeSourceServersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSourceServersCommand}.
 */
export interface DescribeSourceServersCommandOutput extends DescribeSourceServersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all SourceServers or multiple SourceServers by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeSourceServersRequest
 *   filters: { // DescribeSourceServersRequestFilters
 *     sourceServerIDs: [ // DescribeSourceServersRequestFiltersIDs
 *       "STRING_VALUE",
 *     ],
 *     isArchived: true || false,
 *     replicationTypes: [ // ReplicationTypes
 *       "STRING_VALUE",
 *     ],
 *     lifeCycleStates: [ // LifeCycleStates
 *       "STRING_VALUE",
 *     ],
 *     applicationIDs: [ // DescribeSourceServersRequestApplicationIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DescribeSourceServersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSourceServersResponse
 * //   items: [ // SourceServersList
 * //     { // SourceServer
 * //       sourceServerID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       isArchived: true || false,
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       launchedInstance: { // LaunchedInstance
 * //         ec2InstanceID: "STRING_VALUE",
 * //         jobID: "STRING_VALUE",
 * //         firstBoot: "STRING_VALUE",
 * //       },
 * //       dataReplicationInfo: { // DataReplicationInfo
 * //         lagDuration: "STRING_VALUE",
 * //         etaDateTime: "STRING_VALUE",
 * //         replicatedDisks: [ // DataReplicationInfoReplicatedDisks
 * //           { // DataReplicationInfoReplicatedDisk
 * //             deviceName: "STRING_VALUE",
 * //             totalStorageBytes: Number("long"),
 * //             replicatedStorageBytes: Number("long"),
 * //             rescannedStorageBytes: Number("long"),
 * //             backloggedStorageBytes: Number("long"),
 * //           },
 * //         ],
 * //         dataReplicationState: "STRING_VALUE",
 * //         dataReplicationInitiation: { // DataReplicationInitiation
 * //           startDateTime: "STRING_VALUE",
 * //           nextAttemptDateTime: "STRING_VALUE",
 * //           steps: [ // DataReplicationInitiationSteps
 * //             { // DataReplicationInitiationStep
 * //               name: "STRING_VALUE",
 * //               status: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         dataReplicationError: { // DataReplicationError
 * //           error: "STRING_VALUE",
 * //           rawError: "STRING_VALUE",
 * //         },
 * //         lastSnapshotDateTime: "STRING_VALUE",
 * //       },
 * //       lifeCycle: { // LifeCycle
 * //         addedToServiceDateTime: "STRING_VALUE",
 * //         firstByteDateTime: "STRING_VALUE",
 * //         elapsedReplicationDuration: "STRING_VALUE",
 * //         lastSeenByServiceDateTime: "STRING_VALUE",
 * //         lastTest: { // LifeCycleLastTest
 * //           initiated: { // LifeCycleLastTestInitiated
 * //             apiCallDateTime: "STRING_VALUE",
 * //             jobID: "STRING_VALUE",
 * //           },
 * //           reverted: { // LifeCycleLastTestReverted
 * //             apiCallDateTime: "STRING_VALUE",
 * //           },
 * //           finalized: { // LifeCycleLastTestFinalized
 * //             apiCallDateTime: "STRING_VALUE",
 * //           },
 * //         },
 * //         lastCutover: { // LifeCycleLastCutover
 * //           initiated: { // LifeCycleLastCutoverInitiated
 * //             apiCallDateTime: "STRING_VALUE",
 * //             jobID: "STRING_VALUE",
 * //           },
 * //           reverted: { // LifeCycleLastCutoverReverted
 * //             apiCallDateTime: "STRING_VALUE",
 * //           },
 * //           finalized: { // LifeCycleLastCutoverFinalized
 * //             apiCallDateTime: "STRING_VALUE",
 * //           },
 * //         },
 * //         state: "STRING_VALUE",
 * //       },
 * //       sourceProperties: { // SourceProperties
 * //         lastUpdatedDateTime: "STRING_VALUE",
 * //         recommendedInstanceType: "STRING_VALUE",
 * //         identificationHints: { // IdentificationHints
 * //           fqdn: "STRING_VALUE",
 * //           hostname: "STRING_VALUE",
 * //           vmWareUuid: "STRING_VALUE",
 * //           awsInstanceID: "STRING_VALUE",
 * //           vmPath: "STRING_VALUE",
 * //         },
 * //         networkInterfaces: [ // NetworkInterfaces
 * //           { // NetworkInterface
 * //             macAddress: "STRING_VALUE",
 * //             ips: [ // IPsList
 * //               "STRING_VALUE",
 * //             ],
 * //             isPrimary: true || false,
 * //           },
 * //         ],
 * //         disks: [ // Disks
 * //           { // Disk
 * //             deviceName: "STRING_VALUE",
 * //             bytes: Number("long"),
 * //           },
 * //         ],
 * //         cpus: [ // Cpus
 * //           { // CPU
 * //             cores: Number("long"),
 * //             modelName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ramBytes: Number("long"),
 * //         os: { // OS
 * //           fullString: "STRING_VALUE",
 * //         },
 * //       },
 * //       replicationType: "STRING_VALUE",
 * //       vcenterClientID: "STRING_VALUE",
 * //       applicationID: "STRING_VALUE",
 * //       userProvidedID: "STRING_VALUE",
 * //       fqdnForActionFramework: "STRING_VALUE",
 * //       connectorAction: { // SourceServerConnectorAction
 * //         credentialsSecretArn: "STRING_VALUE",
 * //         connectorArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSourceServersCommandInput - {@link DescribeSourceServersCommandInput}
 * @returns {@link DescribeSourceServersCommandOutput}
 * @see {@link DescribeSourceServersCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceServersCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class DescribeSourceServersCommand extends $Command
  .classBuilder<
    DescribeSourceServersCommandInput,
    DescribeSourceServersCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "DescribeSourceServers", {})
  .n("MgnClient", "DescribeSourceServersCommand")
  .f(void 0, DescribeSourceServersResponseFilterSensitiveLog)
  .ser(se_DescribeSourceServersCommand)
  .de(de_DescribeSourceServersCommand)
  .build() {}
