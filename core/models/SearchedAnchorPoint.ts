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
import type { AnchorPoint } from './AnchorPoint';
import {
    AnchorPointFromJSON,
    AnchorPointFromJSONTyped,
    AnchorPointToJSON,
    AnchorPointToJSONTyped,
} from './AnchorPoint';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * This is used for the AnchorPoints searching endpoint.
 * 
 * point here is only provided if transferables are set to true.
 * 
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 * 
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * @export
 * @interface SearchedAnchorPoint
 */
export interface SearchedAnchorPoint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {AnchorPoint}
     * @memberof SearchedAnchorPoint
     */
    point?: AnchorPoint;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedAnchorPoint
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedAnchorPoint
     */
    similarity: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedAnchorPoint
     */
    temporal?: boolean;
    /**
     * This is the uuid of the anchorPoint.
     * @type {string}
     * @memberof SearchedAnchorPoint
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedAnchorPoint interface.
 */
export function instanceOfSearchedAnchorPoint(value: object): value is SearchedAnchorPoint {
    if (!('exact' in value) || value['exact'] === undefined) return false;
    if (!('similarity' in value) || value['similarity'] === undefined) return false;
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    return true;
}

export function SearchedAnchorPointFromJSON(json: any): SearchedAnchorPoint {
    return SearchedAnchorPointFromJSONTyped(json, false);
}

export function SearchedAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedAnchorPoint {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'point': json['point'] == null ? undefined : AnchorPointFromJSON(json['point']),
        'exact': json['exact'],
        'similarity': json['similarity'],
        'temporal': json['temporal'] == null ? undefined : json['temporal'],
        'identifier': json['identifier'],
    };
}

export function SearchedAnchorPointToJSON(json: any): SearchedAnchorPoint {
    return SearchedAnchorPointToJSONTyped(json, false);
}

export function SearchedAnchorPointToJSONTyped(value?: SearchedAnchorPoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'point': AnchorPointToJSON(value['point']),
        'exact': value['exact'],
        'similarity': value['similarity'],
        'temporal': value['temporal'],
        'identifier': value['identifier'],
    };
}

