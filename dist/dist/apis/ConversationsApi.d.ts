export const __esModule: boolean;
declare const ConversationsApi_base: any;
/**
 *
 */
export class ConversationsApi extends ConversationsApi_base {
    [x: string]: any;
    /**
     * This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).
     * /conversations/create/from_asset/{asset} [POST]
     */
    conversationsCreateFromAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a conversation from an asset, This will create a conversation and an initial message for the conversation(w/ a summary of the asset that is being used as grounding context).
     * /conversations/create/from_asset/{asset} [POST]
     */
    conversationsCreateFromAsset(requestParameters: any): Promise<any>;
    /**
     * This will create a specific conversation.
     * /conversations/create [POST]
     */
    conversationsCreateSpecificConversationRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a specific conversation.
     * /conversations/create [POST]
     */
    conversationsCreateSpecificConversation(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific Conversation.
     * /conversations/{conversation}/delete [POST]
     */
    conversationsDeleteSpecificConversationRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific Conversation.
     * /conversations/{conversation}/delete [POST]
     */
    conversationsDeleteSpecificConversation(requestParameters: any): Promise<void>;
    /**
     * This will get all the uuids of a Conversation.
     * /conversations/identifiers [GET]
     */
    conversationsIdentifiersSnapshotRaw(): Promise<any>;
    /**
     * This will get all the uuids of a Conversation.
     * /conversations/identifiers [GET]
     */
    conversationsIdentifiersSnapshot(): Promise<any>;
    /**
     * This will return a snapshot of a specific conversation
     * /conversations [GET]
     */
    conversationsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will return a snapshot of a specific conversation
     * /conversations [GET]
     */
    conversationsSnapshot(requestParameters: any): Promise<any>;
    /**
     * This is a stream for the conversation identifiers. will return StreamedIdentifiers.
     * /conversations/stream/identifiers [STREAMED]
     */
    conversationsStreamIdentifiersRaw(): Promise<any>;
    /**
     * This is a stream for the conversation identifiers. will return StreamedIdentifiers.
     * /conversations/stream/identifiers [STREAMED]
     */
    conversationsStreamIdentifiers(): Promise<void>;
}
export {};
