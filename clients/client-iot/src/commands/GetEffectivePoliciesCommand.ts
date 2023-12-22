// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetEffectivePoliciesRequest, GetEffectivePoliciesResponse } from "../models/models_1";
import { de_GetEffectivePoliciesCommand, se_GetEffectivePoliciesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEffectivePoliciesCommand}.
 */
export interface GetEffectivePoliciesCommandInput extends GetEffectivePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetEffectivePoliciesCommand}.
 */
export interface GetEffectivePoliciesCommandOutput extends GetEffectivePoliciesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the IoT device gateway.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetEffectivePoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetEffectivePoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetEffectivePoliciesRequest
 *   principal: "STRING_VALUE",
 *   cognitoIdentityPoolId: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 * };
 * const command = new GetEffectivePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetEffectivePoliciesResponse
 * //   effectivePolicies: [ // EffectivePolicies
 * //     { // EffectivePolicy
 * //       policyName: "STRING_VALUE",
 * //       policyArn: "STRING_VALUE",
 * //       policyDocument: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEffectivePoliciesCommandInput - {@link GetEffectivePoliciesCommandInput}
 * @returns {@link GetEffectivePoliciesCommandOutput}
 * @see {@link GetEffectivePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class GetEffectivePoliciesCommand extends $Command
  .classBuilder<
    GetEffectivePoliciesCommandInput,
    GetEffectivePoliciesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetEffectivePolicies", {})
  .n("IoTClient", "GetEffectivePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_GetEffectivePoliciesCommand)
  .de(de_GetEffectivePoliciesCommand)
  .build() {}
