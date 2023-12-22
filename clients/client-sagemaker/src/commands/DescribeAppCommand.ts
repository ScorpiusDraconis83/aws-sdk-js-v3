// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppRequest, DescribeAppResponse } from "../models/models_2";
import { de_DescribeAppCommand, se_DescribeAppCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandInput extends DescribeAppRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppCommand}.
 */
export interface DescribeAppCommandOutput extends DescribeAppResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAppRequest
 *   DomainId: "STRING_VALUE", // required
 *   UserProfileName: "STRING_VALUE",
 *   SpaceName: "STRING_VALUE",
 *   AppType: "JupyterServer" || "KernelGateway" || "DetailedProfiler" || "TensorBoard" || "VSCode" || "Savitur" || "CodeEditor" || "JupyterLab" || "RStudioServerPro" || "RSession" || "RSessionGateway" || "Canvas" || "DatasetManager" || "SageMakerLite" || "Local", // required
 *   AppName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppResponse
 * //   AppArn: "STRING_VALUE",
 * //   AppType: "JupyterServer" || "KernelGateway" || "DetailedProfiler" || "TensorBoard" || "VSCode" || "Savitur" || "CodeEditor" || "JupyterLab" || "RStudioServerPro" || "RSession" || "RSessionGateway" || "Canvas" || "DatasetManager" || "SageMakerLite" || "Local",
 * //   AppName: "STRING_VALUE",
 * //   DomainId: "STRING_VALUE",
 * //   UserProfileName: "STRING_VALUE",
 * //   SpaceName: "STRING_VALUE",
 * //   Status: "Deleted" || "Deleting" || "Failed" || "InService" || "Pending",
 * //   LastHealthCheckTimestamp: new Date("TIMESTAMP"),
 * //   LastUserActivityTimestamp: new Date("TIMESTAMP"),
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * //   ResourceSpec: { // ResourceSpec
 * //     SageMakerImageArn: "STRING_VALUE",
 * //     SageMakerImageVersionArn: "STRING_VALUE",
 * //     SageMakerImageVersionAlias: "STRING_VALUE",
 * //     InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge",
 * //     LifecycleConfigArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppCommandInput - {@link DescribeAppCommandInput}
 * @returns {@link DescribeAppCommandOutput}
 * @see {@link DescribeAppCommandInput} for command's `input` shape.
 * @see {@link DescribeAppCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeAppCommand extends $Command
  .classBuilder<
    DescribeAppCommandInput,
    DescribeAppCommandOutput,
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
  .s("SageMaker", "DescribeApp", {})
  .n("SageMakerClient", "DescribeAppCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAppCommand)
  .de(de_DescribeAppCommand)
  .build() {}
