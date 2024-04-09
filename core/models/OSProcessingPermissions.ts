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
    /**
     * if true it is granted, if not then it is not granted.
     * @type {boolean}
     * @memberof OSProcessingPermissions
     */
    screenRecording?: boolean;
}

/**
 * Check if a given object implements the OSProcessingPermissions interface.
 */
export function instanceOfOSProcessingPermissions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OSProcessingPermissionsFromJSON(json: any): OSProcessingPermissions {
    return OSProcessingPermissionsFromJSONTyped(json, false);
}

export function OSProcessingPermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSProcessingPermissions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'vision': !exists(json, 'vision') ? undefined : json['vision'],
        'accessibility': !exists(json, 'accessibility') ? undefined : json['accessibility'],
        'screenRecording': !exists(json, 'screen_recording') ? undefined : json['screen_recording'],
    };
}

export function OSProcessingPermissionsToJSON(value?: OSProcessingPermissions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'vision': value.vision,
        'accessibility': value.accessibility,
        'screen_recording': value.screenRecording,
    };
}

