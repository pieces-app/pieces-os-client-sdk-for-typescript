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
  AppletOTAServerError,
  OSAppletEnum,
} from '../models/index';
import {
    AppletOTAServerErrorFromJSON,
    AppletOTAServerErrorToJSON,
    OSAppletEnumFromJSON,
    OSAppletEnumToJSON,
} from '../models/index';

export interface StreamAppletVersionRequest {
    application: string;
    appletType: OSAppletEnum;
}

/**
 * 
 */
export class AppletApi extends runtime.BaseAPI {

    /**
     * Establishes a WebSocket connection to stream real-time updates for the specified applet version based on application UUID and applet type.
     * /os/applet/version/stream [WS]
     */
    async streamAppletVersionRaw(requestParameters: StreamAppletVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters['application'] == null) {
            throw new runtime.RequiredError(
                'application',
                'Required parameter "application" was null or undefined when calling streamAppletVersion().'
            );
        }

        if (requestParameters['appletType'] == null) {
            throw new runtime.RequiredError(
                'appletType',
                'Required parameter "appletType" was null or undefined when calling streamAppletVersion().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['appletType'] != null) {
            queryParameters['applet_type'] = requestParameters['appletType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/os/applet/version/stream`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters['application']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Establishes a WebSocket connection to stream real-time updates for the specified applet version based on application UUID and applet type.
     * /os/applet/version/stream [WS]
     */
    async streamAppletVersion(requestParameters: StreamAppletVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.streamAppletVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
