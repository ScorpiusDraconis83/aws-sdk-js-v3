// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyImageRequest, CopyImageResult } from "../models/models_0";
import { de_CopyImageCommand, se_CopyImageCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyImageCommand}.
 */
export interface CopyImageCommandInput extends CopyImageRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageCommand}.
 */
export interface CopyImageCommandOutput extends CopyImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Initiates the copy of an AMI. You can copy an AMI from one Region to another, or from a
 *       Region to an Outpost. You can't copy an AMI from an Outpost to a Region, from one Outpost
 *       to another, or within the same Outpost. To copy an AMI to another partition, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p>
 *          <p>To copy an AMI from one Region to another, specify the source Region using the
 *      		<b>SourceRegion</b> parameter, and specify the
 *      		destination Region using its endpoint. Copies of encrypted backing snapshots for
 *      		the AMI are encrypted. Copies of unencrypted backing snapshots remain unencrypted,
 *      		unless you set <code>Encrypted</code> during the copy operation. You cannot
 *      		create an unencrypted copy of an encrypted backing snapshot.</p>
 *          <p>To copy an AMI from a Region to an Outpost, specify the source Region using the
 *    		<b>SourceRegion</b> parameter, and specify the
 *    		ARN of the destination Outpost using <b>DestinationOutpostArn</b>.
 *    		Backing snapshots copied to an Outpost are encrypted by default using the default
 *    		encryption key for the Region, or a different key that you specify in the request using
 *    		<b>KmsKeyId</b>. Outposts do not support unencrypted
 *    		snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami">
 *    			Amazon EBS local snapshots on Outposts</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copy an AMI</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CopyImageRequest
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Encrypted: true || false,
 *   KmsKeyId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   SourceImageId: "STRING_VALUE", // required
 *   SourceRegion: "STRING_VALUE", // required
 *   DestinationOutpostArn: "STRING_VALUE",
 *   DryRun: true || false,
 *   CopyImageTags: true || false,
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyImageCommandInput - {@link CopyImageCommandInput}
 * @returns {@link CopyImageCommandOutput}
 * @see {@link CopyImageCommandInput} for command's `input` shape.
 * @see {@link CopyImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To copy an AMI to another region
 * ```javascript
 * // This example copies the specified AMI from the us-east-1 region to the current region.
 * const input = {
 *   "Description": "",
 *   "Name": "My server",
 *   "SourceImageId": "ami-5731123e",
 *   "SourceRegion": "us-east-1"
 * };
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ImageId": "ami-438bea42"
 * }
 * *\/
 * // example id: to-copy-an-ami-to-another-region-1529022820832
 * ```
 *
 */
export class CopyImageCommand extends $Command
  .classBuilder<
    CopyImageCommandInput,
    CopyImageCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CopyImage", {})
  .n("EC2Client", "CopyImageCommand")
  .f(void 0, void 0)
  .ser(se_CopyImageCommand)
  .de(de_CopyImageCommand)
  .build() {}
