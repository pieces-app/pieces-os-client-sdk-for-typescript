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
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
    ClassificationToJSONTyped,
} from './Classification';

/**
 * 
 * @export
 * @interface TLPCodeFragmentClassificationMetadata
 */
export interface TLPCodeFragmentClassificationMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentClassificationMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Classification}
     * @memberof TLPCodeFragmentClassificationMetadata
     */
    context?: Classification;
    /**
     * 
     * @type {Classification}
     * @memberof TLPCodeFragmentClassificationMetadata
     */
    prior?: Classification;
}

/**
 * Check if a given object implements the TLPCodeFragmentClassificationMetadata interface.
 */
export function instanceOfTLPCodeFragmentClassificationMetadata(value: object): value is TLPCodeFragmentClassificationMetadata {
    return true;
}

export function TLPCodeFragmentClassificationMetadataFromJSON(json: any): TLPCodeFragmentClassificationMetadata {
    return TLPCodeFragmentClassificationMetadataFromJSONTyped(json, false);
}

export function TLPCodeFragmentClassificationMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentClassificationMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'context': json['context'] == null ? undefined : ClassificationFromJSON(json['context']),
        'prior': json['prior'] == null ? undefined : ClassificationFromJSON(json['prior']),
    };
}

export function TLPCodeFragmentClassificationMetadataToJSON(json: any): TLPCodeFragmentClassificationMetadata {
    return TLPCodeFragmentClassificationMetadataToJSONTyped(json, false);
}

export function TLPCodeFragmentClassificationMetadataToJSONTyped(value?: TLPCodeFragmentClassificationMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'context': ClassificationToJSON(value['context']),
        'prior': ClassificationToJSON(value['prior']),
    };
}

