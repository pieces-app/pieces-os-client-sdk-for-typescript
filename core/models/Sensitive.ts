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
    FlattenedAsset,
    FlattenedAssetFromJSON,
    FlattenedAssetFromJSONTyped,
    FlattenedAssetToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
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
 * This is a fully referenced representation of a sensitive pieces of data.
 * @export
 * @interface Sensitive
 */
export interface Sensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Sensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Sensitive
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Sensitive
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Sensitive
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Sensitive
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedAsset}
     * @memberof Sensitive
     */
    asset: FlattenedAsset;
    /**
     * 
     * @type {string}
     * @memberof Sensitive
     */
    text: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof Sensitive
     */
    mechanism: MechanismEnum;
    /**
     * 
     * @type {SensitiveCategoryEnum}
     * @memberof Sensitive
     */
    category: SensitiveCategoryEnum;
    /**
     * 
     * @type {SensitiveSeverityEnum}
     * @memberof Sensitive
     */
    severity: SensitiveSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof Sensitive
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Sensitive
     */
    description: string;
    /**
     * 
     * @type {SensitiveMetadata}
     * @memberof Sensitive
     */
    metadata?: SensitiveMetadata;
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof Sensitive
     */
    interactions?: number;
}

export function SensitiveFromJSON(json: any): Sensitive {
    return SensitiveFromJSONTyped(json, false);
}

export function SensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sensitive {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'asset': FlattenedAssetFromJSON(json['asset']),
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

export function SensitiveToJSON(value?: Sensitive | null): any {
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
        'asset': FlattenedAssetToJSON(value.asset),
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


