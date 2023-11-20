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
exports.GraphicalImageDescriptiveStatisticsToJSON = exports.GraphicalImageDescriptiveStatisticsFromJSONTyped = exports.GraphicalImageDescriptiveStatisticsFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function GraphicalImageDescriptiveStatisticsFromJSON(json) {
    return GraphicalImageDescriptiveStatisticsFromJSONTyped(json, false);
}
exports.GraphicalImageDescriptiveStatisticsFromJSON = GraphicalImageDescriptiveStatisticsFromJSON;
function GraphicalImageDescriptiveStatisticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'width': json['width'],
        'height': json['height'],
        'channels': json['channels'],
        'asset': json['asset'],
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : json['user'],
        'created': json['created'],
        'os': json['os'],
    };
}
exports.GraphicalImageDescriptiveStatisticsFromJSONTyped = GraphicalImageDescriptiveStatisticsFromJSONTyped;
function GraphicalImageDescriptiveStatisticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'width': value.width,
        'height': value.height,
        'channels': value.channels,
        'asset': value.asset,
        'user': value.user,
        'created': value.created,
        'os': value.os,
    };
}
exports.GraphicalImageDescriptiveStatisticsToJSON = GraphicalImageDescriptiveStatisticsToJSON;
