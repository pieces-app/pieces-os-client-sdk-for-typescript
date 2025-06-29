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
import type { ReferencedWorkstreamPatternEngineVisionEvent } from './ReferencedWorkstreamPatternEngineVisionEvent';
import {
    ReferencedWorkstreamPatternEngineVisionEventFromJSON,
    ReferencedWorkstreamPatternEngineVisionEventFromJSONTyped,
    ReferencedWorkstreamPatternEngineVisionEventToJSON,
    ReferencedWorkstreamPatternEngineVisionEventToJSONTyped,
} from './ReferencedWorkstreamPatternEngineVisionEvent';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * This is a plural snapshot of all of the events within WPE qdrant(Referenced)
 * @export
 * @interface FlattenedWorkstreamPatternEngineVisionEvents
 */
export interface FlattenedWorkstreamPatternEngineVisionEvents {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWorkstreamPatternEngineVisionEvents
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedWorkstreamPatternEngineVisionEvent>}
     * @memberof FlattenedWorkstreamPatternEngineVisionEvents
     */
    iterable: Array<ReferencedWorkstreamPatternEngineVisionEvent>;
}

/**
 * Check if a given object implements the FlattenedWorkstreamPatternEngineVisionEvents interface.
 */
export function instanceOfFlattenedWorkstreamPatternEngineVisionEvents(value: object): value is FlattenedWorkstreamPatternEngineVisionEvents {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedWorkstreamPatternEngineVisionEventsFromJSON(json: any): FlattenedWorkstreamPatternEngineVisionEvents {
    return FlattenedWorkstreamPatternEngineVisionEventsFromJSONTyped(json, false);
}

export function FlattenedWorkstreamPatternEngineVisionEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWorkstreamPatternEngineVisionEvents {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedWorkstreamPatternEngineVisionEventFromJSON)),
    };
}

export function FlattenedWorkstreamPatternEngineVisionEventsToJSON(json: any): FlattenedWorkstreamPatternEngineVisionEvents {
    return FlattenedWorkstreamPatternEngineVisionEventsToJSONTyped(json, false);
}

export function FlattenedWorkstreamPatternEngineVisionEventsToJSONTyped(value?: FlattenedWorkstreamPatternEngineVisionEvents | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedWorkstreamPatternEngineVisionEventToJSON)),
    };
}

