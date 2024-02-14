export const __esModule: boolean;
declare const FormatApi_base: any;
/**
 *
 */
export class FormatApi extends FormatApi_base {
    [x: string]: any;
    /**
     * This will get an analysis from a format\'s id.
     * /format/{format}/analysis [GET]
     */
    formatAnalysisRaw(requestParameters: any): Promise<any>;
    /**
     * This will get an analysis from a format\'s id.
     * /format/{format}/analysis [GET]
     */
    formatAnalysis(requestParameters: any): Promise<any>;
    /**
     * This endpoint will be used to reclassify a single Format.
     * /format/reclassify [POST]
     */
    formatReclassifyRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will be used to reclassify a single Format.
     * /format/reclassify [POST]
     */
    formatReclassify(requestParameters: any): Promise<any>;
    /**
     * Get a snapshot of a specific format.
     * /format/{format} [GET] Scoped to Format
     */
    formatSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * Get a snapshot of a specific format.
     * /format/{format} [GET] Scoped to Format
     */
    formatSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a format\'s value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original\'s value. if this format is an asset.preview.original we will update the asset.preview.base\'s value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original\'s value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base\'s fragment string.  image fragment/file: We will not modify preview -> orignal or original -> preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)
     * [POST] /format/update/value
     */
    formatUpdateValueRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a format\'s value, ie, a formats fragment or file depending on what is provided.  code/text fragment behavior: If this format is an asset.preview.base we will update the asset.original\'s value. if this format is an asset.preview.original we will update the asset.preview.base\'s value.  code/text file behavior: If the the format that is update is the asset.preview.base is a fragment and the asset.original is file then we will update the asset.original\'s value to be bytes or string respectively. This goes the same for orignal to preview but will be go the reverse order so if the original is a file we will update the preview base\'s fragment string.  image fragment/file: We will not modify preview -> orignal or original -> preview here. so there are zero side effects in this case, and will update as normal. (this will be the case for all other value updates.)
     * [POST] /format/update/value
     */
    formatUpdateValue(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.
     * /format/usage/event [POST] Scoped to Format
     */
    formatUsageEventRaw(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user has copied/downloaded/beamed/viewed a format.
     * /format/usage/event [POST] Scoped to Format
     */
    formatUsageEvent(requestParameters: any): Promise<any>;
}
export {};
