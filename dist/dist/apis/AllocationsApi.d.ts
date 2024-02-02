export const __esModule: boolean;
declare const AllocationsApi_base: any;
/**
 *
 */
export class AllocationsApi extends AllocationsApi_base {
    [x: string]: any;
    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    allocationsConnectNewCloudRaw(requestParameters: any): Promise<any>;
    /**
     * This will attempt to connect to a specific users cloud.(Required that the current user is logged in.)
     * /allocations/connect [POST]
     */
    allocationsConnectNewCloud(requestParameters: any): Promise<any>;
    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    allocationsCreateNewAllocationRaw(requestParameters: any): Promise<any>;
    /**
     * This is unimplemented locally. This will create an allocation. ONLY used within the cloud.
     * /allocations/create [POST]
     */
    allocationsCreateNewAllocation(requestParameters: any): Promise<any>;
    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    allocationsDeleteAllocationRaw(requestParameters: any): Promise<any>;
    /**
     * This is unimplemented locally. This will delete an allocation. ONLY used within the cloud.
     * /allocations/delete [POST]
     */
    allocationsDeleteAllocation(requestParameters: any): Promise<any>;
    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    allocationsDisconnectCloudRaw(requestParameters: any): Promise<any>;
    /**
     * This will attempt to disconnect to a specific users cloud.
     * /allocations/disconnect [POST]
     */
    allocationsDisconnectCloud(requestParameters: any): Promise<any>;
    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    allocationsReconnectCloudRaw(requestParameters: any): Promise<any>;
    /**
     * This will attempt to reconnect to a users cloud. This will ensure that we are connected to a users cloud and will ensure that all the data associated with a user\'s cloud is up-to-date.
     * /allocations/reconnect [POST]
     */
    allocationsReconnectCloud(requestParameters: any): Promise<any>;
    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    allocationsSnapshotRaw(): Promise<any>;
    /**
     * This is going to get a snapshot of all of the connected allocations.
     * /allocations [GET]
     */
    allocationsSnapshot(): Promise<any>;
}
export {};
