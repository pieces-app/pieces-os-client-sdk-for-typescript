export const __esModule: boolean;
declare const DatabaseApi_base: any;
/**
 *
 */
export class DatabaseApi extends DatabaseApi_base {
    [x: string]: any;
    /**
     * This is going to export your current database.
     * Your GET endpoint
     */
    databaseExportRaw(): Promise<any>;
    /**
     * This is going to export your current database.
     * Your GET endpoint
     */
    databaseExport(): Promise<any>;
    /**
     * This is going to take in a database, and merge it with the current database. This will revert your database back to it original form if this request fails.
     * /database/import [POST]
     */
    databaseImportRaw(requestParameters: any): Promise<any>;
    /**
     * This is going to take in a database, and merge it with the current database. This will revert your database back to it original form if this request fails.
     * /database/import [POST]
     */
    databaseImport(requestParameters: any): Promise<void>;
}
export {};
