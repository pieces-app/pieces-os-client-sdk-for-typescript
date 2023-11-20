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
import { EmbeddedModelSchema } from './index';
/**
 * This will describe the font that the user sees.
 * @export
 * @interface Font
 */
export interface Font {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Font
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {number}
     * @memberof Font
     */
    size: number;
}
export declare function FontFromJSON(json: any): Font;
export declare function FontFromJSONTyped(json: any, ignoreDiscriminator: boolean): Font;
export declare function FontToJSON(value?: Font | null): any;
