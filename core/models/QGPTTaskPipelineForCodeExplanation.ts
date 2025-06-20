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
 * This task is for explaining a bit of code.
 * 
 * This is a class so that we can add optional properties in the future.
 * 
 * Note: the snippet && language that needs to be explaned should be within the QGPTQuestionInput.relevant
 * @export
 * @interface QGPTTaskPipelineForCodeExplanation
 */
export interface QGPTTaskPipelineForCodeExplanation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipelineForCodeExplanation
     */
    schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the QGPTTaskPipelineForCodeExplanation interface.
 */
export function instanceOfQGPTTaskPipelineForCodeExplanation(value: object): value is QGPTTaskPipelineForCodeExplanation {
    return true;
}

export function QGPTTaskPipelineForCodeExplanationFromJSON(json: any): QGPTTaskPipelineForCodeExplanation {
    return QGPTTaskPipelineForCodeExplanationFromJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeExplanationFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipelineForCodeExplanation {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function QGPTTaskPipelineForCodeExplanationToJSON(json: any): QGPTTaskPipelineForCodeExplanation {
    return QGPTTaskPipelineForCodeExplanationToJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeExplanationToJSONTyped(value?: QGPTTaskPipelineForCodeExplanation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
    };
}

