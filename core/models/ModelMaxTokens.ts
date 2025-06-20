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
 * This will describe the MaxTokens for an MLModel
 * 
 * total is required.
 * 
 * iff there is a differentiator with inputs/outputs, then we can also provide those as well.
 * @export
 * @interface ModelMaxTokens
 */
export interface ModelMaxTokens {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ModelMaxTokens
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof ModelMaxTokens
     */
    total: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModelMaxTokens
     */
    input?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ModelMaxTokens
     */
    output?: number | null;
}

/**
 * Check if a given object implements the ModelMaxTokens interface.
 */
export function instanceOfModelMaxTokens(value: object): value is ModelMaxTokens {
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function ModelMaxTokensFromJSON(json: any): ModelMaxTokens {
    return ModelMaxTokensFromJSONTyped(json, false);
}

export function ModelMaxTokensFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelMaxTokens {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'total': json['total'],
        'input': json['input'] == null ? undefined : json['input'],
        'output': json['output'] == null ? undefined : json['output'],
    };
}

export function ModelMaxTokensToJSON(json: any): ModelMaxTokens {
    return ModelMaxTokensToJSONTyped(json, false);
}

export function ModelMaxTokensToJSONTyped(value?: ModelMaxTokens | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'total': value['total'],
        'input': value['input'],
        'output': value['output'],
    };
}

