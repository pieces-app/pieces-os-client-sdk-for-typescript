export const __esModule: boolean;
declare const AnalysesApi_base: any;
/**
 *
 */
export class AnalysesApi extends AnalysesApi_base {
    [x: string]: any;
    /**
     * This will get a snapshot of all of your analyses, that are all attached to formats. An analysis can optionally have an codeAnalysis or an optional imageAnalysis.
     * Your GET endpoint
     */
    analysesSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all of your analyses, that are all attached to formats. An analysis can optionally have an codeAnalysis or an optional imageAnalysis.
     * Your GET endpoint
     */
    analysesSnapshot(requestParameters: any): Promise<any>;
}
export {};
