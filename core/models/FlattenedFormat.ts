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
import type { Role } from './Role';
import {
    RoleFromJSON,
    RoleFromJSONTyped,
    RoleToJSON,
    RoleToJSONTyped,
} from './Role';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
    ClassificationToJSONTyped,
} from './Classification';
import type { FlattenedAnalysis } from './FlattenedAnalysis';
import {
    FlattenedAnalysisFromJSON,
    FlattenedAnalysisFromJSONTyped,
    FlattenedAnalysisToJSON,
    FlattenedAnalysisToJSONTyped,
} from './FlattenedAnalysis';
import type { Relationship } from './Relationship';
import {
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
    RelationshipToJSONTyped,
} from './Relationship';
import type { FragmentFormat } from './FragmentFormat';
import {
    FragmentFormatFromJSON,
    FragmentFormatFromJSONTyped,
    FragmentFormatToJSON,
    FragmentFormatToJSONTyped,
} from './FragmentFormat';
import type { FlattenedActivities } from './FlattenedActivities';
import {
    FlattenedActivitiesFromJSON,
    FlattenedActivitiesFromJSONTyped,
    FlattenedActivitiesToJSON,
    FlattenedActivitiesToJSONTyped,
} from './FlattenedActivities';
import type { ByteDescriptor } from './ByteDescriptor';
import {
    ByteDescriptorFromJSON,
    ByteDescriptorFromJSONTyped,
    ByteDescriptorToJSON,
    ByteDescriptorToJSONTyped,
} from './ByteDescriptor';
import type { FileFormat } from './FileFormat';
import {
    FileFormatFromJSON,
    FileFormatFromJSONTyped,
    FileFormatToJSON,
    FileFormatToJSONTyped,
} from './FileFormat';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    GroupedTimestampToJSONTyped,
} from './GroupedTimestamp';
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ApplicationToJSONTyped,
} from './Application';

/**
 * A representation of Data for a particular Form Factor of an Asset.[DAG Compatible - Directed Acyclic Graph Data Structure]
 * 
 * FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * 
 * i.e. FlattenedFormat.asset is Type String
 * 
 * fragment or file will always be defined. Even thought they are both optional.
 * @export
 * @interface FlattenedFormat
 */
export interface FlattenedFormat {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedFormat
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedFormat
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedFormat
     */
    creator: string;
    /**
     * 
     * @type {Classification}
     * @memberof FlattenedFormat
     */
    classification: Classification;
    /**
     * 
     * @type {string}
     * @memberof FlattenedFormat
     */
    icon?: string;
    /**
     * 
     * @type {Role}
     * @memberof FlattenedFormat
     */
    role: Role;
    /**
     * 
     * @type {Application}
     * @memberof FlattenedFormat
     */
    application: Application;
    /**
     * A uuid model. 36 Characters (4 Dashes, 32 Numbers/Letters) 
     * @type {string}
     * @memberof FlattenedFormat
     */
    asset: string;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof FlattenedFormat
     */
    bytes: ByteDescriptor;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedFormat
     */
    synced?: GroupedTimestamp;
    /**
     * This is a path used to determine what path this format lives at within the cloud.
     * @type {string}
     * @memberof FlattenedFormat
     */
    cloud?: string;
    /**
     * 
     * @type {FragmentFormat}
     * @memberof FlattenedFormat
     */
    fragment?: FragmentFormat;
    /**
     * 
     * @type {FileFormat}
     * @memberof FlattenedFormat
     */
    file?: FileFormat;
    /**
     * 
     * @type {FlattenedAnalysis}
     * @memberof FlattenedFormat
     */
    analysis?: FlattenedAnalysis;
    /**
     * 
     * @type {Relationship}
     * @memberof FlattenedFormat
     */
    relationship?: Relationship;
    /**
     * 
     * @type {FlattenedActivities}
     * @memberof FlattenedFormat
     */
    activities?: FlattenedActivities;
}



/**
 * Check if a given object implements the FlattenedFormat interface.
 */
export function instanceOfFlattenedFormat(value: object): value is FlattenedFormat {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('creator' in value) || value['creator'] === undefined) return false;
    if (!('classification' in value) || value['classification'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('application' in value) || value['application'] === undefined) return false;
    if (!('asset' in value) || value['asset'] === undefined) return false;
    if (!('bytes' in value) || value['bytes'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    return true;
}

export function FlattenedFormatFromJSON(json: any): FlattenedFormat {
    return FlattenedFormatFromJSONTyped(json, false);
}

export function FlattenedFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedFormat {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'creator': json['creator'],
        'classification': ClassificationFromJSON(json['classification']),
        'icon': json['icon'] == null ? undefined : json['icon'],
        'role': RoleFromJSON(json['role']),
        'application': ApplicationFromJSON(json['application']),
        'asset': json['asset'],
        'bytes': ByteDescriptorFromJSON(json['bytes']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'synced': json['synced'] == null ? undefined : GroupedTimestampFromJSON(json['synced']),
        'cloud': json['cloud'] == null ? undefined : json['cloud'],
        'fragment': json['fragment'] == null ? undefined : FragmentFormatFromJSON(json['fragment']),
        'file': json['file'] == null ? undefined : FileFormatFromJSON(json['file']),
        'analysis': json['analysis'] == null ? undefined : FlattenedAnalysisFromJSON(json['analysis']),
        'relationship': json['relationship'] == null ? undefined : RelationshipFromJSON(json['relationship']),
        'activities': json['activities'] == null ? undefined : FlattenedActivitiesFromJSON(json['activities']),
    };
}

export function FlattenedFormatToJSON(json: any): FlattenedFormat {
    return FlattenedFormatToJSONTyped(json, false);
}

export function FlattenedFormatToJSONTyped(value?: FlattenedFormat | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'creator': value['creator'],
        'classification': ClassificationToJSON(value['classification']),
        'icon': value['icon'],
        'role': RoleToJSON(value['role']),
        'application': ApplicationToJSON(value['application']),
        'asset': value['asset'],
        'bytes': ByteDescriptorToJSON(value['bytes']),
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'synced': GroupedTimestampToJSON(value['synced']),
        'cloud': value['cloud'],
        'fragment': FragmentFormatToJSON(value['fragment']),
        'file': FileFormatToJSON(value['file']),
        'analysis': FlattenedAnalysisToJSON(value['analysis']),
        'relationship': RelationshipToJSON(value['relationship']),
        'activities': FlattenedActivitiesToJSON(value['activities']),
    };
}

