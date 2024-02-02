export const __esModule: boolean;
declare const TagApi_base: any;
/**
 *
 */
export class TagApi extends TagApi_base {
    [x: string]: any;
    /**
     * This will associate a tag with a asset.
     * /tag/{tag}/assets/associate/{asset} [POST]
     */
    tagAssociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a tag with a asset.
     * /tag/{tag}/assets/associate/{asset} [POST]
     */
    tagAssociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will associate a tag with a person.
     * /tag/{tag}/persons/associate/{person} [POST]
     */
    tagAssociatePersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a tag with a person.
     * /tag/{tag}/persons/associate/{person} [POST]
     */
    tagAssociatePerson(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a tag from a asset.
     * /tag/{tag}/assets/disassociate/{asset} [POST]
     */
    tagDisassociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a tag from a asset.
     * /tag/{tag}/assets/disassociate/{asset} [POST]
     */
    tagDisassociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a tag from a person.
     * /tag/{tag}/persons/disassociate/{person} [POST]
     */
    tagDisassociatePersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a tag from a person.
     * /tag/{tag}/persons/disassociate/{person} [POST]
     */
    tagDisassociatePerson(requestParameters: any): Promise<void>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/tag/{tag}/scores/increment\' [POST]
     */
    tagScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/tag/{tag}/scores/increment\' [POST]
     */
    tagScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will update a specific tag.
     * /tag/update [POST]
     */
    tagUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific tag.
     * /tag/update [POST]
     */
    tagUpdate(requestParameters: any): Promise<any>;
    /**
     * This will get a specific tag.
     * /tag/{tag} [GET]
     */
    tagsSpecificTagSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific tag.
     * /tag/{tag} [GET]
     */
    tagsSpecificTagSnapshot(requestParameters: any): Promise<any>;
}
export {};
