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
 * This will describe the sentiment of a specific summary ie if the summary was liked/disliked/reported
 * @export
 */
export const WorkstreamSummarySentimentEnum = {
    Unknown: 'UNKNOWN',
    Like: 'LIKE',
    Dislike: 'DISLIKE',
    Report: 'REPORT'
} as const;
export type WorkstreamSummarySentimentEnum = typeof WorkstreamSummarySentimentEnum[keyof typeof WorkstreamSummarySentimentEnum];


export function instanceOfWorkstreamSummarySentimentEnum(value: any): boolean {
    for (const key in WorkstreamSummarySentimentEnum) {
        if (Object.prototype.hasOwnProperty.call(WorkstreamSummarySentimentEnum, key)) {
            if (WorkstreamSummarySentimentEnum[key as keyof typeof WorkstreamSummarySentimentEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WorkstreamSummarySentimentEnumFromJSON(json: any): WorkstreamSummarySentimentEnum {
    return WorkstreamSummarySentimentEnumFromJSONTyped(json, false);
}

export function WorkstreamSummarySentimentEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamSummarySentimentEnum {
    return json as WorkstreamSummarySentimentEnum;
}

export function WorkstreamSummarySentimentEnumToJSON(value?: WorkstreamSummarySentimentEnum | null): any {
    return value as any;
}

export function WorkstreamSummarySentimentEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): WorkstreamSummarySentimentEnum {
    return value as WorkstreamSummarySentimentEnum;
}

