// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetUpgradeStatusRequest, GetUpgradeStatusResponse } from "../models/models_0";
import { de_GetUpgradeStatusCommand, se_GetUpgradeStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUpgradeStatusCommand}.
 */
export interface GetUpgradeStatusCommandInput extends GetUpgradeStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetUpgradeStatusCommand}.
 */
export interface GetUpgradeStatusCommandOutput extends GetUpgradeStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetUpgradeStatusCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetUpgradeStatusCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // GetUpgradeStatusRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetUpgradeStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetUpgradeStatusResponse
 * //   UpgradeStep: "PRE_UPGRADE_CHECK" || "SNAPSHOT" || "UPGRADE",
 * //   StepStatus: "IN_PROGRESS" || "SUCCEEDED" || "SUCCEEDED_WITH_ISSUES" || "FAILED",
 * //   UpgradeName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUpgradeStatusCommandInput - {@link GetUpgradeStatusCommandInput}
 * @returns {@link GetUpgradeStatusCommandOutput}
 * @see {@link GetUpgradeStatusCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 * @public
 */
export class GetUpgradeStatusCommand extends $Command
  .classBuilder<
    GetUpgradeStatusCommandInput,
    GetUpgradeStatusCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "GetUpgradeStatus", {})
  .n("ElasticsearchServiceClient", "GetUpgradeStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetUpgradeStatusCommand)
  .de(de_GetUpgradeStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUpgradeStatusRequest;
      output: GetUpgradeStatusResponse;
    };
    sdk: {
      input: GetUpgradeStatusCommandInput;
      output: GetUpgradeStatusCommandOutput;
    };
  };
}
