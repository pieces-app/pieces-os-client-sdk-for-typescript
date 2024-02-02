export const __esModule: boolean;
declare const WebsiteApi_base: any;
/**
 *
 */
export class WebsiteApi extends WebsiteApi_base {
    [x: string]: any;
    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    websiteAssociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    websiteAssociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will associate a website with a conversation.
     * /website/{website}/conversations/associate/{conversation} [POST]
     */
    websiteAssociateConversationRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a website with a conversation.
     * /website/{website}/conversations/associate/{conversation} [POST]
     */
    websiteAssociateConversation(requestParameters: any): Promise<void>;
    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    websiteAssociatePersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    websiteAssociatePerson(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    websiteDisassociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    websiteDisassociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a conversation.
     * /website/{website}/conversations/disassociate/{conversation} [POST]
     */
    websiteDisassociateConversationRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a website from a conversation.
     * /website/{website}/conversations/disassociate/{conversation} [POST]
     */
    websiteDisassociateConversation(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    websiteDisassociatePersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    websiteDisassociatePerson(requestParameters: any): Promise<void>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    websiteScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    websiteScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    websiteUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    websiteUpdate(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    websitesSpecificWebsiteSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    websitesSpecificWebsiteSnapshot(requestParameters: any): Promise<any>;
}
export {};
