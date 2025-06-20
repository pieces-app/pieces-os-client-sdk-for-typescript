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
 * This is a plural representation of a Classification
 * @export
 * @interface Classifications
 */
export interface Classifications {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Classifications
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Classification>}
     * @memberof Classifications
     */
    iterable: Array<Classification>;
}

/**
 * Check if a given object implements the Classifications interface.
 */
export function instanceOfClassifications(value: object): value is Classifications {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function ClassificationsFromJSON(json: any): Classifications {
    return ClassificationsFromJSONTyped(json, false);
}

export function ClassificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Classifications {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ClassificationFromJSON)),
    };
}

export function ClassificationsToJSON(json: any): Classifications {
    return ClassificationsToJSONTyped(json, false);
}

export function ClassificationsToJSONTyped(value?: Classifications | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ClassificationToJSON)),
    };
}

