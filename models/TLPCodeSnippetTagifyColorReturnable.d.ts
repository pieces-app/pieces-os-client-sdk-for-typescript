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
import { TLPCodeSnippetTagifyColor } from "./TLPCodeSnippetTagifyColor";
/**
 *
 * @export
 * @interface TLPCodeSnippetTagifyColorReturnable
 */
export interface TLPCodeSnippetTagifyColorReturnable {
    /**
     * This is an array of our tagged hexes
     * @type {Array<TLPCodeSnippetTagifyColor>}
     * @memberof TLPCodeSnippetTagifyColorReturnable
     */
    hexes: Array<TLPCodeSnippetTagifyColor>;
}
export declare function TLPCodeSnippetTagifyColorReturnableFromJSON(json: any): TLPCodeSnippetTagifyColorReturnable;
export declare function TLPCodeSnippetTagifyColorReturnableFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetTagifyColorReturnable;
export declare function TLPCodeSnippetTagifyColorReturnableToJSON(value?: TLPCodeSnippetTagifyColorReturnable | null): any;
