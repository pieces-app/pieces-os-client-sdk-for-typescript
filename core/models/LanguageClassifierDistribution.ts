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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * Probability distribution model for the LanguageClassifierReturnable model.
 * @export
 * @interface LanguageClassifierDistribution
 */
export interface LanguageClassifierDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof LanguageClassifierDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    bat?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    c?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    cc?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    cpp?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    css?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    coffee?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    dart?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    erl?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    go?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    html?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    hs?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    java?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    js?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    lua?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    md?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    matlab?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    m?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    php?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    pl?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    ps1?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    py?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    r?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    rb?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    rs?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    sql?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    scala?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    sh?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    swift?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    tex?: number;
    /**
     * 
     * @type {number}
     * @memberof LanguageClassifierDistribution
     */
    ts?: number;
}

export function LanguageClassifierDistributionFromJSON(json: any): LanguageClassifierDistribution {
    return LanguageClassifierDistributionFromJSONTyped(json, false);
}

export function LanguageClassifierDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageClassifierDistribution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'bat': !exists(json, 'bat') ? undefined : json['bat'],
        'c': !exists(json, 'c') ? undefined : json['c'],
        'cc': !exists(json, 'cc') ? undefined : json['cc'],
        'cpp': !exists(json, 'cpp') ? undefined : json['cpp'],
        'css': !exists(json, 'css') ? undefined : json['css'],
        'coffee': !exists(json, 'coffee') ? undefined : json['coffee'],
        'dart': !exists(json, 'dart') ? undefined : json['dart'],
        'erl': !exists(json, 'erl') ? undefined : json['erl'],
        'go': !exists(json, 'go') ? undefined : json['go'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'hs': !exists(json, 'hs') ? undefined : json['hs'],
        'java': !exists(json, 'java') ? undefined : json['java'],
        'js': !exists(json, 'js') ? undefined : json['js'],
        'lua': !exists(json, 'lua') ? undefined : json['lua'],
        'md': !exists(json, 'md') ? undefined : json['md'],
        'matlab': !exists(json, 'matlab') ? undefined : json['matlab'],
        'm': !exists(json, 'm') ? undefined : json['m'],
        'php': !exists(json, 'php') ? undefined : json['php'],
        'pl': !exists(json, 'pl') ? undefined : json['pl'],
        'ps1': !exists(json, 'ps1') ? undefined : json['ps1'],
        'py': !exists(json, 'py') ? undefined : json['py'],
        'r': !exists(json, 'r') ? undefined : json['r'],
        'rb': !exists(json, 'rb') ? undefined : json['rb'],
        'rs': !exists(json, 'rs') ? undefined : json['rs'],
        'sql': !exists(json, 'sql') ? undefined : json['sql'],
        'scala': !exists(json, 'scala') ? undefined : json['scala'],
        'sh': !exists(json, 'sh') ? undefined : json['sh'],
        'swift': !exists(json, 'swift') ? undefined : json['swift'],
        'tex': !exists(json, 'tex') ? undefined : json['tex'],
        'ts': !exists(json, 'ts') ? undefined : json['ts'],
    };
}

export function LanguageClassifierDistributionToJSON(value?: LanguageClassifierDistribution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
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


