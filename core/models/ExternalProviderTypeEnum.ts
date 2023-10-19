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
 * This is an enum to describe the provider used to authenticate a user.
 * 
 * IMPORTANT NOT to modify tha values here unless they are explicitly mapped with auth0's provider values(example within cloud server)
 * 
 * 'waad': (windows azure active directory)
 * @export
 * @enum {string}
 */
export enum ExternalProviderTypeEnum {
    Github = 'github',
    Auth0 = 'auth0',
    GoogleOauth2 = 'google-oauth2',
    Bitbucket = 'bitbucket',
    Linkedin = 'linkedin',
    Twitter = 'twitter',
    Facebook = 'facebook',
    Waad = 'waad'
}

export function ExternalProviderTypeEnumFromJSON(json: any): ExternalProviderTypeEnum {
    return ExternalProviderTypeEnumFromJSONTyped(json, false);
}

export function ExternalProviderTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalProviderTypeEnum {
    return json as ExternalProviderTypeEnum;
}

export function ExternalProviderTypeEnumToJSON(value?: ExternalProviderTypeEnum | null): any {
    return value as any;
}

