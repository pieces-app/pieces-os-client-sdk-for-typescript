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
exports.TrackedAssetEventMetadataToJSON = exports.TrackedAssetEventMetadataFromJSONTyped = exports.TrackedAssetEventMetadataFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TrackedAssetEventMetadataFromJSON(json) {
    return TrackedAssetEventMetadataFromJSONTyped(json, false);
}
exports.TrackedAssetEventMetadataFromJSON = TrackedAssetEventMetadataFromJSON;
function TrackedAssetEventMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reclassification': !(0, runtime_1.exists)(json, 'reclassification') ? undefined : (0, index_1.TrackedAssetEventFormatReclassificationMetadataFromJSON)(json['reclassification']),
        'creation': !(0, runtime_1.exists)(json, 'creation') ? undefined : (0, index_1.TrackedAssetEventCreationMetadataFromJSON)(json['creation']),
        'rename': !(0, runtime_1.exists)(json, 'rename') ? undefined : (0, index_1.TrackedAssetEventRenameMetadataFromJSON)(json['rename']),
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : (0, index_1.ReferencedTagFromJSON)(json['tag']),
        'website': !(0, runtime_1.exists)(json, 'website') ? undefined : (0, index_1.ReferencedWebsiteFromJSON)(json['website']),
        'person': !(0, runtime_1.exists)(json, 'person') ? undefined : (0, index_1.ReferencedPersonFromJSON)(json['person']),
        'sensitive': !(0, runtime_1.exists)(json, 'sensitive') ? undefined : (0, index_1.ReferencedSensitiveFromJSON)(json['sensitive']),
        'share': !(0, runtime_1.exists)(json, 'share') ? undefined : (0, index_1.ReferencedShareFromJSON)(json['share']),
        'search': !(0, runtime_1.exists)(json, 'search') ? undefined : (0, index_1.TrackedAssetsEventSearchMetadataFromJSON)(json['search']),
        'annotation': !(0, runtime_1.exists)(json, 'annotation') ? undefined : (0, index_1.ReferencedAnnotationFromJSON)(json['annotation']),
        'hint': !(0, runtime_1.exists)(json, 'hint') ? undefined : (0, index_1.ReferencedHintFromJSON)(json['hint']),
        'anchor': !(0, runtime_1.exists)(json, 'anchor') ? undefined : (0, index_1.ReferencedAnchorFromJSON)(json['anchor']),
    };
}
exports.TrackedAssetEventMetadataFromJSONTyped = TrackedAssetEventMetadataFromJSONTyped;
function TrackedAssetEventMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reclassification': (0, index_1.TrackedAssetEventFormatReclassificationMetadataToJSON)(value.reclassification),
        'creation': (0, index_1.TrackedAssetEventCreationMetadataToJSON)(value.creation),
        'rename': (0, index_1.TrackedAssetEventRenameMetadataToJSON)(value.rename),
        'tag': (0, index_1.ReferencedTagToJSON)(value.tag),
        'website': (0, index_1.ReferencedWebsiteToJSON)(value.website),
        'person': (0, index_1.ReferencedPersonToJSON)(value.person),
        'sensitive': (0, index_1.ReferencedSensitiveToJSON)(value.sensitive),
        'share': (0, index_1.ReferencedShareToJSON)(value.share),
        'search': (0, index_1.TrackedAssetsEventSearchMetadataToJSON)(value.search),
        'annotation': (0, index_1.ReferencedAnnotationToJSON)(value.annotation),
        'hint': (0, index_1.ReferencedHintToJSON)(value.hint),
        'anchor': (0, index_1.ReferencedAnchorToJSON)(value.anchor),
    };
}
exports.TrackedAssetEventMetadataToJSON = TrackedAssetEventMetadataToJSON;