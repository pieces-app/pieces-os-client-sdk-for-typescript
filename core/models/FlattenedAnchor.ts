/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    AnchorTypeEnum,
    AnchorTypeEnumFromJSON,
    AnchorTypeEnumFromJSONTyped,
    AnchorTypeEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedAnchorPoints,
    FlattenedAnchorPointsFromJSON,
    FlattenedAnchorPointsFromJSONTyped,
    FlattenedAnchorPointsToJSON,
    FlattenedAnnotations,
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
    FlattenedAssets,
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedConversations,
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './';

/**
 * 
 * @export
 * @interface FlattenedAnchor
 */
export interface FlattenedAnchor {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnchor
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnchor
     */
    id: string;
    /**
     * 
     * @type {AnchorTypeEnum}
     * @memberof FlattenedAnchor
     */
    type: AnchorTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAnchor
     */
    watch?: boolean;
    /**
     * 
     * @type {FlattenedAnchorPoints}
     * @memberof FlattenedAnchor
     */
    points: FlattenedAnchorPoints;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchor
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchor
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchor
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedAnchor
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnchor
     */
    name?: string;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedAnchor
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof FlattenedAnchor
     */
    conversations?: FlattenedConversations;
}

export function FlattenedAnchorFromJSON(json: any): FlattenedAnchor {
    return FlattenedAnchorFromJSONTyped(json, false);
}

export function FlattenedAnchorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnchor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'type': AnchorTypeEnumFromJSON(json['type']),
        'watch': !exists(json, 'watch') ? undefined : json['watch'],
        'points': FlattenedAnchorPointsFromJSON(json['points']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'annotations': !exists(json, 'annotations') ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'conversations': !exists(json, 'conversations') ? undefined : FlattenedConversationsFromJSON(json['conversations']),
    };
}

export function FlattenedAnchorToJSON(value?: FlattenedAnchor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'type': AnchorTypeEnumToJSON(value.type),
        'watch': value.watch,
        'points': FlattenedAnchorPointsToJSON(value.points),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'assets': FlattenedAssetsToJSON(value.assets),
        'name': value.name,
        'annotations': FlattenedAnnotationsToJSON(value.annotations),
        'conversations': FlattenedConversationsToJSON(value.conversations),
    };
}


