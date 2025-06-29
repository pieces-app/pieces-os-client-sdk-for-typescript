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
import type { TagCategoryEnum } from './TagCategoryEnum';
import {
    TagCategoryEnumFromJSON,
    TagCategoryEnumFromJSONTyped,
    TagCategoryEnumToJSON,
    TagCategoryEnumToJSONTyped,
} from './TagCategoryEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    MechanismEnumToJSONTyped,
} from './MechanismEnum';

/**
 * This is similar to an SeededTag, where this is the minimum information of a tag, but this can get added to a seededAsset,  where you may not yet have an asset id.
 * @export
 * @interface SeededAssetTag
 */
export interface SeededAssetTag {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the text that represents the tag.
     * @type {string}
     * @memberof SeededAssetTag
     */
    text: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededAssetTag
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {TagCategoryEnum}
     * @memberof SeededAssetTag
     */
    category?: TagCategoryEnum;
}



/**
 * Check if a given object implements the SeededAssetTag interface.
 */
export function instanceOfSeededAssetTag(value: object): value is SeededAssetTag {
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function SeededAssetTagFromJSON(json: any): SeededAssetTag {
    return SeededAssetTagFromJSONTyped(json, false);
}

export function SeededAssetTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetTag {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'text': json['text'],
        'mechanism': json['mechanism'] == null ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'category': json['category'] == null ? undefined : TagCategoryEnumFromJSON(json['category']),
    };
}

export function SeededAssetTagToJSON(json: any): SeededAssetTag {
    return SeededAssetTagToJSONTyped(json, false);
}

export function SeededAssetTagToJSONTyped(value?: SeededAssetTag | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'text': value['text'],
        'mechanism': MechanismEnumToJSON(value['mechanism']),
        'category': TagCategoryEnumToJSON(value['category']),
    };
}

