// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateWorkflowCommand, se_CreateWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkflowCommand}.
 */
export interface CreateWorkflowCommandInput extends CreateWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowCommand}.
 */
export interface CreateWorkflowCommandOutput extends CreateWorkflowResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateWorkflowCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateWorkflowCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateWorkflowRequest
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   engine: "STRING_VALUE",
 *   definitionZip: "BLOB_VALUE",
 *   definitionUri: "STRING_VALUE",
 *   main: "STRING_VALUE",
 *   parameterTemplate: { // WorkflowParameterTemplate
 *     "<keys>": { // WorkflowParameter
 *       description: "STRING_VALUE",
 *       optional: true || false,
 *     },
 *   },
 *   storageCapacity: Number("int"),
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestId: "STRING_VALUE", // required
 *   accelerators: "STRING_VALUE",
 * };
 * const command = new CreateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorkflowCommandInput - {@link CreateWorkflowCommandInput}
 * @returns {@link CreateWorkflowCommandOutput}
 * @see {@link CreateWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 */
export class CreateWorkflowCommand extends $Command
  .classBuilder<
    CreateWorkflowCommandInput,
    CreateWorkflowCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CreateWorkflow", {})
  .n("OmicsClient", "CreateWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkflowCommand)
  .de(de_CreateWorkflowCommand)
  .build() {}
