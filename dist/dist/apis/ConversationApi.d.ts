export const __esModule: boolean;
declare const ConversationApi_base: any;
/**
 *
 */
export class ConversationApi extends ConversationApi_base {
    [x: string]: any;
    /**
     * This will update both the anchor and the conversation.  and associate the 2 together
     * /conversation/{conversation}/anchors/associate/{anchor} [POST]
     */
    conversationAssociateAnchorRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the anchor and the conversation.  and associate the 2 together
     * /conversation/{conversation}/anchors/associate/{anchor} [POST]
     */
    conversationAssociateAnchor(requestParameters: any): Promise<void>;
    /**
     * This will update both the asset and the conversation.  and associate the 2 together
     * /conversation/{conversation}/assets/associate/{asset} [POST]
     */
    conversationAssociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the asset and the conversation.  and associate the 2 together
     * /conversation/{conversation}/assets/associate/{asset} [POST]
     */
    conversationAssociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will update both the website and the conversation.  and associate the 2 together
     * /conversation/{conversation}/websites/associate/{website} [POST]
     */
    conversationAssociateWebsiteRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the website and the conversation.  and associate the 2 together
     * /conversation/{conversation}/websites/associate/{website} [POST]
     */
    conversationAssociateWebsite(requestParameters: any): Promise<void>;
    /**
     * This will update both the anchor and the conversation.  and delete(disassociate) the 2 together
     * /conversation/{conversation}/anchors/delete/{anchor} [POST]
     */
    conversationDisassociateAnchorRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the anchor and the conversation.  and delete(disassociate) the 2 together
     * /conversation/{conversation}/anchors/delete/{anchor} [POST]
     */
    conversationDisassociateAnchor(requestParameters: any): Promise<void>;
    /**
     * This will update both the asset and the conversation.  and delete(disassociate) the 2.
     * /conversation/{conversation}/assets/delete/{asset} [POST]
     */
    conversationDisassociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the asset and the conversation.  and delete(disassociate) the 2.
     * /conversation/{conversation}/assets/delete/{asset} [POST]
     */
    conversationDisassociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a conversation from a website.
     * /website/{website}/websites/disassociate/{website} [POST]
     */
    conversationDisassociateWebsiteRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a conversation from a website.
     * /website/{website}/websites/disassociate/{website} [POST]
     */
    conversationDisassociateWebsite(requestParameters: any): Promise<void>;
    /**
     * This will get a specific conversation.
     * /conversation/{conversation} [GET]
     */
    conversationGetSpecificConversationRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific conversation.
     * /conversation/{conversation} [GET]
     */
    conversationGetSpecificConversation(requestParameters: any): Promise<any>;
    /**
     * This will save the grounding context for a conversation. This will enable us to associate a message to the conversation.grounding object.
     * /conversation/{conversation}/grounding/messages/associate/{message} [POST]
     */
    conversationGroundingMessagesAssociateMessageRaw(requestParameters: any): Promise<any>;
    /**
     * This will save the grounding context for a conversation. This will enable us to associate a message to the conversation.grounding object.
     * /conversation/{conversation}/grounding/messages/associate/{message} [POST]
     */
    conversationGroundingMessagesAssociateMessage(requestParameters: any): Promise<void>;
    /**
     * This will remove specific grounding context for a conversation. This will enable us to dissassociate a message from the conversation.grounding object.
     * /conversation/{conversation}/grounding/messages/disassociate/{message} [POST]
     */
    conversationGroundingMessagesDisassociateMessageRaw(requestParameters: any): Promise<any>;
    /**
     * This will remove specific grounding context for a conversation. This will enable us to dissassociate a message from the conversation.grounding object.
     * /conversation/{conversation}/grounding/messages/disassociate/{message} [POST]
     */
    conversationGroundingMessagesDisassociateMessage(requestParameters: any): Promise<void>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/conversation/{conversation}/scores/increment\' [POST]
     */
    conversationScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/conversation/{conversation}/scores/increment\' [POST]
     */
    conversationScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a specific conversations messages
     * /conversation/{conversation}/messages [GET]
     */
    conversationSpecificConversationMessagesRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific conversations messages
     * /conversation/{conversation}/messages [GET]
     */
    conversationSpecificConversationMessages(requestParameters: any): Promise<any>;
    /**
     * This will take a specific converssation and it will rename using ML.
     * /conversation/{conversation}/rename [POST]
     */
    conversationSpecificConversationRenameRaw(requestParameters: any): Promise<any>;
    /**
     * This will take a specific converssation and it will rename using ML.
     * /conversation/{conversation}/rename [POST]
     */
    conversationSpecificConversationRename(requestParameters: any): Promise<any>;
    /**
     * This will take a current conversation and create a summary of the conversation and save it as an annotation on the conversation.  will return the annotation reference used as the summary.
     * /conversation/{conversation}/summarize [POST]
     */
    conversationSummarizeRaw(requestParameters: any): Promise<any>;
    /**
     * This will take a current conversation and create a summary of the conversation and save it as an annotation on the conversation.  will return the annotation reference used as the summary.
     * /conversation/{conversation}/summarize [POST]
     */
    conversationSummarize(requestParameters: any): Promise<any>;
    /**
     * This will update a specific conversation.
     * /conversation/update [POST]
     */
    conversationUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific conversation.
     * /conversation/update [POST]
     */
    conversationUpdate(requestParameters: any): Promise<any>;
}
export {};
