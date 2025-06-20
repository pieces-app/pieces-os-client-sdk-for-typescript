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
import type { FlattenedIdentifiedWorkstreamPatternEngineSource } from './FlattenedIdentifiedWorkstreamPatternEngineSource';
import {
    FlattenedIdentifiedWorkstreamPatternEngineSourceFromJSON,
    FlattenedIdentifiedWorkstreamPatternEngineSourceFromJSONTyped,
    FlattenedIdentifiedWorkstreamPatternEngineSourceToJSON,
    FlattenedIdentifiedWorkstreamPatternEngineSourceToJSONTyped,
} from './FlattenedIdentifiedWorkstreamPatternEngineSource';

/**
 * 
 * @export
 * @interface ReferencedIdentifiedWorkstreamPatternEngineSource
 */
export interface ReferencedIdentifiedWorkstreamPatternEngineSource {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedIdentifiedWorkstreamPatternEngineSource
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedIdentifiedWorkstreamPatternEngineSource
     */
    id: string;
    /**
     * 
     * @type {FlattenedIdentifiedWorkstreamPatternEngineSource}
     * @memberof ReferencedIdentifiedWorkstreamPatternEngineSource
     */
    reference?: FlattenedIdentifiedWorkstreamPatternEngineSource;
}

/**
 * Check if a given object implements the ReferencedIdentifiedWorkstreamPatternEngineSource interface.
 */
export function instanceOfReferencedIdentifiedWorkstreamPatternEngineSource(value: object): value is ReferencedIdentifiedWorkstreamPatternEngineSource {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReferencedIdentifiedWorkstreamPatternEngineSourceFromJSON(json: any): ReferencedIdentifiedWorkstreamPatternEngineSource {
    return ReferencedIdentifiedWorkstreamPatternEngineSourceFromJSONTyped(json, false);
}

export function ReferencedIdentifiedWorkstreamPatternEngineSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedIdentifiedWorkstreamPatternEngineSource {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedIdentifiedWorkstreamPatternEngineSourceFromJSON(json['reference']),
    };
}

export function ReferencedIdentifiedWorkstreamPatternEngineSourceToJSON(json: any): ReferencedIdentifiedWorkstreamPatternEngineSource {
    return ReferencedIdentifiedWorkstreamPatternEngineSourceToJSONTyped(json, false);
}

export function ReferencedIdentifiedWorkstreamPatternEngineSourceToJSONTyped(value?: ReferencedIdentifiedWorkstreamPatternEngineSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedIdentifiedWorkstreamPatternEngineSourceToJSON(value['reference']),
    };
}

