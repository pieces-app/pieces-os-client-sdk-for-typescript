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
import type { TextuallyExtractedMaterial } from './TextuallyExtractedMaterial';
import {
    TextuallyExtractedMaterialFromJSON,
    TextuallyExtractedMaterialFromJSONTyped,
    TextuallyExtractedMaterialToJSON,
    TextuallyExtractedMaterialToJSONTyped,
} from './TextuallyExtractedMaterial';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { TransferableString } from './TransferableString';
import {
    TransferableStringFromJSON,
    TransferableStringFromJSONTyped,
    TransferableStringToJSON,
    TransferableStringToJSONTyped,
} from './TransferableString';

/**
 * note: we could add a summarize property.
 * TODO: might need an extracted bool to say to aggregate the extracted
 * @export
 * @interface WorkstreamPatternEngineVisionEventTextualValue
 */
export interface WorkstreamPatternEngineVisionEventTextualValue {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamPatternEngineVisionEventTextualValue
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TransferableString}
     * @memberof WorkstreamPatternEngineVisionEventTextualValue
     */
    ocr?: TransferableString;
    /**
     * 
     * @type {TextuallyExtractedMaterial}
     * @memberof WorkstreamPatternEngineVisionEventTextualValue
     */
    extracted?: TextuallyExtractedMaterial;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionEventTextualValue interface.
 */
export function instanceOfWorkstreamPatternEngineVisionEventTextualValue(value: object): value is WorkstreamPatternEngineVisionEventTextualValue {
    return true;
}

export function WorkstreamPatternEngineVisionEventTextualValueFromJSON(json: any): WorkstreamPatternEngineVisionEventTextualValue {
    return WorkstreamPatternEngineVisionEventTextualValueFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionEventTextualValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamPatternEngineVisionEventTextualValue {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ocr': json['ocr'] == null ? undefined : TransferableStringFromJSON(json['ocr']),
        'extracted': json['extracted'] == null ? undefined : TextuallyExtractedMaterialFromJSON(json['extracted']),
    };
}

export function WorkstreamPatternEngineVisionEventTextualValueToJSON(json: any): WorkstreamPatternEngineVisionEventTextualValue {
    return WorkstreamPatternEngineVisionEventTextualValueToJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionEventTextualValueToJSONTyped(value?: WorkstreamPatternEngineVisionEventTextualValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'ocr': TransferableStringToJSON(value['ocr']),
        'extracted': TextuallyExtractedMaterialToJSON(value['extracted']),
    };
}

