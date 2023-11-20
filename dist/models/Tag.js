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
exports.TagToJSON = exports.TagFromJSONTyped = exports.TagFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TagFromJSON(json) {
    return TagFromJSONTyped(json, false);
}
exports.TagFromJSON = TagFromJSON;
function TagFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'text': json['text'],
        'mechanisms': !(0, runtime_1.exists)(json, 'mechanisms') ? undefined : ((0, runtime_1.mapValues)(json['mechanisms'], index_1.MechanismEnumFromJSON)),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, index_1.FlattenedAssetsFromJSON)(json['assets']),
        'created': (0, index_1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['deleted']),
        'category': (0, index_1.TagCategoryEnumFromJSON)(json['category']),
        'relationship': !(0, runtime_1.exists)(json, 'relationship') ? undefined : (0, index_1.RelationshipFromJSON)(json['relationship']),
        'interactions': !(0, runtime_1.exists)(json, 'interactions') ? undefined : json['interactions'],
        'persons': !(0, runtime_1.exists)(json, 'persons') ? undefined : (0, index_1.FlattenedPersonsFromJSON)(json['persons']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, index_1.ScoreFromJSON)(json['score']),
    };
}
exports.TagFromJSONTyped = TagFromJSONTyped;
function TagToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'text': value.text,
        'mechanisms': value.mechanisms === undefined ? undefined : ((0, runtime_1.mapValues)(value.mechanisms, index_1.MechanismEnumToJSON)),
        'assets': (0, index_1.FlattenedAssetsToJSON)(value.assets),
        'created': (0, index_1.GroupedTimestampToJSON)(value.created),
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, index_1.GroupedTimestampToJSON)(value.deleted),
        'category': (0, index_1.TagCategoryEnumToJSON)(value.category),
        'relationship': (0, index_1.RelationshipToJSON)(value.relationship),
        'interactions': value.interactions,
        'persons': (0, index_1.FlattenedPersonsToJSON)(value.persons),
        'score': (0, index_1.ScoreToJSON)(value.score),
    };
}
exports.TagToJSON = TagToJSON;
