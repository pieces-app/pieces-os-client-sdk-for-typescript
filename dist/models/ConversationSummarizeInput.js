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
exports.ConversationSummarizeInputToJSON = exports.ConversationSummarizeInputFromJSONTyped = exports.ConversationSummarizeInputFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function ConversationSummarizeInputFromJSON(json) {
    return ConversationSummarizeInputFromJSONTyped(json, false);
}
exports.ConversationSummarizeInputFromJSON = ConversationSummarizeInputFromJSON;
function ConversationSummarizeInputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'messages': !(0, runtime_1.exists)(json, 'messages') ? undefined : (0, index_1.FlattenedConversationMessagesFromJSON)(json['messages']),
    };
}
exports.ConversationSummarizeInputFromJSONTyped = ConversationSummarizeInputFromJSONTyped;
function ConversationSummarizeInputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'messages': (0, index_1.FlattenedConversationMessagesToJSON)(value.messages),
    };
}
exports.ConversationSummarizeInputToJSON = ConversationSummarizeInputToJSON;
