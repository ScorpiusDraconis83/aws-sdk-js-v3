// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAnnotationStoreRequest, CreateAnnotationStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateAnnotationStoreCommand, se_CreateAnnotationStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAnnotationStoreCommand}.
 */
export interface CreateAnnotationStoreCommandInput extends CreateAnnotationStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnnotationStoreCommand}.
 */
export interface CreateAnnotationStoreCommandOutput extends CreateAnnotationStoreResponse, __MetadataBearer {}

/**
 * <p>Creates an annotation store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateAnnotationStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateAnnotationStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateAnnotationStoreRequest
 *   reference: { // ReferenceItem Union: only one key present
 *     referenceArn: "STRING_VALUE",
 *   },
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   versionName: "STRING_VALUE",
 *   sseConfig: { // SseConfig
 *     type: "STRING_VALUE", // required
 *     keyArn: "STRING_VALUE",
 *   },
 *   storeFormat: "STRING_VALUE", // required
 *   storeOptions: { // StoreOptions Union: only one key present
 *     tsvStoreOptions: { // TsvStoreOptions
 *       annotationType: "STRING_VALUE",
 *       formatToHeader: { // FormatToHeader
 *         "<keys>": "STRING_VALUE",
 *       },
 *       schema: [ // Schema
 *         { // SchemaItem
 *           "<keys>": "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateAnnotationStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnnotationStoreResponse
 * //   id: "STRING_VALUE", // required
 * //   reference: { // ReferenceItem Union: only one key present
 * //     referenceArn: "STRING_VALUE",
 * //   },
 * //   storeFormat: "STRING_VALUE",
 * //   storeOptions: { // StoreOptions Union: only one key present
 * //     tsvStoreOptions: { // TsvStoreOptions
 * //       annotationType: "STRING_VALUE",
 * //       formatToHeader: { // FormatToHeader
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       schema: [ // Schema
 * //         { // SchemaItem
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   versionName: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAnnotationStoreCommandInput - {@link CreateAnnotationStoreCommandInput}
 * @returns {@link CreateAnnotationStoreCommandOutput}
 * @see {@link CreateAnnotationStoreCommandInput} for command's `input` shape.
 * @see {@link CreateAnnotationStoreCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateAnnotationStoreCommand extends $Command
  .classBuilder<
    CreateAnnotationStoreCommandInput,
    CreateAnnotationStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CreateAnnotationStore", {})
  .n("OmicsClient", "CreateAnnotationStoreCommand")
  .f(void 0, void 0)
  .ser(se_CreateAnnotationStoreCommand)
  .de(de_CreateAnnotationStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnnotationStoreRequest;
      output: CreateAnnotationStoreResponse;
    };
    sdk: {
      input: CreateAnnotationStoreCommandInput;
      output: CreateAnnotationStoreCommandOutput;
    };
  };
}
