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
import { FileFormat, GroupedTimestamp } from './index';
/**
 * This is a model for a minimum exported version of an asset.
 * @export
 * @interface ExportedAsset
 */
export interface ExportedAsset {
    /**
     * this is the title of the asset
     * @type {string}
     * @memberof ExportedAsset
     */
    name: string;
    /**
     * this is the description of the asset
     * @type {string}
     * @memberof ExportedAsset
     */
    description: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof ExportedAsset
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {FileFormat}
     * @memberof ExportedAsset
     */
    raw: FileFormat;
}
export declare function ExportedAssetFromJSON(json: any): ExportedAsset;
export declare function ExportedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportedAsset;
export declare function ExportedAssetToJSON(value?: ExportedAsset | null): any;