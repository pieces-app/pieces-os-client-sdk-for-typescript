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
import { EmbeddedModelSchema, Website } from './';
/**
 * This is a specific model for related websites to an asset.
 * @export
 * @interface Websites
 */
export interface Websites {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Websites
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Website>}
     * @memberof Websites
     */
    iterable: Array<Website>;
    /**
     * This is a Map<String, int> where the the key is an website id.
     * @type {{ [key: string]: number; }}
     * @memberof Websites
     */
    indices?: {
        [key: string]: number;
    };
}
export declare function WebsitesFromJSON(json: any): Websites;
export declare function WebsitesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Websites;
export declare function WebsitesToJSON(value?: Websites | null): any;
