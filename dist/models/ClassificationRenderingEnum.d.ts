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
 * Specifically supported renderings...usually between generic types
 * @export
 * @enum {string}
 */
export declare enum ClassificationRenderingEnum {
    Html = "HTML",
    TwentyFourBitAnsiEscapedSequences = "TWENTY_FOUR_BIT_ANSI_ESCAPED_SEQUENCES",
    HighlightJsHtml = "HIGHLIGHT_JS_HTML"
}
export declare function ClassificationRenderingEnumFromJSON(json: any): ClassificationRenderingEnum;
export declare function ClassificationRenderingEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationRenderingEnum;
export declare function ClassificationRenderingEnumToJSON(value?: ClassificationRenderingEnum | null): any;
