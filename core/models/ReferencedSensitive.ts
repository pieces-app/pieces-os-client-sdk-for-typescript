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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedSensitive,
    FlattenedSensitiveFromJSON,
    FlattenedSensitiveFromJSONTyped,
    FlattenedSensitiveToJSON,
} from './';

/**
 * A reference to a sensitive which at minimum must have the Sensitive id. But in the case of a hydrated client API it may have a populated reference of type Sensitive.
 * @export
 * @interface ReferencedSensitive
 */
export interface ReferencedSensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedSensitive
     */
    id: string;
    /**
     * 
     * @type {FlattenedSensitive}
     * @memberof ReferencedSensitive
     */
    reference?: FlattenedSensitive;
}

export function ReferencedSensitiveFromJSON(json: any): ReferencedSensitive {
    return ReferencedSensitiveFromJSONTyped(json, false);
}

export function ReferencedSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedSensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedSensitiveFromJSON(json['reference']),
    };
}

export function ReferencedSensitiveToJSON(value?: ReferencedSensitive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedSensitiveToJSON(value.reference),
    };
}


