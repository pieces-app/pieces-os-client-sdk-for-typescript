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
 * Code block type like function, class, abstract
 * @export
 */
export const TLPDirectedDiscoveryFilterEnum = {
    Unknown: 'UNKNOWN',
    Function: 'FUNCTION',
    Method: 'METHOD',
    Class: 'CLASS',
    Struct: 'STRUCT',
    Abstract: 'ABSTRACT',
    Comment: 'COMMENT',
    Import: 'IMPORT',
    If: 'IF',
    Loop: 'LOOP',
    Return: 'RETURN'
} as const;
export type TLPDirectedDiscoveryFilterEnum = typeof TLPDirectedDiscoveryFilterEnum[keyof typeof TLPDirectedDiscoveryFilterEnum];


export function instanceOfTLPDirectedDiscoveryFilterEnum(value: any): boolean {
    for (const key in TLPDirectedDiscoveryFilterEnum) {
        if (Object.prototype.hasOwnProperty.call(TLPDirectedDiscoveryFilterEnum, key)) {
            if (TLPDirectedDiscoveryFilterEnum[key as keyof typeof TLPDirectedDiscoveryFilterEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TLPDirectedDiscoveryFilterEnumFromJSON(json: any): TLPDirectedDiscoveryFilterEnum {
    return TLPDirectedDiscoveryFilterEnumFromJSONTyped(json, false);
}

export function TLPDirectedDiscoveryFilterEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPDirectedDiscoveryFilterEnum {
    return json as TLPDirectedDiscoveryFilterEnum;
}

export function TLPDirectedDiscoveryFilterEnumToJSON(value?: TLPDirectedDiscoveryFilterEnum | null): any {
    return value as any;
}

export function TLPDirectedDiscoveryFilterEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): TLPDirectedDiscoveryFilterEnum {
    return value as TLPDirectedDiscoveryFilterEnum;
}

