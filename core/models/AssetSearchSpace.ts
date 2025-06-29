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
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedAssetsToJSONTyped,
} from './FlattenedAssets';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * This is provided search spaces, This is a provided assets, TODO in the future we might want to add seeds.
 * @export
 * @interface AssetSearchSpace
 */
export interface AssetSearchSpace {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetSearchSpace
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof AssetSearchSpace
     */
    identifers: FlattenedAssets;
}

/**
 * Check if a given object implements the AssetSearchSpace interface.
 */
export function instanceOfAssetSearchSpace(value: object): value is AssetSearchSpace {
    if (!('identifers' in value) || value['identifers'] === undefined) return false;
    return true;
}

export function AssetSearchSpaceFromJSON(json: any): AssetSearchSpace {
    return AssetSearchSpaceFromJSONTyped(json, false);
}

export function AssetSearchSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetSearchSpace {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'identifers': FlattenedAssetsFromJSON(json['identifers']),
    };
}

export function AssetSearchSpaceToJSON(json: any): AssetSearchSpace {
    return AssetSearchSpaceToJSONTyped(json, false);
}

export function AssetSearchSpaceToJSONTyped(value?: AssetSearchSpace | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'identifers': FlattenedAssetsToJSON(value['identifers']),
    };
}

