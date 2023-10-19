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

/**
 * This is the hint enum used to describe a type of hint.
 * @export
 * @enum {string}
 */
export enum HintTypeEnum {
    SuggestedQuery = 'SUGGESTED_QUERY',
    QgptHint = 'QGPT_HINT'
}

export function HintTypeEnumFromJSON(json: any): HintTypeEnum {
    return HintTypeEnumFromJSONTyped(json, false);
}

export function HintTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): HintTypeEnum {
    return json as HintTypeEnum;
}

export function HintTypeEnumToJSON(value?: HintTypeEnum | null): any {
    return value as any;
}

