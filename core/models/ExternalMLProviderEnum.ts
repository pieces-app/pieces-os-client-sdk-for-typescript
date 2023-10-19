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
 * This is a Model used for the Model class. This will be used to describe the provider in which this Mode lcam from IE meta, google, apple, ...etc
 * @export
 * @enum {string}
 */
export enum ExternalMLProviderEnum {
    Apple = 'APPLE',
    Amazon = 'AMAZON',
    Google = 'GOOGLE',
    Meta = 'META',
    Openai = 'OPENAI',
    Lmsys = 'LMSYS',
    Salesforce = 'SALESFORCE',
    HuggingFace = 'HUGGING_FACE',
    UniversityOfWashington = 'UNIVERSITY_OF_WASHINGTON',
    OpenLmResearch = 'OPEN_LM_RESEARCH',
    Microsoft = 'MICROSOFT',
    UcBerkley = 'UC_BERKLEY',
    PekingUniversity = 'PEKING_UNIVERSITY',
    RenminUniversityOfChina = 'RENMIN_UNIVERSITY_OF_CHINA',
    TogetherAi = 'TOGETHER_AI',
    Databricks = 'DATABRICKS',
    EleutherAi = 'ELEUTHER_AI',
    FudanUniversity = 'FUDAN_UNIVERSITY',
    Blickdl = 'BLICKDL',
    HongKongBaptistUniversity = 'HONG_KONG_BAPTIST_UNIVERSITY',
    Bigcode = 'BIGCODE'
}

export function ExternalMLProviderEnumFromJSON(json: any): ExternalMLProviderEnum {
    return ExternalMLProviderEnumFromJSONTyped(json, false);
}

export function ExternalMLProviderEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalMLProviderEnum {
    return json as ExternalMLProviderEnum;
}

export function ExternalMLProviderEnumToJSON(value?: ExternalMLProviderEnum | null): any {
    return value as any;
}

