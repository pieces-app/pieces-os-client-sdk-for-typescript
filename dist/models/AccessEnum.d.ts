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
 *
 * @export
 * @enum {string}
 */
export declare enum AccessEnum {
    Public = "PUBLIC",
    Private = "PRIVATE"
}
export declare function AccessEnumFromJSON(json: any): AccessEnum;
export declare function AccessEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessEnum;
export declare function AccessEnumToJSON(value?: AccessEnum | null): any;
