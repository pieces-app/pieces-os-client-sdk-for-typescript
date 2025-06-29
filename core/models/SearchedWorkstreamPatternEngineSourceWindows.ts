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
import type { SearchedWorkstreamPatternEngineSourceWindow } from './SearchedWorkstreamPatternEngineSourceWindow';
import {
    SearchedWorkstreamPatternEngineSourceWindowFromJSON,
    SearchedWorkstreamPatternEngineSourceWindowFromJSONTyped,
    SearchedWorkstreamPatternEngineSourceWindowToJSON,
    SearchedWorkstreamPatternEngineSourceWindowToJSONTyped,
} from './SearchedWorkstreamPatternEngineSourceWindow';

/**
 * This is the searched source windows for the workstream pattern engine
 * @export
 * @interface SearchedWorkstreamPatternEngineSourceWindows
 */
export interface SearchedWorkstreamPatternEngineSourceWindows {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedWorkstreamPatternEngineSourceWindows
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the iterable of the searched source windows
     * @type {Array<SearchedWorkstreamPatternEngineSourceWindow>}
     * @memberof SearchedWorkstreamPatternEngineSourceWindows
     */
    iterable: Array<SearchedWorkstreamPatternEngineSourceWindow>;
}

/**
 * Check if a given object implements the SearchedWorkstreamPatternEngineSourceWindows interface.
 */
export function instanceOfSearchedWorkstreamPatternEngineSourceWindows(value: object): value is SearchedWorkstreamPatternEngineSourceWindows {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function SearchedWorkstreamPatternEngineSourceWindowsFromJSON(json: any): SearchedWorkstreamPatternEngineSourceWindows {
    return SearchedWorkstreamPatternEngineSourceWindowsFromJSONTyped(json, false);
}

export function SearchedWorkstreamPatternEngineSourceWindowsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedWorkstreamPatternEngineSourceWindows {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedWorkstreamPatternEngineSourceWindowFromJSON)),
    };
}

export function SearchedWorkstreamPatternEngineSourceWindowsToJSON(json: any): SearchedWorkstreamPatternEngineSourceWindows {
    return SearchedWorkstreamPatternEngineSourceWindowsToJSONTyped(json, false);
}

export function SearchedWorkstreamPatternEngineSourceWindowsToJSONTyped(value?: SearchedWorkstreamPatternEngineSourceWindows | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(SearchedWorkstreamPatternEngineSourceWindowToJSON)),
    };
}

