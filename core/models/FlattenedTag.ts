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
import type { FlattenedWorkstreamEvents } from './FlattenedWorkstreamEvents';
import {
    FlattenedWorkstreamEventsFromJSON,
    FlattenedWorkstreamEventsFromJSONTyped,
    FlattenedWorkstreamEventsToJSON,
    FlattenedWorkstreamEventsToJSONTyped,
} from './FlattenedWorkstreamEvents';
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
    FlattenedAnnotationsToJSONTyped,
} from './FlattenedAnnotations';
import type { FlattenedWorkstreamPatternEngineSourceWindows } from './FlattenedWorkstreamPatternEngineSourceWindows';
import {
    FlattenedWorkstreamPatternEngineSourceWindowsFromJSON,
    FlattenedWorkstreamPatternEngineSourceWindowsFromJSONTyped,
    FlattenedWorkstreamPatternEngineSourceWindowsToJSON,
    FlattenedWorkstreamPatternEngineSourceWindowsToJSONTyped,
} from './FlattenedWorkstreamPatternEngineSourceWindows';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    GroupedTimestampToJSONTyped,
} from './GroupedTimestamp';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
    FlattenedWebsitesToJSONTyped,
} from './FlattenedWebsites';
import type { FlattenedWorkstreamSummaries } from './FlattenedWorkstreamSummaries';
import {
    FlattenedWorkstreamSummariesFromJSON,
    FlattenedWorkstreamSummariesFromJSONTyped,
    FlattenedWorkstreamSummariesToJSON,
    FlattenedWorkstreamSummariesToJSONTyped,
} from './FlattenedWorkstreamSummaries';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    ScoreToJSONTyped,
} from './Score';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedAssetsToJSONTyped,
} from './FlattenedAssets';
import type { FlattenedConversationMessages } from './FlattenedConversationMessages';
import {
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
    FlattenedConversationMessagesToJSONTyped,
} from './FlattenedConversationMessages';
import type { TagCategoryEnum } from './TagCategoryEnum';
import {
    TagCategoryEnumFromJSON,
    TagCategoryEnumFromJSONTyped,
    TagCategoryEnumToJSON,
    TagCategoryEnumToJSONTyped,
} from './TagCategoryEnum';
import type { Relationship } from './Relationship';
import {
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
    RelationshipToJSONTyped,
} from './Relationship';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    MechanismEnumToJSONTyped,
} from './MechanismEnum';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
    FlattenedPersonsToJSONTyped,
} from './FlattenedPersons';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
    FlattenedAnchorsToJSONTyped,
} from './FlattenedAnchors';

/**
 * This is a Flattened Version of a Tag.
 * @export
 * @interface FlattenedTag
 */
export interface FlattenedTag {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedTag
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedTag
     */
    text: string;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof FlattenedTag
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedTag
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedTag
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedTag
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedTag
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {TagCategoryEnum}
     * @memberof FlattenedTag
     */
    category: TagCategoryEnum;
    /**
     * 
     * @type {Relationship}
     * @memberof FlattenedTag
     */
    relationship?: Relationship;
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof FlattenedTag
     */
    interactions?: number;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof FlattenedTag
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedTag
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedTag
     */
    summaries?: FlattenedWorkstreamSummaries;
    /**
     * 
     * @type {FlattenedWorkstreamEvents}
     * @memberof FlattenedTag
     */
    workstreamEvents?: FlattenedWorkstreamEvents;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof FlattenedTag
     */
    messages?: FlattenedConversationMessages;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedTag
     */
    annotations?: FlattenedAnnotations;
    /**
     * This is the embedding for the format.(NEEDs to collectionection.vector) and specific here because we can only index on a single name
     * NOTE: this the the vector index that corresponds the the couchbase lite index.
     * @type {Array<number>}
     * @memberof FlattenedTag
     */
    tagsVector?: Array<number>;
    /**
     * 
     * @type {FlattenedWorkstreamPatternEngineSourceWindows}
     * @memberof FlattenedTag
     */
    sourceWindows?: FlattenedWorkstreamPatternEngineSourceWindows;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof FlattenedTag
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof FlattenedTag
     */
    anchors?: FlattenedAnchors;
}



/**
 * Check if a given object implements the FlattenedTag interface.
 */
export function instanceOfFlattenedTag(value: object): value is FlattenedTag {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('category' in value) || value['category'] === undefined) return false;
    return true;
}

export function FlattenedTagFromJSON(json: any): FlattenedTag {
    return FlattenedTagFromJSONTyped(json, false);
}

export function FlattenedTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedTag {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'text': json['text'],
        'mechanisms': json['mechanisms'] == null ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'category': TagCategoryEnumFromJSON(json['category']),
        'relationship': json['relationship'] == null ? undefined : RelationshipFromJSON(json['relationship']),
        'interactions': json['interactions'] == null ? undefined : json['interactions'],
        'persons': json['persons'] == null ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
        'workstreamEvents': json['workstream_events'] == null ? undefined : FlattenedWorkstreamEventsFromJSON(json['workstream_events']),
        'messages': json['messages'] == null ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
        'annotations': json['annotations'] == null ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'tagsVector': json['tagsVector'] == null ? undefined : json['tagsVector'],
        'sourceWindows': json['source_windows'] == null ? undefined : FlattenedWorkstreamPatternEngineSourceWindowsFromJSON(json['source_windows']),
        'websites': json['websites'] == null ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': json['anchors'] == null ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
    };
}

export function FlattenedTagToJSON(json: any): FlattenedTag {
    return FlattenedTagToJSONTyped(json, false);
}

export function FlattenedTagToJSONTyped(value?: FlattenedTag | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'text': value['text'],
        'mechanisms': value['mechanisms'] == null ? undefined : (mapValues(value['mechanisms'], MechanismEnumToJSON)),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'category': TagCategoryEnumToJSON(value['category']),
        'relationship': RelationshipToJSON(value['relationship']),
        'interactions': value['interactions'],
        'persons': FlattenedPersonsToJSON(value['persons']),
        'score': ScoreToJSON(value['score']),
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
        'workstream_events': FlattenedWorkstreamEventsToJSON(value['workstreamEvents']),
        'messages': FlattenedConversationMessagesToJSON(value['messages']),
        'annotations': FlattenedAnnotationsToJSON(value['annotations']),
        'tagsVector': value['tagsVector'],
        'source_windows': FlattenedWorkstreamPatternEngineSourceWindowsToJSON(value['sourceWindows']),
        'websites': FlattenedWebsitesToJSON(value['websites']),
        'anchors': FlattenedAnchorsToJSON(value['anchors']),
    };
}

