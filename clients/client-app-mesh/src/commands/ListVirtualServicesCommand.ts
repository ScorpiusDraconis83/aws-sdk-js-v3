// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVirtualServicesInput, ListVirtualServicesOutput } from "../models/models_0";
import { de_ListVirtualServicesCommand, se_ListVirtualServicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualServicesCommand}.
 */
export interface ListVirtualServicesCommandInput extends ListVirtualServicesInput {}
/**
 * @public
 *
 * The output of {@link ListVirtualServicesCommand}.
 */
export interface ListVirtualServicesCommandOutput extends ListVirtualServicesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing virtual services in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualServicesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualServicesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // ListVirtualServicesInput
 *   meshName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new ListVirtualServicesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualServicesOutput
 * //   virtualServices: [ // VirtualServiceList // required
 * //     { // VirtualServiceRef
 * //       meshName: "STRING_VALUE", // required
 * //       virtualServiceName: "STRING_VALUE", // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualServicesCommandInput - {@link ListVirtualServicesCommandInput}
 * @returns {@link ListVirtualServicesCommandOutput}
 * @see {@link ListVirtualServicesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualServicesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 * @public
 */
export class ListVirtualServicesCommand extends $Command
  .classBuilder<
    ListVirtualServicesCommandInput,
    ListVirtualServicesCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppMesh", "ListVirtualServices", {})
  .n("AppMeshClient", "ListVirtualServicesCommand")
  .f(void 0, void 0)
  .ser(se_ListVirtualServicesCommand)
  .de(de_ListVirtualServicesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualServicesInput;
      output: ListVirtualServicesOutput;
    };
    sdk: {
      input: ListVirtualServicesCommandInput;
      output: ListVirtualServicesCommandOutput;
    };
  };
}
