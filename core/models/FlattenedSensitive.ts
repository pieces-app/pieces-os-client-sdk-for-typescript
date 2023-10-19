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
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    ReferencedAsset,
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
    SensitiveCategoryEnum,
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
    SensitiveMetadata,
    SensitiveMetadataFromJSON,
    SensitiveMetadataFromJSONTyped,
    SensitiveMetadataToJSON,
    SensitiveSeverityEnum,
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
} from './';

/**
 * This is a dereferenced representation of a sensitive pieces of data.
 * @export
 * @interface FlattenedSensitive
 */
export interface FlattenedSensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedSensitive
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedSensitive
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedSensitive
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedSensitive
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {ReferencedAsset}
     * @memberof FlattenedSensitive
     */
    asset: ReferencedAsset;
    /**
     * 
     * @type {string}
     * @memberof FlattenedSensitive
     */
    text: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof FlattenedSensitive
     */
    mechanism: MechanismEnum;
    /**
     * 
     * @type {SensitiveCategoryEnum}
     * @memberof FlattenedSensitive
     */
    category: SensitiveCategoryEnum;
    /**
     * 
     * @type {SensitiveSeverityEnum}
     * @memberof FlattenedSensitive
     */
    severity: SensitiveSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof FlattenedSensitive
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedSensitive
     */
    description: string;
    /**
     * 
     * @type {SensitiveMetadata}
     * @memberof FlattenedSensitive
     */
    metadata?: SensitiveMetadata;
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof FlattenedSensitive
     */
    interactions?: number;
}

export function FlattenedSensitiveFromJSON(json: any): FlattenedSensitive {
    return FlattenedSensitiveFromJSONTyped(json, false);
}

export function FlattenedSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedSensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'asset': ReferencedAssetFromJSON(json['asset']),
        'text': json['text'],
        'mechanism': MechanismEnumFromJSON(json['mechanism']),
        'category': SensitiveCategoryEnumFromJSON(json['category']),
        'severity': SensitiveSeverityEnumFromJSON(json['severity']),
        'name': json['name'],
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : SensitiveMetadataFromJSON(json['metadata']),
        'interactions': !exists(json, 'interactions') ? undefined : json['interactions'],
    };
}

export function FlattenedSensitiveToJSON(value?: FlattenedSensitive | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'asset': ReferencedAssetToJSON(value.asset),
        'text': value.text,
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'category': SensitiveCategoryEnumToJSON(value.category),
        'severity': SensitiveSeverityEnumToJSON(value.severity),
        'name': value.name,
        'description': value.description,
        'metadata': SensitiveMetadataToJSON(value.metadata),
        'interactions': value.interactions,
    };
}


