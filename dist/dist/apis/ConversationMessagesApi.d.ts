export const __esModule: boolean;
declare const ConversationMessagesApi_base: any;
/**
 *
 */
export class ConversationMessagesApi extends ConversationMessagesApi_base {
    [x: string]: any;
    /**
     * This will create a Message on a specific conversation.
     * /messages/create [POST]
     */
    messagesCreateSpecificMessageRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a Message on a specific conversation.
     * /messages/create [POST]
     */
    messagesCreateSpecificMessage(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific message.
     * /messages/{message}/delete [POST]
     */
    messagesDeleteSpecificMessageRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific message.
     * /messages/{message}/delete [POST]
     */
    messagesDeleteSpecificMessage(requestParameters: any): Promise<void>;
    /**
     * This will get all the messages.
     * /messages [GET]
     */
    messagesSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get all the messages.
     * /messages [GET]
     */
    messagesSnapshot(requestParameters: any): Promise<any>;
}
export {};
