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
 * OPEN: Means that privacy is fully open
 * CLOSED: Means that privacy is fully locked down, and private
 * ANONYMOUS: Means that we are allowed to collect information but it cannot get attached to me as the user.
 * @export
 */
export const PrivacyEnum = {
    Unknown: 'UNKNOWN',
    Open: 'OPEN',
    Closed: 'CLOSED',
    Anonymous: 'ANONYMOUS'
} as const;
export type PrivacyEnum = typeof PrivacyEnum[keyof typeof PrivacyEnum];


export function instanceOfPrivacyEnum(value: any): boolean {
    for (const key in PrivacyEnum) {
        if (Object.prototype.hasOwnProperty.call(PrivacyEnum, key)) {
            if (PrivacyEnum[key as keyof typeof PrivacyEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function PrivacyEnumFromJSON(json: any): PrivacyEnum {
    return PrivacyEnumFromJSONTyped(json, false);
}

export function PrivacyEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivacyEnum {
    return json as PrivacyEnum;
}

export function PrivacyEnumToJSON(value?: PrivacyEnum | null): any {
    return value as any;
}

export function PrivacyEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): PrivacyEnum {
    return value as PrivacyEnum;
}

