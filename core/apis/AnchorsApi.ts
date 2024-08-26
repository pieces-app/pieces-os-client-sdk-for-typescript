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
  Anchor,
  Anchors,
  SearchInput,
  SearchedAnchors,
  SeededAnchor,
  StreamedIdentifiers,
} from '../models/index';
import {
    AnchorFromJSON,
    AnchorToJSON,
    AnchorsFromJSON,
    AnchorsToJSON,
    SearchInputFromJSON,
    SearchInputToJSON,
    SearchedAnchorsFromJSON,
    SearchedAnchorsToJSON,
    SeededAnchorFromJSON,
    SeededAnchorToJSON,
    StreamedIdentifiersFromJSON,
    StreamedIdentifiersToJSON,
} from '../models/index';

export interface AnchorsCreateNewAnchorRequest {
    transferables?: boolean;
    seededAnchor?: SeededAnchor;
}

export interface AnchorsDeleteSpecificAnchorRequest {
    anchor: string;
}

export interface AnchorsSnapshotRequest {
    transferables?: boolean;
}

export interface SearchAnchorsRequest {
    transferables?: boolean;
    searchInput?: SearchInput;
}

/**
 * 
 */
export class AnchorsApi extends runtime.BaseAPI {

    /**
     * This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.
     * /anchors/create [POST]
     */
    async anchorsCreateNewAnchorRaw(requestParameters: AnchorsCreateNewAnchorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Anchor>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/anchors/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededAnchorToJSON(requestParameters.seededAnchor),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnchorFromJSON(jsonValue));
    }

    /**
     * This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.
     * /anchors/create [POST]
     */
    async anchorsCreateNewAnchor(requestParameters: AnchorsCreateNewAnchorRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Anchor> {
        const response = await this.anchorsCreateNewAnchorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will delete a specific anchor!
     * /anchors/{anchor}/delete [POST]
     */
    async anchorsDeleteSpecificAnchorRaw(requestParameters: AnchorsDeleteSpecificAnchorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.anchor === null || requestParameters.anchor === undefined) {
            throw new runtime.RequiredError('anchor','Required parameter requestParameters.anchor was null or undefined when calling anchorsDeleteSpecificAnchor.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/anchors/{anchor}/delete`.replace(`{${"anchor"}}`, encodeURIComponent(String(requestParameters.anchor))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific anchor!
     * /anchors/{anchor}/delete [POST]
     */
    async anchorsDeleteSpecificAnchor(requestParameters: AnchorsDeleteSpecificAnchorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.anchorsDeleteSpecificAnchorRaw(requestParameters, initOverrides);
    }

    /**
     * This will get a snapshot of all your anchors.
     * /anchors [GET]
     */
    async anchorsSnapshotRaw(requestParameters: AnchorsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Anchors>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/anchors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnchorsFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all your anchors.
     * /anchors [GET]
     */
    async anchorsSnapshot(requestParameters: AnchorsSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Anchors> {
        const response = await this.anchorsSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Provides a WebSocket connection that emits changes to your anchor identifiers (UUIDs).
     * /anchors/stream/identifiers [WS]
     */
    async anchorsStreamIdentifiersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StreamedIdentifiers>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/anchors/stream/identifiers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StreamedIdentifiersFromJSON(jsonValue));
    }

    /**
     * Provides a WebSocket connection that emits changes to your anchor identifiers (UUIDs).
     * /anchors/stream/identifiers [WS]
     */
    async anchorsStreamIdentifiers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StreamedIdentifiers> {
        const response = await this.anchorsStreamIdentifiersRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will search your anchors for a specific anchor  note: we will search all the anchor points
     * /anchors/search [POST]
     */
    async searchAnchorsRaw(requestParameters: SearchAnchorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchedAnchors>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/anchors/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SearchInputToJSON(requestParameters.searchInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchedAnchorsFromJSON(jsonValue));
    }

    /**
     * This will search your anchors for a specific anchor  note: we will search all the anchor points
     * /anchors/search [POST]
     */
    async searchAnchors(requestParameters: SearchAnchorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchedAnchors> {
        const response = await this.searchAnchorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
