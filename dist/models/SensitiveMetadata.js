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
exports.SensitiveMetadataToJSON = exports.SensitiveMetadataFromJSONTyped = exports.SensitiveMetadataFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SensitiveMetadataFromJSON(json) {
    return SensitiveMetadataFromJSONTyped(json, false);
}
exports.SensitiveMetadataFromJSON = SensitiveMetadataFromJSON;
function SensitiveMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'match': !(0, runtime_1.exists)(json, 'match') ? undefined : (0, index_1.TextMatchFromJSON)(json['match']),
        'entropy': !(0, runtime_1.exists)(json, 'entropy') ? undefined : json['entropy'],
    };
}
exports.SensitiveMetadataFromJSONTyped = SensitiveMetadataFromJSONTyped;
function SensitiveMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'match': (0, index_1.TextMatchToJSON)(value.match),
        'entropy': value.entropy,
    };
}
exports.SensitiveMetadataToJSON = SensitiveMetadataToJSON;
