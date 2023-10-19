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
exports.LanguageClassifierDistributionToJSON = exports.LanguageClassifierDistributionFromJSONTyped = exports.LanguageClassifierDistributionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function LanguageClassifierDistributionFromJSON(json) {
    return LanguageClassifierDistributionFromJSONTyped(json, false);
}
exports.LanguageClassifierDistributionFromJSON = LanguageClassifierDistributionFromJSON;
function LanguageClassifierDistributionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'bat': !(0, runtime_1.exists)(json, 'bat') ? undefined : json['bat'],
        'c': !(0, runtime_1.exists)(json, 'c') ? undefined : json['c'],
        'cc': !(0, runtime_1.exists)(json, 'cc') ? undefined : json['cc'],
        'cpp': !(0, runtime_1.exists)(json, 'cpp') ? undefined : json['cpp'],
        'css': !(0, runtime_1.exists)(json, 'css') ? undefined : json['css'],
        'coffee': !(0, runtime_1.exists)(json, 'coffee') ? undefined : json['coffee'],
        'dart': !(0, runtime_1.exists)(json, 'dart') ? undefined : json['dart'],
        'erl': !(0, runtime_1.exists)(json, 'erl') ? undefined : json['erl'],
        'go': !(0, runtime_1.exists)(json, 'go') ? undefined : json['go'],
        'html': !(0, runtime_1.exists)(json, 'html') ? undefined : json['html'],
        'hs': !(0, runtime_1.exists)(json, 'hs') ? undefined : json['hs'],
        'java': !(0, runtime_1.exists)(json, 'java') ? undefined : json['java'],
        'js': !(0, runtime_1.exists)(json, 'js') ? undefined : json['js'],
        'lua': !(0, runtime_1.exists)(json, 'lua') ? undefined : json['lua'],
        'md': !(0, runtime_1.exists)(json, 'md') ? undefined : json['md'],
        'matlab': !(0, runtime_1.exists)(json, 'matlab') ? undefined : json['matlab'],
        'm': !(0, runtime_1.exists)(json, 'm') ? undefined : json['m'],
        'php': !(0, runtime_1.exists)(json, 'php') ? undefined : json['php'],
        'pl': !(0, runtime_1.exists)(json, 'pl') ? undefined : json['pl'],
        'ps1': !(0, runtime_1.exists)(json, 'ps1') ? undefined : json['ps1'],
        'py': !(0, runtime_1.exists)(json, 'py') ? undefined : json['py'],
        'r': !(0, runtime_1.exists)(json, 'r') ? undefined : json['r'],
        'rb': !(0, runtime_1.exists)(json, 'rb') ? undefined : json['rb'],
        'rs': !(0, runtime_1.exists)(json, 'rs') ? undefined : json['rs'],
        'sql': !(0, runtime_1.exists)(json, 'sql') ? undefined : json['sql'],
        'scala': !(0, runtime_1.exists)(json, 'scala') ? undefined : json['scala'],
        'sh': !(0, runtime_1.exists)(json, 'sh') ? undefined : json['sh'],
        'swift': !(0, runtime_1.exists)(json, 'swift') ? undefined : json['swift'],
        'tex': !(0, runtime_1.exists)(json, 'tex') ? undefined : json['tex'],
        'ts': !(0, runtime_1.exists)(json, 'ts') ? undefined : json['ts'],
    };
}
exports.LanguageClassifierDistributionFromJSONTyped = LanguageClassifierDistributionFromJSONTyped;
function LanguageClassifierDistributionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'bat': value.bat,
        'c': value.c,
        'cc': value.cc,
        'cpp': value.cpp,
        'css': value.css,
        'coffee': value.coffee,
        'dart': value.dart,
        'erl': value.erl,
        'go': value.go,
        'html': value.html,
        'hs': value.hs,
        'java': value.java,
        'js': value.js,
        'lua': value.lua,
        'md': value.md,
        'matlab': value.matlab,
        'm': value.m,
        'php': value.php,
        'pl': value.pl,
        'ps1': value.ps1,
        'py': value.py,
        'r': value.r,
        'rb': value.rb,
        'rs': value.rs,
        'sql': value.sql,
        'scala': value.scala,
        'sh': value.sh,
        'swift': value.swift,
        'tex': value.tex,
        'ts': value.ts,
    };
}
exports.LanguageClassifierDistributionToJSON = LanguageClassifierDistributionToJSON;
