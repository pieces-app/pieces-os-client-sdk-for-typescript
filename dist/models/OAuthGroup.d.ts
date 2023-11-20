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
import { OAuthAccount, OAuthToken } from './index';
/**
 * A model to group all of the properties associated with OAuthGroup
 * @export
 * @interface OAuthGroup
 */
export interface OAuthGroup {
    /**
     *
     * @type {OAuthToken}
     * @memberof OAuthGroup
     */
    token?: OAuthToken;
    /**
     *
     * @type {OAuthAccount}
     * @memberof OAuthGroup
     */
    account?: OAuthAccount;
}
export declare function OAuthGroupFromJSON(json: any): OAuthGroup;
export declare function OAuthGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthGroup;
export declare function OAuthGroupToJSON(value?: OAuthGroup | null): any;
