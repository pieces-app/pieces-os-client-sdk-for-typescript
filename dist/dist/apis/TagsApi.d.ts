export const __esModule: boolean;
declare const TagsApi_base: any;
/**
 *
 */
export class TagsApi extends TagsApi_base {
    [x: string]: any;
    /**
     * This will create a new tag.
     * /tags/create [POST]
     */
    tagsCreateNewTagRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a new tag.
     * /tags/create [POST]
     */
    tagsCreateNewTag(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific tag.
     * /tags/{tag}/delete [POST]
     */
    tagsDeleteSpecificTagRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific tag.
     * /tags/{tag}/delete [POST]
     */
    tagsDeleteSpecificTag(requestParameters: any): Promise<void>;
    /**
     * This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.
     * /tags/exists [POST]
     */
    tagsExistsRaw(requestParameters: any): Promise<any>;
    /**
     * This will check all of the tags in our database to see if this specific provided tag actually exists, if not we will just return a null tag in the output.
     * /tags/exists [POST]
     */
    tagsExists(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all of your tags.
     * /tags [GET]
     */
    tagsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all of your tags.
     * /tags [GET]
     */
    tagsSnapshot(requestParameters: any): Promise<any>;
}
export {};
