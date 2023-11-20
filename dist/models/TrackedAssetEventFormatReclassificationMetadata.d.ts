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
import { Classification, EmbeddedModelSchema } from './index';
/**
 * Metadata of a format reclassification event
 * @export
 * @interface TrackedAssetEventFormatReclassificationMetadata
 */
export interface TrackedAssetEventFormatReclassificationMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedAssetEventFormatReclassificationMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Classification}
     * @memberof TrackedAssetEventFormatReclassificationMetadata
     */
    previous?: Classification;
    /**
     *
     * @type {Classification}
     * @memberof TrackedAssetEventFormatReclassificationMetadata
     */
    current?: Classification;
}
export declare function TrackedAssetEventFormatReclassificationMetadataFromJSON(json: any): TrackedAssetEventFormatReclassificationMetadata;
export declare function TrackedAssetEventFormatReclassificationMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventFormatReclassificationMetadata;
export declare function TrackedAssetEventFormatReclassificationMetadataToJSON(value?: TrackedAssetEventFormatReclassificationMetadata | null): any;
