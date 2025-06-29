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
import type { Hint } from './Hint';
import {
    HintFromJSON,
    HintFromJSONTyped,
    HintToJSON,
    HintToJSONTyped,
} from './Hint';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * This is used for the Hint searching endpoint
 * 
 * hint here is only provided if transferables are set to true.
 * 
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 * 
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * @export
 * @interface SearchedHint
 */
export interface SearchedHint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedHint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Hint}
     * @memberof SearchedHint
     */
    hint?: Hint;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedHint
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedHint
     */
    similarity: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedHint
     */
    temporal?: boolean;
    /**
     * This is the uuid of the hint.
     * @type {string}
     * @memberof SearchedHint
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedHint interface.
 */
export function instanceOfSearchedHint(value: object): value is SearchedHint {
    if (!('exact' in value) || value['exact'] === undefined) return false;
    if (!('similarity' in value) || value['similarity'] === undefined) return false;
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    return true;
}

export function SearchedHintFromJSON(json: any): SearchedHint {
    return SearchedHintFromJSONTyped(json, false);
}

export function SearchedHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedHint {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'hint': json['hint'] == null ? undefined : HintFromJSON(json['hint']),
        'exact': json['exact'],
        'similarity': json['similarity'],
        'temporal': json['temporal'] == null ? undefined : json['temporal'],
        'identifier': json['identifier'],
    };
}

export function SearchedHintToJSON(json: any): SearchedHint {
    return SearchedHintToJSONTyped(json, false);
}

export function SearchedHintToJSONTyped(value?: SearchedHint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'hint': HintToJSON(value['hint']),
        'exact': value['exact'],
        'similarity': value['similarity'],
        'temporal': value['temporal'],
        'identifier': value['identifier'],
    };
}

