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
    ExistentMetadata,
    ExistentMetadataFromJSON,
    ExistentMetadataToJSON,
    ExistingMetadata,
    ExistingMetadataFromJSON,
    ExistingMetadataToJSON,
    SeededTag,
    SeededTagFromJSON,
    SeededTagToJSON,
    Tag,
    TagFromJSON,
    TagToJSON,
    Tags,
    TagsFromJSON,
    TagsToJSON,
} from '../models';

export interface TagsCreateNewTagRequest {
    transferables?: boolean;
    seededTag?: SeededTag;
}

export interface TagsDeleteSpecificTagRequest {
    tag: string;
}

export interface TagsExistsRequest {
    existentMetadata?: ExistentMetadata;
}

export interface TagsSnapshotRequest {
    transferables?: boolean;
}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI {

    /**
     * This will create a new tag.
     * /tags/create [POST]
     */
    async tagsCreateNewTagRaw(requestParameters: TagsCreateNewTagRequest): Promise<runtime.ApiResponse<Tag>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tags/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededTagToJSON(requestParameters.seededTag),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * This will create a new tag.
     * /tags/create [POST]
     */
    async tagsCreateNewTag(requestParameters: TagsCreateNewTagRequest): Promise<Tag> {
        const response = await this.tagsCreateNewTagRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will delete a specific tag.
     * /tags/{tag}/delete [POST]
     */
    async tagsDeleteSpecificTagRaw(requestParameters: TagsDeleteSpecificTagRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling tagsDeleteSpecificTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tags/{tag}/delete`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific tag.
     * /tags/{tag}/delete [POST]
     */
    async tagsDeleteSpecificTag(requestParameters: TagsDeleteSpecificTagRequest): Promise<void> {
        await this.tagsDeleteSpecificTagRaw(requestParameters);
    }

    /**
     * This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.
     * /tags/exists [POST]
     */
    async tagsExistsRaw(requestParameters: TagsExistsRequest): Promise<runtime.ApiResponse<ExistingMetadata>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tags/exists`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ExistentMetadataToJSON(requestParameters.existentMetadata),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ExistingMetadataFromJSON(jsonValue));
    }

    /**
     * This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.
     * /tags/exists [POST]
     */
    async tagsExists(requestParameters: TagsExistsRequest): Promise<ExistingMetadata> {
        const response = await this.tagsExistsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will get a snapshot of all of your tags.
     * /tags [GET]
     */
    async tagsSnapshotRaw(requestParameters: TagsSnapshotRequest): Promise<runtime.ApiResponse<Tags>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagsFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all of your tags.
     * /tags [GET]
     */
    async tagsSnapshot(requestParameters: TagsSnapshotRequest): Promise<Tags> {
        const response = await this.tagsSnapshotRaw(requestParameters);
        return await response.value();
    }

}
