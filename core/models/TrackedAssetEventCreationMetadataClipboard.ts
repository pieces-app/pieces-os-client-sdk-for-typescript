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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * If an asset was created from a clipboard event
 * @export
 * @interface TrackedAssetEventCreationMetadataClipboard
 */
export interface TrackedAssetEventCreationMetadataClipboard {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventCreationMetadataClipboard
     */
    schema?: EmbeddedModelSchema;
    /**
     * Whether the clipboard was utilized via the keyboard
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataClipboard
     */
    keyboard?: boolean;
    /**
     * Whether the clipboard was extracted through a button click
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataClipboard
     */
    interaction?: boolean;
}

/**
 * Check if a given object implements the TrackedAssetEventCreationMetadataClipboard interface.
 */
export function instanceOfTrackedAssetEventCreationMetadataClipboard(value: object): value is TrackedAssetEventCreationMetadataClipboard {
    return true;
}

export function TrackedAssetEventCreationMetadataClipboardFromJSON(json: any): TrackedAssetEventCreationMetadataClipboard {
    return TrackedAssetEventCreationMetadataClipboardFromJSONTyped(json, false);
}

export function TrackedAssetEventCreationMetadataClipboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventCreationMetadataClipboard {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'keyboard': json['keyboard'] == null ? undefined : json['keyboard'],
        'interaction': json['interaction'] == null ? undefined : json['interaction'],
    };
}

export function TrackedAssetEventCreationMetadataClipboardToJSON(json: any): TrackedAssetEventCreationMetadataClipboard {
    return TrackedAssetEventCreationMetadataClipboardToJSONTyped(json, false);
}

export function TrackedAssetEventCreationMetadataClipboardToJSONTyped(value?: TrackedAssetEventCreationMetadataClipboard | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'keyboard': value['keyboard'],
        'interaction': value['interaction'],
    };
}

