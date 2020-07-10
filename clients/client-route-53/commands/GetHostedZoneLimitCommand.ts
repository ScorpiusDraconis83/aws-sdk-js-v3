import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/index";
import {
  deserializeAws_restXmlGetHostedZoneLimitCommand,
  serializeAws_restXmlGetHostedZoneLimitCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetHostedZoneLimitCommandInput = GetHostedZoneLimitRequest;
export type GetHostedZoneLimitCommandOutput = GetHostedZoneLimitResponse & __MetadataBearer;

export class GetHostedZoneLimitCommand extends $Command<
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostedZoneLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostedZoneLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHostedZoneLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostedZoneLimitCommandOutput> {
    return deserializeAws_restXmlGetHostedZoneLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
