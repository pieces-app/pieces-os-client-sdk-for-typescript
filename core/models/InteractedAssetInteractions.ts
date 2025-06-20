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
/**
 * 
 * @export
 * @interface InteractedAssetInteractions
 */
export interface InteractedAssetInteractions {
    /**
     * https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @type {string}
     * @memberof InteractedAssetInteractions
     */
    viewed: string;
    /**
     * If the user touched or panned over the asset.
     * @type {boolean}
     * @memberof InteractedAssetInteractions
     */
    touched?: boolean;
    /**
     * If the user scrolled over the asset.
     * @type {boolean}
     * @memberof InteractedAssetInteractions
     */
    scrolled?: boolean;
}

/**
 * Check if a given object implements the InteractedAssetInteractions interface.
 */
export function instanceOfInteractedAssetInteractions(value: object): value is InteractedAssetInteractions {
    if (!('viewed' in value) || value['viewed'] === undefined) return false;
    return true;
}

export function InteractedAssetInteractionsFromJSON(json: any): InteractedAssetInteractions {
    return InteractedAssetInteractionsFromJSONTyped(json, false);
}

export function InteractedAssetInteractionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InteractedAssetInteractions {
    if (json == null) {
        return json;
    }
    return {
        
        'viewed': json['viewed'],
        'touched': json['touched'] == null ? undefined : json['touched'],
        'scrolled': json['scrolled'] == null ? undefined : json['scrolled'],
    };
}

export function InteractedAssetInteractionsToJSON(json: any): InteractedAssetInteractions {
    return InteractedAssetInteractionsToJSONTyped(json, false);
}

export function InteractedAssetInteractionsToJSONTyped(value?: InteractedAssetInteractions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'viewed': value['viewed'],
        'touched': value['touched'],
        'scrolled': value['scrolled'],
    };
}

