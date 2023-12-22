// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAdmChannelRequest, DeleteAdmChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_DeleteAdmChannelCommand, se_DeleteAdmChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAdmChannelCommand}.
 */
export interface DeleteAdmChannelCommandInput extends DeleteAdmChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAdmChannelCommand}.
 */
export interface DeleteAdmChannelCommandOutput extends DeleteAdmChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Disables the ADM channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // DeleteAdmChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAdmChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAdmChannelResponse
 * //   ADMChannelResponse: { // ADMChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAdmChannelCommandInput - {@link DeleteAdmChannelCommandInput}
 * @returns {@link DeleteAdmChannelCommandOutput}
 * @see {@link DeleteAdmChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteAdmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class DeleteAdmChannelCommand extends $Command
  .classBuilder<
    DeleteAdmChannelCommandInput,
    DeleteAdmChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "DeleteAdmChannel", {})
  .n("PinpointClient", "DeleteAdmChannelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAdmChannelCommand)
  .de(de_DeleteAdmChannelCommand)
  .build() {}
