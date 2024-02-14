export const __esModule: boolean;
declare const AnchorApi_base: any;
/**
 *
 */
export class AnchorApi extends AnchorApi_base {
    [x: string]: any;
    /**
     * This will rename a specific anchor.
     * /anchor/{anchor}/rename [POST]
     */
    anchorRenameRaw(requestParameters: any): Promise<any>;
    /**
     * This will rename a specific anchor.
     * /anchor/{anchor}/rename [POST]
     */
    anchorRename(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/anchor/{anchor}/scores/increment\' [POST]
     */
    anchorScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/anchor/{anchor}/scores/increment\' [POST]
     */
    anchorScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of a single anchor.
     * /anchor/{anchor} [GET]
     */
    anchorSpecificAnchorSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a single anchor.
     * /anchor/{anchor} [GET]
     */
    anchorSpecificAnchorSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific anchor.
     * /anchor/update [POST]
     */
    anchorUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific anchor.
     * /anchor/update [POST]
     */
    anchorUpdate(requestParameters: any): Promise<any>;
}
export {};
