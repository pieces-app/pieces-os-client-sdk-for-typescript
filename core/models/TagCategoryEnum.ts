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
 * This is an enum that describes the category that that this tag is apart of.
 * @export
 * @enum {string}
 */
export enum TagCategoryEnum {
    Handle = 'HANDLE',
    Email = 'EMAIL',
    Unknown = 'UNKNOWN'
}

export function TagCategoryEnumFromJSON(json: any): TagCategoryEnum {
    return TagCategoryEnumFromJSONTyped(json, false);
}

export function TagCategoryEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagCategoryEnum {
    return json as TagCategoryEnum;
}

export function TagCategoryEnumToJSON(value?: TagCategoryEnum | null): any {
    return value as any;
}

