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
 * NOTE: this can me a union type here.. (integer | string;) so we need to get a bit creative
 * @export
 * @interface LanguageServerProtocolCode
 */
export interface LanguageServerProtocolCode {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof LanguageServerProtocolCode
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof LanguageServerProtocolCode
     */
    codeInteger?: number;
    /**
     * 
     * @type {string}
     * @memberof LanguageServerProtocolCode
     */
    codeString?: string;
    /**
     * This is a Map<String, String>, basically just a json object for additional data if int/string will not work
     * @type {{ [key: string]: string; }}
     * @memberof LanguageServerProtocolCode
     */
    rawJson?: { [key: string]: string; };
}

/**
 * Check if a given object implements the LanguageServerProtocolCode interface.
 */
export function instanceOfLanguageServerProtocolCode(value: object): value is LanguageServerProtocolCode {
    return true;
}

export function LanguageServerProtocolCodeFromJSON(json: any): LanguageServerProtocolCode {
    return LanguageServerProtocolCodeFromJSONTyped(json, false);
}

export function LanguageServerProtocolCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageServerProtocolCode {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'codeInteger': json['code_integer'] == null ? undefined : json['code_integer'],
        'codeString': json['code_string'] == null ? undefined : json['code_string'],
        'rawJson': json['raw_json'] == null ? undefined : json['raw_json'],
    };
}

export function LanguageServerProtocolCodeToJSON(json: any): LanguageServerProtocolCode {
    return LanguageServerProtocolCodeToJSONTyped(json, false);
}

export function LanguageServerProtocolCodeToJSONTyped(value?: LanguageServerProtocolCode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'code_integer': value['codeInteger'],
        'code_string': value['codeString'],
        'raw_json': value['rawJson'],
    };
}

