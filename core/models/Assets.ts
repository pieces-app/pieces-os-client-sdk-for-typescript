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
    Asset,
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './index';

/**
 * A base class for a collection of assets and some additional meta properties. Fully Populated with Formats internally (not just uuid's).
 * @export
 * @interface Assets
 */
export interface Assets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Assets
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Asset>}
     * @memberof Assets
     */
    iterable: Array<Asset>;
    /**
     * This is a Map<String, int> where the the key is an asset id.
     * @type {{ [key: string]: number; }}
     * @memberof Assets
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Assets
     */
    score?: Score;
}

export function AssetsFromJSON(json: any): Assets {
    return AssetsFromJSONTyped(json, false);
}

export function AssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Assets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(AssetFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function AssetsToJSON(value?: Assets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(AssetToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}


