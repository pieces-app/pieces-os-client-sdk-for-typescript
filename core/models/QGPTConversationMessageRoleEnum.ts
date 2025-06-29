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
 * This is the role enum used for a QGPT conversation
 * @export
 */
export const QGPTConversationMessageRoleEnum = {
    Unknown: 'UNKNOWN',
    User: 'USER',
    System: 'SYSTEM',
    Assistant: 'ASSISTANT'
} as const;
export type QGPTConversationMessageRoleEnum = typeof QGPTConversationMessageRoleEnum[keyof typeof QGPTConversationMessageRoleEnum];


export function instanceOfQGPTConversationMessageRoleEnum(value: any): boolean {
    for (const key in QGPTConversationMessageRoleEnum) {
        if (Object.prototype.hasOwnProperty.call(QGPTConversationMessageRoleEnum, key)) {
            if (QGPTConversationMessageRoleEnum[key as keyof typeof QGPTConversationMessageRoleEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function QGPTConversationMessageRoleEnumFromJSON(json: any): QGPTConversationMessageRoleEnum {
    return QGPTConversationMessageRoleEnumFromJSONTyped(json, false);
}

export function QGPTConversationMessageRoleEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTConversationMessageRoleEnum {
    return json as QGPTConversationMessageRoleEnum;
}

export function QGPTConversationMessageRoleEnumToJSON(value?: QGPTConversationMessageRoleEnum | null): any {
    return value as any;
}

export function QGPTConversationMessageRoleEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): QGPTConversationMessageRoleEnum {
    return value as QGPTConversationMessageRoleEnum;
}

