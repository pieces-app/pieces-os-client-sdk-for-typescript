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
import type { WorkstreamPatternEngineSourceWindow } from './WorkstreamPatternEngineSourceWindow';
import {
    WorkstreamPatternEngineSourceWindowFromJSON,
    WorkstreamPatternEngineSourceWindowFromJSONTyped,
    WorkstreamPatternEngineSourceWindowToJSON,
    WorkstreamPatternEngineSourceWindowToJSONTyped,
} from './WorkstreamPatternEngineSourceWindow';

/**
 * TODO
 * @export
 * @interface SearchedWorkstreamPatternEngineSourceWindow
 */
export interface SearchedWorkstreamPatternEngineSourceWindow {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedWorkstreamPatternEngineSourceWindow
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {WorkstreamPatternEngineSourceWindow}
     * @memberof SearchedWorkstreamPatternEngineSourceWindow
     */
    workstreamPatternEngineSourceWindow?: WorkstreamPatternEngineSourceWindow;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedWorkstreamPatternEngineSourceWindow
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedWorkstreamPatternEngineSourceWindow
     */
    similarity: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedWorkstreamPatternEngineSourceWindow
     */
    temporal?: boolean;
    /**
     * This is the uuid of the source.
     * @type {string}
     * @memberof SearchedWorkstreamPatternEngineSourceWindow
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedWorkstreamPatternEngineSourceWindow interface.
 */
export function instanceOfSearchedWorkstreamPatternEngineSourceWindow(value: object): value is SearchedWorkstreamPatternEngineSourceWindow {
    if (!('exact' in value) || value['exact'] === undefined) return false;
    if (!('similarity' in value) || value['similarity'] === undefined) return false;
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    return true;
}

export function SearchedWorkstreamPatternEngineSourceWindowFromJSON(json: any): SearchedWorkstreamPatternEngineSourceWindow {
    return SearchedWorkstreamPatternEngineSourceWindowFromJSONTyped(json, false);
}

export function SearchedWorkstreamPatternEngineSourceWindowFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedWorkstreamPatternEngineSourceWindow {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'workstreamPatternEngineSourceWindow': json['workstreamPatternEngineSourceWindow'] == null ? undefined : WorkstreamPatternEngineSourceWindowFromJSON(json['workstreamPatternEngineSourceWindow']),
        'exact': json['exact'],
        'similarity': json['similarity'],
        'temporal': json['temporal'] == null ? undefined : json['temporal'],
        'identifier': json['identifier'],
    };
}

export function SearchedWorkstreamPatternEngineSourceWindowToJSON(json: any): SearchedWorkstreamPatternEngineSourceWindow {
    return SearchedWorkstreamPatternEngineSourceWindowToJSONTyped(json, false);
}

export function SearchedWorkstreamPatternEngineSourceWindowToJSONTyped(value?: SearchedWorkstreamPatternEngineSourceWindow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'workstreamPatternEngineSourceWindow': WorkstreamPatternEngineSourceWindowToJSON(value['workstreamPatternEngineSourceWindow']),
        'exact': value['exact'],
        'similarity': value['similarity'],
        'temporal': value['temporal'],
        'identifier': value['identifier'],
    };
}

