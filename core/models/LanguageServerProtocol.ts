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
import type { LanguageServerProtocolDiagnostics } from './LanguageServerProtocolDiagnostics';
import {
    LanguageServerProtocolDiagnosticsFromJSON,
    LanguageServerProtocolDiagnosticsFromJSONTyped,
    LanguageServerProtocolDiagnosticsToJSON,
    LanguageServerProtocolDiagnosticsToJSONTyped,
} from './LanguageServerProtocolDiagnostics';

/**
 * TODO
 * @export
 * @interface LanguageServerProtocol
 */
export interface LanguageServerProtocol {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof LanguageServerProtocol
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {LanguageServerProtocolDiagnostics}
     * @memberof LanguageServerProtocol
     */
    diagnostics?: LanguageServerProtocolDiagnostics;
}

/**
 * Check if a given object implements the LanguageServerProtocol interface.
 */
export function instanceOfLanguageServerProtocol(value: object): value is LanguageServerProtocol {
    return true;
}

export function LanguageServerProtocolFromJSON(json: any): LanguageServerProtocol {
    return LanguageServerProtocolFromJSONTyped(json, false);
}

export function LanguageServerProtocolFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageServerProtocol {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'diagnostics': json['diagnostics'] == null ? undefined : LanguageServerProtocolDiagnosticsFromJSON(json['diagnostics']),
    };
}

export function LanguageServerProtocolToJSON(json: any): LanguageServerProtocol {
    return LanguageServerProtocolToJSONTyped(json, false);
}

export function LanguageServerProtocolToJSONTyped(value?: LanguageServerProtocol | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'diagnostics': LanguageServerProtocolDiagnosticsToJSON(value['diagnostics']),
    };
}

