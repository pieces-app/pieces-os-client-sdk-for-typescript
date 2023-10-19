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
/**
 * 
 * @export
 * @interface VersionSyncResponse
 */
export interface VersionSyncResponse {
    /**
     * a template for semantic versioning system
     * @type {string}
     * @memberof VersionSyncResponse
     */
    serVer: string;
    /**
     * a template for semantic versioning system
     * @type {string}
     * @memberof VersionSyncResponse
     */
    minVer: string;
}

export function VersionSyncResponseFromJSON(json: any): VersionSyncResponse {
    return VersionSyncResponseFromJSONTyped(json, false);
}

export function VersionSyncResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionSyncResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serVer': json['serVer'],
        'minVer': json['minVer'],
    };
}

export function VersionSyncResponseToJSON(value?: VersionSyncResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serVer': value.serVer,
        'minVer': value.minVer,
    };
}


