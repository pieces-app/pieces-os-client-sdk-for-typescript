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
 * This is a type of conversation, for now just COPILOT.
 * @export
 * @enum {string}
 */
export enum ConversationTypeEnum {
    Copilot = 'COPILOT'
}

export function ConversationTypeEnumFromJSON(json: any): ConversationTypeEnum {
    return ConversationTypeEnumFromJSONTyped(json, false);
}

export function ConversationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationTypeEnum {
    return json as ConversationTypeEnum;
}

export function ConversationTypeEnumToJSON(value?: ConversationTypeEnum | null): any {
    return value as any;
}

