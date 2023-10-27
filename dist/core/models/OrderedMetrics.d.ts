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
import { EmbeddedModelSchema } from './';
/**
 * This is a returnable for the metrics/formats/ordered
 * @export
 * @interface OrderedMetrics
 */
export interface OrderedMetrics {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof OrderedMetrics
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<string>}
     * @memberof OrderedMetrics
     */
    ordered: Array<string>;
}
export declare function OrderedMetricsFromJSON(json: any): OrderedMetrics;
export declare function OrderedMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderedMetrics;
export declare function OrderedMetricsToJSON(value?: OrderedMetrics | null): any;