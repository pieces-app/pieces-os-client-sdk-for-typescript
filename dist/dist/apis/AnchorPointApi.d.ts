export const __esModule: boolean;
declare const AnchorPointApi_base: any;
/**
 *
 */
export class AnchorPointApi extends AnchorPointApi_base {
    [x: string]: any;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/anchor_point/{anchor_point}/scores/increment\' [POST]
     */
    anchorPointScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/anchor_point/{anchor_point}/scores/increment\' [POST]
     */
    anchorPointScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of a single anchorPoint.
     * /anchor_point/{anchor_point} [GET]
     */
    anchorPointSpecificAnchorPointSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a single anchorPoint.
     * /anchor_point/{anchor_point} [GET]
     */
    anchorPointSpecificAnchorPointSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific anchorPoint.
     * /anchor_point/update [POST]
     */
    anchorPointUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific anchorPoint.
     * /anchor_point/update [POST]
     */
    anchorPointUpdate(requestParameters: any): Promise<any>;
}
export {};
