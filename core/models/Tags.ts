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
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    Tag,
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './index';

/**
 * This is a model that represents multiple Tag Models
 * @export
 * @interface Tags
 */
export interface Tags {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Tags
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Tags
     */
    iterable: Array<Tag>;
    /**
     * This is a Map<String, int> where the the key is an tag id.
     * @type {{ [key: string]: number; }}
     * @memberof Tags
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Tags
     */
    score?: Score;
}

export function TagsFromJSON(json: any): Tags {
    return TagsFromJSONTyped(json, false);
}

export function TagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(TagFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function TagsToJSON(value?: Tags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(TagToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}


