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
import { EmbeddedModelSchema, SeededConnectorCreation } from './';
/**
 * This is the target that was sent to pieces. This will return the string that represents this coppied || pasted asset. This will also send along the SeededConnectorCreation and will send along the vector that we created based on the seed.
 * @export
 * @interface SuggestionTarget
 */
export interface SuggestionTarget {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SuggestionTarget
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededConnectorCreation}
     * @memberof SuggestionTarget
     */
    seed: SeededConnectorCreation;
    /**
     * This is the vector representation of this target that we generated.
     * @type {number}
     * @memberof SuggestionTarget
     */
    vector: number;
}
export declare function SuggestionTargetFromJSON(json: any): SuggestionTarget;
export declare function SuggestionTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestionTarget;
export declare function SuggestionTargetToJSON(value?: SuggestionTarget | null): any;