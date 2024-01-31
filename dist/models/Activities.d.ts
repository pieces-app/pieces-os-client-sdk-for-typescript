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
import { Activity, EmbeddedModelSchema } from './index';
/**
 * This is the plural of activity
 * @export
 * @interface Activities
 */
export interface Activities {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Activities
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Activity>}
     * @memberof Activities
     */
    iterable: Array<Activity>;
}
export declare function ActivitiesFromJSON(json: any): Activities;
export declare function ActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Activities;
export declare function ActivitiesToJSON(value?: Activities | null): any;