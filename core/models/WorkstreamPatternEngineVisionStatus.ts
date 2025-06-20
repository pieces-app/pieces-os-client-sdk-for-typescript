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
import type { MigrationProgress } from './MigrationProgress';
import {
    MigrationProgressFromJSON,
    MigrationProgressFromJSONTyped,
    MigrationProgressToJSON,
    MigrationProgressToJSONTyped,
} from './MigrationProgress';
import type { AnonymousTemporalRange } from './AnonymousTemporalRange';
import {
    AnonymousTemporalRangeFromJSON,
    AnonymousTemporalRangeFromJSONTyped,
    AnonymousTemporalRangeToJSON,
    AnonymousTemporalRangeToJSONTyped,
} from './AnonymousTemporalRange';

/**
 * activation: can be active for forever w/ continous true, or it can be activated for the next couple hours
 * 
 * deactivation: here can be deactivated for forever w/ continuous true, or it can be deactivated for the next couple hours
 * 
 * Note: one or the other will be set and both are nullable.
 * 
 * degraded: this is a boolean that will let the products know if we will be operating in a degraded experience (this 
 *           means that there was hardware requirements that caused vector searching to fail, therefor we will need to operate
 *           in a slower, and more memory consumption manner)
 * @export
 * @interface WorkstreamPatternEngineVisionStatus
 */
export interface WorkstreamPatternEngineVisionStatus {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamPatternEngineVisionStatus
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {AnonymousTemporalRange}
     * @memberof WorkstreamPatternEngineVisionStatus
     */
    activation?: AnonymousTemporalRange;
    /**
     * 
     * @type {AnonymousTemporalRange}
     * @memberof WorkstreamPatternEngineVisionStatus
     */
    deactivation?: AnonymousTemporalRange;
    /**
     * 
     * @type {boolean}
     * @memberof WorkstreamPatternEngineVisionStatus
     */
    degraded?: boolean;
    /**
     * 
     * @type {MigrationProgress}
     * @memberof WorkstreamPatternEngineVisionStatus
     */
    migration?: MigrationProgress;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionStatus interface.
 */
export function instanceOfWorkstreamPatternEngineVisionStatus(value: object): value is WorkstreamPatternEngineVisionStatus {
    return true;
}

export function WorkstreamPatternEngineVisionStatusFromJSON(json: any): WorkstreamPatternEngineVisionStatus {
    return WorkstreamPatternEngineVisionStatusFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamPatternEngineVisionStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'activation': json['activation'] == null ? undefined : AnonymousTemporalRangeFromJSON(json['activation']),
        'deactivation': json['deactivation'] == null ? undefined : AnonymousTemporalRangeFromJSON(json['deactivation']),
        'degraded': json['degraded'] == null ? undefined : json['degraded'],
        'migration': json['migration'] == null ? undefined : MigrationProgressFromJSON(json['migration']),
    };
}

export function WorkstreamPatternEngineVisionStatusToJSON(json: any): WorkstreamPatternEngineVisionStatus {
    return WorkstreamPatternEngineVisionStatusToJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionStatusToJSONTyped(value?: WorkstreamPatternEngineVisionStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'activation': AnonymousTemporalRangeToJSON(value['activation']),
        'deactivation': AnonymousTemporalRangeToJSON(value['deactivation']),
        'degraded': value['degraded'],
        'migration': MigrationProgressToJSON(value['migration']),
    };
}

