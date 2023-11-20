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
import { EmbeddedModelSchema, ReferencedFormat, TrackedFormatEventIdentifierDescriptionPairs, TrackedFormatEventMetadata } from './index';
/**
 * Again this is a model designed to be sent over to a context server to be built and then sent along to segment.
 * @export
 * @interface SeededTrackedFormatEvent
 */
export interface SeededTrackedFormatEvent {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedFormatEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {TrackedFormatEventIdentifierDescriptionPairs}
     * @memberof SeededTrackedFormatEvent
     */
    identifierDescriptionPair: TrackedFormatEventIdentifierDescriptionPairs;
    /**
     *
     * @type {ReferencedFormat}
     * @memberof SeededTrackedFormatEvent
     */
    format: ReferencedFormat;
    /**
     *
     * @type {TrackedFormatEventMetadata}
     * @memberof SeededTrackedFormatEvent
     */
    metadata?: TrackedFormatEventMetadata;
}
export declare function SeededTrackedFormatEventFromJSON(json: any): SeededTrackedFormatEvent;
export declare function SeededTrackedFormatEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedFormatEvent;
export declare function SeededTrackedFormatEventToJSON(value?: SeededTrackedFormatEvent | null): any;
