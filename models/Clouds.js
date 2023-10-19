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
exports.CloudsToJSON = exports.CloudsFromJSONTyped = exports.CloudsFromJSON = void 0;
const Cloud_1 = require("./Cloud");
function CloudsFromJSON(json) {
    return CloudsFromJSONTyped(json, false);
}
exports.CloudsFromJSON = CloudsFromJSON;
function CloudsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'iterable': (json['iterable'].map(Cloud_1.CloudFromJSON)),
    };
}
exports.CloudsFromJSONTyped = CloudsFromJSONTyped;
function CloudsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'iterable': (value.iterable.map(Cloud_1.CloudToJSON)),
    };
}
exports.CloudsToJSON = CloudsToJSON;
