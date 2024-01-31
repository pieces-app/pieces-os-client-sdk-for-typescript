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
import { EmbeddedModelSchema, UpdatingStatusEnum } from './index';
/**
 * This is the returnable for /os/update/check
 * @export
 * @interface CheckedOSUpdate
 */
export interface CheckedOSUpdate {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof CheckedOSUpdate
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {UpdatingStatusEnum}
     * @memberof CheckedOSUpdate
     */
    status: UpdatingStatusEnum;
}
export declare function CheckedOSUpdateFromJSON(json: any): CheckedOSUpdate;
export declare function CheckedOSUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckedOSUpdate;
export declare function CheckedOSUpdateToJSON(value?: CheckedOSUpdate | null): any;