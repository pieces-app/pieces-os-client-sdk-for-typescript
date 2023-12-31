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
exports.SeededConversationToJSON = exports.SeededConversationFromJSONTyped = exports.SeededConversationFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededConversationFromJSON(json) {
    return SeededConversationFromJSONTyped(json, false);
}
exports.SeededConversationFromJSON = SeededConversationFromJSON;
function SeededConversationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'favorited': !(0, runtime_1.exists)(json, 'favorited') ? undefined : json['favorited'],
        'application': !(0, runtime_1.exists)(json, 'application') ? undefined : (0, _1.ApplicationFromJSON)(json['application']),
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (json['annotations'].map(_1.SeededAnnotationFromJSON)),
        'messages': !(0, runtime_1.exists)(json, 'messages') ? undefined : (json['messages'].map(_1.SeededConversationMessageFromJSON)),
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : (0, _1.ReferencedModelFromJSON)(json['model']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, _1.FlattenedAssetsFromJSON)(json['assets']),
        'anchors': !(0, runtime_1.exists)(json, 'anchors') ? undefined : (json['anchors'].map(_1.SeededAnchorFromJSON)),
        'type': (0, _1.ConversationTypeEnumFromJSON)(json['type']),
    };
}
exports.SeededConversationFromJSONTyped = SeededConversationFromJSONTyped;
function SeededConversationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'name': value.name,
        'favorited': value.favorited,
        'application': (0, _1.ApplicationToJSON)(value.application),
        'annotations': value.annotations === undefined ? undefined : (value.annotations.map(_1.SeededAnnotationToJSON)),
        'messages': value.messages === undefined ? undefined : (value.messages.map(_1.SeededConversationMessageToJSON)),
        'model': (0, _1.ReferencedModelToJSON)(value.model),
        'assets': (0, _1.FlattenedAssetsToJSON)(value.assets),
        'anchors': value.anchors === undefined ? undefined : (value.anchors.map(_1.SeededAnchorToJSON)),
        'type': (0, _1.ConversationTypeEnumToJSON)(value.type),
    };
}
exports.SeededConversationToJSON = SeededConversationToJSON;
