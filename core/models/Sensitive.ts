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

import { mapValues } from '../runtime';
import type { SensitiveMetadata } from './SensitiveMetadata';
import {
    SensitiveMetadataFromJSON,
    SensitiveMetadataFromJSONTyped,
    SensitiveMetadataToJSON,
    SensitiveMetadataToJSONTyped,
} from './SensitiveMetadata';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    ScoreToJSONTyped,
} from './Score';
import type { FlattenedAsset } from './FlattenedAsset';
import {
    FlattenedAssetFromJSON,
    FlattenedAssetFromJSONTyped,
    FlattenedAssetToJSON,
    FlattenedAssetToJSONTyped,
} from './FlattenedAsset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    MechanismEnumToJSONTyped,
} from './MechanismEnum';
import type { SensitiveSeverityEnum } from './SensitiveSeverityEnum';
import {
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
    SensitiveSeverityEnumToJSONTyped,
} from './SensitiveSeverityEnum';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    GroupedTimestampToJSONTyped,
} from './GroupedTimestamp';
import type { SensitiveCategoryEnum } from './SensitiveCategoryEnum';
import {
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
    SensitiveCategoryEnumToJSONTyped,
} from './SensitiveCategoryEnum';

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
    /**
     * 
     * @type {Score}
     * @memberof Sensitive
     */
    score?: Score;
}



/**
 * Check if a given object implements the Sensitive interface.
 */
export function instanceOfSensitive(value: object): value is Sensitive {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('asset' in value) || value['asset'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('mechanism' in value) || value['mechanism'] === undefined) return false;
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('severity' in value) || value['severity'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function SensitiveFromJSON(json: any): Sensitive {
    return SensitiveFromJSONTyped(json, false);
}

export function SensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sensitive {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'asset': FlattenedAssetFromJSON(json['asset']),
        'text': json['text'],
        'mechanism': MechanismEnumFromJSON(json['mechanism']),
        'category': SensitiveCategoryEnumFromJSON(json['category']),
        'severity': SensitiveSeverityEnumFromJSON(json['severity']),
        'name': json['name'],
        'description': json['description'],
        'metadata': json['metadata'] == null ? undefined : SensitiveMetadataFromJSON(json['metadata']),
        'interactions': json['interactions'] == null ? undefined : json['interactions'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function SensitiveToJSON(json: any): Sensitive {
    return SensitiveToJSONTyped(json, false);
}

export function SensitiveToJSONTyped(value?: Sensitive | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'asset': FlattenedAssetToJSON(value['asset']),
        'text': value['text'],
        'mechanism': MechanismEnumToJSON(value['mechanism']),
        'category': SensitiveCategoryEnumToJSON(value['category']),
        'severity': SensitiveSeverityEnumToJSON(value['severity']),
        'name': value['name'],
        'description': value['description'],
        'metadata': SensitiveMetadataToJSON(value['metadata']),
        'interactions': value['interactions'],
        'score': ScoreToJSON(value['score']),
    };
}

