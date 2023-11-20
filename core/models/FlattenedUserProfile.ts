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
} from './index';

/**
 * This is a FlattenedUserProfile that includes information that is not sensative in relation to a user.
 * @export
 * @interface FlattenedUserProfile
 */
export interface FlattenedUserProfile {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedUserProfile
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the uuid that identifies a user.
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    vanityname?: string;
}

export function FlattenedUserProfileFromJSON(json: any): FlattenedUserProfile {
    return FlattenedUserProfileFromJSONTyped(json, false);
}

export function FlattenedUserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedUserProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'vanityname': !exists(json, 'vanityname') ? undefined : json['vanityname'],
    };
}

export function FlattenedUserProfileToJSON(value?: FlattenedUserProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'email': value.email,
        'name': value.name,
        'username': value.username,
        'picture': value.picture,
        'vanityname': value.vanityname,
    };
}


