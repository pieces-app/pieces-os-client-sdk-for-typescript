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
exports.ClassificationToJSON = exports.ClassificationFromJSONTyped = exports.ClassificationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ClassificationFromJSON(json) {
    return ClassificationFromJSONTyped(json, false);
}
exports.ClassificationFromJSON = ClassificationFromJSON;
function ClassificationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'generic': (0, index_1.ClassificationGenericEnumFromJSON)(json['generic']),
        'specific': (0, index_1.ClassificationSpecificEnumFromJSON)(json['specific']),
        'rendering': !(0, runtime_1.exists)(json, 'rendering') ? undefined : (0, index_1.ClassificationRenderingEnumFromJSON)(json['rendering']),
    };
}
exports.ClassificationFromJSONTyped = ClassificationFromJSONTyped;
function ClassificationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'generic': (0, index_1.ClassificationGenericEnumToJSON)(value.generic),
        'specific': (0, index_1.ClassificationSpecificEnumToJSON)(value.specific),
        'rendering': (0, index_1.ClassificationRenderingEnumToJSON)(value.rendering),
    };
}
exports.ClassificationToJSON = ClassificationToJSON;
