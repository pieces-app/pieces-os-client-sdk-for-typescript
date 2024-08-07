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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Person } from './Person';
import {
    PersonFromJSON,
    PersonFromJSONTyped,
    PersonToJSON,
} from './Person';

/**
 * This is used for the Persons searching endpoint.
 * 
 * person here is only provided if transferables are set to true.
 * 
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 * 
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * @export
 * @interface SearchedPerson
 */
export interface SearchedPerson {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Person}
     * @memberof SearchedPerson
     */
    person?: Person;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedPerson
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedPerson
     */
    similarity: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedPerson
     */
    temporal?: boolean;
    /**
     * This is the uuid of the person.
     * @type {string}
     * @memberof SearchedPerson
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedPerson interface.
 */
export function instanceOfSearchedPerson(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exact" in value;
    isInstance = isInstance && "similarity" in value;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function SearchedPersonFromJSON(json: any): SearchedPerson {
    return SearchedPersonFromJSONTyped(json, false);
}

export function SearchedPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedPerson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'person': !exists(json, 'person') ? undefined : PersonFromJSON(json['person']),
        'exact': json['exact'],
        'similarity': json['similarity'],
        'temporal': !exists(json, 'temporal') ? undefined : json['temporal'],
        'identifier': json['identifier'],
    };
}

export function SearchedPersonToJSON(value?: SearchedPerson | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'person': PersonToJSON(value.person),
        'exact': value.exact,
        'similarity': value.similarity,
        'temporal': value.temporal,
        'identifier': value.identifier,
    };
}

