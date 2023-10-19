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
 * @interface OCRConfidence
 */
export interface OCRConfidence {
    /**
     * this is the mean confidence returned by tesseract
     * @type {number}
     * @memberof OCRConfidence
     */
    mean: number;
}

export function OCRConfidenceFromJSON(json: any): OCRConfidence {
    return OCRConfidenceFromJSONTyped(json, false);
}

export function OCRConfidenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OCRConfidence {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mean': json['mean'],
    };
}

export function OCRConfidenceToJSON(value?: OCRConfidence | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mean': value.mean,
    };
}


