export const __esModule: boolean;
declare const LinkifyApi_base: any;
/**
 *
 */
export class LinkifyApi extends LinkifyApi_base {
    [x: string]: any;
    /**
     * /linkify [POST]
     */
    linkifyRaw(requestParameters: any): Promise<any>;
    /**
     * /linkify [POST]
     */
    linkify(requestParameters: any): Promise<any>;
    /**
     * - assumption that you have already backed up the asset\'s that you are sending to this endpoint.(b/c the assets are ids.)
     * /linkify/multiple [POST]
     */
    linkifyMultipleRaw(requestParameters: any): Promise<any>;
    /**
     * - assumption that you have already backed up the asset\'s that you are sending to this endpoint.(b/c the assets are ids.)
     * /linkify/multiple [POST]
     */
    linkifyMultiple(requestParameters: any): Promise<any>;
    /**
     * This will revoke a link.
     * [POST} /linkify/{share}/revoke
     */
    linkifyShareRevokeRaw(requestParameters: any): Promise<any>;
    /**
     * This will revoke a link.
     * [POST} /linkify/{share}/revoke
     */
    linkifyShareRevoke(requestParameters: any): Promise<any>;
}
export {};
