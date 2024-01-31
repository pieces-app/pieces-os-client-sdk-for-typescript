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
exports.ReferencedActivityToJSON = exports.ReferencedActivityFromJSONTyped = exports.ReferencedActivityFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ReferencedActivityFromJSON(json) {
    return ReferencedActivityFromJSONTyped(json, false);
}
exports.ReferencedActivityFromJSON = ReferencedActivityFromJSON;
function ReferencedActivityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : (0, index_1.FlattenedActivityFromJSON)(json['reference']),
    };
}
exports.ReferencedActivityFromJSONTyped = ReferencedActivityFromJSONTyped;
function ReferencedActivityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'reference': (0, index_1.FlattenedActivityToJSON)(value.reference),
    };
}
exports.ReferencedActivityToJSON = ReferencedActivityToJSON;