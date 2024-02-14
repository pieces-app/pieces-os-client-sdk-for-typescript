export const __esModule: boolean;
declare const SensitivesApi_base: any;
/**
 *
 */
export class SensitivesApi extends SensitivesApi_base {
    [x: string]: any;
    /**
     * This will create a new sensitive model.
     * /sensitives/create [POST]
     */
    sensitivesCreateNewSensitiveRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a new sensitive model.
     * /sensitives/create [POST]
     */
    sensitivesCreateNewSensitive(requestParameters: any): Promise<any>;
    /**
     * This will delete a sensitive based on the sensitive uuid.
     * /sensitives/{sensitive}/delete [POST]
     */
    sensitivesDeleteSensitiveRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a sensitive based on the sensitive uuid.
     * /sensitives/{sensitive}/delete [POST]
     */
    sensitivesDeleteSensitive(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all of the sensitives.
     * /sensitives [GET]
     */
    sensitivesSnapshotRaw(): Promise<any>;
    /**
     * This will get a snapshot of all of the sensitives.
     * /sensitives [GET]
     */
    sensitivesSnapshot(): Promise<any>;
}
export {};
