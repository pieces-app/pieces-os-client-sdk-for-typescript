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
exports.FilterOperationTypeEnumToJSON = exports.FilterOperationTypeEnumFromJSONTyped = exports.FilterOperationTypeEnumFromJSON = exports.FilterOperationTypeEnum = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var FilterOperationTypeEnum;
(function (FilterOperationTypeEnum) {
    FilterOperationTypeEnum["And"] = "AND";
    FilterOperationTypeEnum["Or"] = "OR";
})(FilterOperationTypeEnum || (exports.FilterOperationTypeEnum = FilterOperationTypeEnum = {}));
function FilterOperationTypeEnumFromJSON(json) {
    return FilterOperationTypeEnumFromJSONTyped(json, false);
}
exports.FilterOperationTypeEnumFromJSON = FilterOperationTypeEnumFromJSON;
function FilterOperationTypeEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.FilterOperationTypeEnumFromJSONTyped = FilterOperationTypeEnumFromJSONTyped;
function FilterOperationTypeEnumToJSON(value) {
    return value;
}
exports.FilterOperationTypeEnumToJSON = FilterOperationTypeEnumToJSON;
