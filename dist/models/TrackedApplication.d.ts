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
import { ApplicationNameEnum, EmbeddedModelSchema, PlatformEnum } from './index';
/**
 * A Model to describe what application a format/analytics event originated.
 * @export
 * @interface TrackedApplication
 */
export interface TrackedApplication {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TrackedApplication
     */
    schema?: EmbeddedModelSchema;
    /**
     * The ID of the tracked application.
     * @type {string}
     * @memberof TrackedApplication
     */
    id: string;
    /**
     *
     * @type {ApplicationNameEnum}
     * @memberof TrackedApplication
     */
    name: ApplicationNameEnum;
    /**
     * This is the specific version number 0.0.0
     * @type {string}
     * @memberof TrackedApplication
     */
    version: string;
    /**
     *
     * @type {PlatformEnum}
     * @memberof TrackedApplication
     */
    platform: PlatformEnum;
    /**
     * This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
     * @type {boolean}
     * @memberof TrackedApplication
     */
    automaticUnload?: boolean;
}
export declare function TrackedApplicationFromJSON(json: any): TrackedApplication;
export declare function TrackedApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedApplication;
export declare function TrackedApplicationToJSON(value?: TrackedApplication | null): any;
