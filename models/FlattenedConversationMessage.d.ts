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
 * This is a flattened DAG safe version of a ConversationMessage.
 * @export
 * @interface FlattenedConversationMessage
 */
export interface FlattenedConversationMessage {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof FlattenedConversationMessage
     */
    id: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {Model}
     * @memberof FlattenedConversationMessage
     */
    model?: Model;
    /**
     *
     * @type {FragmentFormat}
     * @memberof FlattenedConversationMessage
     */
    fragment?: FragmentFormat;
    /**
     *
     * @type {ReferencedConversation}
     * @memberof FlattenedConversationMessage
     */
    conversation: ReferencedConversation;
    /**
     *
     * @type {ConversationMessageSentimentEnum}
     * @memberof FlattenedConversationMessage
     */
    sentiment?: ConversationMessageSentimentEnum;
    /**
     *
     * @type {ConversationMessageRoleEnum}
     * @memberof FlattenedConversationMessage
     */
    role: ConversationMessageRoleEnum;
}
export declare function FlattenedConversationMessageFromJSON(json: any): FlattenedConversationMessage;
export declare function FlattenedConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversationMessage;
export declare function FlattenedConversationMessageToJSON(value?: FlattenedConversationMessage | null): any;
