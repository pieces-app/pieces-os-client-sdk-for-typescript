export const __esModule: boolean;
declare const GithubApi_base: any;
/**
 *
 */
export class GithubApi extends GithubApi_base {
    [x: string]: any;
    /**
     * This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users\' gists. <- implemented. v2. can get specific a public gist.
     * /github/gists/import [POST]
     */
    importGithubGistsRaw(requestParameters: any): Promise<any>;
    /**
     * This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users\' gists. <- implemented. v2. can get specific a public gist.
     * /github/gists/import [POST]
     */
    importGithubGists(requestParameters: any): Promise<any>;
}
export {};
