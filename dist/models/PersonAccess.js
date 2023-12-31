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
exports.PersonAccessToJSON = exports.PersonAccessFromJSONTyped = exports.PersonAccessFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function PersonAccessFromJSON(json) {
    return PersonAccessFromJSONTyped(json, false);
}
exports.PersonAccessFromJSON = PersonAccessFromJSON;
function PersonAccessFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'scoped': !(0, runtime_1.exists)(json, 'scoped') ? undefined : (0, _1.PersonAccessScopedEnumFromJSON)(json['scoped']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
    };
}
exports.PersonAccessFromJSONTyped = PersonAccessFromJSONTyped;
function PersonAccessToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'scoped': (0, _1.PersonAccessScopedEnumToJSON)(value.scoped),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
    };
}
exports.PersonAccessToJSON = PersonAccessToJSON;
