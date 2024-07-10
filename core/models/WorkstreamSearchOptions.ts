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
import type { WorkstreamPatternEngineSources } from './WorkstreamPatternEngineSources';
import {
    WorkstreamPatternEngineSourcesFromJSON,
    WorkstreamPatternEngineSourcesFromJSONTyped,
    WorkstreamPatternEngineSourcesToJSON,
} from './WorkstreamPatternEngineSources';

/**
 * This is a search realted to the workstream pattern engine data,
 * for instance in a WPE/vision/search we will want to be able to search via a WorkstreamPatternEngineSource.
 * @export
 * @interface WorkstreamSearchOptions
 */
export interface WorkstreamSearchOptions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamSearchOptions
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {WorkstreamPatternEngineSources}
     * @memberof WorkstreamSearchOptions
     */
    sources?: WorkstreamPatternEngineSources;
}

/**
 * Check if a given object implements the WorkstreamSearchOptions interface.
 */
export function instanceOfWorkstreamSearchOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkstreamSearchOptionsFromJSON(json: any): WorkstreamSearchOptions {
    return WorkstreamSearchOptionsFromJSONTyped(json, false);
}

export function WorkstreamSearchOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamSearchOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'sources': !exists(json, 'sources') ? undefined : WorkstreamPatternEngineSourcesFromJSON(json['sources']),
    };
}

export function WorkstreamSearchOptionsToJSON(value?: WorkstreamSearchOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'sources': WorkstreamPatternEngineSourcesToJSON(value.sources),
    };
}
