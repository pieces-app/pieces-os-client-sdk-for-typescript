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
import type { PersonAccessScopedEnum } from './PersonAccessScopedEnum';
import {
    PersonAccessScopedEnumFromJSON,
    PersonAccessScopedEnumFromJSONTyped,
    PersonAccessScopedEnumToJSON,
    PersonAccessScopedEnumToJSONTyped,
} from './PersonAccessScopedEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    GroupedTimestampToJSONTyped,
} from './GroupedTimestamp';

/**
 * if scoped is provided will let us know what level of permission(access) this specific person has in relation to what scope.(collection, asset,...etc)
 * 
 * in the future will expand to global (with its own enumeration for a global entire project/cloud scope)
 * @export
 * @interface PersonAccess
 */
export interface PersonAccess {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof PersonAccess
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {PersonAccessScopedEnum}
     * @memberof PersonAccess
     */
    scoped?: PersonAccessScopedEnum;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof PersonAccess
     */
    deleted?: GroupedTimestamp;
}



/**
 * Check if a given object implements the PersonAccess interface.
 */
export function instanceOfPersonAccess(value: object): value is PersonAccess {
    return true;
}

export function PersonAccessFromJSON(json: any): PersonAccess {
    return PersonAccessFromJSONTyped(json, false);
}

export function PersonAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonAccess {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'scoped': json['scoped'] == null ? undefined : PersonAccessScopedEnumFromJSON(json['scoped']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
    };
}

export function PersonAccessToJSON(json: any): PersonAccess {
    return PersonAccessToJSONTyped(json, false);
}

export function PersonAccessToJSONTyped(value?: PersonAccess | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'scoped': PersonAccessScopedEnumToJSON(value['scoped']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
    };
}

