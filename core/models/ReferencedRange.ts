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
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { FlattenedRange } from './FlattenedRange';
import {
    FlattenedRangeFromJSON,
    FlattenedRangeFromJSONTyped,
    FlattenedRangeToJSON,
    FlattenedRangeToJSONTyped,
} from './FlattenedRange';

/**
 * This is a minimal version of a Range, with mainly an Id.
 * @export
 * @interface ReferencedRange
 */
export interface ReferencedRange {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedRange
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedRange
     */
    id: string;
    /**
     * 
     * @type {FlattenedRange}
     * @memberof ReferencedRange
     */
    reference?: FlattenedRange;
}

/**
 * Check if a given object implements the ReferencedRange interface.
 */
export function instanceOfReferencedRange(value: object): value is ReferencedRange {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReferencedRangeFromJSON(json: any): ReferencedRange {
    return ReferencedRangeFromJSONTyped(json, false);
}

export function ReferencedRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedRange {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedRangeFromJSON(json['reference']),
    };
}

export function ReferencedRangeToJSON(json: any): ReferencedRange {
    return ReferencedRangeToJSONTyped(json, false);
}

export function ReferencedRangeToJSONTyped(value?: ReferencedRange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedRangeToJSON(value['reference']),
    };
}

