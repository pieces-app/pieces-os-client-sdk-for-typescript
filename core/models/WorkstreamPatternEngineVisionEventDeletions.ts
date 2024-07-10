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
import type { FlattenedWorkstreamPatternEngineVisionEvents } from './FlattenedWorkstreamPatternEngineVisionEvents';
import {
    FlattenedWorkstreamPatternEngineVisionEventsFromJSON,
    FlattenedWorkstreamPatternEngineVisionEventsFromJSONTyped,
    FlattenedWorkstreamPatternEngineVisionEventsToJSON,
} from './FlattenedWorkstreamPatternEngineVisionEvents';
import type { SearchInput } from './SearchInput';
import {
    SearchInputFromJSON,
    SearchInputFromJSONTyped,
    SearchInputToJSON,
} from './SearchInput';

/**
 * note: recomended to use the search option here(where you can pass in workstream.
 * note: "scope" here will run a search with the given scope and then remove these events.
 * @export
 * @interface WorkstreamPatternEngineVisionEventDeletions
 */
export interface WorkstreamPatternEngineVisionEventDeletions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamPatternEngineVisionEventDeletions
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SearchInput}
     * @memberof WorkstreamPatternEngineVisionEventDeletions
     */
    searchScope?: SearchInput;
    /**
     * 
     * @type {FlattenedWorkstreamPatternEngineVisionEvents}
     * @memberof WorkstreamPatternEngineVisionEventDeletions
     */
    identifiers?: FlattenedWorkstreamPatternEngineVisionEvents;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionEventDeletions interface.
 */
export function instanceOfWorkstreamPatternEngineVisionEventDeletions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkstreamPatternEngineVisionEventDeletionsFromJSON(json: any): WorkstreamPatternEngineVisionEventDeletions {
    return WorkstreamPatternEngineVisionEventDeletionsFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionEventDeletionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamPatternEngineVisionEventDeletions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'searchScope': !exists(json, 'search_scope') ? undefined : SearchInputFromJSON(json['search_scope']),
        'identifiers': !exists(json, 'identifiers') ? undefined : FlattenedWorkstreamPatternEngineVisionEventsFromJSON(json['identifiers']),
    };
}

export function WorkstreamPatternEngineVisionEventDeletionsToJSON(value?: WorkstreamPatternEngineVisionEventDeletions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'search_scope': SearchInputToJSON(value.searchScope),
        'identifiers': FlattenedWorkstreamPatternEngineVisionEventsToJSON(value.identifiers),
    };
}
