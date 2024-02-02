export const __esModule: boolean;
export const AssetSpecificAssetExportExportTypeEnum: {};
declare const AssetApi_base: any;
/**
 *
 */
export class AssetApi extends AssetApi_base {
    [x: string]: any;
    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    assetAssociateTagRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a tag with a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/associate/{tag} [POST]
     */
    assetAssociateTag(requestParameters: any): Promise<void>;
    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    assetAssociateWebsiteRaw(requestParameters: any): Promise<any>;
    /**
     * This will associate a website with a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/associate/{website} [POST]
     */
    assetAssociateWebsite(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    assetDisassociateTagRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a tag from a asset. This will do the same thing as the tag equivilant.
     * /asset/{asset}/tags/disassociate/{tag} [POST]
     */
    assetDisassociateTag(requestParameters: any): Promise<void>;
    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    assetDisassociateWebsiteRaw(requestParameters: any): Promise<any>;
    /**
     * This will enable us to dissassociate a website from a asset. This will do the same thing as the website equivilant.
     * /asset/{asset}/websites/disassociate/{website} [POST]
     */
    assetDisassociateWebsite(requestParameters: any): Promise<void>;
    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    assetFormatsRaw(requestParameters: any): Promise<any>;
    /**
     * Get the formats for a given asset.
     * /asset/{asset}/formats [GET] Scoped To Asset
     */
    assetFormats(requestParameters: any): Promise<any>;
    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    assetReclassifyRaw(requestParameters: any): Promise<any>;
    /**
     * This will update the classification of this asset to the proper classification.
     * /asset/reclassify [POST]
     */
    assetReclassify(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    assetScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/asset/{asset}/scores/increment\' [POST]
     */
    assetScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    assetSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * Get the snapshot of a specific asset.
     * /asset/{asset} [GET] Scoped To Asset
     */
    assetSnapshot(requestParameters: any): Promise<any>;
    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    assetSnapshotPostRaw(requestParameters: any): Promise<any>;
    /**
     * Get the snapshot of a specific asset. by passing over as well the user who is getting the snapshot.
     * /asset/{asset} [POST] Scoped to an Asset
     */
    assetSnapshotPost(requestParameters: any): Promise<any>;
    /**
     * This will get a specific asset\'s activity events
     * /asset/{asset}/activities [GET]
     */
    assetSpecificAssetActivitiesRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific asset\'s activity events
     * /asset/{asset}/activities [GET]
     */
    assetSpecificAssetActivities(requestParameters: any): Promise<any>;
    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    assetSpecificAssetConversationsRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific asset\'s conversations
     * /asset/{asset}/conversations [GET]
     */
    assetSpecificAssetConversations(requestParameters: any): Promise<any>;
    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    assetSpecificAssetExportRaw(requestParameters: any): Promise<any>;
    /**
     * This will return a export version of your asset.
     * [GET] /asset/{asset}/export
     */
    assetSpecificAssetExport(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    assetUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept an Asset that the user wants to update, and will return the a full Asset that was updated!
     * /asset/update [POST] Scoped to Asset
     */
    assetUpdate(requestParameters: any): Promise<any>;
}
export {};
