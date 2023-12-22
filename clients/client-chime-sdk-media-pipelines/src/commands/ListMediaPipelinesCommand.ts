// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMediaPipelinesRequest, ListMediaPipelinesResponse } from "../models/models_0";
import { de_ListMediaPipelinesCommand, se_ListMediaPipelinesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMediaPipelinesCommand}.
 */
export interface ListMediaPipelinesCommandInput extends ListMediaPipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListMediaPipelinesCommand}.
 */
export interface ListMediaPipelinesCommandOutput extends ListMediaPipelinesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of media pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, ListMediaPipelinesCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, ListMediaPipelinesCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // ListMediaPipelinesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMediaPipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListMediaPipelinesResponse
 * //   MediaPipelines: [ // MediaPipelineList
 * //     { // MediaPipelineSummary
 * //       MediaPipelineId: "STRING_VALUE",
 * //       MediaPipelineArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMediaPipelinesCommandInput - {@link ListMediaPipelinesCommandInput}
 * @returns {@link ListMediaPipelinesCommandOutput}
 * @see {@link ListMediaPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListMediaPipelinesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 */
export class ListMediaPipelinesCommand extends $Command
  .classBuilder<
    ListMediaPipelinesCommandInput,
    ListMediaPipelinesCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKMediaPipelinesService", "ListMediaPipelines", {})
  .n("ChimeSDKMediaPipelinesClient", "ListMediaPipelinesCommand")
  .f(void 0, void 0)
  .ser(se_ListMediaPipelinesCommand)
  .de(de_ListMediaPipelinesCommand)
  .build() {}
