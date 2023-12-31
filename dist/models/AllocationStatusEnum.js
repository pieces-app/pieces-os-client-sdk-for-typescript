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
exports.AllocationStatusEnumToJSON = exports.AllocationStatusEnumFromJSONTyped = exports.AllocationStatusEnumFromJSON = exports.AllocationStatusEnum = void 0;
/**
 * This is a Generic status enumeration that will be used for the status of dns and pod or cloud.
 * @export
 * @enum {string}
 */
var AllocationStatusEnum;
(function (AllocationStatusEnum) {
    AllocationStatusEnum["Pending"] = "PENDING";
    AllocationStatusEnum["Running"] = "RUNNING";
    AllocationStatusEnum["Failed"] = "FAILED";
    AllocationStatusEnum["Succeeded"] = "SUCCEEDED";
    AllocationStatusEnum["Unknown"] = "UNKNOWN";
})(AllocationStatusEnum || (exports.AllocationStatusEnum = AllocationStatusEnum = {}));
function AllocationStatusEnumFromJSON(json) {
    return AllocationStatusEnumFromJSONTyped(json, false);
}
exports.AllocationStatusEnumFromJSON = AllocationStatusEnumFromJSON;
function AllocationStatusEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AllocationStatusEnumFromJSONTyped = AllocationStatusEnumFromJSONTyped;
function AllocationStatusEnumToJSON(value) {
    return value;
}
exports.AllocationStatusEnumToJSON = AllocationStatusEnumToJSON;
