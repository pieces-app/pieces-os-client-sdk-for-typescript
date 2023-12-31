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
exports.PersonAccessScopedEnumToJSON = exports.PersonAccessScopedEnumFromJSONTyped = exports.PersonAccessScopedEnumFromJSON = exports.PersonAccessScopedEnum = void 0;
/**
 * This is an enum that will help provide information around what permission this person has in relate to their scope.
 * @export
 * @enum {string}
 */
var PersonAccessScopedEnum;
(function (PersonAccessScopedEnum) {
    PersonAccessScopedEnum["Owner"] = "OWNER";
    PersonAccessScopedEnum["Editor"] = "EDITOR";
    PersonAccessScopedEnum["Commenter"] = "COMMENTER";
    PersonAccessScopedEnum["Viewer"] = "VIEWER";
})(PersonAccessScopedEnum || (exports.PersonAccessScopedEnum = PersonAccessScopedEnum = {}));
function PersonAccessScopedEnumFromJSON(json) {
    return PersonAccessScopedEnumFromJSONTyped(json, false);
}
exports.PersonAccessScopedEnumFromJSON = PersonAccessScopedEnumFromJSON;
function PersonAccessScopedEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PersonAccessScopedEnumFromJSONTyped = PersonAccessScopedEnumFromJSONTyped;
function PersonAccessScopedEnumToJSON(value) {
    return value;
}
exports.PersonAccessScopedEnumToJSON = PersonAccessScopedEnumToJSON;
