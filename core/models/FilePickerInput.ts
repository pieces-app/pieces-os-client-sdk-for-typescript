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
 * This is the input model for the FilePicker
 * @export
 * @interface FilePickerInput
 */
export interface FilePickerInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FilePickerInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<string>}
     * @memberof FilePickerInput
     */
    allowedExtensions?: Array<string>;
    /**
     * default behavior is set to true
     * @type {boolean}
     * @memberof FilePickerInput
     */
    allowMultiple?: boolean;
}

/**
 * Check if a given object implements the FilePickerInput interface.
 */
export function instanceOfFilePickerInput(value: object): value is FilePickerInput {
    return true;
}

export function FilePickerInputFromJSON(json: any): FilePickerInput {
    return FilePickerInputFromJSONTyped(json, false);
}

export function FilePickerInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilePickerInput {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'allowedExtensions': json['allowedExtensions'] == null ? undefined : json['allowedExtensions'],
        'allowMultiple': json['allowMultiple'] == null ? undefined : json['allowMultiple'],
    };
}

export function FilePickerInputToJSON(json: any): FilePickerInput {
    return FilePickerInputToJSONTyped(json, false);
}

export function FilePickerInputToJSONTyped(value?: FilePickerInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'allowedExtensions': value['allowedExtensions'],
        'allowMultiple': value['allowMultiple'],
    };
}

