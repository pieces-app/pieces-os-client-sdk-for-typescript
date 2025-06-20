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

import { mapValues } from '../runtime';
import type { DiscoveredHtmlWebpage } from './DiscoveredHtmlWebpage';
import {
    DiscoveredHtmlWebpageFromJSON,
    DiscoveredHtmlWebpageFromJSONTyped,
    DiscoveredHtmlWebpageToJSON,
    DiscoveredHtmlWebpageToJSONTyped,
} from './DiscoveredHtmlWebpage';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * Assumption: The iterable will be in the exact same order as it was passed in within the seededDiscoveredHtmlWebpages
 * @export
 * @interface DiscoveredHtmlWebpages
 */
export interface DiscoveredHtmlWebpages {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredHtmlWebpages
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<DiscoveredHtmlWebpage>}
     * @memberof DiscoveredHtmlWebpages
     */
    iterable: Array<DiscoveredHtmlWebpage>;
    /**
     * 
     * @type {string}
     * @memberof DiscoveredHtmlWebpages
     */
    application: string;
}

/**
 * Check if a given object implements the DiscoveredHtmlWebpages interface.
 */
export function instanceOfDiscoveredHtmlWebpages(value: object): value is DiscoveredHtmlWebpages {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    if (!('application' in value) || value['application'] === undefined) return false;
    return true;
}

export function DiscoveredHtmlWebpagesFromJSON(json: any): DiscoveredHtmlWebpages {
    return DiscoveredHtmlWebpagesFromJSONTyped(json, false);
}

export function DiscoveredHtmlWebpagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredHtmlWebpages {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(DiscoveredHtmlWebpageFromJSON)),
        'application': json['application'],
    };
}

export function DiscoveredHtmlWebpagesToJSON(json: any): DiscoveredHtmlWebpages {
    return DiscoveredHtmlWebpagesToJSONTyped(json, false);
}

export function DiscoveredHtmlWebpagesToJSONTyped(value?: DiscoveredHtmlWebpages | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(DiscoveredHtmlWebpageToJSON)),
        'application': value['application'],
    };
}

