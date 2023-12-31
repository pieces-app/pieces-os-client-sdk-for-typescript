/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { Linkify, LinkifyMultiple, Shares } from '../models';
export interface LinkifyRequest {
    linkify?: Linkify;
}
export interface LinkifyMultipleRequest {
    linkifyMultiple?: LinkifyMultiple;
}
export interface LinkifyShareRevokeRequest {
    share: string;
}
/**
 *
 */
export declare class LinkifyApi extends runtime.BaseAPI {
    /**
     * /linkify [POST]
     */
    linkifyRaw(requestParameters: LinkifyRequest): Promise<runtime.ApiResponse<Shares>>;
    /**
     * /linkify [POST]
     */
    linkify(requestParameters: LinkifyRequest): Promise<Shares>;
    /**
     * - assumption that you have already backed up the asset\'s that you are sending to this endpoint.(b/c the assets are ids.)
     * /linkify/multiple [POST]
     */
    linkifyMultipleRaw(requestParameters: LinkifyMultipleRequest): Promise<runtime.ApiResponse<Shares>>;
    /**
     * - assumption that you have already backed up the asset\'s that you are sending to this endpoint.(b/c the assets are ids.)
     * /linkify/multiple [POST]
     */
    linkifyMultiple(requestParameters: LinkifyMultipleRequest): Promise<Shares>;
    /**
     * This will revoke a link.
     * [POST} /linkify/{share}/revoke
     */
    linkifyShareRevokeRaw(requestParameters: LinkifyShareRevokeRequest): Promise<runtime.ApiResponse<string>>;
    /**
     * This will revoke a link.
     * [POST} /linkify/{share}/revoke
     */
    linkifyShareRevoke(requestParameters: LinkifyShareRevokeRequest): Promise<string>;
}
