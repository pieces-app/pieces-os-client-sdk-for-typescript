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
    GraphicalOCRDescriptiveStatisticsConfidence,
    GraphicalOCRDescriptiveStatisticsConfidenceFromJSON,
    GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped,
    GraphicalOCRDescriptiveStatisticsConfidenceToJSON,
} from './index';

/**
 * Model for monitoring and evaluating the OCR feature
 * @export
 * @interface GraphicalOCRDescriptiveStatistics
 */
export interface GraphicalOCRDescriptiveStatistics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    asset: string;
    /**
     * 
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    user: string;
    /**
     * 
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    created: string;
    /**
     * 
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    os: string;
    /**
     * 
     * @type {GraphicalOCRDescriptiveStatisticsConfidence}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    confidence: GraphicalOCRDescriptiveStatisticsConfidence;
    /**
     * 
     * @type {string}
     * @memberof GraphicalOCRDescriptiveStatistics
     */
    duration: string;
}

export function GraphicalOCRDescriptiveStatisticsFromJSON(json: any): GraphicalOCRDescriptiveStatistics {
    return GraphicalOCRDescriptiveStatisticsFromJSONTyped(json, false);
}

export function GraphicalOCRDescriptiveStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRDescriptiveStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'],
        'user': json['user'],
        'model': json['model'],
        'created': json['created'],
        'os': json['os'],
        'confidence': GraphicalOCRDescriptiveStatisticsConfidenceFromJSON(json['confidence']),
        'duration': json['duration'],
    };
}

export function GraphicalOCRDescriptiveStatisticsToJSON(value?: GraphicalOCRDescriptiveStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'asset': value.asset,
        'user': value.user,
        'model': value.model,
        'created': value.created,
        'os': value.os,
        'confidence': GraphicalOCRDescriptiveStatisticsConfidenceToJSON(value.confidence),
        'duration': value.duration,
    };
}


