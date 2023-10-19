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
    RelevantQGPTSeeds,
    RelevantQGPTSeedsFromJSON,
    RelevantQGPTSeedsFromJSONTyped,
    RelevantQGPTSeedsToJSON,
} from './';

/**
 * This is the body input for the /code_gpt/question.
 * 
 * Note:
 * - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.
 * @export
 * @interface QGPTQuestionInput
 */
export interface QGPTQuestionInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTQuestionInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {RelevantQGPTSeeds}
     * @memberof QGPTQuestionInput
     */
    relevant: RelevantQGPTSeeds;
    /**
     * This is the user asked question.
     * @type {string}
     * @memberof QGPTQuestionInput
     */
    query: string;
    /**
     * optional application id
     * @type {string}
     * @memberof QGPTQuestionInput
     */
    application?: string;
    /**
     * optional model id
     * @type {string}
     * @memberof QGPTQuestionInput
     */
    model?: string;
}

export function QGPTQuestionInputFromJSON(json: any): QGPTQuestionInput {
    return QGPTQuestionInputFromJSONTyped(json, false);
}

export function QGPTQuestionInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTQuestionInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'relevant': RelevantQGPTSeedsFromJSON(json['relevant']),
        'query': json['query'],
        'application': !exists(json, 'application') ? undefined : json['application'],
        'model': !exists(json, 'model') ? undefined : json['model'],
    };
}

export function QGPTQuestionInputToJSON(value?: QGPTQuestionInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'relevant': RelevantQGPTSeedsToJSON(value.relevant),
        'query': value.query,
        'application': value.application,
        'model': value.model,
    };
}


