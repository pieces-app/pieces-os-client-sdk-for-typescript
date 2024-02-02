export const __esModule: boolean;
declare const ConversationMessageApi_base: any;
/**
 *
 */
export class ConversationMessageApi extends ConversationMessageApi_base {
    [x: string]: any;
    /**
     * This will associate a message with an annotation.
     * /message/{message}/annotations/associate/{annotation} [POST]
     */
    messageAssociateAnnotationRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a message with an annotation.
     * /message/{message}/annotations/associate/{annotation} [POST]
     */
    messageAssociateAnnotation(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a message from an annotation.
     * /message/{message}/annotations/disassociate/{annotation} [POST]
     */
    messageDisassociateAnnotationRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a message from an annotation.
     * /message/{message}/annotations/disassociate/{annotation} [POST]
     */
    messageDisassociateAnnotation(requestParameters: any): Promise<void>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/message/{message}/scores/increment\' [POST]
     */
    messageScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/message/{message}/scores/increment\' [POST]
     */
    messageScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a specific snapshot of a message
     * /message/{message} [GET]
     */
    messageSpecificMessageSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific snapshot of a message
     * /message/{message} [GET]
     */
    messageSpecificMessageSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a conversation message.
     * /message/update [GET]
     */
    messageSpecificMessageUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a conversation message.
     * /message/update [GET]
     */
    messageSpecificMessageUpdate(requestParameters: any): Promise<any>;
}
export {};
