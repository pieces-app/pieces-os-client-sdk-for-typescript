export const __esModule: boolean;
declare const DistributionApi_base: any;
/**
 *
 */
export class DistributionApi extends DistributionApi_base {
    [x: string]: any;
    /**
     * This will update a specific Distribution.
     * /distribution/update [POST]
     */
    distributionUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific Distribution.
     * /distribution/update [POST]
     */
    distributionUpdate(requestParameters: any): Promise<any>;
    /**
     * This will get a specific snapshot of a distribution.
     * /distribution/{distribution} [GET]
     */
    distributionsSpecificDistributionSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific snapshot of a distribution.
     * /distribution/{distribution} [GET]
     */
    distributionsSpecificDistributionSnapshot(requestParameters: any): Promise<any>;
}
export {};
