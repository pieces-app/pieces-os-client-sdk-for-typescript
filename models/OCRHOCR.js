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
exports.OCRHOCRToJSON = exports.OCRHOCRFromJSONTyped = exports.OCRHOCRFromJSON = void 0;
function OCRHOCRFromJSON(json) {
    return OCRHOCRFromJSONTyped(json, false);
}
exports.OCRHOCRFromJSON = OCRHOCRFromJSON;
function OCRHOCRFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'text': json['text'],
    };
}
exports.OCRHOCRFromJSONTyped = OCRHOCRFromJSONTyped;
function OCRHOCRToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'text': value.text,
    };
}
exports.OCRHOCRToJSON = OCRHOCRToJSON;
