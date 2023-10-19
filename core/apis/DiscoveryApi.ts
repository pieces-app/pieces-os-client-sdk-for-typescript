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
    DiscoveredAssets,
    DiscoveredAssetsFromJSON,
    DiscoveredAssetsToJSON,
    DiscoveredHtmlWebpages,
    DiscoveredHtmlWebpagesFromJSON,
    DiscoveredHtmlWebpagesToJSON,
    DiscoveredRelatedTags,
    DiscoveredRelatedTagsFromJSON,
    DiscoveredRelatedTagsToJSON,
    DiscoveredSensitives,
    DiscoveredSensitivesFromJSON,
    DiscoveredSensitivesToJSON,
    SeededDiscoverableAssets,
    SeededDiscoverableAssetsFromJSON,
    SeededDiscoverableAssetsToJSON,
    SeededDiscoverableHtmlWebpages,
    SeededDiscoverableHtmlWebpagesFromJSON,
    SeededDiscoverableHtmlWebpagesToJSON,
    SeededDiscoverableRelatedTags,
    SeededDiscoverableRelatedTagsFromJSON,
    SeededDiscoverableRelatedTagsToJSON,
    SeededDiscoverableSensitives,
    SeededDiscoverableSensitivesFromJSON,
    SeededDiscoverableSensitivesToJSON,
} from '../models';

export interface DiscoveryDiscoverAssetsRequest {
    automatic?: boolean;
    seededDiscoverableAssets?: SeededDiscoverableAssets;
}

export interface DiscoveryDiscoverAssetsHtmlRequest {
    automatic?: boolean;
    seededDiscoverableHtmlWebpages?: SeededDiscoverableHtmlWebpages;
}

export interface DiscoveryDiscoverSensitivesRequest {
    automatic?: boolean;
    seededDiscoverableSensitives?: SeededDiscoverableSensitives;
}

export interface DiscoveryDiscoverTagsRelatedRequest {
    automatic?: boolean;
    seededDiscoverableRelatedTags?: SeededDiscoverableRelatedTags;
}

/**
 * 
 */
export class DiscoveryApi extends runtime.BaseAPI {

    /**
     * This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.
     * /discovery/discover/assets [POST]
     */
    async discoveryDiscoverAssetsRaw(requestParameters: DiscoveryDiscoverAssetsRequest): Promise<runtime.ApiResponse<DiscoveredAssets>> {
        const queryParameters: any = {};

        if (requestParameters.automatic !== undefined) {
            queryParameters['automatic'] = requestParameters.automatic;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/discovery/discover/assets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededDiscoverableAssetsToJSON(requestParameters.seededDiscoverableAssets),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscoveredAssetsFromJSON(jsonValue));
    }

    /**
     * This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.
     * /discovery/discover/assets [POST]
     */
    async discoveryDiscoverAssets(requestParameters: DiscoveryDiscoverAssetsRequest): Promise<DiscoveredAssets> {
        const response = await this.discoveryDiscoverAssetsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.
     * /discovery/discover/assets/html[POST]
     */
    async discoveryDiscoverAssetsHtmlRaw(requestParameters: DiscoveryDiscoverAssetsHtmlRequest): Promise<runtime.ApiResponse<DiscoveredHtmlWebpages>> {
        const queryParameters: any = {};

        if (requestParameters.automatic !== undefined) {
            queryParameters['automatic'] = requestParameters.automatic;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/discovery/discover/assets/html`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededDiscoverableHtmlWebpagesToJSON(requestParameters.seededDiscoverableHtmlWebpages),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscoveredHtmlWebpagesFromJSON(jsonValue));
    }

    /**
     * This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.
     * /discovery/discover/assets/html[POST]
     */
    async discoveryDiscoverAssetsHtml(requestParameters: DiscoveryDiscoverAssetsHtmlRequest): Promise<DiscoveredHtmlWebpages> {
        const response = await this.discoveryDiscoverAssetsHtmlRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.
     * /discovery/discover/sensitives [POST]
     */
    async discoveryDiscoverSensitivesRaw(requestParameters: DiscoveryDiscoverSensitivesRequest): Promise<runtime.ApiResponse<DiscoveredSensitives>> {
        const queryParameters: any = {};

        if (requestParameters.automatic !== undefined) {
            queryParameters['automatic'] = requestParameters.automatic;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/discovery/discover/sensitives`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededDiscoverableSensitivesToJSON(requestParameters.seededDiscoverableSensitives),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscoveredSensitivesFromJSON(jsonValue));
    }

    /**
     * This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.
     * /discovery/discover/sensitives [POST]
     */
    async discoveryDiscoverSensitives(requestParameters: DiscoveryDiscoverSensitivesRequest): Promise<DiscoveredSensitives> {
        const response = await this.discoveryDiscoverSensitivesRaw(requestParameters);
        return await response.value();
    }

    /**
     * This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.
     * /discovery/discover/tags/related [POST]
     */
    async discoveryDiscoverTagsRelatedRaw(requestParameters: DiscoveryDiscoverTagsRelatedRequest): Promise<runtime.ApiResponse<DiscoveredRelatedTags>> {
        const queryParameters: any = {};

        if (requestParameters.automatic !== undefined) {
            queryParameters['automatic'] = requestParameters.automatic;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/discovery/discover/tags/related`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededDiscoverableRelatedTagsToJSON(requestParameters.seededDiscoverableRelatedTags),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscoveredRelatedTagsFromJSON(jsonValue));
    }

    /**
     * This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.
     * /discovery/discover/tags/related [POST]
     */
    async discoveryDiscoverTagsRelated(requestParameters: DiscoveryDiscoverTagsRelatedRequest): Promise<DiscoveredRelatedTags> {
        const response = await this.discoveryDiscoverTagsRelatedRaw(requestParameters);
        return await response.value();
    }

}
