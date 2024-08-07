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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedWorkstreamSummaries } from './FlattenedWorkstreamSummaries';
import {
    FlattenedWorkstreamSummariesFromJSON,
    FlattenedWorkstreamSummariesFromJSONTyped,
    FlattenedWorkstreamSummariesToJSON,
} from './FlattenedWorkstreamSummaries';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';
import type { WorkstreamEventContext } from './WorkstreamEventContext';
import {
    WorkstreamEventContextFromJSON,
    WorkstreamEventContextFromJSONTyped,
    WorkstreamEventContextToJSON,
} from './WorkstreamEventContext';
import type { WorkstreamEventTrigger } from './WorkstreamEventTrigger';
import {
    WorkstreamEventTriggerFromJSON,
    WorkstreamEventTriggerFromJSONTyped,
    WorkstreamEventTriggerToJSON,
} from './WorkstreamEventTrigger';

/**
 * This is a singular (DAG Safe) version of a WorkstreamEvent.
 * @export
 * @interface FlattenedWorkstreamEvent
 */
export interface FlattenedWorkstreamEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWorkstreamEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedWorkstreamEvent
     */
    id: string;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedWorkstreamEvent
     */
    score?: Score;
    /**
     * 
     * @type {Application}
     * @memberof FlattenedWorkstreamEvent
     */
    application: Application;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWorkstreamEvent
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWorkstreamEvent
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {WorkstreamEventTrigger}
     * @memberof FlattenedWorkstreamEvent
     */
    trigger: WorkstreamEventTrigger;
    /**
     * 
     * @type {WorkstreamEventContext}
     * @memberof FlattenedWorkstreamEvent
     */
    context?: WorkstreamEventContext;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedWorkstreamEvent
     */
    summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the FlattenedWorkstreamEvent interface.
 */
export function instanceOfFlattenedWorkstreamEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "application" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "trigger" in value;

    return isInstance;
}

export function FlattenedWorkstreamEventFromJSON(json: any): FlattenedWorkstreamEvent {
    return FlattenedWorkstreamEventFromJSONTyped(json, false);
}

export function FlattenedWorkstreamEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWorkstreamEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'application': ApplicationFromJSON(json['application']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'trigger': WorkstreamEventTriggerFromJSON(json['trigger']),
        'context': !exists(json, 'context') ? undefined : WorkstreamEventContextFromJSON(json['context']),
        'summaries': !exists(json, 'summaries') ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
    };
}

export function FlattenedWorkstreamEventToJSON(value?: FlattenedWorkstreamEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'score': ScoreToJSON(value.score),
        'application': ApplicationToJSON(value.application),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'trigger': WorkstreamEventTriggerToJSON(value.trigger),
        'context': WorkstreamEventContextToJSON(value.context),
        'summaries': FlattenedWorkstreamSummariesToJSON(value.summaries),
    };
}

