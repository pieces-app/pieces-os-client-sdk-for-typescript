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
    DiscoveredSensitive,
    DiscoveredSensitiveFromJSON,
    DiscoveredSensitiveFromJSONTyped,
    DiscoveredSensitiveToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * 
 * @export
 * @interface DiscoveredSensitives
 */
export interface DiscoveredSensitives {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredSensitives
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<DiscoveredSensitive>}
     * @memberof DiscoveredSensitives
     */
    iterable: Array<DiscoveredSensitive>;
    /**
     * 
     * @type {string}
     * @memberof DiscoveredSensitives
     */
    application: string;
}

export function DiscoveredSensitivesFromJSON(json: any): DiscoveredSensitives {
    return DiscoveredSensitivesFromJSONTyped(json, false);
}

export function DiscoveredSensitivesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredSensitives {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(DiscoveredSensitiveFromJSON)),
        'application': json['application'],
    };
}

export function DiscoveredSensitivesToJSON(value?: DiscoveredSensitives | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(DiscoveredSensitiveToJSON)),
        'application': value.application,
    };
}


