export const __esModule: boolean;
export const AnnotationsSnapshotAnnotationTypeFilterEnum: {};
declare const AnnotationsApi_base: any;
/**
 *
 */
export class AnnotationsApi extends AnnotationsApi_base {
    [x: string]: any;
    /**
     * This will create an annotation.
     * /annotations/create [POST]
     */
    annotationsCreateNewAnnotationRaw(requestParameters: any): Promise<any>;
    /**
     * This will create an annotation.
     * /annotations/create [POST]
     */
    annotationsCreateNewAnnotation(requestParameters: any): Promise<any>;
    /**
     * this will delete a specific annotation
     * /annotations/{annotation}/delete [POST]
     */
    annotationsDeleteSpecificAnnotationRaw(requestParameters: any): Promise<any>;
    /**
     * this will delete a specific annotation
     * /annotations/{annotation}/delete [POST]
     */
    annotationsDeleteSpecificAnnotation(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all the annotations.  This will take an optional filter as a query param.
     * /annotations [GET]
     */
    annotationsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all the annotations.  This will take an optional filter as a query param.
     * /annotations [GET]
     */
    annotationsSnapshot(requestParameters: any): Promise<any>;
}
export {};
