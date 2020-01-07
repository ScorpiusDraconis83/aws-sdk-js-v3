import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ShieldClientResolvedConfig
} from "../ShieldClient";
import {
  DescribeEmergencyContactSettingsRequest,
  DescribeEmergencyContactSettingsResponse
} from "../models/index";
import {
  deserializeAws_json1_1DescribeEmergencyContactSettingsCommand,
  serializeAws_json1_1DescribeEmergencyContactSettingsCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeEmergencyContactSettingsCommandInput = DescribeEmergencyContactSettingsRequest;
export type DescribeEmergencyContactSettingsCommandOutput = DescribeEmergencyContactSettingsResponse;

export class DescribeEmergencyContactSettingsCommand extends $Command<
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEmergencyContactSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeEmergencyContactSettingsCommandInput,
    DescribeEmergencyContactSettingsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEmergencyContactSettingsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEmergencyContactSettingsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeEmergencyContactSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeEmergencyContactSettingsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
