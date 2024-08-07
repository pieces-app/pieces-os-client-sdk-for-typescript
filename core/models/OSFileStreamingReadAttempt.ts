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
 * 
 * @export
 * @interface OSFileStreamingReadAttempt
 */
export interface OSFileStreamingReadAttempt {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSFileStreamingReadAttempt
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof OSFileStreamingReadAttempt
     */
    path: string;
}

/**
 * Check if a given object implements the OSFileStreamingReadAttempt interface.
 */
export function instanceOfOSFileStreamingReadAttempt(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "path" in value;

    return isInstance;
}

export function OSFileStreamingReadAttemptFromJSON(json: any): OSFileStreamingReadAttempt {
    return OSFileStreamingReadAttemptFromJSONTyped(json, false);
}

export function OSFileStreamingReadAttemptFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSFileStreamingReadAttempt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'path': json['path'],
    };
}

export function OSFileStreamingReadAttemptToJSON(value?: OSFileStreamingReadAttempt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'path': value.path,
    };
}

