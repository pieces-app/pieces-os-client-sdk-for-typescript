export const __esModule: boolean;
declare const ShareApi_base: any;
/**
 *
 */
export class ShareApi extends ShareApi_base {
    [x: string]: any;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    shareScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    shareScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    shareSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    shareSnapshot(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    shareUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    shareUpdate(requestParameters: any): Promise<any>;
}
export {};
