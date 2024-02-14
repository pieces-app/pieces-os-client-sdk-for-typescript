export const __esModule: boolean;
declare const FormatsApi_base: any;
/**
 *
 */
export class FormatsApi extends FormatsApi_base {
    [x: string]: any;
    /**
     * Get all of your formats for a given user.
     * /formats [GET] Scoped to Formats
     */
    formatsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * Get all of your formats for a given user.
     * /formats [GET] Scoped to Formats
     */
    formatsSnapshot(requestParameters: any): Promise<any>;
    /**
     * Request a specific format when given a id (uuid in path params)
     * /formats/{format} [GET] Scoped to Formats
     */
    formatsSpecificFormatSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * Request a specific format when given a id (uuid in path params)
     * /formats/{format} [GET] Scoped to Formats
     */
    formatsSpecificFormatSnapshot(requestParameters: any): Promise<any>;
}
export {};
