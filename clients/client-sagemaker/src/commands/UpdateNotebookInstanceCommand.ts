// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNotebookInstanceInput, UpdateNotebookInstanceOutput } from "../models/models_4";
import { de_UpdateNotebookInstanceCommand, se_UpdateNotebookInstanceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNotebookInstanceCommand}.
 */
export interface UpdateNotebookInstanceCommandInput extends UpdateNotebookInstanceInput {}
/**
 * @public
 *
 * The output of {@link UpdateNotebookInstanceCommand}.
 */
export interface UpdateNotebookInstanceCommandOutput extends UpdateNotebookInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a notebook instance. NotebookInstance updates include upgrading or
 *             downgrading the ML compute instance used for your notebook instance to accommodate
 *             changes in your workload requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateNotebookInstanceInput
 *   NotebookInstanceName: "STRING_VALUE", // required
 *   InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 *   RoleArn: "STRING_VALUE",
 *   LifecycleConfigName: "STRING_VALUE",
 *   DisassociateLifecycleConfig: true || false,
 *   VolumeSizeInGB: Number("int"),
 *   DefaultCodeRepository: "STRING_VALUE",
 *   AdditionalCodeRepositories: [ // AdditionalCodeRepositoryNamesOrUrls
 *     "STRING_VALUE",
 *   ],
 *   AcceleratorTypes: [ // NotebookInstanceAcceleratorTypes
 *     "ml.eia1.medium" || "ml.eia1.large" || "ml.eia1.xlarge" || "ml.eia2.medium" || "ml.eia2.large" || "ml.eia2.xlarge",
 *   ],
 *   DisassociateAcceleratorTypes: true || false,
 *   DisassociateDefaultCodeRepository: true || false,
 *   DisassociateAdditionalCodeRepositories: true || false,
 *   RootAccess: "Enabled" || "Disabled",
 *   InstanceMetadataServiceConfiguration: { // InstanceMetadataServiceConfiguration
 *     MinimumInstanceMetadataServiceVersion: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateNotebookInstanceCommandInput - {@link UpdateNotebookInstanceCommandInput}
 * @returns {@link UpdateNotebookInstanceCommandOutput}
 * @see {@link UpdateNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateNotebookInstanceCommand extends $Command
  .classBuilder<
    UpdateNotebookInstanceCommandInput,
    UpdateNotebookInstanceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateNotebookInstance", {})
  .n("SageMakerClient", "UpdateNotebookInstanceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateNotebookInstanceCommand)
  .de(de_UpdateNotebookInstanceCommand)
  .build() {}
