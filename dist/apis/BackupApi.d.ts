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
import { Asset, Assets } from '../models';
export interface BackupRequest {
    assets?: Assets;
}
export interface BackupAssetRequest {
    asset?: Asset;
}
/**
 *
 */
export declare class BackupApi extends runtime.BaseAPI {
    /**
     * /backup [POST]
     */
    backupRaw(requestParameters: BackupRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * /backup [POST]
     */
    backup(requestParameters: BackupRequest): Promise<void>;
    /**
     * /backup/asset [POST]
     */
    backupAssetRaw(requestParameters: BackupAssetRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * /backup/asset [POST]
     */
    backupAsset(requestParameters: BackupAssetRequest): Promise<void>;
}