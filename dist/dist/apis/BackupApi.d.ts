export const __esModule: boolean;
declare const BackupApi_base: any;
/**
 *
 */
export class BackupApi extends BackupApi_base {
    [x: string]: any;
    /**
     * /backup [POST]
     */
    backupRaw(requestParameters: any): Promise<any>;
    /**
     * /backup [POST]
     */
    backup(requestParameters: any): Promise<void>;
    /**
     * /backup/asset [POST]
     */
    backupAssetRaw(requestParameters: any): Promise<any>;
    /**
     * /backup/asset [POST]
     */
    backupAsset(requestParameters: any): Promise<void>;
}
export {};
