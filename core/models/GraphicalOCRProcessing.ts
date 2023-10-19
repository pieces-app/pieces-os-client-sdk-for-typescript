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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    GraphicalOCRStatistics,
    GraphicalOCRStatisticsFromJSON,
    GraphicalOCRStatisticsFromJSONTyped,
    GraphicalOCRStatisticsToJSON,
} from './';

/**
 * 
 * @export
 * @interface GraphicalOCRProcessing
 */
export interface GraphicalOCRProcessing {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalOCRProcessing
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {GraphicalOCRStatistics}
     * @memberof GraphicalOCRProcessing
     */
    statistics?: GraphicalOCRStatistics;
}

export function GraphicalOCRProcessingFromJSON(json: any): GraphicalOCRProcessing {
    return GraphicalOCRProcessingFromJSONTyped(json, false);
}

export function GraphicalOCRProcessingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRProcessing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'statistics': !exists(json, 'statistics') ? undefined : GraphicalOCRStatisticsFromJSON(json['statistics']),
    };
}

export function GraphicalOCRProcessingToJSON(value?: GraphicalOCRProcessing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'statistics': GraphicalOCRStatisticsToJSON(value.statistics),
    };
}


