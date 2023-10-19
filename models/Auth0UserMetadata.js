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
exports.Auth0UserMetadataToJSON = exports.Auth0UserMetadataFromJSONTyped = exports.Auth0UserMetadataFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function Auth0UserMetadataFromJSON(json) {
    return Auth0UserMetadataFromJSONTyped(json, false);
}
exports.Auth0UserMetadataFromJSON = Auth0UserMetadataFromJSON;
function Auth0UserMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'globalId': json['global_id'],
        'cloudKey': !(0, runtime_1.exists)(json, 'cloud_key') ? undefined : json['cloud_key'],
        'stripeCustomerId': !(0, runtime_1.exists)(json, 'stripe_customer_id') ? undefined : json['stripe_customer_id'],
        'vanityname': !(0, runtime_1.exists)(json, 'vanityname') ? undefined : json['vanityname'],
        'allocation': !(0, runtime_1.exists)(json, 'allocation') ? undefined : (0, _1.Auth0UserAllocationMetadataFromJSON)(json['allocation']),
    };
}
exports.Auth0UserMetadataFromJSONTyped = Auth0UserMetadataFromJSONTyped;
function Auth0UserMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'global_id': value.globalId,
        'cloud_key': value.cloudKey,
        'stripe_customer_id': value.stripeCustomerId,
        'vanityname': value.vanityname,
        'allocation': (0, _1.Auth0UserAllocationMetadataToJSON)(value.allocation),
    };
}
exports.Auth0UserMetadataToJSON = Auth0UserMetadataToJSON;
