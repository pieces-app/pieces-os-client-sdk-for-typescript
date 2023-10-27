/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    TrackedAssetsEventSearchMetadataResults,
    TrackedAssetsEventSearchMetadataResultsFromJSON,
    TrackedAssetsEventSearchMetadataResultsFromJSONTyped,
    TrackedAssetsEventSearchMetadataResultsToJSON,
} from './';

/**
 * Metadata attached to a search event on an Asset
 * @export
 * @interface TrackedAssetsEventSearchMetadata
 */
export interface TrackedAssetsEventSearchMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetsEventSearchMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * The search query itself
     * @type {string}
     * @memberof TrackedAssetsEventSearchMetadata
     */
    query?: string;
    /**
     * 
     * @type {TrackedAssetsEventSearchMetadataResults}
     * @memberof TrackedAssetsEventSearchMetadata
     */
    results?: TrackedAssetsEventSearchMetadataResults;
}

export function TrackedAssetsEventSearchMetadataFromJSON(json: any): TrackedAssetsEventSearchMetadata {
    return TrackedAssetsEventSearchMetadataFromJSONTyped(json, false);
}

export function TrackedAssetsEventSearchMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetsEventSearchMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'query': !exists(json, 'query') ? undefined : json['query'],
        'results': !exists(json, 'results') ? undefined : TrackedAssetsEventSearchMetadataResultsFromJSON(json['results']),
    };
}

export function TrackedAssetsEventSearchMetadataToJSON(value?: TrackedAssetsEventSearchMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'query': value.query,
        'results': TrackedAssetsEventSearchMetadataResultsToJSON(value.results),
    };
}

