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
import { SeededScoreIncrement, Share } from '../models';
export interface ShareScoresIncrementRequest {
    share: string;
    seededScoreIncrement?: SeededScoreIncrement;
}
export interface ShareSnapshotRequest {
    share: string;
    transferables?: boolean;
}
export interface ShareUpdateRequest {
    transferables?: boolean;
    share?: Share;
}
/**
 *
 */
export declare class ShareApi extends runtime.BaseAPI {
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    shareScoresIncrementRaw(requestParameters: ShareScoresIncrementRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    shareScoresIncrement(requestParameters: ShareScoresIncrementRequest): Promise<void>;
    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    shareSnapshotRaw(requestParameters: ShareSnapshotRequest): Promise<runtime.ApiResponse<Share>>;
    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    shareSnapshot(requestParameters: ShareSnapshotRequest): Promise<Share>;
    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    shareUpdateRaw(requestParameters: ShareUpdateRequest): Promise<runtime.ApiResponse<Share>>;
    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    shareUpdate(requestParameters: ShareUpdateRequest): Promise<Share>;
}
