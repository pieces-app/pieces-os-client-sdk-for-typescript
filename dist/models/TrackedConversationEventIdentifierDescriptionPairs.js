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
exports.TrackedConversationEventIdentifierDescriptionPairsToJSON = exports.TrackedConversationEventIdentifierDescriptionPairsFromJSONTyped = exports.TrackedConversationEventIdentifierDescriptionPairsFromJSON = exports.TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum = exports.TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum = exports.TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum = exports.TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum = exports.TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum = exports.TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum = exports.TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
/**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum["AConversationWasCreated"] = "a_conversation_was_created";
})(TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum = TrackedConversationEventIdentifierDescriptionPairsConversationCreatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum["AConversationWasReferencedByTheUser"] = "a_conversation_was_referenced_by_the_user";
})(TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum = TrackedConversationEventIdentifierDescriptionPairsConversationReferencedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum["AConversationWasDeleted"] = "a_conversation_was_deleted";
})(TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum = TrackedConversationEventIdentifierDescriptionPairsConversationDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum["AConversationSummaryAnnotationWasGeneratedByTheUser"] = "a_conversation_summary_annotation_was_generated_by_the_user";
})(TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum = TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheUserEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum["AConversationWasRenamedByTheSystem"] = "a_conversation_was_renamed_by_the_system";
})(TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum = TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheSystemEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum["AConversationWasRenamedByTheUser"] = "a_conversation_was_renamed_by_the_user";
})(TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum = TrackedConversationEventIdentifierDescriptionPairsConversationNameUpdatedByTheUserEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum;
(function (TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum) {
    TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum["AConversationSummaryAnnotationWasGeneratedByTheSystem"] = "a_conversation_summary_annotation_was_generated_by_the_system";
})(TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum || (exports.TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum = TrackedConversationEventIdentifierDescriptionPairsConversationSummaryAnnotationGeneratedByTheSystemEnum = {}));
function TrackedConversationEventIdentifierDescriptionPairsFromJSON(json) {
    return TrackedConversationEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}
exports.TrackedConversationEventIdentifierDescriptionPairsFromJSON = TrackedConversationEventIdentifierDescriptionPairsFromJSON;
function TrackedConversationEventIdentifierDescriptionPairsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'conversationCreated': !(0, runtime_1.exists)(json, 'conversation_created') ? undefined : json['conversation_created'],
        'conversationReferenced': !(0, runtime_1.exists)(json, 'conversation_referenced') ? undefined : json['conversation_referenced'],
        'conversationDeleted': !(0, runtime_1.exists)(json, 'conversation_deleted') ? undefined : json['conversation_deleted'],
        'conversationSummaryAnnotationGeneratedByTheUser': !(0, runtime_1.exists)(json, 'conversation_summary_annotation_generated_by_the_user') ? undefined : json['conversation_summary_annotation_generated_by_the_user'],
        'conversationNameUpdatedByTheSystem': !(0, runtime_1.exists)(json, 'conversation_name_updated_by_the_system') ? undefined : json['conversation_name_updated_by_the_system'],
        'conversationNameUpdatedByTheUser': !(0, runtime_1.exists)(json, 'conversation_name_updated_by_the_user') ? undefined : json['conversation_name_updated_by_the_user'],
        'conversationSummaryAnnotationGeneratedByTheSystem': !(0, runtime_1.exists)(json, 'conversation_summary_annotation_generated_by_the_system') ? undefined : json['conversation_summary_annotation_generated_by_the_system'],
    };
}
exports.TrackedConversationEventIdentifierDescriptionPairsFromJSONTyped = TrackedConversationEventIdentifierDescriptionPairsFromJSONTyped;
function TrackedConversationEventIdentifierDescriptionPairsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'conversation_created': value.conversationCreated,
        'conversation_referenced': value.conversationReferenced,
        'conversation_deleted': value.conversationDeleted,
        'conversation_summary_annotation_generated_by_the_user': value.conversationSummaryAnnotationGeneratedByTheUser,
        'conversation_name_updated_by_the_system': value.conversationNameUpdatedByTheSystem,
        'conversation_name_updated_by_the_user': value.conversationNameUpdatedByTheUser,
        'conversation_summary_annotation_generated_by_the_system': value.conversationSummaryAnnotationGeneratedByTheSystem,
    };
}
exports.TrackedConversationEventIdentifierDescriptionPairsToJSON = TrackedConversationEventIdentifierDescriptionPairsToJSON;