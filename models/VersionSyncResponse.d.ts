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
 * @interface VersionSyncResponse
 */
export interface VersionSyncResponse {
    /**
     * a template for semantic versioning system
     * @type {string}
     * @memberof VersionSyncResponse
     */
    serVer: string;
    /**
     * a template for semantic versioning system
     * @type {string}
     * @memberof VersionSyncResponse
     */
    minVer: string;
}
export declare function VersionSyncResponseFromJSON(json: any): VersionSyncResponse;
export declare function VersionSyncResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionSyncResponse;
export declare function VersionSyncResponseToJSON(value?: VersionSyncResponse | null): any;
