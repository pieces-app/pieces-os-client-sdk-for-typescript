export const __esModule: boolean;
declare const AnnotationApi_base: any;
/**
 *
 */
export class AnnotationApi extends AnnotationApi_base {
    [x: string]: any;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/annotation/{annotation}/scores/increment\' [POST]
     */
    annotationScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/annotation/{annotation}/scores/increment\' [POST]
     */
    annotationScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of a specific annotation.
     * /annotation/{annotation} [GET]
     */
    annotationSpecificAnnotationSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a specific annotation.
     * /annotation/{annotation} [GET]
     */
    annotationSpecificAnnotationSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific annotation.
     * /annotation/update [POST]
     */
    annotationUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific annotation.
     * /annotation/update [POST]
     */
    annotationUpdate(requestParameters: any): Promise<any>;
}
export {};
