// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRemediationExceptionsRequest, PutRemediationExceptionsResponse } from "../models/models_1";
import { de_PutRemediationExceptionsCommand, se_PutRemediationExceptionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRemediationExceptionsCommand}.
 */
export interface PutRemediationExceptionsCommandInput extends PutRemediationExceptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutRemediationExceptionsCommand}.
 */
export interface PutRemediationExceptionsCommandOutput extends PutRemediationExceptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>A remediation exception is when a specified resource is no longer considered for auto-remediation.
 * 			This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p>
 *          <note>
 *             <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource.
 * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *          </note>
 *          <note>
 *             <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until
 * 			the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>.
 * 			Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation.
 * 			Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p>
 *          </note>
 *          <note>
 *             <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>.
 * 			If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated.
 * 			For more information on the conditions that initiate the possible Config evaluation results,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config  Rules</a> in the <i>Config Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRemediationExceptionsRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceKeys: [ // RemediationExceptionResourceKeys // required
 *     { // RemediationExceptionResourceKey
 *       ResourceType: "STRING_VALUE",
 *       ResourceId: "STRING_VALUE",
 *     },
 *   ],
 *   Message: "STRING_VALUE",
 *   ExpirationTime: new Date("TIMESTAMP"),
 * };
 * const command = new PutRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * // { // PutRemediationExceptionsResponse
 * //   FailedBatches: [ // FailedRemediationExceptionBatches
 * //     { // FailedRemediationExceptionBatch
 * //       FailureMessage: "STRING_VALUE",
 * //       FailedItems: [ // RemediationExceptions
 * //         { // RemediationException
 * //           ConfigRuleName: "STRING_VALUE", // required
 * //           ResourceType: "STRING_VALUE", // required
 * //           ResourceId: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE",
 * //           ExpirationTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutRemediationExceptionsCommandInput - {@link PutRemediationExceptionsCommandInput}
 * @returns {@link PutRemediationExceptionsCommandOutput}
 * @see {@link PutRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class PutRemediationExceptionsCommand extends $Command
  .classBuilder<
    PutRemediationExceptionsCommandInput,
    PutRemediationExceptionsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "PutRemediationExceptions", {})
  .n("ConfigServiceClient", "PutRemediationExceptionsCommand")
  .f(void 0, void 0)
  .ser(se_PutRemediationExceptionsCommand)
  .de(de_PutRemediationExceptionsCommand)
  .build() {}
