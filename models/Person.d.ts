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
import { EmbeddedModelSchema, FlattenedAnnotations, FlattenedAssets, FlattenedTags, FlattenedWebsites, GroupedTimestamp, MechanismEnum, PersonAccess, PersonModel, PersonType } from './';
/**
 * if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...
 *
 * if asset is passed then that means this person belongs to a scoped asset.
 *
 * NOTE****: annotations here are annotations to describe the person!!! if in the future we want to add who wrote an annotation on and asset or soemthing like that, we will want to add a new field on here called authorships.
 * @export
 * @interface Person
 */
export interface Person {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Person
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Person
     */
    id: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Person
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Person
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Person
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {PersonType}
     * @memberof Person
     */
    type: PersonType;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof Person
     */
    assets?: FlattenedAssets;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof Person
     */
    mechanisms?: {
        [key: string]: MechanismEnum;
    };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof Person
     */
    interactions?: number;
    /**
     * This is a Map<String, PersonAccess> where the the key is an asset id.
     * @type {{ [key: string]: PersonAccess; }}
     * @memberof Person
     */
    access?: {
        [key: string]: PersonAccess;
    };
    /**
     *
     * @type {FlattenedTags}
     * @memberof Person
     */
    tags?: FlattenedTags;
    /**
     *
     * @type {FlattenedWebsites}
     * @memberof Person
     */
    websites?: FlattenedWebsites;
    /**
     * This is a Map<String, PersonModel>, where the the key is an asset id.
     * @type {{ [key: string]: PersonModel; }}
     * @memberof Person
     */
    models?: {
        [key: string]: PersonModel;
    };
    /**
     *
     * @type {FlattenedAnnotations}
     * @memberof Person
     */
    annotations?: FlattenedAnnotations;
}
export declare function PersonFromJSON(json: any): Person;
export declare function PersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): Person;
export declare function PersonToJSON(value?: Person | null): any;
