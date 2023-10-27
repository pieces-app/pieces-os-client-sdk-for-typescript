/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Classification, EmbeddedModelSchema } from './';
/**
 *
 * @export
 * @interface TLPCodeFragmentReclassificationUpdates
 */
export interface TLPCodeFragmentReclassificationUpdates {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Classification}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    previous: Classification;
    /**
     *
     * @type {Classification}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    current: Classification;
}
export declare function TLPCodeFragmentReclassificationUpdatesFromJSON(json: any): TLPCodeFragmentReclassificationUpdates;
export declare function TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentReclassificationUpdates;
export declare function TLPCodeFragmentReclassificationUpdatesToJSON(value?: TLPCodeFragmentReclassificationUpdates | null): any;