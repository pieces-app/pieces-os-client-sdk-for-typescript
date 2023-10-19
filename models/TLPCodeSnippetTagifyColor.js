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
exports.TLPCodeSnippetTagifyColorToJSON = exports.TLPCodeSnippetTagifyColorFromJSONTyped = exports.TLPCodeSnippetTagifyColorFromJSON = void 0;
const runtime_1 = require("../runtime");
const EmbeddedModelSchema_1 = require("./EmbeddedModelSchema");
const TLPCodeSnippetTagifyNamedColor_1 = require("./TLPCodeSnippetTagifyNamedColor");
function TLPCodeSnippetTagifyColorFromJSON(json) {
    return TLPCodeSnippetTagifyColorFromJSONTyped(json, false);
}
exports.TLPCodeSnippetTagifyColorFromJSON = TLPCodeSnippetTagifyColorFromJSON;
function TLPCodeSnippetTagifyColorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, EmbeddedModelSchema_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'hex': json['hex'],
        'tags': (json['tags'].map(TLPCodeSnippetTagifyNamedColor_1.TLPCodeSnippetTagifyNamedColorFromJSON)),
    };
}
exports.TLPCodeSnippetTagifyColorFromJSONTyped = TLPCodeSnippetTagifyColorFromJSONTyped;
function TLPCodeSnippetTagifyColorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, EmbeddedModelSchema_1.EmbeddedModelSchemaToJSON)(value.schema),
        'hex': value.hex,
        'tags': (value.tags.map(TLPCodeSnippetTagifyNamedColor_1.TLPCodeSnippetTagifyNamedColorToJSON)),
    };
}
exports.TLPCodeSnippetTagifyColorToJSON = TLPCodeSnippetTagifyColorToJSON;
