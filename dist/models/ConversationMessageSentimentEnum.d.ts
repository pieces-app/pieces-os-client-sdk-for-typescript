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
 * This will describe the sentiment of a specific message ie if the message was liked/disliked/reported
 * @export
 * @enum {string}
 */
export declare enum ConversationMessageSentimentEnum {
    Like = "LIKE",
    Dislike = "DISLIKE",
    Report = "REPORT"
}
export declare function ConversationMessageSentimentEnumFromJSON(json: any): ConversationMessageSentimentEnum;
export declare function ConversationMessageSentimentEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationMessageSentimentEnum;
export declare function ConversationMessageSentimentEnumToJSON(value?: ConversationMessageSentimentEnum | null): any;
