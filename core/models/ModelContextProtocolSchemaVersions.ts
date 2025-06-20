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
import type { ModelContextProtocolSchemaVersion } from './ModelContextProtocolSchemaVersion';
import {
    ModelContextProtocolSchemaVersionFromJSON,
    ModelContextProtocolSchemaVersionFromJSONTyped,
    ModelContextProtocolSchemaVersionToJSON,
    ModelContextProtocolSchemaVersionToJSONTyped,
} from './ModelContextProtocolSchemaVersion';

/**
 * This is the request body that will return all the support schemas
 * @export
 * @interface ModelContextProtocolSchemaVersions
 */
export interface ModelContextProtocolSchemaVersions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ModelContextProtocolSchemaVersions
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is a singular version for MCP
     * @type {Array<ModelContextProtocolSchemaVersion>}
     * @memberof ModelContextProtocolSchemaVersions
     */
    iterable: Array<ModelContextProtocolSchemaVersion>;
}

/**
 * Check if a given object implements the ModelContextProtocolSchemaVersions interface.
 */
export function instanceOfModelContextProtocolSchemaVersions(value: object): value is ModelContextProtocolSchemaVersions {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function ModelContextProtocolSchemaVersionsFromJSON(json: any): ModelContextProtocolSchemaVersions {
    return ModelContextProtocolSchemaVersionsFromJSONTyped(json, false);
}

export function ModelContextProtocolSchemaVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelContextProtocolSchemaVersions {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ModelContextProtocolSchemaVersionFromJSON)),
    };
}

export function ModelContextProtocolSchemaVersionsToJSON(json: any): ModelContextProtocolSchemaVersions {
    return ModelContextProtocolSchemaVersionsToJSONTyped(json, false);
}

export function ModelContextProtocolSchemaVersionsToJSONTyped(value?: ModelContextProtocolSchemaVersions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ModelContextProtocolSchemaVersionToJSON)),
    };
}

