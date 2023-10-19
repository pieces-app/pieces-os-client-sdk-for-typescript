/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { AnchorPoint } from '../models';
export interface AnchorPointSpecificAnchorPointSnapshotRequest {
    anchorPoint: string;
    transferables?: boolean;
}
export interface AnchorPointUpdateRequest {
    transferables?: boolean;
    anchorPoint?: AnchorPoint;
}
/**
 *
 */
export declare class AnchorPointApi extends runtime.BaseAPI {
    /**
     * This will get a snapshot of a single anchorPoint.
     * /anchor_point/{anchor_point} [GET]
     */
    anchorPointSpecificAnchorPointSnapshotRaw(requestParameters: AnchorPointSpecificAnchorPointSnapshotRequest): Promise<runtime.ApiResponse<AnchorPoint>>;
    /**
     * This will get a snapshot of a single anchorPoint.
     * /anchor_point/{anchor_point} [GET]
     */
    anchorPointSpecificAnchorPointSnapshot(requestParameters: AnchorPointSpecificAnchorPointSnapshotRequest): Promise<AnchorPoint>;
    /**
     * This will update a specific anchorPoint.
     * /anchor_point/update [POST]
     */
    anchorPointUpdateRaw(requestParameters: AnchorPointUpdateRequest): Promise<runtime.ApiResponse<AnchorPoint>>;
    /**
     * This will update a specific anchorPoint.
     * /anchor_point/update [POST]
     */
    anchorPointUpdate(requestParameters: AnchorPointUpdateRequest): Promise<AnchorPoint>;
}
