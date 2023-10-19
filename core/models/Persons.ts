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
    Person,
    PersonFromJSON,
    PersonFromJSONTyped,
    PersonToJSON,
} from './';

/**
 * This is the plural of Person. will have top level meta about the person including an iterable of all the person.
 * @export
 * @interface Persons
 */
export interface Persons {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Persons
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Person>}
     * @memberof Persons
     */
    iterable: Array<Person>;
    /**
     * This is a Map<String, int> where the the key is an person id.
     * @type {{ [key: string]: number; }}
     * @memberof Persons
     */
    indices?: { [key: string]: number; };
}

export function PersonsFromJSON(json: any): Persons {
    return PersonsFromJSONTyped(json, false);
}

export function PersonsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Persons {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(PersonFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
    };
}

export function PersonsToJSON(value?: Persons | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(PersonToJSON)),
        'indices': value.indices,
    };
}


