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
exports.PersonToJSON = exports.PersonFromJSONTyped = exports.PersonFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function PersonFromJSON(json) {
    return PersonFromJSONTyped(json, false);
}
exports.PersonFromJSON = PersonFromJSON;
function PersonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'created': (0, index_1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['deleted']),
        'type': (0, index_1.PersonTypeFromJSON)(json['type']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, index_1.FlattenedAssetsFromJSON)(json['assets']),
        'mechanisms': !(0, runtime_1.exists)(json, 'mechanisms') ? undefined : ((0, runtime_1.mapValues)(json['mechanisms'], index_1.MechanismEnumFromJSON)),
        'interactions': !(0, runtime_1.exists)(json, 'interactions') ? undefined : json['interactions'],
        'access': !(0, runtime_1.exists)(json, 'access') ? undefined : ((0, runtime_1.mapValues)(json['access'], index_1.PersonAccessFromJSON)),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : (0, index_1.FlattenedTagsFromJSON)(json['tags']),
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : (0, index_1.FlattenedWebsitesFromJSON)(json['websites']),
        'models': !(0, runtime_1.exists)(json, 'models') ? undefined : ((0, runtime_1.mapValues)(json['models'], index_1.PersonModelFromJSON)),
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (0, index_1.FlattenedAnnotationsFromJSON)(json['annotations']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, index_1.ScoreFromJSON)(json['score']),
    };
}
exports.PersonFromJSONTyped = PersonFromJSONTyped;
function PersonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'created': (0, index_1.GroupedTimestampToJSON)(value.created),
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, index_1.GroupedTimestampToJSON)(value.deleted),
        'type': (0, index_1.PersonTypeToJSON)(value.type),
        'assets': (0, index_1.FlattenedAssetsToJSON)(value.assets),
        'mechanisms': value.mechanisms === undefined ? undefined : ((0, runtime_1.mapValues)(value.mechanisms, index_1.MechanismEnumToJSON)),
        'interactions': value.interactions,
        'access': value.access === undefined ? undefined : ((0, runtime_1.mapValues)(value.access, index_1.PersonAccessToJSON)),
        'tags': (0, index_1.FlattenedTagsToJSON)(value.tags),
        'websites': (0, index_1.FlattenedWebsitesToJSON)(value.websites),
        'models': value.models === undefined ? undefined : ((0, runtime_1.mapValues)(value.models, index_1.PersonModelToJSON)),
        'annotations': (0, index_1.FlattenedAnnotationsToJSON)(value.annotations),
        'score': (0, index_1.ScoreToJSON)(value.score),
    };
}
exports.PersonToJSON = PersonToJSON;