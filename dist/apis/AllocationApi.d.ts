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
import { AllocationCloud } from '../models';
export interface AllocationSnapshotRequest {
    allocation: string;
}
export interface AllocationUpdateRequest {
    allocationCloud?: AllocationCloud;
}
/**
 *
 */
export declare class AllocationApi extends runtime.BaseAPI {
    /**
     * This will get a snapshot of a specific allocation.
     * /allocation/{allocation} [GET]
     */
    allocationSnapshotRaw(requestParameters: AllocationSnapshotRequest): Promise<runtime.ApiResponse<AllocationCloud>>;
    /**
     * This will get a snapshot of a specific allocation.
     * /allocation/{allocation} [GET]
     */
    allocationSnapshot(requestParameters: AllocationSnapshotRequest): Promise<AllocationCloud>;
    /**
     * This will update a specific allocation.
     * /allocation/update [POST]
     */
    allocationUpdateRaw(requestParameters: AllocationUpdateRequest): Promise<runtime.ApiResponse<AllocationCloud>>;
    /**
     * This will update a specific allocation.
     * /allocation/update [POST]
     */
    allocationUpdate(requestParameters: AllocationUpdateRequest): Promise<AllocationCloud>;
}
