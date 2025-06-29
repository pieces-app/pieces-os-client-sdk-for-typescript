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
import type { ClassificationSpecificEnum } from './ClassificationSpecificEnum';
import {
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
    ClassificationSpecificEnumToJSONTyped,
} from './ClassificationSpecificEnum';

/**
 * This is a model for metadata of a file!
 * @export
 * @interface FragmentMetadata
 */
export interface FragmentMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FragmentMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof FragmentMetadata
     */
    ext?: ClassificationSpecificEnum;
}



/**
 * Check if a given object implements the FragmentMetadata interface.
 */
export function instanceOfFragmentMetadata(value: object): value is FragmentMetadata {
    return true;
}

export function FragmentMetadataFromJSON(json: any): FragmentMetadata {
    return FragmentMetadataFromJSONTyped(json, false);
}

export function FragmentMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FragmentMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ext': json['ext'] == null ? undefined : ClassificationSpecificEnumFromJSON(json['ext']),
    };
}

export function FragmentMetadataToJSON(json: any): FragmentMetadata {
    return FragmentMetadataToJSONTyped(json, false);
}

export function FragmentMetadataToJSONTyped(value?: FragmentMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'ext': ClassificationSpecificEnumToJSON(value['ext']),
    };
}

