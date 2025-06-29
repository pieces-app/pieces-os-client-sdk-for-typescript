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
import type { ReferencedFormat } from './ReferencedFormat';
import {
    ReferencedFormatFromJSON,
    ReferencedFormatFromJSONTyped,
    ReferencedFormatToJSON,
    ReferencedFormatToJSONTyped,
} from './ReferencedFormat';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * A collection of Formats specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]
 * 
 * FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * 
 * @export
 * @interface FlattenedFormats
 */
export interface FlattenedFormats {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedFormats
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedFormat>}
     * @memberof FlattenedFormats
     */
    iterable: Array<ReferencedFormat>;
}

/**
 * Check if a given object implements the FlattenedFormats interface.
 */
export function instanceOfFlattenedFormats(value: object): value is FlattenedFormats {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedFormatsFromJSON(json: any): FlattenedFormats {
    return FlattenedFormatsFromJSONTyped(json, false);
}

export function FlattenedFormatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedFormats {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedFormatFromJSON)),
    };
}

export function FlattenedFormatsToJSON(json: any): FlattenedFormats {
    return FlattenedFormatsToJSONTyped(json, false);
}

export function FlattenedFormatsToJSONTyped(value?: FlattenedFormats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedFormatToJSON)),
    };
}

