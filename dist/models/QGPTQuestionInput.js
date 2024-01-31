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
exports.QGPTQuestionInputToJSON = exports.QGPTQuestionInputFromJSONTyped = exports.QGPTQuestionInputFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function QGPTQuestionInputFromJSON(json) {
    return QGPTQuestionInputFromJSONTyped(json, false);
}
exports.QGPTQuestionInputFromJSON = QGPTQuestionInputFromJSON;
function QGPTQuestionInputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'relevant': (0, index_1.RelevantQGPTSeedsFromJSON)(json['relevant']),
        'query': json['query'],
        'application': !(0, runtime_1.exists)(json, 'application') ? undefined : json['application'],
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : json['model'],
        'messages': !(0, runtime_1.exists)(json, 'messages') ? undefined : (0, index_1.FlattenedConversationMessagesFromJSON)(json['messages']),
        'pipeline': !(0, runtime_1.exists)(json, 'pipeline') ? undefined : (0, index_1.QGPTPromptPipelineFromJSON)(json['pipeline']),
    };
}
exports.QGPTQuestionInputFromJSONTyped = QGPTQuestionInputFromJSONTyped;
function QGPTQuestionInputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'relevant': (0, index_1.RelevantQGPTSeedsToJSON)(value.relevant),
        'query': value.query,
        'application': value.application,
        'model': value.model,
        'messages': (0, index_1.FlattenedConversationMessagesToJSON)(value.messages),
        'pipeline': (0, index_1.QGPTPromptPipelineToJSON)(value.pipeline),
    };
}
exports.QGPTQuestionInputToJSON = QGPTQuestionInputToJSON;