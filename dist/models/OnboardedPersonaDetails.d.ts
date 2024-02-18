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
import { EmbeddedModelSchema, Seeds } from './';
/**
 * This is an out body for the /machine_learning/text/technical_processing/generators/personification endpoint.
 *
 * This will have accepted some of the personal details (in the input body) ie languages/personas && will transform this in to onbaording snippets that we will return with this model
 * @export
 * @interface OnboardedPersonaDetails
 */
export interface OnboardedPersonaDetails {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof OnboardedPersonaDetails
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Seeds}
     * @memberof OnboardedPersonaDetails
     */
    seeds: Seeds;
}
export declare function OnboardedPersonaDetailsFromJSON(json: any): OnboardedPersonaDetails;
export declare function OnboardedPersonaDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnboardedPersonaDetails;
export declare function OnboardedPersonaDetailsToJSON(value?: OnboardedPersonaDetails | null): any;