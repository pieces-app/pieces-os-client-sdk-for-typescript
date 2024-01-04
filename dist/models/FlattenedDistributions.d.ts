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
import { EmbeddedModelSchema, ReferencedDistribution } from './';
/**
 *
 * @export
 * @interface FlattenedDistributions
 */
export interface FlattenedDistributions {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedDistributions
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedDistribution>}
     * @memberof FlattenedDistributions
     */
    iterable: Array<ReferencedDistribution>;
}
export declare function FlattenedDistributionsFromJSON(json: any): FlattenedDistributions;
export declare function FlattenedDistributionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedDistributions;
export declare function FlattenedDistributionsToJSON(value?: FlattenedDistributions | null): any;