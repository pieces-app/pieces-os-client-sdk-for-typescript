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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Range } from './Range';
import {
    RangeFromJSON,
    RangeFromJSONTyped,
    RangeToJSON,
} from './Range';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a collection of many Ranges
 * @export
 * @interface Ranges
 */
export interface Ranges {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Ranges
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Range>}
     * @memberof Ranges
     */
    iterable: Array<Range>;
    /**
     * This is a Map<String, int> where the the key is an range id.
     * @type {{ [key: string]: number; }}
     * @memberof Ranges
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Ranges
     */
    score?: Score;
    /**
     * 
     * @type {boolean}
     * @memberof Ranges
     */
    continuous?: boolean;
}

/**
 * Check if a given object implements the Ranges interface.
 */
export function instanceOfRanges(value: object): boolean {
    if (!('iterable' in value)) return false;
    return true;
}

export function RangesFromJSON(json: any): Ranges {
    return RangesFromJSONTyped(json, false);
}

export function RangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ranges {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(RangeFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'continuous': json['continuous'] == null ? undefined : json['continuous'],
    };
}

export function RangesToJSON(value?: Ranges | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(RangeToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
        'continuous': value['continuous'],
    };
}
