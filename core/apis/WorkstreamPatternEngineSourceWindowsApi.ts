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
  SearchInput,
  SearchedWorkstreamPatternEngineSourceWindows,
  SeededWorkstreamPatternEngineSourceWindow,
  StreamedIdentifiers,
  WorkstreamPatternEngineSourceWindow,
  WorkstreamPatternEngineSourceWindows,
} from '../models/index';
import {
    SearchInputFromJSON,
    SearchInputToJSON,
    SearchedWorkstreamPatternEngineSourceWindowsFromJSON,
    SearchedWorkstreamPatternEngineSourceWindowsToJSON,
    SeededWorkstreamPatternEngineSourceWindowFromJSON,
    SeededWorkstreamPatternEngineSourceWindowToJSON,
    StreamedIdentifiersFromJSON,
    StreamedIdentifiersToJSON,
    WorkstreamPatternEngineSourceWindowFromJSON,
    WorkstreamPatternEngineSourceWindowToJSON,
    WorkstreamPatternEngineSourceWindowsFromJSON,
    WorkstreamPatternEngineSourceWindowsToJSON,
} from '../models/index';

export interface WorkstreamPatternEngineSourceWindowCreateNewSourceWindowRequest {
    transferables?: boolean;
    seededWorkstreamPatternEngineSourceWindow?: SeededWorkstreamPatternEngineSourceWindow;
}

export interface WorkstreamPatternEngineSourceWindowDeleteSpecificSourceWindowRequest {
    sourceWindow: string;
}

export interface WorkstreamPatternEngineSourceWindowsSearchRequest {
    searchInput?: SearchInput;
}

export interface WorkstreamPatternEngineSourceWindowsSnapshotRequest {
    transferables?: boolean;
}

/**
 * 
 */
export class WorkstreamPatternEngineSourceWindowsApi extends runtime.BaseAPI {

    /**
     * This will enable us to create a source window for the workstream pattern engine.
     * /workstream_pattern_engine/source_windows/create [POST]
     */
    async workstreamPatternEngineSourceWindowCreateNewSourceWindowRaw(requestParameters: WorkstreamPatternEngineSourceWindowCreateNewSourceWindowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkstreamPatternEngineSourceWindow>> {
        const queryParameters: any = {};

        if (requestParameters['transferables'] != null) {
            queryParameters['transferables'] = requestParameters['transferables'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_pattern_engine/source_windows/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededWorkstreamPatternEngineSourceWindowToJSON(requestParameters['seededWorkstreamPatternEngineSourceWindow']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkstreamPatternEngineSourceWindowFromJSON(jsonValue));
    }

    /**
     * This will enable us to create a source window for the workstream pattern engine.
     * /workstream_pattern_engine/source_windows/create [POST]
     */
    async workstreamPatternEngineSourceWindowCreateNewSourceWindow(requestParameters: WorkstreamPatternEngineSourceWindowCreateNewSourceWindowRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkstreamPatternEngineSourceWindow> {
        const response = await this.workstreamPatternEngineSourceWindowCreateNewSourceWindowRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will enable us to delete a source window from the workstream pattern engine.
     * /workstream_pattern_engine/source_windows/{source_window}/delete [POST]
     */
    async workstreamPatternEngineSourceWindowDeleteSpecificSourceWindowRaw(requestParameters: WorkstreamPatternEngineSourceWindowDeleteSpecificSourceWindowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['sourceWindow'] == null) {
            throw new runtime.RequiredError(
                'sourceWindow',
                'Required parameter "sourceWindow" was null or undefined when calling workstreamPatternEngineSourceWindowDeleteSpecificSourceWindow().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_pattern_engine/source_windows/{source_window}/delete`.replace(`{${"source_window"}}`, encodeURIComponent(String(requestParameters['sourceWindow']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to delete a source window from the workstream pattern engine.
     * /workstream_pattern_engine/source_windows/{source_window}/delete [POST]
     */
    async workstreamPatternEngineSourceWindowDeleteSpecificSourceWindow(requestParameters: WorkstreamPatternEngineSourceWindowDeleteSpecificSourceWindowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.workstreamPatternEngineSourceWindowDeleteSpecificSourceWindowRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to search for source windows for the workstream pattern engine.
     * /workstream_pattern_engine/source_windows/search [POST]
     */
    async workstreamPatternEngineSourceWindowsSearchRaw(requestParameters: WorkstreamPatternEngineSourceWindowsSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchedWorkstreamPatternEngineSourceWindows>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_pattern_engine/source_windows/search`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SearchInputToJSON(requestParameters['searchInput']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchedWorkstreamPatternEngineSourceWindowsFromJSON(jsonValue));
    }

    /**
     * This will enable us to search for source windows for the workstream pattern engine.
     * /workstream_pattern_engine/source_windows/search [POST]
     */
    async workstreamPatternEngineSourceWindowsSearch(requestParameters: WorkstreamPatternEngineSourceWindowsSearchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchedWorkstreamPatternEngineSourceWindows> {
        const response = await this.workstreamPatternEngineSourceWindowsSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will enable us to snapshot the source windows for the workstream pattern engine.
     * /workstream_pattern_engine/source_windows [GET]
     */
    async workstreamPatternEngineSourceWindowsSnapshotRaw(requestParameters: WorkstreamPatternEngineSourceWindowsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkstreamPatternEngineSourceWindows>> {
        const queryParameters: any = {};

        if (requestParameters['transferables'] != null) {
            queryParameters['transferables'] = requestParameters['transferables'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_pattern_engine/source_windows`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkstreamPatternEngineSourceWindowsFromJSON(jsonValue));
    }

    /**
     * This will enable us to snapshot the source windows for the workstream pattern engine.
     * /workstream_pattern_engine/source_windows [GET]
     */
    async workstreamPatternEngineSourceWindowsSnapshot(requestParameters: WorkstreamPatternEngineSourceWindowsSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkstreamPatternEngineSourceWindows> {
        const response = await this.workstreamPatternEngineSourceWindowsSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will enable us to stream the identifiers for the workstream pattern engine source windows.
     * /workstream_pattern_engine/source_windows/stream/identifiers [WS]
     */
    async workstreamPatternEngineSourceWindowsStreamIdentifiersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StreamedIdentifiers>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_pattern_engine/source_windows/stream/identifiers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StreamedIdentifiersFromJSON(jsonValue));
    }

    /**
     * This will enable us to stream the identifiers for the workstream pattern engine source windows.
     * /workstream_pattern_engine/source_windows/stream/identifiers [WS]
     */
    async workstreamPatternEngineSourceWindowsStreamIdentifiers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StreamedIdentifiers> {
        const response = await this.workstreamPatternEngineSourceWindowsStreamIdentifiersRaw(initOverrides);
        return await response.value();
    }

}
