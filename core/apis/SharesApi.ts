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
    SeededShare,
    SeededShareFromJSON,
    SeededShareToJSON,
    Share,
    ShareFromJSON,
    ShareToJSON,
    Shares,
    SharesFromJSON,
    SharesToJSON,
} from '../models';

export interface SharesCreateNewShareRequest {
    transferables?: boolean;
    seededShare?: SeededShare;
}

export interface SharesDeleteShareRequest {
    share: string;
}

export interface SharesSnapshotRequest {
    transferables?: boolean;
}

export interface SharesSpecificShareSnapshotRequest {
    share: string;
    transferables?: boolean;
}

/**
 * 
 */
export class SharesApi extends runtime.BaseAPI {

    /**
     * This endpoint will accept an asset. Response here will be a Share that was created.
     * /shares/create [POST]
     */
    async sharesCreateNewShareRaw(requestParameters: SharesCreateNewShareRequest): Promise<runtime.ApiResponse<Shares>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/shares/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededShareToJSON(requestParameters.seededShare),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SharesFromJSON(jsonValue));
    }

    /**
     * This endpoint will accept an asset. Response here will be a Share that was created.
     * /shares/create [POST]
     */
    async sharesCreateNewShare(requestParameters: SharesCreateNewShareRequest): Promise<Shares> {
        const response = await this.sharesCreateNewShareRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.
     * /shares/{share}/delete [POST]
     */
    async sharesDeleteShareRaw(requestParameters: SharesDeleteShareRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.share === null || requestParameters.share === undefined) {
            throw new runtime.RequiredError('share','Required parameter requestParameters.share was null or undefined when calling sharesDeleteShare.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/shares/{share}/delete`.replace(`{${"share"}}`, encodeURIComponent(String(requestParameters.share))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.
     * /shares/{share}/delete [POST]
     */
    async sharesDeleteShare(requestParameters: SharesDeleteShareRequest): Promise<string> {
        const response = await this.sharesDeleteShareRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.
     * /shares [GET]
     */
    async sharesSnapshotRaw(requestParameters: SharesSnapshotRequest): Promise<runtime.ApiResponse<Shares>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/shares`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SharesFromJSON(jsonValue));
    }

    /**
     * This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.
     * /shares [GET]
     */
    async sharesSnapshot(requestParameters: SharesSnapshotRequest): Promise<Shares> {
        const response = await this.sharesSnapshotRaw(requestParameters);
        return await response.value();
    }

    /**
     * This is an endpoint to enable a client to access a specific share through a provided share id.
     * /shares/{share} [GET]
     */
    async sharesSpecificShareSnapshotRaw(requestParameters: SharesSpecificShareSnapshotRequest): Promise<runtime.ApiResponse<Share>> {
        if (requestParameters.share === null || requestParameters.share === undefined) {
            throw new runtime.RequiredError('share','Required parameter requestParameters.share was null or undefined when calling sharesSpecificShareSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/shares/{share}`.replace(`{${"share"}}`, encodeURIComponent(String(requestParameters.share))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ShareFromJSON(jsonValue));
    }

    /**
     * This is an endpoint to enable a client to access a specific share through a provided share id.
     * /shares/{share} [GET]
     */
    async sharesSpecificShareSnapshot(requestParameters: SharesSpecificShareSnapshotRequest): Promise<Share> {
        const response = await this.sharesSpecificShareSnapshotRaw(requestParameters);
        return await response.value();
    }

}
