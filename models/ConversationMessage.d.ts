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
import { ConversationMessageRoleEnum, ConversationMessageSentimentEnum, EmbeddedModelSchema, FragmentFormat, GroupedTimestamp, Model, ReferencedConversation } from './';
/**
 * This is a fully referenced ConversationMessage.
 *
 * This has the minimum amount of properties to keep this light weight
 *
 * (will consider additional properties in the future like people/tags/links xyz)
 * @export
 * @interface ConversationMessage
 */
export interface ConversationMessage {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ConversationMessage
     */
    id: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof ConversationMessage
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof ConversationMessage
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof ConversationMessage
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {Model}
     * @memberof ConversationMessage
     */
    model?: Model;
    /**
     *
     * @type {FragmentFormat}
     * @memberof ConversationMessage
     */
    fragment?: FragmentFormat;
    /**
     *
     * @type {ReferencedConversation}
     * @memberof ConversationMessage
     */
    conversation: ReferencedConversation;
    /**
     *
     * @type {ConversationMessageSentimentEnum}
     * @memberof ConversationMessage
     */
    sentiment?: ConversationMessageSentimentEnum;
    /**
     *
     * @type {ConversationMessageRoleEnum}
     * @memberof ConversationMessage
     */
    role: ConversationMessageRoleEnum;
}
export declare function ConversationMessageFromJSON(json: any): ConversationMessage;
export declare function ConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationMessage;
export declare function ConversationMessageToJSON(value?: ConversationMessage | null): any;
