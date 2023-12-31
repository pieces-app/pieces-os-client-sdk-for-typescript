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
 * A Model to support account creation to Auth0's Database.
 * @export
 * @interface OAuthAccount
 */
export interface OAuthAccount {
    /**
     * The client_id of your client.
     * @type {string}
     * @memberof OAuthAccount
     */
    clientId: string;
    /**
     * The user's email address.
     * @type {string}
     * @memberof OAuthAccount
     */
    email: string;
    /**
     * The name of the database configured to your client.
     * @type {string}
     * @memberof OAuthAccount
     */
    connection: string;
    /**
     * The user's username. Only valid if the connection requires a username.
     * @type {string}
     * @memberof OAuthAccount
     */
    username: string;
    /**
     * The user's given name(s).
     * @type {string}
     * @memberof OAuthAccount
     */
    givenName: string;
    /**
     * The user's family name(s).
     * @type {string}
     * @memberof OAuthAccount
     */
    familyName: string;
    /**
     * The user's full name.
     * @type {string}
     * @memberof OAuthAccount
     */
    name: string;
    /**
     * A URI pointing to the user's picture.
     * @type {string}
     * @memberof OAuthAccount
     */
    picture: string;
    /**
     * The user's nickname.
     * @type {string}
     * @memberof OAuthAccount
     */
    nickname: string;
}
export declare function OAuthAccountFromJSON(json: any): OAuthAccount;
export declare function OAuthAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthAccount;
export declare function OAuthAccountToJSON(value?: OAuthAccount | null): any;
