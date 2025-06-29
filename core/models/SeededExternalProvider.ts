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
import type { ExternalProviderTypeEnum } from './ExternalProviderTypeEnum';
import {
    ExternalProviderTypeEnumFromJSON,
    ExternalProviderTypeEnumFromJSONTyped,
    ExternalProviderTypeEnumToJSON,
    ExternalProviderTypeEnumToJSONTyped,
} from './ExternalProviderTypeEnum';

/**
 * This is the minimum information needed to connect an additional provider.
 * @export
 * @interface SeededExternalProvider
 */
export interface SeededExternalProvider {
    /**
     * 
     * @type {ExternalProviderTypeEnum}
     * @memberof SeededExternalProvider
     */
    type: ExternalProviderTypeEnum;
}



/**
 * Check if a given object implements the SeededExternalProvider interface.
 */
export function instanceOfSeededExternalProvider(value: object): value is SeededExternalProvider {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function SeededExternalProviderFromJSON(json: any): SeededExternalProvider {
    return SeededExternalProviderFromJSONTyped(json, false);
}

export function SeededExternalProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededExternalProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'type': ExternalProviderTypeEnumFromJSON(json['type']),
    };
}

export function SeededExternalProviderToJSON(json: any): SeededExternalProvider {
    return SeededExternalProviderToJSONTyped(json, false);
}

export function SeededExternalProviderToJSONTyped(value?: SeededExternalProvider | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': ExternalProviderTypeEnumToJSON(value['type']),
    };
}

