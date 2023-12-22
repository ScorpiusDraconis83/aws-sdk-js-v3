// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeApplicationAssociationsRequest, DescribeApplicationAssociationsResult } from "../models/models_0";
import {
  de_DescribeApplicationAssociationsCommand,
  se_DescribeApplicationAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationAssociationsCommand}.
 */
export interface DescribeApplicationAssociationsCommandInput extends DescribeApplicationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationAssociationsCommand}.
 */
export interface DescribeApplicationAssociationsCommandOutput
  extends DescribeApplicationAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the associations between the application and the specified associated resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeApplicationAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeApplicationAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeApplicationAssociationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ApplicationId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // ApplicationAssociatedResourceTypeList // required
 *     "WORKSPACE" || "BUNDLE" || "IMAGE",
 *   ],
 * };
 * const command = new DescribeApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationAssociationsResult
 * //   Associations: [ // ApplicationResourceAssociationList
 * //     { // ApplicationResourceAssociation
 * //       ApplicationId: "STRING_VALUE",
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "WORKSPACE" || "BUNDLE" || "IMAGE",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //       StateReason: { // AssociationStateReason
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationAssociationsCommandInput - {@link DescribeApplicationAssociationsCommandInput}
 * @returns {@link DescribeApplicationAssociationsCommandOutput}
 * @see {@link DescribeApplicationAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeApplicationAssociationsCommand extends $Command
  .classBuilder<
    DescribeApplicationAssociationsCommandInput,
    DescribeApplicationAssociationsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeApplicationAssociations", {})
  .n("WorkSpacesClient", "DescribeApplicationAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationAssociationsCommand)
  .de(de_DescribeApplicationAssociationsCommand)
  .build() {}
