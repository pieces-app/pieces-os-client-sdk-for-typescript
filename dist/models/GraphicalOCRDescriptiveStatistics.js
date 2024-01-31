"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicalOCRDescriptiveStatisticsToJSON = exports.GraphicalOCRDescriptiveStatisticsFromJSONTyped = exports.GraphicalOCRDescriptiveStatisticsFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function GraphicalOCRDescriptiveStatisticsFromJSON(json) {
    return GraphicalOCRDescriptiveStatisticsFromJSONTyped(json, false);
}
exports.GraphicalOCRDescriptiveStatisticsFromJSON = GraphicalOCRDescriptiveStatisticsFromJSON;
function GraphicalOCRDescriptiveStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'asset': json['asset'],
        'user': json['user'],
        'model': json['model'],
        'created': json['created'],
        'os': json['os'],
        'confidence': (0, index_1.GraphicalOCRDescriptiveStatisticsConfidenceFromJSON)(json['confidence']),
        'duration': json['duration'],
    };
}
exports.GraphicalOCRDescriptiveStatisticsFromJSONTyped = GraphicalOCRDescriptiveStatisticsFromJSONTyped;
function GraphicalOCRDescriptiveStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset': value.asset,
        'user': value.user,
        'model': value.model,
        'created': value.created,
        'os': value.os,
        'confidence': (0, index_1.GraphicalOCRDescriptiveStatisticsConfidenceToJSON)(value.confidence),
        'duration': value.duration,
    };
}
exports.GraphicalOCRDescriptiveStatisticsToJSON = GraphicalOCRDescriptiveStatisticsToJSON;