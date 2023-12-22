// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { DeleteSchemaMappingInput, DeleteSchemaMappingOutput } from "../models/models_0";
import { de_DeleteSchemaMappingCommand, se_DeleteSchemaMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaMappingCommand}.
 */
export interface DeleteSchemaMappingCommandInput extends DeleteSchemaMappingInput {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaMappingCommand}.
 */
export interface DeleteSchemaMappingCommandOutput extends DeleteSchemaMappingOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the <code>SchemaMapping</code> with a given name. This operation will succeed
 *          even if a schema with the given name does not exist. This operation will fail if there is a
 *             <code>MatchingWorkflow</code> object that references the <code>SchemaMapping</code> in
 *          the workflow's <code>InputSourceConfig</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteSchemaMappingCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteSchemaMappingCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteSchemaMappingInput
 *   schemaName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaMappingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSchemaMappingOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteSchemaMappingCommandInput - {@link DeleteSchemaMappingCommandInput}
 * @returns {@link DeleteSchemaMappingCommandOutput}
 * @see {@link DeleteSchemaMappingCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaMappingCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource. Example: Workflow already exists, Schema already exists, Workflow is currently
 *          running, etc. <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code:
 *          429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. <code>HTTP
 *             Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 */
export class DeleteSchemaMappingCommand extends $Command
  .classBuilder<
    DeleteSchemaMappingCommandInput,
    DeleteSchemaMappingCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "DeleteSchemaMapping", {})
  .n("EntityResolutionClient", "DeleteSchemaMappingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSchemaMappingCommand)
  .de(de_DeleteSchemaMappingCommand)
  .build() {}
