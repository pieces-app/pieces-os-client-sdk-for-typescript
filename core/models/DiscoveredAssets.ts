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
import type { DiscoveredAsset } from './DiscoveredAsset';
import {
    DiscoveredAssetFromJSON,
    DiscoveredAssetFromJSONTyped,
    DiscoveredAssetToJSON,
    DiscoveredAssetToJSONTyped,
} from './DiscoveredAsset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * This is a plural Model that is used within the bulk upload flow in both cases of a file(&& needing snippitization) as well as if the fragments are passed in and they only need to be clustered.
 * @export
 * @interface DiscoveredAssets
 */
export interface DiscoveredAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * application id.
     * @type {string}
     * @memberof DiscoveredAssets
     */
    application: string;
    /**
     * This is an iterable of already snippitized snippets that have been clustered.(These are assets that are going to be uploaded or at minimum the assets that we reccommend to upload)
     * @type {Array<DiscoveredAsset>}
     * @memberof DiscoveredAssets
     */
    iterable: Array<DiscoveredAsset>;
}

/**
 * Check if a given object implements the DiscoveredAssets interface.
 */
export function instanceOfDiscoveredAssets(value: object): value is DiscoveredAssets {
    if (!('application' in value) || value['application'] === undefined) return false;
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function DiscoveredAssetsFromJSON(json: any): DiscoveredAssets {
    return DiscoveredAssetsFromJSONTyped(json, false);
}

export function DiscoveredAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredAssets {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'application': json['application'],
        'iterable': ((json['iterable'] as Array<any>).map(DiscoveredAssetFromJSON)),
    };
}

export function DiscoveredAssetsToJSON(json: any): DiscoveredAssets {
    return DiscoveredAssetsToJSONTyped(json, false);
}

export function DiscoveredAssetsToJSONTyped(value?: DiscoveredAssets | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'application': value['application'],
        'iterable': ((value['iterable'] as Array<any>).map(DiscoveredAssetToJSON)),
    };
}

