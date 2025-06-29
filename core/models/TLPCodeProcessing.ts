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
import type { TLPCodeDirectoryAnalytics } from './TLPCodeDirectoryAnalytics';
import {
    TLPCodeDirectoryAnalyticsFromJSON,
    TLPCodeDirectoryAnalyticsFromJSONTyped,
    TLPCodeDirectoryAnalyticsToJSON,
    TLPCodeDirectoryAnalyticsToJSONTyped,
} from './TLPCodeDirectoryAnalytics';
import type { TLPCodeFileAnalytics } from './TLPCodeFileAnalytics';
import {
    TLPCodeFileAnalyticsFromJSON,
    TLPCodeFileAnalyticsFromJSONTyped,
    TLPCodeFileAnalyticsToJSON,
    TLPCodeFileAnalyticsToJSONTyped,
} from './TLPCodeFileAnalytics';
import type { TLPCodeSnippetAnalytics } from './TLPCodeSnippetAnalytics';
import {
    TLPCodeSnippetAnalyticsFromJSON,
    TLPCodeSnippetAnalyticsFromJSONTyped,
    TLPCodeSnippetAnalyticsToJSON,
    TLPCodeSnippetAnalyticsToJSONTyped,
} from './TLPCodeSnippetAnalytics';
import type { TLPCodeRepositoryAnalytics } from './TLPCodeRepositoryAnalytics';
import {
    TLPCodeRepositoryAnalyticsFromJSON,
    TLPCodeRepositoryAnalyticsFromJSONTyped,
    TLPCodeRepositoryAnalyticsToJSON,
    TLPCodeRepositoryAnalyticsToJSONTyped,
} from './TLPCodeRepositoryAnalytics';

/**
 * 
 * @export
 * @interface TLPCodeProcessing
 */
export interface TLPCodeProcessing {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeProcessing
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeSnippetAnalytics}
     * @memberof TLPCodeProcessing
     */
    fragment?: TLPCodeSnippetAnalytics;
    /**
     * 
     * @type {TLPCodeFileAnalytics}
     * @memberof TLPCodeProcessing
     */
    file?: TLPCodeFileAnalytics;
    /**
     * 
     * @type {TLPCodeDirectoryAnalytics}
     * @memberof TLPCodeProcessing
     */
    directory?: TLPCodeDirectoryAnalytics;
    /**
     * 
     * @type {TLPCodeRepositoryAnalytics}
     * @memberof TLPCodeProcessing
     */
    repository?: TLPCodeRepositoryAnalytics;
}

/**
 * Check if a given object implements the TLPCodeProcessing interface.
 */
export function instanceOfTLPCodeProcessing(value: object): value is TLPCodeProcessing {
    return true;
}

export function TLPCodeProcessingFromJSON(json: any): TLPCodeProcessing {
    return TLPCodeProcessingFromJSONTyped(json, false);
}

export function TLPCodeProcessingFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeProcessing {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'fragment': json['fragment'] == null ? undefined : TLPCodeSnippetAnalyticsFromJSON(json['fragment']),
        'file': json['file'] == null ? undefined : TLPCodeFileAnalyticsFromJSON(json['file']),
        'directory': json['directory'] == null ? undefined : TLPCodeDirectoryAnalyticsFromJSON(json['directory']),
        'repository': json['repository'] == null ? undefined : TLPCodeRepositoryAnalyticsFromJSON(json['repository']),
    };
}

export function TLPCodeProcessingToJSON(json: any): TLPCodeProcessing {
    return TLPCodeProcessingToJSONTyped(json, false);
}

export function TLPCodeProcessingToJSONTyped(value?: TLPCodeProcessing | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'fragment': TLPCodeSnippetAnalyticsToJSON(value['fragment']),
        'file': TLPCodeFileAnalyticsToJSON(value['file']),
        'directory': TLPCodeDirectoryAnalyticsToJSON(value['directory']),
        'repository': TLPCodeRepositoryAnalyticsToJSON(value['repository']),
    };
}

