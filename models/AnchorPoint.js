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
exports.AnchorPointToJSON = exports.AnchorPointFromJSONTyped = exports.AnchorPointFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AnchorPointFromJSON(json) {
    return AnchorPointFromJSONTyped(json, false);
}
exports.AnchorPointFromJSON = AnchorPointFromJSON;
function AnchorPointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'verified': !(0, runtime_1.exists)(json, 'verified') ? undefined : json['verified'],
        'fullpath': json['fullpath'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'platform': !(0, runtime_1.exists)(json, 'platform') ? undefined : (0, _1.PlatformEnumFromJSON)(json['platform']),
        'anchor': (0, _1.ReferencedAnchorFromJSON)(json['anchor']),
    };
}
exports.AnchorPointFromJSONTyped = AnchorPointFromJSONTyped;
function AnchorPointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'verified': value.verified,
        'fullpath': value.fullpath,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'platform': (0, _1.PlatformEnumToJSON)(value.platform),
        'anchor': (0, _1.ReferencedAnchorToJSON)(value.anchor),
    };
}
exports.AnchorPointToJSON = AnchorPointToJSON;
