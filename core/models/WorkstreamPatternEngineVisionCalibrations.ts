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
import type { WorkstreamPatternEngineVisionCalibration } from './WorkstreamPatternEngineVisionCalibration';
import {
    WorkstreamPatternEngineVisionCalibrationFromJSON,
    WorkstreamPatternEngineVisionCalibrationFromJSONTyped,
    WorkstreamPatternEngineVisionCalibrationToJSON,
} from './WorkstreamPatternEngineVisionCalibration';

/**
 * TODO: description
 * This the plural of a single copilot Capture.
 * 
 * This will return all the the given copilot captures
 * @export
 * @interface WorkstreamPatternEngineVisionCalibrations
 */
export interface WorkstreamPatternEngineVisionCalibrations {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamPatternEngineVisionCalibrations
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<WorkstreamPatternEngineVisionCalibration>}
     * @memberof WorkstreamPatternEngineVisionCalibrations
     */
    iterable: Array<WorkstreamPatternEngineVisionCalibration>;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionCalibrations interface.
 */
export function instanceOfWorkstreamPatternEngineVisionCalibrations(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function WorkstreamPatternEngineVisionCalibrationsFromJSON(json: any): WorkstreamPatternEngineVisionCalibrations {
    return WorkstreamPatternEngineVisionCalibrationsFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionCalibrationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamPatternEngineVisionCalibrations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(WorkstreamPatternEngineVisionCalibrationFromJSON)),
    };
}

export function WorkstreamPatternEngineVisionCalibrationsToJSON(value?: WorkstreamPatternEngineVisionCalibrations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(WorkstreamPatternEngineVisionCalibrationToJSON)),
    };
}

