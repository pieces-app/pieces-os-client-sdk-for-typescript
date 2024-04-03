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
} from './EmbeddedModelSchema';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';
import type { WorkstreamEvent } from './WorkstreamEvent';
import {
    WorkstreamEventFromJSON,
    WorkstreamEventFromJSONTyped,
    WorkstreamEventToJSON,
} from './WorkstreamEvent';

/**
 * This is a collection of many Shadow Activity events.
 * @export
 * @interface WorkstreamEvents
 */
export interface WorkstreamEvents {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamEvents
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<WorkstreamEvent>}
     * @memberof WorkstreamEvents
     */
    iterable: Array<WorkstreamEvent>;
    /**
     * This is a Map<String, int> where the the key is an activity id.
     * @type {{ [key: string]: number; }}
     * @memberof WorkstreamEvents
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof WorkstreamEvents
     */
    score?: Score;
}

/**
 * Check if a given object implements the WorkstreamEvents interface.
 */
export function instanceOfWorkstreamEvents(value: object): boolean {
    if (!('iterable' in value)) return false;
    return true;
}

export function WorkstreamEventsFromJSON(json: any): WorkstreamEvents {
    return WorkstreamEventsFromJSONTyped(json, false);
}

export function WorkstreamEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamEvents {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(WorkstreamEventFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function WorkstreamEventsToJSON(value?: WorkstreamEvents | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(WorkstreamEventToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}
