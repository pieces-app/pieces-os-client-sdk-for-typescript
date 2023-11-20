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
exports.TLPCodeFragmentReclassificationUpdatesToJSON = exports.TLPCodeFragmentReclassificationUpdatesFromJSONTyped = exports.TLPCodeFragmentReclassificationUpdatesFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TLPCodeFragmentReclassificationUpdatesFromJSON(json) {
    return TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json, false);
}
exports.TLPCodeFragmentReclassificationUpdatesFromJSON = TLPCodeFragmentReclassificationUpdatesFromJSON;
function TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'previous': (0, index_1.ClassificationFromJSON)(json['previous']),
        'current': (0, index_1.ClassificationFromJSON)(json['current']),
    };
}
exports.TLPCodeFragmentReclassificationUpdatesFromJSONTyped = TLPCodeFragmentReclassificationUpdatesFromJSONTyped;
function TLPCodeFragmentReclassificationUpdatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'previous': (0, index_1.ClassificationToJSON)(value.previous),
        'current': (0, index_1.ClassificationToJSON)(value.current),
    };
}
exports.TLPCodeFragmentReclassificationUpdatesToJSON = TLPCodeFragmentReclassificationUpdatesToJSON;
