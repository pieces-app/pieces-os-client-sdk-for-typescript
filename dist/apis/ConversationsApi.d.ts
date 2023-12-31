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
import * as runtime from '../runtime';
import { Conversation, Conversations, ConversationsCreateFromAssetOutput, FlattenedConversations, SeededConversation } from '../models';
export interface ConversationsCreateFromAssetRequest {
    asset: string;
}
export interface ConversationsCreateSpecificConversationRequest {
    transferables?: boolean;
    seededConversation?: SeededConversation;
}
export interface ConversationsDeleteSpecificConversationRequest {
    conversation: string;
}
export interface ConversationsSnapshotRequest {
    transferables?: boolean;
}
/**
 *
 */
export declare class ConversationsApi extends runtime.BaseAPI {
    /**
     * This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).
     * /conversations/create/from_asset/{asset} [POST]
     */
    conversationsCreateFromAssetRaw(requestParameters: ConversationsCreateFromAssetRequest): Promise<runtime.ApiResponse<ConversationsCreateFromAssetOutput>>;
    /**
     * This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).
     * /conversations/create/from_asset/{asset} [POST]
     */
    conversationsCreateFromAsset(requestParameters: ConversationsCreateFromAssetRequest): Promise<ConversationsCreateFromAssetOutput>;
    /**
     * This will create a specific conversation.
     * /conversations/create [POST]
     */
    conversationsCreateSpecificConversationRaw(requestParameters: ConversationsCreateSpecificConversationRequest): Promise<runtime.ApiResponse<Conversation>>;
    /**
     * This will create a specific conversation.
     * /conversations/create [POST]
     */
    conversationsCreateSpecificConversation(requestParameters: ConversationsCreateSpecificConversationRequest): Promise<Conversation>;
    /**
     * This will delete a specific Conversation.
     * /conversations/{conversation}/delete [POST]
     */
    conversationsDeleteSpecificConversationRaw(requestParameters: ConversationsDeleteSpecificConversationRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will delete a specific Conversation.
     * /conversations/{conversation}/delete [POST]
     */
    conversationsDeleteSpecificConversation(requestParameters: ConversationsDeleteSpecificConversationRequest): Promise<void>;
    /**
     * This will get all the uuids of a Conversation.
     * /conversations/identifiers [GET]
     */
    conversationsIdentifiersSnapshotRaw(): Promise<runtime.ApiResponse<FlattenedConversations>>;
    /**
     * This will get all the uuids of a Conversation.
     * /conversations/identifiers [GET]
     */
    conversationsIdentifiersSnapshot(): Promise<FlattenedConversations>;
    /**
     * This will return a snapshot of a specific conversation
     * /conversations [GET]
     */
    conversationsSnapshotRaw(requestParameters: ConversationsSnapshotRequest): Promise<runtime.ApiResponse<Conversations>>;
    /**
     * This will return a snapshot of a specific conversation
     * /conversations [GET]
     */
    conversationsSnapshot(requestParameters: ConversationsSnapshotRequest): Promise<Conversations>;
    /**
     * This is a stream for the conversation identifiers. will return StreamedIdentifiers.
     * /conversations/stream/identifiers [STREAMED]
     */
    conversationsStreamIdentifiersRaw(): Promise<runtime.ApiResponse<void>>;
    /**
     * This is a stream for the conversation identifiers. will return StreamedIdentifiers.
     * /conversations/stream/identifiers [STREAMED]
     */
    conversationsStreamIdentifiers(): Promise<void>;
}
