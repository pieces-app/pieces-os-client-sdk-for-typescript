/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
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
    TLPCodeSnippetTagifyCode,
    TLPCodeSnippetTagifyCodeFromJSON,
    TLPCodeSnippetTagifyCodeFromJSONTyped,
    TLPCodeSnippetTagifyCodeToJSON,
} from './';

/**
 * 
 * @export
 * @interface TLPCodeFragmentTagify
 */
export interface TLPCodeFragmentTagify {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentTagify
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeSnippetTagifyCode}
     * @memberof TLPCodeFragmentTagify
     */
    code?: TLPCodeSnippetTagifyCode;
}

export function TLPCodeFragmentTagifyFromJSON(json: any): TLPCodeFragmentTagify {
    return TLPCodeFragmentTagifyFromJSONTyped(json, false);
}

export function TLPCodeFragmentTagifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentTagify {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'code': !exists(json, 'code') ? undefined : TLPCodeSnippetTagifyCodeFromJSON(json['code']),
    };
}

export function TLPCodeFragmentTagifyToJSON(value?: TLPCodeFragmentTagify | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'code': TLPCodeSnippetTagifyCodeToJSON(value.code),
    };
}

