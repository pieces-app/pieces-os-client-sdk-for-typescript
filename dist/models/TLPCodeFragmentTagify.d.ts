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
import { EmbeddedModelSchema, TLPCodeSnippetTagifyCode } from './';
/**
 *
 * @export
 * @interface TLPCodeFragmentTagify
 */
export interface TLPCodeFragmentTagify {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentTagify
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TLPCodeSnippetTagifyCode}
     * @memberof TLPCodeFragmentTagify
     */
    code?: TLPCodeSnippetTagifyCode;
}
export declare function TLPCodeFragmentTagifyFromJSON(json: any): TLPCodeFragmentTagify;
export declare function TLPCodeFragmentTagifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentTagify;
export declare function TLPCodeFragmentTagifyToJSON(value?: TLPCodeFragmentTagify | null): any;