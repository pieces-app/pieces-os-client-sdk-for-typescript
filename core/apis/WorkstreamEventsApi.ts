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
  SeededWorkstreamEvent,
  WorkstreamEvent,
  WorkstreamEvents,
} from '../models/index';
import {
    SeededWorkstreamEventFromJSON,
    SeededWorkstreamEventToJSON,
    WorkstreamEventFromJSON,
    WorkstreamEventToJSON,
    WorkstreamEventsFromJSON,
    WorkstreamEventsToJSON,
} from '../models/index';

export interface WorkstreamEventsCreateNewWorkstreamEventRequest {
    transferables?: boolean;
    seededWorkstreamEvent?: SeededWorkstreamEvent;
}

export interface WorkstreamEventsDeleteSpecificWorkstreamEventRequest {
    workstreamEvent: string;
}

export interface WorkstreamEventsSnapshotRequest {
    transferables?: boolean;
}

/**
 * 
 */
export class WorkstreamEventsApi extends runtime.BaseAPI {

    /**
     * This will create a new WorkstreamEvent in the database.
     * /workstream_events/create [POST]
     */
    async workstreamEventsCreateNewWorkstreamEventRaw(requestParameters: WorkstreamEventsCreateNewWorkstreamEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkstreamEvent>> {
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
            path: `/workstream_events/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededWorkstreamEventToJSON(requestParameters['seededWorkstreamEvent']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkstreamEventFromJSON(jsonValue));
    }

    /**
     * This will create a new WorkstreamEvent in the database.
     * /workstream_events/create [POST]
     */
    async workstreamEventsCreateNewWorkstreamEvent(requestParameters: WorkstreamEventsCreateNewWorkstreamEventRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkstreamEvent> {
        const response = await this.workstreamEventsCreateNewWorkstreamEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will delete a specific workstream_event from the database!
     * /workstream_events/{workstream_event}/delete [POST]
     */
    async workstreamEventsDeleteSpecificWorkstreamEventRaw(requestParameters: WorkstreamEventsDeleteSpecificWorkstreamEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['workstreamEvent'] == null) {
            throw new runtime.RequiredError(
                'workstreamEvent',
                'Required parameter "workstreamEvent" was null or undefined when calling workstreamEventsDeleteSpecificWorkstreamEvent().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_events/{workstream_event}/delete`.replace(`{${"workstream_event"}}`, encodeURIComponent(String(requestParameters['workstreamEvent']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific workstream_event from the database!
     * /workstream_events/{workstream_event}/delete [POST]
     */
    async workstreamEventsDeleteSpecificWorkstreamEvent(requestParameters: WorkstreamEventsDeleteSpecificWorkstreamEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.workstreamEventsDeleteSpecificWorkstreamEventRaw(requestParameters, initOverrides);
    }

    /**
     * This will get a snapshot of all your workstream events.
     * /workstream_events [GET]
     */
    async workstreamEventsSnapshotRaw(requestParameters: WorkstreamEventsSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkstreamEvents>> {
        const queryParameters: any = {};

        if (requestParameters['transferables'] != null) {
            queryParameters['transferables'] = requestParameters['transferables'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Application-ID"] = await this.configuration.apiKey("X-Application-ID"); // application authentication
        }

        const response = await this.request({
            path: `/workstream_events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkstreamEventsFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all your workstream events.
     * /workstream_events [GET]
     */
    async workstreamEventsSnapshot(requestParameters: WorkstreamEventsSnapshotRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkstreamEvents> {
        const response = await this.workstreamEventsSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
