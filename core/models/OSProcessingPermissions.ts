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

/**
 * These are the permissions relating to the vision models.
 * @export
 * @interface OSProcessingPermissions
 */
export interface OSProcessingPermissions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSProcessingPermissions
     */
    schema?: EmbeddedModelSchema;
    /**
     * if true it is granted, if not then it is not granted.
     * @type {boolean}
     * @memberof OSProcessingPermissions
     */
    vision?: boolean;
    /**
     * if true it is granted, if not then it is not granted.
     * @type {boolean}
     * @memberof OSProcessingPermissions
     */
    accessibility?: boolean;
}

/**
 * Check if a given object implements the OSProcessingPermissions interface.
 */
export function instanceOfOSProcessingPermissions(value: object): value is OSProcessingPermissions {
    return true;
}

export function OSProcessingPermissionsFromJSON(json: any): OSProcessingPermissions {
    return OSProcessingPermissionsFromJSONTyped(json, false);
}

export function OSProcessingPermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSProcessingPermissions {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'vision': json['vision'] == null ? undefined : json['vision'],
        'accessibility': json['accessibility'] == null ? undefined : json['accessibility'],
    };
}

export function OSProcessingPermissionsToJSON(json: any): OSProcessingPermissions {
    return OSProcessingPermissionsToJSONTyped(json, false);
}

export function OSProcessingPermissionsToJSONTyped(value?: OSProcessingPermissions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'vision': value['vision'],
        'accessibility': value['accessibility'],
    };
}

