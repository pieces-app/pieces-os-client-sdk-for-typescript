export const __esModule: boolean;
declare const DiscoveryApi_base: any;
/**
 *
 */
export class DiscoveryApi extends DiscoveryApi_base {
    [x: string]: any;
    /**
     * This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.
     * /discovery/discover/assets [POST]
     */
    discoveryDiscoverAssetsRaw(requestParameters: any): Promise<any>;
    /**
     * This is the endpoint used for bulk import. In both cases of the bulk import flow, fragments or files. When we already have \"snippets\" or fragments to discover and now our job is to check if they are actually valid snippets(clustering). Otherwise, we should have a file to parse && snippitize and then run through the clustering.
     * /discovery/discover/assets [POST]
     */
    discoveryDiscoverAssets(requestParameters: any): Promise<any>;
    /**
     * This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.
     * /discovery/discover/assets/html[POST]
     */
    discoveryDiscoverAssetsHtmlRaw(requestParameters: any): Promise<any>;
    /**
     * This is the discover discover assets html endpoint. The goal of this endpoint is to either take an iterable of urls and pages(an html string) and extract all the assets from the iterable.
     * /discovery/discover/assets/html[POST]
     */
    discoveryDiscoverAssetsHtml(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.
     * /discovery/discover/sensitives [POST]
     */
    discoveryDiscoverSensitivesRaw(requestParameters: any): Promise<any>;
    /**
     * This endpoint will accept an array of text values, and attampt to extract sensitive data out of it.
     * /discovery/discover/sensitives [POST]
     */
    discoveryDiscoverSensitives(requestParameters: any): Promise<any>;
    /**
     * This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.
     * /discovery/discover/tags/related [POST]
     */
    discoveryDiscoverTagsRelatedRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a tag or multiple tags and return all the tags that are related to the tag or tag provide in the body.
     * /discovery/discover/tags/related [POST]
     */
    discoveryDiscoverTagsRelated(requestParameters: any): Promise<any>;
}
export {};
