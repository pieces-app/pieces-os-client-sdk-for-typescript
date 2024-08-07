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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { LanguageServerProtocolCode } from './LanguageServerProtocolCode';
import {
    LanguageServerProtocolCodeFromJSON,
    LanguageServerProtocolCodeFromJSONTyped,
    LanguageServerProtocolCodeToJSON,
} from './LanguageServerProtocolCode';
import type { LanguageServerProtocolCodeDescription } from './LanguageServerProtocolCodeDescription';
import {
    LanguageServerProtocolCodeDescriptionFromJSON,
    LanguageServerProtocolCodeDescriptionFromJSONTyped,
    LanguageServerProtocolCodeDescriptionToJSON,
} from './LanguageServerProtocolCodeDescription';
import type { LanguageServerProtocolLocationRange } from './LanguageServerProtocolLocationRange';
import {
    LanguageServerProtocolLocationRangeFromJSON,
    LanguageServerProtocolLocationRangeFromJSONTyped,
    LanguageServerProtocolLocationRangeToJSON,
} from './LanguageServerProtocolLocationRange';
import type { LanguageServerProtocolSeverityEnum } from './LanguageServerProtocolSeverityEnum';
import {
    LanguageServerProtocolSeverityEnumFromJSON,
    LanguageServerProtocolSeverityEnumFromJSONTyped,
    LanguageServerProtocolSeverityEnumToJSON,
} from './LanguageServerProtocolSeverityEnum';

/**
 * TODO
 * @export
 * @interface LanguageServerProtocolDiagnostic
 */
export interface LanguageServerProtocolDiagnostic {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof LanguageServerProtocolDiagnostic
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {LanguageServerProtocolLocationRange}
     * @memberof LanguageServerProtocolDiagnostic
     */
    range: LanguageServerProtocolLocationRange;
    /**
     * 
     * @type {LanguageServerProtocolSeverityEnum}
     * @memberof LanguageServerProtocolDiagnostic
     */
    severity?: LanguageServerProtocolSeverityEnum;
    /**
     * 
     * @type {LanguageServerProtocolCode}
     * @memberof LanguageServerProtocolDiagnostic
     */
    code?: LanguageServerProtocolCode;
    /**
     * 
     * @type {LanguageServerProtocolCodeDescription}
     * @memberof LanguageServerProtocolDiagnostic
     */
    codeDescription?: LanguageServerProtocolCodeDescription;
    /**
     * 
     * @type {string}
     * @memberof LanguageServerProtocolDiagnostic
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageServerProtocolDiagnostic
     */
    message: string;
}

/**
 * Check if a given object implements the LanguageServerProtocolDiagnostic interface.
 */
export function instanceOfLanguageServerProtocolDiagnostic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "range" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function LanguageServerProtocolDiagnosticFromJSON(json: any): LanguageServerProtocolDiagnostic {
    return LanguageServerProtocolDiagnosticFromJSONTyped(json, false);
}

export function LanguageServerProtocolDiagnosticFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageServerProtocolDiagnostic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'range': LanguageServerProtocolLocationRangeFromJSON(json['range']),
        'severity': !exists(json, 'severity') ? undefined : LanguageServerProtocolSeverityEnumFromJSON(json['severity']),
        'code': !exists(json, 'code') ? undefined : LanguageServerProtocolCodeFromJSON(json['code']),
        'codeDescription': !exists(json, 'codeDescription') ? undefined : LanguageServerProtocolCodeDescriptionFromJSON(json['codeDescription']),
        'source': !exists(json, 'source') ? undefined : json['source'],
        'message': json['message'],
    };
}

export function LanguageServerProtocolDiagnosticToJSON(value?: LanguageServerProtocolDiagnostic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'range': LanguageServerProtocolLocationRangeToJSON(value.range),
        'severity': LanguageServerProtocolSeverityEnumToJSON(value.severity),
        'code': LanguageServerProtocolCodeToJSON(value.code),
        'codeDescription': LanguageServerProtocolCodeDescriptionToJSON(value.codeDescription),
        'source': value.source,
        'message': value.message,
    };
}

