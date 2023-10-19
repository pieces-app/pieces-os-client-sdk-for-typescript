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
exports.TagsToJSON = exports.TagsFromJSONTyped = exports.TagsFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function TagsFromJSON(json) {
    return TagsFromJSONTyped(json, false);
}
exports.TagsFromJSON = TagsFromJSON;
function TagsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'iterable': (json['iterable'].map(_1.TagFromJSON)),
        'indices': !(0, runtime_1.exists)(json, 'indices') ? undefined : json['indices'],
    };
}
exports.TagsFromJSONTyped = TagsFromJSONTyped;
function TagsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'iterable': (value.iterable.map(_1.TagToJSON)),
        'indices': value.indices,
    };
}
exports.TagsToJSON = TagsToJSON;
