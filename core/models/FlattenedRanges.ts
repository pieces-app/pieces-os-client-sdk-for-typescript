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
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    ScoreToJSONTyped,
} from './Score';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { ReferencedRange } from './ReferencedRange';
import {
    ReferencedRangeFromJSON,
    ReferencedRangeFromJSONTyped,
    ReferencedRangeToJSON,
    ReferencedRangeToJSONTyped,
} from './ReferencedRange';

/**
 * This is a DAG-Safe minimal representation of many Ranges.
 * @export
 * @interface FlattenedRanges
 */
export interface FlattenedRanges {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedRanges
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedRange>}
     * @memberof FlattenedRanges
     */
    iterable: Array<ReferencedRange>;
    /**
     * This is a Map<String, int> where the the key is an range id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedRanges
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedRanges
     */
    score?: Score;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedRanges
     */
    continuous?: boolean;
}

/**
 * Check if a given object implements the FlattenedRanges interface.
 */
export function instanceOfFlattenedRanges(value: object): value is FlattenedRanges {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedRangesFromJSON(json: any): FlattenedRanges {
    return FlattenedRangesFromJSONTyped(json, false);
}

export function FlattenedRangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedRanges {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedRangeFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'continuous': json['continuous'] == null ? undefined : json['continuous'],
    };
}

export function FlattenedRangesToJSON(json: any): FlattenedRanges {
    return FlattenedRangesToJSONTyped(json, false);
}

export function FlattenedRangesToJSONTyped(value?: FlattenedRanges | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedRangeToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
        'continuous': value['continuous'],
    };
}

