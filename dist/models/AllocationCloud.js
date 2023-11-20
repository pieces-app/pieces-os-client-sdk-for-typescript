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
exports.AllocationCloudToJSON = exports.AllocationCloudFromJSONTyped = exports.AllocationCloudFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function AllocationCloudFromJSON(json) {
    return AllocationCloudFromJSONTyped(json, false);
}
exports.AllocationCloudFromJSON = AllocationCloudFromJSON;
function AllocationCloudFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'user': json['user'],
        'urls': (0, index_1.AllocationCloudUrlsFromJSON)(json['urls']),
        'status': (0, index_1.AllocationCloudStatusFromJSON)(json['status']),
        'project': json['project'],
        'updated': !(0, runtime_1.exists)(json, 'updated') ? undefined : (0, index_1.GroupedTimestampFromJSON)(json['updated']),
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
        'region': !(0, runtime_1.exists)(json, 'region') ? undefined : json['region'],
    };
}
exports.AllocationCloudFromJSONTyped = AllocationCloudFromJSONTyped;
function AllocationCloudToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'user': value.user,
        'urls': (0, index_1.AllocationCloudUrlsToJSON)(value.urls),
        'status': (0, index_1.AllocationCloudStatusToJSON)(value.status),
        'project': value.project,
        'updated': (0, index_1.GroupedTimestampToJSON)(value.updated),
        'version': value.version,
        'region': value.region,
    };
}
exports.AllocationCloudToJSON = AllocationCloudToJSON;
