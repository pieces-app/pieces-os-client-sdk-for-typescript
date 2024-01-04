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
import { EmbeddedModelSchema, FlattenedAnchorPoint } from './';
/**
 *
 * @export
 * @interface ReferencedAnchorPoint
 */
export interface ReferencedAnchorPoint {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedAnchorPoint
     */
    id: string;
    /**
     *
     * @type {FlattenedAnchorPoint}
     * @memberof ReferencedAnchorPoint
     */
    reference?: FlattenedAnchorPoint;
}
export declare function ReferencedAnchorPointFromJSON(json: any): ReferencedAnchorPoint;
export declare function ReferencedAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAnchorPoint;
export declare function ReferencedAnchorPointToJSON(value?: ReferencedAnchorPoint | null): any;