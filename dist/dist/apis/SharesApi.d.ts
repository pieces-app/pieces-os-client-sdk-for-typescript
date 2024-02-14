export const __esModule: boolean;
declare const SharesApi_base: any;
/**
 *
 */
export class SharesApi extends SharesApi_base {
    [x: string]: any;
    /**
     * This endpoint will accept an asset. Response here will be a Share that was created.
     * /shares/create [POST]
     */
    sharesCreateNewShareRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept an asset. Response here will be a Share that was created.
     * /shares/create [POST]
     */
    sharesCreateNewShare(requestParameters: any): Promise<any>;
    /**
     * This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.
     * /shares/{share}/delete [POST]
     */
    sharesDeleteShareRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will just take a share id(as a url param) to delete out of the shares table, will return the share id that was deleted.
     * /shares/{share}/delete [POST]
     */
    sharesDeleteShare(requestParameters: any): Promise<any>;
    /**
     * This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.
     * /shares [GET]
     */
    sharesSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will return all of your shares. A Share is an asset that you as a user decided to share with another user via link.
     * /shares [GET]
     */
    sharesSnapshot(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint to enable a client to access a specific share through a provided share id.
     * /shares/{share} [GET]
     */
    sharesSpecificShareSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint to enable a client to access a specific share through a provided share id.
     * /shares/{share} [GET]
     */
    sharesSpecificShareSnapshot(requestParameters: any): Promise<any>;
}
export {};
