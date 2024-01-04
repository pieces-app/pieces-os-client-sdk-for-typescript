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
exports.SeededPKCEADDITIONALPARAMETERSToJSON = exports.SeededPKCEADDITIONALPARAMETERSFromJSONTyped = exports.SeededPKCEADDITIONALPARAMETERSFromJSON = exports.SeededPKCEADDITIONALPARAMETERSDisplayEnum = exports.SeededPKCEADDITIONALPARAMETERSAccessTypeEnum = void 0;
const runtime_1 = require("../runtime");
/**
* @export
* @enum {string}
*/
var SeededPKCEADDITIONALPARAMETERSAccessTypeEnum;
(function (SeededPKCEADDITIONALPARAMETERSAccessTypeEnum) {
    SeededPKCEADDITIONALPARAMETERSAccessTypeEnum["Offline"] = "offline";
})(SeededPKCEADDITIONALPARAMETERSAccessTypeEnum || (exports.SeededPKCEADDITIONALPARAMETERSAccessTypeEnum = SeededPKCEADDITIONALPARAMETERSAccessTypeEnum = {})); /**
* @export
* @enum {string}
*/
var SeededPKCEADDITIONALPARAMETERSDisplayEnum;
(function (SeededPKCEADDITIONALPARAMETERSDisplayEnum) {
    SeededPKCEADDITIONALPARAMETERSDisplayEnum["Popup"] = "popup";
})(SeededPKCEADDITIONALPARAMETERSDisplayEnum || (exports.SeededPKCEADDITIONALPARAMETERSDisplayEnum = SeededPKCEADDITIONALPARAMETERSDisplayEnum = {}));
function SeededPKCEADDITIONALPARAMETERSFromJSON(json) {
    return SeededPKCEADDITIONALPARAMETERSFromJSONTyped(json, false);
}
exports.SeededPKCEADDITIONALPARAMETERSFromJSON = SeededPKCEADDITIONALPARAMETERSFromJSON;
function SeededPKCEADDITIONALPARAMETERSFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessType': !(0, runtime_1.exists)(json, 'access_type') ? undefined : json['access_type'],
        'display': !(0, runtime_1.exists)(json, 'display') ? undefined : json['display'],
    };
}
exports.SeededPKCEADDITIONALPARAMETERSFromJSONTyped = SeededPKCEADDITIONALPARAMETERSFromJSONTyped;
function SeededPKCEADDITIONALPARAMETERSToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'access_type': value.accessType,
        'display': value.display,
    };
}
exports.SeededPKCEADDITIONALPARAMETERSToJSON = SeededPKCEADDITIONALPARAMETERSToJSON;