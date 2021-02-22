/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.OptionalAuthTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SetUtils;

/**
 * Adds all built-in runtime client plugins to clients.
 */
public class AddBuiltinPlugins implements TypeScriptIntegration {
    private static final Set<String> ROUTE_53_ID_MEMBERS = SetUtils.of("DelegationSetId", "HostedZoneId", "Id");

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        // Note that order is significant because configurations might
        // rely on previously resolved values.
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Region", HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Endpoints", HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_CONFIG)
                        .servicePredicate((m, s) -> !isAllOptionalAuthOperation(m, s))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_MIDDLEWARE)
                        // See operationUsesAwsAuth() below for AwsAuth Middleware customizations.
                        .servicePredicate(
                            (m, s) -> !testServiceId(s, "STS") && !hasOptionalAuthOperation(m, s)
                        ).build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.MIDDLEWARE_RETRY.dependency, "Retry")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.MIDDLEWARE_CONTENT_LENGTH.dependency, "ContentLength",
                                         HAS_MIDDLEWARE)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ACCEPT_HEADER.dependency, "AcceptHeader",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "API Gateway"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.GLACIER_MIDDLEWARE.dependency,
                                         "Glacier", HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "Glacier"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.EC2_MIDDLEWARE.dependency,
                                         "CopySnapshotPresignedUrl", HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("CopySnapshot")
                                            && testServiceId(s, "EC2"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MACHINELEARNING_MIDDLEWARE.dependency, "PredictEndpoint",
                                HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("Predict")
                                            && testServiceId(s, "Machine Learning"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency,
                                         "ChangeResourceRecordSets", HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("ChangeResourceRecordSets")
                                            && testServiceId(s, "Route 53"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency, "IdNormalizer",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> testInputContainsMember(m, o, ROUTE_53_ID_MEMBERS)
                                            && testServiceId(s, "Route 53"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "SendMessage",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("SendMessage")
                                            && testServiceId(s, "SQS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "SendMessageBatch",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("SendMessageBatch")
                                            && testServiceId(s, "SQS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "ReceiveMessage",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("ReceiveMessage")
                                            && testServiceId(s, "SQS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_HOST_HEADER.dependency, "HostHeader")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_MIDDLEWARE)
                        .operationPredicate(AddBuiltinPlugins::operationUsesAwsAuth)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_LOGGER.dependency, "Logger", HAS_MIDDLEWARE)
                        .build()
        );
    }

    private static boolean testInputContainsMember(
            Model model,
            OperationShape operationShape,
            Set<String> expectedMemberNames
    ) {
        OperationIndex operationIndex = model.getKnowledge(OperationIndex.class);
        return operationIndex.getInput(operationShape)
                .filter(input -> input.getMemberNames().stream().anyMatch(expectedMemberNames::contains))
                .isPresent();
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }

    private static boolean operationUsesAwsAuth(Model model, ServiceShape service, OperationShape operation) {
        // STS doesn't need auth for AssumeRoleWithWebIdentity, AssumeRoleWithSAML.
        // Remove when optionalAuth model update is published in 0533102932.
        if (testServiceId(service, "STS")) {
            Boolean isUnsignedCommand = SetUtils
                    .of("AssumeRoleWithWebIdentity", "AssumeRoleWithSAML")
                    .contains(operation.getId().getName());
            return !isUnsignedCommand;
        }

        // optionalAuth trait doesn't require authentication.
        if (hasOptionalAuthOperation(model, service)) {
            return !operation.getTrait(OptionalAuthTrait.class).isPresent();
        }
        return false;
    }

    private static boolean hasOptionalAuthOperation(Model model, ServiceShape service) {
        TopDownIndex topDownIndex = TopDownIndex.of(model);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        for (OperationShape operation : operations) {
            if (operation.getTrait(OptionalAuthTrait.class).isPresent()) {
                return true;
            }
        }
        return false;
    }

    private static boolean isAllOptionalAuthOperation(Model model, ServiceShape service) {
        TopDownIndex topDownIndex = TopDownIndex.of(model);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        for (OperationShape operation : operations) {
            if (!operation.getTrait(OptionalAuthTrait.class).isPresent()) {
                return false;
            }
        }
        return true;
    }
}
