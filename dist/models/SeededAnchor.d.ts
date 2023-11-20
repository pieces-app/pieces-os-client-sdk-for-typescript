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
import { AnchorTypeEnum, EmbeddedModelSchema, PlatformEnum, SeededAnnotation } from './index';
/**
 *
 * @export
 * @interface SeededAnchor
 */
export interface SeededAnchor {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededAnchor
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {AnchorTypeEnum}
     * @memberof SeededAnchor
     */
    type: AnchorTypeEnum;
    /**
     *
     * @type {boolean}
     * @memberof SeededAnchor
     */
    watch?: boolean;
    /**
     *
     * @type {string}
     * @memberof SeededAnchor
     */
    fullpath: string;
    /**
     * You may associate a SeededAnchor with an asset
     * @type {string}
     * @memberof SeededAnchor
     */
    asset?: string;
    /**
     *
     * @type {PlatformEnum}
     * @memberof SeededAnchor
     */
    platform?: PlatformEnum;
    /**
     *
     * @type {string}
     * @memberof SeededAnchor
     */
    name?: string;
    /**
     *
     * @type {Array<SeededAnnotation>}
     * @memberof SeededAnchor
     */
    annotations?: Array<SeededAnnotation>;
    /**
     *
     * @type {string}
     * @memberof SeededAnchor
     */
    conversation?: string;
}
export declare function SeededAnchorFromJSON(json: any): SeededAnchor;
export declare function SeededAnchorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAnchor;
export declare function SeededAnchorToJSON(value?: SeededAnchor | null): any;
