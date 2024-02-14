export const __esModule: boolean;
declare const AnchorsApi_base: any;
/**
 *
 */
export class AnchorsApi extends AnchorsApi_base {
    [x: string]: any;
    /**
     * This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.
     * /anchors/{anchor}/assets/delete/{asset} [POST]
     */
    anchorDisassociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the asset and the anchor reference, that will remove a anchor from an asset(only the references).  This will NOT remove the anchor. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.
     * /anchors/{anchor}/assets/delete/{asset} [POST]
     */
    anchorDisassociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.
     * /anchors/create [POST]
     */
    anchorsCreateNewAnchorRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a anchor and attach it to a specific asset(s) This will also ensure the anchor is normalized.
     * /anchors/create [POST]
     */
    anchorsCreateNewAnchor(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific anchor!
     * /anchors/{anchor}/delete [POST]
     */
    anchorsDeleteSpecificAnchorRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific anchor!
     * /anchors/{anchor}/delete [POST]
     */
    anchorsDeleteSpecificAnchor(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all your anchors.
     * /anchors [GET]
     */
    anchorsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all your anchors.
     * /anchors [GET]
     */
    anchorsSnapshot(requestParameters: any): Promise<any>;
}
export {};
