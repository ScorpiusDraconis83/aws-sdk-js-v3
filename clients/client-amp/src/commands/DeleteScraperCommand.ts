// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScraperRequest, DeleteScraperResponse } from "../models/models_0";
import { de_DeleteScraperCommand, se_DeleteScraperCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteScraperCommand}.
 */
export interface DeleteScraperCommandInput extends DeleteScraperRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScraperCommand}.
 */
export interface DeleteScraperCommandOutput extends DeleteScraperResponse, __MetadataBearer {}

/**
 * @public
 * Deletes a scraper.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // DeleteScraperRequest
 *   scraperId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteScraperCommand(input);
 * const response = await client.send(command);
 * // { // DeleteScraperResponse
 * //   scraperId: "STRING_VALUE", // required
 * //   status: { // ScraperStatus
 * //     statusCode: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteScraperCommandInput - {@link DeleteScraperCommandInput}
 * @returns {@link DeleteScraperCommandOutput}
 * @see {@link DeleteScraperCommandInput} for command's `input` shape.
 * @see {@link DeleteScraperCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
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
export class DeleteScraperCommand extends $Command
  .classBuilder<
    DeleteScraperCommandInput,
    DeleteScraperCommandOutput,
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
  .s("AmazonPrometheusService", "DeleteScraper", {})
  .n("AmpClient", "DeleteScraperCommand")
  .f(void 0, void 0)
  .ser(se_DeleteScraperCommand)
  .de(de_DeleteScraperCommand)
  .build() {}
