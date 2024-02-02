export const __esModule: boolean;
declare const MetricsApi_base: any;
/**
 *
 */
export class MetricsApi extends MetricsApi_base {
    [x: string]: any;
    /**
     * This is going to get a snapshot of our FormatsMetrics
     * /metrics/formats [GET]
     */
    getMetricsFormatsRaw(): Promise<any>;
    /**
     * This is going to get a snapshot of our FormatsMetrics
     * /metrics/formats [GET]
     */
    getMetricsFormats(): Promise<any>;
    /**
     * This will return a list of code formats in desc order from most to least formats uploaded.
     * /metrics/formats/ordered [GET]
     */
    metricsFormatsOrderedRaw(): Promise<any>;
    /**
     * This will return a list of code formats in desc order from most to least formats uploaded.
     * /metrics/formats/ordered [GET]
     */
    metricsFormatsOrdered(): Promise<any>;
}
export {};
