export const __esModule: boolean;
declare const AssetsApi_base: any;
/**
 *
 */
export class AssetsApi extends AssetsApi_base {
    [x: string]: any;
    /**
     * This endpoint will accept a seeded (a structure that comes before an asset, will be used in creation) asset to be uploaded to pieces. Response here will be an Asset that was create!
     * /assets/create [POST] Scoped to Asset
     */
    assetsCreateNewAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept a seeded (a structure that comes before an asset, will be used in creation) asset to be uploaded to pieces. Response here will be an Asset that was create!
     * /assets/create [POST] Scoped to Asset
     */
    assetsCreateNewAsset(requestParameters: any): Promise<any>;
    /**
     * This endpoint will just take a uid to delete out of the assets table, will return the uid that was deleted.
     * /assets/delete [POST] Scoped to Asset
     */
    assetsDeleteAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will just take a uid to delete out of the assets table, will return the uid that was deleted.
     * /assets/delete [POST] Scoped to Asset
     */
    assetsDeleteAsset(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint that will enable a developer to pass in a Seed and get a seed with preprocessed information on that seed out of this endpoint, nothing is persisted, this is a strict input/output endpoint. and return a drafted asset (seed with some initial information).  for images, we will just return the seed that was passed to us. a TODO for v2 would eb to add preprocessing for images as well.
     * /assets/draft [POST]
     */
    assetsDraftRaw(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint that will enable a developer to pass in a Seed and get a seed with preprocessed information on that seed out of this endpoint, nothing is persisted, this is a strict input/output endpoint. and return a drafted asset (seed with some initial information).  for images, we will just return the seed that was passed to us. a TODO for v2 would eb to add preprocessing for images as well.
     * /assets/draft [POST]
     */
    assetsDraft(requestParameters: any): Promise<any>;
    /**
     * An endpoint that takes in a SeededAssetsRecommendation Model within it\'s request body, which requires an object including assets (Assets Model) as well as interactions (InteractedAssets Model) - the resulting will return an Assets Model for use in a UI.
     * Your GET endpoint
     */
    assetsGetRecommendedAssetsRaw(requestParameters: any): Promise<any>;
    /**
     * An endpoint that takes in a SeededAssetsRecommendation Model within it\'s request body, which requires an object including assets (Assets Model) as well as interactions (InteractedAssets Model) - the resulting will return an Assets Model for use in a UI.
     * Your GET endpoint
     */
    assetsGetRecommendedAssets(requestParameters: any): Promise<any>;
    /**
     * Gets one or more related assets when provided one or more input assets. The body will expect the shape of
     * /assets/related [GET]
     */
    assetsGetRelatedAssetsRaw(requestParameters: any): Promise<any>;
    /**
     * Gets one or more related assets when provided one or more input assets. The body will expect the shape of
     * /assets/related [GET]
     */
    assetsGetRelatedAssets(requestParameters: any): Promise<any>;
    /**
     * This will get all of your asset ids
     * /assets/identifiers [GET]
     */
    assetsIdentifiersSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get all of your asset ids
     * /assets/identifiers [GET]
     */
    assetsIdentifiersSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of ONLY the pseudo Assets included in your Pieces drive.
     * /assets/pseudo [GET]
     */
    assetsPseudoSnapshotRaw(): Promise<any>;
    /**
     * This will get a snapshot of ONLY the pseudo Assets included in your Pieces drive.
     * /assets/pseudo [GET]
     */
    assetsPseudoSnapshot(): Promise<any>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! Eventually** /assets/search?query=string [GET] Scoped to Asset  Currently just send along your query in the body.  Required to pass searchable_tags (csv of tags) or a query string.  if a query is passed we will run through fuzzy search.  if searchable_tags are passed we will run through tag_based_search.  if neither are passed in we will return a 500.
     * /assets/search?query=string [GET]
     */
    assetsSearchAssetsRaw(requestParameters: any): Promise<any>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! Eventually** /assets/search?query=string [GET] Scoped to Asset  Currently just send along your query in the body.  Required to pass searchable_tags (csv of tags) or a query string.  if a query is passed we will run through fuzzy search.  if searchable_tags are passed we will run through tag_based_search.  if neither are passed in we will return a 500.
     * /assets/search?query=string [GET]
     */
    assetsSearchAssets(requestParameters: any): Promise<any>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! /assets/search [POST] Scoped to Asset  Currently just send along your query in the body.  if a query is passed we will run through fuzzy search.  The Post Body will also accept a search space, being either a list of uuids.(in the future potentially Seeds.) The Post Body will also accept optional filters, which is an iterable of filters all will be AND operations for now.
     * /assets/search [POST]
     */
    assetsSearchWithFiltersRaw(requestParameters: any): Promise<any>;
    /**
     * This function will search your pieces and will return Assets(the results) based on your query! /assets/search [POST] Scoped to Asset  Currently just send along your query in the body.  if a query is passed we will run through fuzzy search.  The Post Body will also accept a search space, being either a list of uuids.(in the future potentially Seeds.) The Post Body will also accept optional filters, which is an iterable of filters all will be AND operations for now.
     * /assets/search [POST]
     */
    assetsSearchWithFilters(requestParameters: any): Promise<any>;
    /**
     * Get all of the users Assets.
     * /assets [GET] Scoped to Assets
     */
    assetsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * Get all of the users Assets.
     * /assets [GET] Scoped to Assets
     */
    assetsSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will query the formats for agiven asset when provided that asset\'s id.
     * /assets/{asset}/formats [GET] Scoped To Assets
     */
    assetsSpecificAssetFormatsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will query the formats for agiven asset when provided that asset\'s id.
     * /assets/{asset}/formats [GET] Scoped To Assets
     */
    assetsSpecificAssetFormatsSnapshot(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint to enable a client to access a specific asset through a provided uuid in the path.
     * /assets/{asset} [GET] Scoped to Assets
     */
    assetsSpecificAssetSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint to enable a client to access a specific asset through a provided uuid in the path.
     * /assets/{asset} [GET] Scoped to Assets
     */
    assetsSpecificAssetSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will stream the asset identifiers(uuids) that have changed via a websocket connection.
     * /assets/stream/identifiers [GET]
     */
    assetsStreamIdentifiersRaw(): Promise<any>;
    /**
     * This will stream the asset identifiers(uuids) that have changed via a websocket connection.
     * /assets/stream/identifiers [GET]
     */
    assetsStreamIdentifiers(): Promise<any>;
    /**
     * This will emit changes of your assets with your transferables included. This is a websocket connection.
     * Your GET endpoint
     */
    getAssetsStreamTransferablesRaw(): Promise<any>;
    /**
     * This will emit changes of your assets with your transferables included. This is a websocket connection.
     * Your GET endpoint
     */
    getAssetsStreamTransferables(): Promise<any>;
    /**
     * *** IMPORTANT this stream will emit changes WITHOUT the transferables on a format. if you want transferables included please refer to /assets/stream/transferables
     * /assets/stream [GET]
     */
    streamAssetsRaw(): Promise<any>;
    /**
     * *** IMPORTANT this stream will emit changes WITHOUT the transferables on a format. if you want transferables included please refer to /assets/stream/transferables
     * /assets/stream [GET]
     */
    streamAssets(): Promise<any>;
}
export {};
