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
import type { WorkstreamSuggestions } from './WorkstreamSuggestions';
import {
    WorkstreamSuggestionsFromJSON,
    WorkstreamSuggestionsFromJSONTyped,
    WorkstreamSuggestionsToJSON,
    WorkstreamSuggestionsToJSONTyped,
} from './WorkstreamSuggestions';

/**
 * This will return the new refreshed suggestions, about what data changed, and the data that was used to bias the suggestions.
 * @export
 * @interface WorkstreamSuggestionsRefresh
 */
export interface WorkstreamSuggestionsRefresh {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamSuggestionsRefresh
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {WorkstreamSuggestions}
     * @memberof WorkstreamSuggestionsRefresh
     */
    suggestions: WorkstreamSuggestions;
}

/**
 * Check if a given object implements the WorkstreamSuggestionsRefresh interface.
 */
export function instanceOfWorkstreamSuggestionsRefresh(value: object): value is WorkstreamSuggestionsRefresh {
    if (!('suggestions' in value) || value['suggestions'] === undefined) return false;
    return true;
}

export function WorkstreamSuggestionsRefreshFromJSON(json: any): WorkstreamSuggestionsRefresh {
    return WorkstreamSuggestionsRefreshFromJSONTyped(json, false);
}

export function WorkstreamSuggestionsRefreshFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamSuggestionsRefresh {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'suggestions': WorkstreamSuggestionsFromJSON(json['suggestions']),
    };
}

export function WorkstreamSuggestionsRefreshToJSON(json: any): WorkstreamSuggestionsRefresh {
    return WorkstreamSuggestionsRefreshToJSONTyped(json, false);
}

export function WorkstreamSuggestionsRefreshToJSONTyped(value?: WorkstreamSuggestionsRefresh | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'suggestions': WorkstreamSuggestionsToJSON(value['suggestions']),
    };
}

