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
import type { UserProfile } from './UserProfile';
import {
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
    UserProfileToJSONTyped,
} from './UserProfile';
import type { Health } from './Health';
import {
    HealthFromJSON,
    HealthFromJSONTyped,
    HealthToJSON,
    HealthToJSONTyped,
} from './Health';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ApplicationToJSONTyped,
} from './Application';

/**
 * A Context that is returned from almost all calls to the ContextAPI
 * @export
 * @interface Context
 */
export interface Context {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Context
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment's anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os
     * @type {string}
     * @memberof Context
     */
    os: string;
    /**
     * 
     * @type {Application}
     * @memberof Context
     */
    application: Application;
    /**
     * 
     * @type {Health}
     * @memberof Context
     */
    health: Health;
    /**
     * 
     * @type {UserProfile}
     * @memberof Context
     */
    user?: UserProfile;
}

/**
 * Check if a given object implements the Context interface.
 */
export function instanceOfContext(value: object): value is Context {
    if (!('os' in value) || value['os'] === undefined) return false;
    if (!('application' in value) || value['application'] === undefined) return false;
    if (!('health' in value) || value['health'] === undefined) return false;
    return true;
}

export function ContextFromJSON(json: any): Context {
    return ContextFromJSONTyped(json, false);
}

export function ContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Context {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'os': json['os'],
        'application': ApplicationFromJSON(json['application']),
        'health': HealthFromJSON(json['health']),
        'user': json['user'] == null ? undefined : UserProfileFromJSON(json['user']),
    };
}

export function ContextToJSON(json: any): Context {
    return ContextToJSONTyped(json, false);
}

export function ContextToJSONTyped(value?: Context | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'os': value['os'],
        'application': ApplicationToJSON(value['application']),
        'health': HealthToJSON(value['health']),
        'user': UserProfileToJSON(value['user']),
    };
}

