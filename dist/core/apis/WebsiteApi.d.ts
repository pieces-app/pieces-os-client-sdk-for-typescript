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
import { Website } from '../models';
export interface WebsiteUpdateRequest {
    transferables?: boolean;
    website?: Website;
}
export interface WebsitesSpecificWebsiteSnapshotRequest {
    website: string;
    transferables?: boolean;
}
/**
 *
 */
export declare class WebsiteApi extends runtime.BaseAPI {
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    websiteUpdateRaw(requestParameters: WebsiteUpdateRequest): Promise<runtime.ApiResponse<Website>>;
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    websiteUpdate(requestParameters: WebsiteUpdateRequest): Promise<Website>;
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    websitesSpecificWebsiteSnapshotRaw(requestParameters: WebsitesSpecificWebsiteSnapshotRequest): Promise<runtime.ApiResponse<Website>>;
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    websitesSpecificWebsiteSnapshot(requestParameters: WebsitesSpecificWebsiteSnapshotRequest): Promise<Website>;
}