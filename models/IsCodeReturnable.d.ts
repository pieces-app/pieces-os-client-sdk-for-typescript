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
 * Strongly typed returnable class from the IsCode text classifier.
 * @export
 * @interface IsCodeReturnable
 */
export interface IsCodeReturnable {
    /**
     *
     * @type {boolean}
     * @memberof IsCodeReturnable
     */
    isCode: boolean;
    /**
     *
     * @type {number}
     * @memberof IsCodeReturnable
     */
    probability: number;
    /**
     * this is the string right before tokenization.
     * @type {string}
     * @memberof IsCodeReturnable
     */
    normalized: string;
    /**
     * this is the tokenized representation of the string.
     * @type {Array<number>}
     * @memberof IsCodeReturnable
     */
    tokens: Array<number>;
}
export declare function IsCodeReturnableFromJSON(json: any): IsCodeReturnable;
export declare function IsCodeReturnableFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsCodeReturnable;
export declare function IsCodeReturnableToJSON(value?: IsCodeReturnable | null): any;
