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
import type { FlattenedUserProfile } from './FlattenedUserProfile';
import {
    FlattenedUserProfileFromJSON,
    FlattenedUserProfileFromJSONTyped,
    FlattenedUserProfileToJSON,
    FlattenedUserProfileToJSONTyped,
} from './FlattenedUserProfile';

/**
 * This is a pre-created accessor that simply takes an os id and an optional user(flattened)
 * @export
 * @interface SeededAccessor
 */
export interface SeededAccessor {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAccessor
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is an os id.
     * @type {string}
     * @memberof SeededAccessor
     */
    os: string;
    /**
     * 
     * @type {FlattenedUserProfile}
     * @memberof SeededAccessor
     */
    user?: FlattenedUserProfile;
    /**
     * this is the share that the asset is apart of.
     * @type {string}
     * @memberof SeededAccessor
     */
    share: string;
}

/**
 * Check if a given object implements the SeededAccessor interface.
 */
export function instanceOfSeededAccessor(value: object): value is SeededAccessor {
    if (!('os' in value) || value['os'] === undefined) return false;
    if (!('share' in value) || value['share'] === undefined) return false;
    return true;
}

export function SeededAccessorFromJSON(json: any): SeededAccessor {
    return SeededAccessorFromJSONTyped(json, false);
}

export function SeededAccessorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAccessor {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'os': json['os'],
        'user': json['user'] == null ? undefined : FlattenedUserProfileFromJSON(json['user']),
        'share': json['share'],
    };
}

export function SeededAccessorToJSON(json: any): SeededAccessor {
    return SeededAccessorToJSONTyped(json, false);
}

export function SeededAccessorToJSONTyped(value?: SeededAccessor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'os': value['os'],
        'user': FlattenedUserProfileToJSON(value['user']),
        'share': value['share'],
    };
}

