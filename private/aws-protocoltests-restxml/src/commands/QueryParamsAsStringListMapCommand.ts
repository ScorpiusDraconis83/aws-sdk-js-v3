// smithy-typescript generated code
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { QueryParamsAsStringListMapInput } from "../models/models_0";
import { de_QueryParamsAsStringListMapCommand, se_QueryParamsAsStringListMapCommand } from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryParamsAsStringListMapCommand}.
 */
export interface QueryParamsAsStringListMapCommandInput extends QueryParamsAsStringListMapInput {}
/**
 * @public
 *
 * The output of {@link QueryParamsAsStringListMapCommand}.
 */
export interface QueryParamsAsStringListMapCommandOutput extends __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, QueryParamsAsStringListMapCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, QueryParamsAsStringListMapCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const input = { // QueryParamsAsStringListMapInput
 *   qux: "STRING_VALUE",
 *   foo: { // StringListMap
 *     "<keys>": [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new QueryParamsAsStringListMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param QueryParamsAsStringListMapCommandInput - {@link QueryParamsAsStringListMapCommandInput}
 * @returns {@link QueryParamsAsStringListMapCommandOutput}
 * @see {@link QueryParamsAsStringListMapCommandInput} for command's `input` shape.
 * @see {@link QueryParamsAsStringListMapCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 * @throws {@link RestXmlProtocolServiceException}
 * <p>Base exception class for all service exceptions from RestXmlProtocol service.</p>
 *
 */
export class QueryParamsAsStringListMapCommand extends $Command
  .classBuilder<
    QueryParamsAsStringListMapCommandInput,
    QueryParamsAsStringListMapCommandOutput,
    RestXmlProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .m(function (this: any, Command: any, cs: any, config: RestXmlProtocolClientResolvedConfig, o: any) {
    return [getSerdePlugin(config, this.serialize, this.deserialize)];
  })
  .s("RestXml", "QueryParamsAsStringListMap", {})
  .n("RestXmlProtocolClient", "QueryParamsAsStringListMapCommand")
  .f(void 0, void 0)
  .ser(se_QueryParamsAsStringListMapCommand)
  .de(de_QueryParamsAsStringListMapCommand)
  .build() {}
