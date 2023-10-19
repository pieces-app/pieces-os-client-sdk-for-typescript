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
/**
 * 
 * @export
 * @interface OCRHOCR
 */
export interface OCRHOCR {
    /**
     * this is the OCR hOCR text output
     * @type {string}
     * @memberof OCRHOCR
     */
    text: string;
}

export function OCRHOCRFromJSON(json: any): OCRHOCR {
    return OCRHOCRFromJSONTyped(json, false);
}

export function OCRHOCRFromJSONTyped(json: any, ignoreDiscriminator: boolean): OCRHOCR {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'text': json['text'],
    };
}

export function OCRHOCRToJSON(value?: OCRHOCR | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'text': value.text,
    };
}


