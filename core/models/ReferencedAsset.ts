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
import type { FlattenedAsset } from './FlattenedAsset';
import {
    FlattenedAssetFromJSON,
    FlattenedAssetFromJSONTyped,
    FlattenedAssetToJSON,
    FlattenedAssetToJSONTyped,
} from './FlattenedAsset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * A reference to a asset, which at minimum must have the asset's id. But in the case of a hydrated client API it may have a populated reference of type Asset.
 * @export
 * @interface ReferencedAsset
 */
export interface ReferencedAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedAsset
     */
    id: string;
    /**
     * 
     * @type {FlattenedAsset}
     * @memberof ReferencedAsset
     */
    reference?: FlattenedAsset;
}

/**
 * Check if a given object implements the ReferencedAsset interface.
 */
export function instanceOfReferencedAsset(value: object): value is ReferencedAsset {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReferencedAssetFromJSON(json: any): ReferencedAsset {
    return ReferencedAssetFromJSONTyped(json, false);
}

export function ReferencedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedAssetFromJSON(json['reference']),
    };
}

export function ReferencedAssetToJSON(json: any): ReferencedAsset {
    return ReferencedAssetToJSONTyped(json, false);
}

export function ReferencedAssetToJSONTyped(value?: ReferencedAsset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedAssetToJSON(value['reference']),
    };
}

