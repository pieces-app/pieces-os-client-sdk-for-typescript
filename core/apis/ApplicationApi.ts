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
import {
    Application,
    ApplicationFromJSON,
    ApplicationToJSON,
} from '../models';

export interface ApplicationUpdateRequest {
    application?: Application;
}

/**
 * 
 */
export class ApplicationApi extends runtime.BaseAPI {

    /**
     * This is an endpoint for updating an application.
     * /application/update [GET]
     */
    async applicationUpdateRaw(requestParameters: ApplicationUpdateRequest): Promise<runtime.ApiResponse<Application>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/application/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApplicationToJSON(requestParameters.application),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplicationFromJSON(jsonValue));
    }

    /**
     * This is an endpoint for updating an application.
     * /application/update [GET]
     */
    async applicationUpdate(requestParameters: ApplicationUpdateRequest): Promise<Application> {
        const response = await this.applicationUpdateRaw(requestParameters);
        return await response.value();
    }

}
