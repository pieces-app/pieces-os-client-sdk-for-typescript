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
 * This is a specific model to encapsulate nativeOCR(previously named WorkflowMapping) data from the LTM(used within the WorkstreamEvent.
 * @export
 * @interface NativeOCR
 */
export interface NativeOCR {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof NativeOCR
     */
    schema?: EmbeddedModelSchema;
    /**
     * The OCR text extracted.
     * @type {string}
     * @memberof NativeOCR
     */
    ocrText: string;
    /**
     * The hash of the OCR text.
     * @type {string}
     * @memberof NativeOCR
     */
    ocrTextHash: string;
    /**
     * The title of the application.
     * @type {string}
     * @memberof NativeOCR
     */
    appTitle: string;
    /**
     * The title of the window.
     * @type {string}
     * @memberof NativeOCR
     */
    windowTitle: string;
    /**
     * The URL of the browser.
     * @type {string}
     * @memberof NativeOCR
     */
    browserUrl?: string;
    /**
     * Indicates whether the workflow mapping is merged.
     * @type {boolean}
     * @memberof NativeOCR
     */
    isMerged: boolean;
    /**
     * Indicates whether the workflow mapping is cached.
     * @type {boolean}
     * @memberof NativeOCR
     */
    isCached: boolean;
    /**
     * Optional unique name for the embedding model.
     * @type {string}
     * @memberof NativeOCR
     */
    embeddingModelUniqueName?: string;
}

/**
 * Check if a given object implements the NativeOCR interface.
 */
export function instanceOfNativeOCR(value: object): value is NativeOCR {
    if (!('ocrText' in value) || value['ocrText'] === undefined) return false;
    if (!('ocrTextHash' in value) || value['ocrTextHash'] === undefined) return false;
    if (!('appTitle' in value) || value['appTitle'] === undefined) return false;
    if (!('windowTitle' in value) || value['windowTitle'] === undefined) return false;
    if (!('isMerged' in value) || value['isMerged'] === undefined) return false;
    if (!('isCached' in value) || value['isCached'] === undefined) return false;
    return true;
}

export function NativeOCRFromJSON(json: any): NativeOCR {
    return NativeOCRFromJSONTyped(json, false);
}

export function NativeOCRFromJSONTyped(json: any, ignoreDiscriminator: boolean): NativeOCR {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ocrText': json['ocrText'],
        'ocrTextHash': json['ocrTextHash'],
        'appTitle': json['appTitle'],
        'windowTitle': json['windowTitle'],
        'browserUrl': json['browserUrl'] == null ? undefined : json['browserUrl'],
        'isMerged': json['isMerged'],
        'isCached': json['isCached'],
        'embeddingModelUniqueName': json['embeddingModelUniqueName'] == null ? undefined : json['embeddingModelUniqueName'],
    };
}

export function NativeOCRToJSON(json: any): NativeOCR {
    return NativeOCRToJSONTyped(json, false);
}

export function NativeOCRToJSONTyped(value?: NativeOCR | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'ocrText': value['ocrText'],
        'ocrTextHash': value['ocrTextHash'],
        'appTitle': value['appTitle'],
        'windowTitle': value['windowTitle'],
        'browserUrl': value['browserUrl'],
        'isMerged': value['isMerged'],
        'isCached': value['isCached'],
        'embeddingModelUniqueName': value['embeddingModelUniqueName'],
    };
}

