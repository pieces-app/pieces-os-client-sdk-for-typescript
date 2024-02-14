export const __esModule: boolean;
declare const SearchApi_base: any;
/**
 *
 */
export class SearchApi extends SearchApi_base {
    [x: string]: any;
    /**
     * This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the
     * /search/full_text [GET]
     */
    fullTextSearchRaw(requestParameters: any): Promise<any>;
    /**
     * This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the
     * /search/full_text [GET]
     */
    fullTextSearch(requestParameters: any): Promise<any>;
    /**
     * This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/neural_code [GET]
     */
    neuralCodeSearchRaw(requestParameters: any): Promise<any>;
    /**
     * This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/neural_code [GET]
     */
    neuralCodeSearch(requestParameters: any): Promise<any>;
    /**
     * This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/tag_based [POST]
     */
    tagBasedSearchRaw(requestParameters: any): Promise<any>;
    /**
     * This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/tag_based [POST]
     */
    tagBasedSearch(requestParameters: any): Promise<any>;
}
export {};
