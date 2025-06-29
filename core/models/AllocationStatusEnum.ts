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
 * This is a Generic status enumeration that will be used for the status of dns and pod or cloud.
 * @export
 */
export const AllocationStatusEnum = {
    Unknown: 'UNKNOWN',
    Pending: 'PENDING',
    Running: 'RUNNING',
    Failed: 'FAILED',
    Succeeded: 'SUCCEEDED',
    Disconnected: 'DISCONNECTED'
} as const;
export type AllocationStatusEnum = typeof AllocationStatusEnum[keyof typeof AllocationStatusEnum];


export function instanceOfAllocationStatusEnum(value: any): boolean {
    for (const key in AllocationStatusEnum) {
        if (Object.prototype.hasOwnProperty.call(AllocationStatusEnum, key)) {
            if (AllocationStatusEnum[key as keyof typeof AllocationStatusEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AllocationStatusEnumFromJSON(json: any): AllocationStatusEnum {
    return AllocationStatusEnumFromJSONTyped(json, false);
}

export function AllocationStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocationStatusEnum {
    return json as AllocationStatusEnum;
}

export function AllocationStatusEnumToJSON(value?: AllocationStatusEnum | null): any {
    return value as any;
}

export function AllocationStatusEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): AllocationStatusEnum {
    return value as AllocationStatusEnum;
}

