export const __esModule: boolean;
declare const AnchorPointsApi_base: any;
/**
 *
 */
export class AnchorPointsApi extends AnchorPointsApi_base {
    [x: string]: any;
    /**
     * This will create a anchorPoint.
     * /anchor_points/create [POST]
     */
    anchorPointsCreateNewAnchorPointRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a anchorPoint.
     * /anchor_points/create [POST]
     */
    anchorPointsCreateNewAnchorPoint(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific anchorPoint!
     * /anchor_points/{anchor_point}/delete [POST]
     */
    anchorPointsDeleteSpecificAnchorPointRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific anchorPoint!
     * /anchor_points/{anchor_point}/delete [POST]
     */
    anchorPointsDeleteSpecificAnchorPoint(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all your anchorPoints.
     * /anchor_points [GET]
     */
    anchorPointsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all your anchorPoints.
     * /anchor_points [GET]
     */
    anchorPointsSnapshot(requestParameters: any): Promise<any>;
}
export {};
