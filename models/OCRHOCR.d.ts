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
/**
 *
 * @export
 * @interface OCRHOCR
 */
export interface OCRHOCR {
    /**
     * this is the OCR hOCR text output
     * @type {string}
     * @memberof OCRHOCR
     */
    text: string;
}
export declare function OCRHOCRFromJSON(json: any): OCRHOCR;
export declare function OCRHOCRFromJSONTyped(json: any, ignoreDiscriminator: boolean): OCRHOCR;
export declare function OCRHOCRToJSON(value?: OCRHOCR | null): any;
