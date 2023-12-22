// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTypeRequest, GetTypeResponse } from "../models/models_0";
import { de_GetTypeCommand, se_GetTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTypeCommand}.
 */
export interface GetTypeCommandInput extends GetTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetTypeCommand}.
 */
export interface GetTypeCommandOutput extends GetTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a <code>Type</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetTypeRequest
 *   apiId: "STRING_VALUE", // required
 *   typeName: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 * };
 * const command = new GetTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetTypeResponse
 * //   type: { // Type
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     definition: "STRING_VALUE",
 * //     format: "SDL" || "JSON",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTypeCommandInput - {@link GetTypeCommandInput}
 * @returns {@link GetTypeCommandOutput}
 * @see {@link GetTypeCommandInput} for command's `input` shape.
 * @see {@link GetTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the
 *          field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can make your
 *          change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class GetTypeCommand extends $Command
  .classBuilder<
    GetTypeCommandInput,
    GetTypeCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "GetType", {})
  .n("AppSyncClient", "GetTypeCommand")
  .f(void 0, void 0)
  .ser(se_GetTypeCommand)
  .de(de_GetTypeCommand)
  .build() {}
