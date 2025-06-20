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
import type { LanguageServerProtocolDiagnostic } from './LanguageServerProtocolDiagnostic';
import {
    LanguageServerProtocolDiagnosticFromJSON,
    LanguageServerProtocolDiagnosticFromJSONTyped,
    LanguageServerProtocolDiagnosticToJSON,
    LanguageServerProtocolDiagnosticToJSONTyped,
} from './LanguageServerProtocolDiagnostic';

/**
 * TODO
 * @export
 * @interface LanguageServerProtocolDiagnostics
 */
export interface LanguageServerProtocolDiagnostics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof LanguageServerProtocolDiagnostics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<LanguageServerProtocolDiagnostic>}
     * @memberof LanguageServerProtocolDiagnostics
     */
    iterable: Array<LanguageServerProtocolDiagnostic>;
}

/**
 * Check if a given object implements the LanguageServerProtocolDiagnostics interface.
 */
export function instanceOfLanguageServerProtocolDiagnostics(value: object): value is LanguageServerProtocolDiagnostics {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function LanguageServerProtocolDiagnosticsFromJSON(json: any): LanguageServerProtocolDiagnostics {
    return LanguageServerProtocolDiagnosticsFromJSONTyped(json, false);
}

export function LanguageServerProtocolDiagnosticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageServerProtocolDiagnostics {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(LanguageServerProtocolDiagnosticFromJSON)),
    };
}

export function LanguageServerProtocolDiagnosticsToJSON(json: any): LanguageServerProtocolDiagnostics {
    return LanguageServerProtocolDiagnosticsToJSONTyped(json, false);
}

export function LanguageServerProtocolDiagnosticsToJSONTyped(value?: LanguageServerProtocolDiagnostics | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(LanguageServerProtocolDiagnosticToJSON)),
    };
}

