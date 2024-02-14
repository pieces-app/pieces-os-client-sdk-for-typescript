export const __esModule: boolean;
declare const AllocationApi_base: any;
/**
 *
 */
export class AllocationApi extends AllocationApi_base {
    [x: string]: any;
    /**
     * This will get a snapshot of a specific allocation.
     * /allocation/{allocation} [GET]
     */
    allocationSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a specific allocation.
     * /allocation/{allocation} [GET]
     */
    allocationSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific allocation.
     * /allocation/update [POST]
     */
    allocationUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific allocation.
     * /allocation/update [POST]
     */
    allocationUpdate(requestParameters: any): Promise<any>;
}
export {};
