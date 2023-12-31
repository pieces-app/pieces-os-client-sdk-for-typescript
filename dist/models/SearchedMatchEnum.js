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
exports.SearchedMatchEnumToJSON = exports.SearchedMatchEnumFromJSONTyped = exports.SearchedMatchEnumFromJSON = exports.SearchedMatchEnum = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var SearchedMatchEnum;
(function (SearchedMatchEnum) {
    SearchedMatchEnum["Title"] = "TITLE";
    SearchedMatchEnum["Annotation"] = "ANNOTATION";
    SearchedMatchEnum["Hint"] = "HINT";
    SearchedMatchEnum["Content"] = "CONTENT";
    SearchedMatchEnum["Fuzzy"] = "FUZZY";
    SearchedMatchEnum["Multiple"] = "MULTIPLE";
    SearchedMatchEnum["Tags"] = "TAGS";
    SearchedMatchEnum["Websites"] = "WEBSITES";
    SearchedMatchEnum["Persons"] = "PERSONS";
})(SearchedMatchEnum || (exports.SearchedMatchEnum = SearchedMatchEnum = {}));
function SearchedMatchEnumFromJSON(json) {
    return SearchedMatchEnumFromJSONTyped(json, false);
}
exports.SearchedMatchEnumFromJSON = SearchedMatchEnumFromJSON;
function SearchedMatchEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SearchedMatchEnumFromJSONTyped = SearchedMatchEnumFromJSONTyped;
function SearchedMatchEnumToJSON(value) {
    return value;
}
exports.SearchedMatchEnumToJSON = SearchedMatchEnumToJSON;
