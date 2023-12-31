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
exports.FlattenedActivityToJSON = exports.FlattenedActivityFromJSONTyped = exports.FlattenedActivityFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedActivityFromJSON(json) {
    return FlattenedActivityFromJSONTyped(json, false);
}
exports.FlattenedActivityFromJSON = FlattenedActivityFromJSON;
function FlattenedActivityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'event': (0, _1.SeededConnectorTrackingFromJSON)(json['event']),
        'application': (0, _1.ApplicationFromJSON)(json['application']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, _1.ReferencedAssetFromJSON)(json['asset']),
        'format': !(0, runtime_1.exists)(json, 'format') ? undefined : (0, _1.ReferencedFormatFromJSON)(json['format']),
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : (0, _1.FlattenedUserProfileFromJSON)(json['user']),
        'mechanism': (0, _1.MechanismEnumFromJSON)(json['mechanism']),
        'rank': !(0, runtime_1.exists)(json, 'rank') ? undefined : json['rank'],
    };
}
exports.FlattenedActivityFromJSONTyped = FlattenedActivityFromJSONTyped;
function FlattenedActivityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'event': (0, _1.SeededConnectorTrackingToJSON)(value.event),
        'application': (0, _1.ApplicationToJSON)(value.application),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'asset': (0, _1.ReferencedAssetToJSON)(value.asset),
        'format': (0, _1.ReferencedFormatToJSON)(value.format),
        'user': (0, _1.FlattenedUserProfileToJSON)(value.user),
        'mechanism': (0, _1.MechanismEnumToJSON)(value.mechanism),
        'rank': value.rank,
    };
}
exports.FlattenedActivityToJSON = FlattenedActivityToJSON;
