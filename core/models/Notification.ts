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
 * config model for notification invoking
 * @export
 * @interface Notification
 */
export interface Notification {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Notification
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof Notification
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof Notification
     */
    payload?: string;
}

/**
 * Check if a given object implements the Notification interface.
 */
export function instanceOfNotification(value: object): value is Notification {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function NotificationFromJSON(json: any): Notification {
    return NotificationFromJSONTyped(json, false);
}

export function NotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notification {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'title': json['title'] == null ? undefined : json['title'],
        'message': json['message'] == null ? undefined : json['message'],
        'payload': json['payload'] == null ? undefined : json['payload'],
    };
}

export function NotificationToJSON(json: any): Notification {
    return NotificationToJSONTyped(json, false);
}

export function NotificationToJSONTyped(value?: Notification | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'title': value['title'],
        'message': value['message'],
        'payload': value['payload'],
    };
}

