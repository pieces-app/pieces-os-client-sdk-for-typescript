export const __esModule: boolean;
declare const WebsitesApi_base: any;
/**
 *
 */
export class WebsitesApi extends WebsitesApi_base {
    [x: string]: any;
    /**
     * This will create a website and attach it to a specific asset.
     * /websites/create [POST]
     */
    websitesCreateNewWebsiteRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a website and attach it to a specific asset.
     * /websites/create [POST]
     */
    websitesCreateNewWebsite(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific website!
     * /websites/{website}/delete [POST]
     */
    websitesDeleteSpecificWebsiteRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific website!
     * /websites/{website}/delete [POST]
     */
    websitesDeleteSpecificWebsite(requestParameters: any): Promise<void>;
    /**
     * This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.
     * /websites/exists [POST]
     */
    websitesExistsRaw(requestParameters: any): Promise<any>;
    /**
     * This will check all of the websites in our database to see if this specific provided website actually exists, if not we will just return a null website in the output.
     * /websites/exists [POST]
     */
    websitesExists(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all your websites.
     * /websites [GET]
     */
    websitesSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all your websites.
     * /websites [GET]
     */
    websitesSnapshot(requestParameters: any): Promise<any>;
}
export {};
