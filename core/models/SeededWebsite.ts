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
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './';

/**
 * This is the minimum information required to create a website for a specific asset.
 * 
 * you can optionally add an asset, format, or person id to attach this website directly to it
 * 
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededWebsite
 */
export interface SeededWebsite {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the specific asset that this website is going to get attached to!!
     * @type {string}
     * @memberof SeededWebsite
     */
    asset?: string;
    /**
     * this is the url of the website.
     * @type {string}
     * @memberof SeededWebsite
     */
    url: string;
    /**
     * name of the website.(customizable and updateable as well.)
     * @type {string}
     * @memberof SeededWebsite
     */
    name: string;
    /**
     * This is optionally here, depending on if you want to also associate this with a specific format.
     * @type {string}
     * @memberof SeededWebsite
     */
    format?: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededWebsite
     */
    mechanism?: MechanismEnum;
    /**
     * this is a uuid of a person that we are going to add the website too.
     * @type {string}
     * @memberof SeededWebsite
     */
    person?: string;
}

export function SeededWebsiteFromJSON(json: any): SeededWebsite {
    return SeededWebsiteFromJSONTyped(json, false);
}

export function SeededWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededWebsite {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': !exists(json, 'asset') ? undefined : json['asset'],
        'url': json['url'],
        'name': json['name'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'person': !exists(json, 'person') ? undefined : json['person'],
    };
}

export function SeededWebsiteToJSON(value?: SeededWebsite | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
        'url': value.url,
        'name': value.name,
        'format': value.format,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'person': value.person,
    };
}


