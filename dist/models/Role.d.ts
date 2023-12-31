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
 * This is the specific role of a format.
 * @export
 * @enum {string}
 */
export declare enum Role {
    Original = "ORIGINAL",
    Additional = "ADDITIONAL",
    Both = "BOTH",
    Preview = "PREVIEW"
}
export declare function RoleFromJSON(json: any): Role;
export declare function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role;
export declare function RoleToJSON(value?: Role | null): any;
