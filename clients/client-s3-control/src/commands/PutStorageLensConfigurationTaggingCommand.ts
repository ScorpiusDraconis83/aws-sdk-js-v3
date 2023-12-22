// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutStorageLensConfigurationTaggingRequest,
  PutStorageLensConfigurationTaggingResult,
} from "../models/models_1";
import {
  de_PutStorageLensConfigurationTaggingCommand,
  se_PutStorageLensConfigurationTaggingCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutStorageLensConfigurationTaggingCommand}.
 */
export interface PutStorageLensConfigurationTaggingCommandInput extends PutStorageLensConfigurationTaggingRequest {}
/**
 * @public
 *
 * The output of {@link PutStorageLensConfigurationTaggingCommand}.
 */
export interface PutStorageLensConfigurationTaggingCommandOutput
  extends PutStorageLensConfigurationTaggingResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Put or replace tags on an existing Amazon S3 Storage Lens configuration. For more information
 *          about S3 Storage Lens, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html">Assessing your storage activity and usage with Amazon S3 Storage Lens </a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <note>
 *             <p>To use this action, you must have permission to perform the
 *                <code>s3:PutStorageLensConfigurationTagging</code> action. For more information, see
 *                <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html">Setting permissions to
 *                use Amazon S3 Storage Lens</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // PutStorageLensConfigurationTaggingRequest
 *   ConfigId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 *   Tags: [ // StorageLensTags // required
 *     { // StorageLensTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutStorageLensConfigurationTaggingCommandInput - {@link PutStorageLensConfigurationTaggingCommandInput}
 * @returns {@link PutStorageLensConfigurationTaggingCommandOutput}
 * @see {@link PutStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link PutStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 */
export class PutStorageLensConfigurationTaggingCommand extends $Command
  .classBuilder<
    PutStorageLensConfigurationTaggingCommandInput,
    PutStorageLensConfigurationTaggingCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutStorageLensConfigurationTagging", {})
  .n("S3ControlClient", "PutStorageLensConfigurationTaggingCommand")
  .f(void 0, void 0)
  .ser(se_PutStorageLensConfigurationTaggingCommand)
  .de(de_PutStorageLensConfigurationTaggingCommand)
  .build() {}
