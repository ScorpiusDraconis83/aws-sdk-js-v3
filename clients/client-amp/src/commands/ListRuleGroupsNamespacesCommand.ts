// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRuleGroupsNamespacesRequest, ListRuleGroupsNamespacesResponse } from "../models/models_0";
import { de_ListRuleGroupsNamespacesCommand, se_ListRuleGroupsNamespacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRuleGroupsNamespacesCommand}.
 */
export interface ListRuleGroupsNamespacesCommandInput extends ListRuleGroupsNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleGroupsNamespacesCommand}.
 */
export interface ListRuleGroupsNamespacesCommandOutput extends ListRuleGroupsNamespacesResponse, __MetadataBearer {}

/**
 * @public
 * Lists rule groups namespaces.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListRuleGroupsNamespacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListRuleGroupsNamespacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // ListRuleGroupsNamespacesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRuleGroupsNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleGroupsNamespacesResponse
 * //   ruleGroupsNamespaces: [ // RuleGroupsNamespaceSummaryList // required
 * //     { // RuleGroupsNamespaceSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: { // RuleGroupsNamespaceStatus
 * //         statusCode: "STRING_VALUE", // required
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleGroupsNamespacesCommandInput - {@link ListRuleGroupsNamespacesCommandInput}
 * @returns {@link ListRuleGroupsNamespacesCommandOutput}
 * @see {@link ListRuleGroupsNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsNamespacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class ListRuleGroupsNamespacesCommand extends $Command
  .classBuilder<
    ListRuleGroupsNamespacesCommandInput,
    ListRuleGroupsNamespacesCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "ListRuleGroupsNamespaces", {})
  .n("AmpClient", "ListRuleGroupsNamespacesCommand")
  .f(void 0, void 0)
  .ser(se_ListRuleGroupsNamespacesCommand)
  .de(de_ListRuleGroupsNamespacesCommand)
  .build() {}
