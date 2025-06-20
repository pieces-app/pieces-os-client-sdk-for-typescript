/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ModelContextProtocolSchemaVersions,
} from '../models/index';
import {
    ModelContextProtocolSchemaVersionsFromJSON,
    ModelContextProtocolSchemaVersionsToJSON,
} from '../models/index';

export interface ModelContextProtocolMessagesRequest {
    schemaVersion: string;
}

export interface ModelContextProtocolServerSentEventsRequest {
    schemaVersion: string;
}

/**
 * 
 */
export class ModelContextProtocolApi extends runtime.BaseAPI {

    /**
     * depending on the schema version, for 2024-11-05: this is use to take in the requests and the response will be sent via the SSE endpoint for 2025-03-26: This will establish the connection, and accept and return events via this endpoint  NOTE: these endpoint are just for DOCUMENTATION!!! do not use(generating will fail because the incoming body is dynamic to support different schema versions)
     * /model_context_protocol/{schema_version}/messages [POST]
     */
    async modelContextProtocolMessagesRaw(requestParameters: ModelContextProtocolMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['schemaVersion'] == null) {
            throw new runtime.RequiredError(
                'schemaVersion',
                'Required parameter "schemaVersion" was null or undefined when calling modelContextProtocolMessages().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/model_context_protocol/{schema_version}/messages`.replace(`{${"schema_version"}}`, encodeURIComponent(String(requestParameters['schemaVersion']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * depending on the schema version, for 2024-11-05: this is use to take in the requests and the response will be sent via the SSE endpoint for 2025-03-26: This will establish the connection, and accept and return events via this endpoint  NOTE: these endpoint are just for DOCUMENTATION!!! do not use(generating will fail because the incoming body is dynamic to support different schema versions)
     * /model_context_protocol/{schema_version}/messages [POST]
     */
    async modelContextProtocolMessages(requestParameters: ModelContextProtocolMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.modelContextProtocolMessagesRaw(requestParameters, initOverrides);
    }

    /**
     * This will list all of the supported schema versions for MCP
     * /model_context_protocol/schema_versions [GET]
     */
    async modelContextProtocolSchemaVersionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelContextProtocolSchemaVersions>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/model_context_protocol/schema_versions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelContextProtocolSchemaVersionsFromJSON(jsonValue));
    }

    /**
     * This will list all of the supported schema versions for MCP
     * /model_context_protocol/schema_versions [GET]
     */
    async modelContextProtocolSchemaVersions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelContextProtocolSchemaVersions> {
        const response = await this.modelContextProtocolSchemaVersionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * This is a streamed endpoint that is NOT a websocket however establishes a long running connection for the MCP integration  NOTE: these endpoint are just for DOCUMENTATION!!! do not use(generating will fail because the incoming body is dynamic to support different schema versions)
     * /model_context_protocol/{schema_version}/sse [GET]
     */
    async modelContextProtocolServerSentEventsRaw(requestParameters: ModelContextProtocolServerSentEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['schemaVersion'] == null) {
            throw new runtime.RequiredError(
                'schemaVersion',
                'Required parameter "schemaVersion" was null or undefined when calling modelContextProtocolServerSentEvents().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/model_context_protocol/{schema_version}/sse`.replace(`{${"schema_version"}}`, encodeURIComponent(String(requestParameters['schemaVersion']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This is a streamed endpoint that is NOT a websocket however establishes a long running connection for the MCP integration  NOTE: these endpoint are just for DOCUMENTATION!!! do not use(generating will fail because the incoming body is dynamic to support different schema versions)
     * /model_context_protocol/{schema_version}/sse [GET]
     */
    async modelContextProtocolServerSentEvents(requestParameters: ModelContextProtocolServerSentEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.modelContextProtocolServerSentEventsRaw(requestParameters, initOverrides);
    }

}
