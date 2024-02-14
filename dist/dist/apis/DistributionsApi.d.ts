export const __esModule: boolean;
declare const DistributionsApi_base: any;
/**
 *
 */
export class DistributionsApi extends DistributionsApi_base {
    [x: string]: any;
    /**
     * This will create a new distribution.
     * /distributions/create [POST]
     */
    distributionsCreateNewDistributionRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a new distribution.
     * /distributions/create [POST]
     */
    distributionsCreateNewDistribution(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific distribution.
     * /distributions/{distribution}/delete [POST]
     */
    distributionsDeleteSpecificDistributionRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific distribution.
     * /distributions/{distribution}/delete [POST]
     */
    distributionsDeleteSpecificDistribution(requestParameters: any): Promise<void>;
    /**
     * This will get a specific snapshot of all our distributions.
     * /distributions [GET]
     */
    distributionsSnapshotRaw(): Promise<any>;
    /**
     * This will get a specific snapshot of all our distributions.
     * /distributions [GET]
     */
    distributionsSnapshot(): Promise<any>;
}
export {};
