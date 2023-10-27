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
import { Conversation, ConversationMessages } from '../models';
export interface ConversationAssociateAnchorRequest {
    conversation: string;
    anchor: string;
}
export interface ConversationAssociateAssetRequest {
    conversation: string;
    asset: string;
}
export interface ConversationDeleteAnchorRequest {
    conversation: string;
    anchor: string;
}
export interface ConversationDeleteAssetRequest {
    conversation: string;
    asset: string;
}
export interface ConversationGetSpecificConversationRequest {
    conversation: string;
    transferables?: boolean;
}
export interface ConversationSpecificConversationMessagesRequest {
    conversation: string;
    transferables?: boolean;
}
export interface ConversationUpdateRequest {
    transferables?: boolean;
    conversation?: Conversation;
}
/**
 *
 */
export declare class ConversationApi extends runtime.BaseAPI {
    /**
     * This will update both the anchor and the conversation.  and associate the 2 together
     * /conversation/{conversation}/anchors/associate/{anchor} [POST]
     */
    conversationAssociateAnchorRaw(requestParameters: ConversationAssociateAnchorRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will update both the anchor and the conversation.  and associate the 2 together
     * /conversation/{conversation}/anchors/associate/{anchor} [POST]
     */
    conversationAssociateAnchor(requestParameters: ConversationAssociateAnchorRequest): Promise<void>;
    /**
     * This will update both the asset and the conversation.  and associate the 2 together
     * /conversation/{conversation}/assets/associate/{asset} [POST]
     */
    conversationAssociateAssetRaw(requestParameters: ConversationAssociateAssetRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will update both the asset and the conversation.  and associate the 2 together
     * /conversation/{conversation}/assets/associate/{asset} [POST]
     */
    conversationAssociateAsset(requestParameters: ConversationAssociateAssetRequest): Promise<void>;
    /**
     * This will update both the anchor and the conversation.  and delete(disacioate) the 2 together
     * /conversation/{conversation}/anchors/delete/{anchor} [POST]
     */
    conversationDeleteAnchorRaw(requestParameters: ConversationDeleteAnchorRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will update both the anchor and the conversation.  and delete(disacioate) the 2 together
     * /conversation/{conversation}/anchors/delete/{anchor} [POST]
     */
    conversationDeleteAnchor(requestParameters: ConversationDeleteAnchorRequest): Promise<void>;
    /**
     * This will update both the asset and the conversation.  and delete(disacioate) the 2.
     * /conversation/{conversation}/assets/delete/{asset} [POST]
     */
    conversationDeleteAssetRaw(requestParameters: ConversationDeleteAssetRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will update both the asset and the conversation.  and delete(disacioate) the 2.
     * /conversation/{conversation}/assets/delete/{asset} [POST]
     */
    conversationDeleteAsset(requestParameters: ConversationDeleteAssetRequest): Promise<void>;
    /**
     * This will get a specific conversation.
     * /conversation/{conversation} [GET]
     */
    conversationGetSpecificConversationRaw(requestParameters: ConversationGetSpecificConversationRequest): Promise<runtime.ApiResponse<Conversation>>;
    /**
     * This will get a specific conversation.
     * /conversation/{conversation} [GET]
     */
    conversationGetSpecificConversation(requestParameters: ConversationGetSpecificConversationRequest): Promise<Conversation>;
    /**
     * This will get a specific conversations messages
     * /conversation/{conversation}/messages [GET]
     */
    conversationSpecificConversationMessagesRaw(requestParameters: ConversationSpecificConversationMessagesRequest): Promise<runtime.ApiResponse<ConversationMessages>>;
    /**
     * This will get a specific conversations messages
     * /conversation/{conversation}/messages [GET]
     */
    conversationSpecificConversationMessages(requestParameters: ConversationSpecificConversationMessagesRequest): Promise<ConversationMessages>;
    /**
     * This will update a specific conversation.
     * /conversation/update [POST]
     */
    conversationUpdateRaw(requestParameters: ConversationUpdateRequest): Promise<runtime.ApiResponse<Conversation>>;
    /**
     * This will update a specific conversation.
     * /conversation/update [POST]
     */
    conversationUpdate(requestParameters: ConversationUpdateRequest): Promise<Conversation>;
}