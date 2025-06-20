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
import type { AnnotationTypeEnum } from './AnnotationTypeEnum';
import {
    AnnotationTypeEnumFromJSON,
    AnnotationTypeEnumFromJSONTyped,
    AnnotationTypeEnumToJSON,
    AnnotationTypeEnumToJSONTyped,
} from './AnnotationTypeEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface AssetFilterPhraseOptions
 */
export interface AssetFilterPhraseOptions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetFilterPhraseOptions
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {AnnotationTypeEnum}
     * @memberof AssetFilterPhraseOptions
     */
    annotation?: AnnotationTypeEnum;
}



/**
 * Check if a given object implements the AssetFilterPhraseOptions interface.
 */
export function instanceOfAssetFilterPhraseOptions(value: object): value is AssetFilterPhraseOptions {
    return true;
}

export function AssetFilterPhraseOptionsFromJSON(json: any): AssetFilterPhraseOptions {
    return AssetFilterPhraseOptionsFromJSONTyped(json, false);
}

export function AssetFilterPhraseOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFilterPhraseOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'annotation': json['annotation'] == null ? undefined : AnnotationTypeEnumFromJSON(json['annotation']),
    };
}

export function AssetFilterPhraseOptionsToJSON(json: any): AssetFilterPhraseOptions {
    return AssetFilterPhraseOptionsToJSONTyped(json, false);
}

export function AssetFilterPhraseOptionsToJSONTyped(value?: AssetFilterPhraseOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'annotation': AnnotationTypeEnumToJSON(value['annotation']),
    };
}

