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
} from './';

/**
 * This is a nice microclass to help with managing the size of a File or Fragment in a readable way for UI's
 * @export
 * @interface ByteDescriptor
 */
export interface ByteDescriptor {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ByteDescriptor
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof ByteDescriptor
     */
    value: number;
    /**
     * 
     * @type {string}
     * @memberof ByteDescriptor
     */
    readable: string;
}

export function ByteDescriptorFromJSON(json: any): ByteDescriptor {
    return ByteDescriptorFromJSONTyped(json, false);
}

export function ByteDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ByteDescriptor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'value': json['value'],
        'readable': json['readable'],
    };
}

export function ByteDescriptorToJSON(value?: ByteDescriptor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'value': value.value,
        'readable': value.readable,
    };
}


