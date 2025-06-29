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
import type { FlattenedTags } from './FlattenedTags';
import {
    FlattenedTagsFromJSON,
    FlattenedTagsFromJSONTyped,
    FlattenedTagsToJSON,
    FlattenedTagsToJSONTyped,
} from './FlattenedTags';
import type { FlattenedWorkstreamEvents } from './FlattenedWorkstreamEvents';
import {
    FlattenedWorkstreamEventsFromJSON,
    FlattenedWorkstreamEventsFromJSONTyped,
    FlattenedWorkstreamEventsToJSON,
    FlattenedWorkstreamEventsToJSONTyped,
} from './FlattenedWorkstreamEvents';
import type { Applications } from './Applications';
import {
    ApplicationsFromJSON,
    ApplicationsFromJSONTyped,
    ApplicationsToJSON,
    ApplicationsToJSONTyped,
} from './Applications';
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
    FlattenedAnnotationsToJSONTyped,
} from './FlattenedAnnotations';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { CapabilitiesEnum } from './CapabilitiesEnum';
import {
    CapabilitiesEnumFromJSON,
    CapabilitiesEnumFromJSONTyped,
    CapabilitiesEnumToJSON,
    CapabilitiesEnumToJSONTyped,
} from './CapabilitiesEnum';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    GroupedTimestampToJSONTyped,
} from './GroupedTimestamp';
import type { FlattenedRanges } from './FlattenedRanges';
import {
    FlattenedRangesFromJSON,
    FlattenedRangesFromJSONTyped,
    FlattenedRangesToJSON,
    FlattenedRangesToJSONTyped,
} from './FlattenedRanges';
import type { FlattenedConversations } from './FlattenedConversations';
import {
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
    FlattenedConversationsToJSONTyped,
} from './FlattenedConversations';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
    FlattenedWebsitesToJSONTyped,
} from './FlattenedWebsites';
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
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    MechanismEnumToJSONTyped,
} from './MechanismEnum';
import type { Model } from './Model';
import {
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
    ModelToJSONTyped,
} from './Model';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
    FlattenedPersonsToJSONTyped,
} from './FlattenedPersons';
import type { FlattenedIdentifiedWorkstreamPatternEngineSources } from './FlattenedIdentifiedWorkstreamPatternEngineSources';
import {
    FlattenedIdentifiedWorkstreamPatternEngineSourcesFromJSON,
    FlattenedIdentifiedWorkstreamPatternEngineSourcesFromJSONTyped,
    FlattenedIdentifiedWorkstreamPatternEngineSourcesToJSON,
    FlattenedIdentifiedWorkstreamPatternEngineSourcesToJSONTyped,
} from './FlattenedIdentifiedWorkstreamPatternEngineSources';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
    FlattenedAnchorsToJSONTyped,
} from './FlattenedAnchors';

/**
 * This is a DAG-Safe minimal representation of a workstream summary
 * @export
 * @interface FlattenedWorkstreamSummary
 */
export interface FlattenedWorkstreamSummary {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWorkstreamSummary
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedWorkstreamSummary
     */
    id: string;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedWorkstreamSummary
     */
    score?: Score;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWorkstreamSummary
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWorkstreamSummary
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedWorkstreamEvents}
     * @memberof FlattenedWorkstreamSummary
     */
    events?: FlattenedWorkstreamEvents;
    /**
     * 
     * @type {string}
     * @memberof FlattenedWorkstreamSummary
     */
    name: string;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedWorkstreamSummary
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedRanges}
     * @memberof FlattenedWorkstreamSummary
     */
    ranges?: FlattenedRanges;
    /**
     * 
     * @type {Model}
     * @memberof FlattenedWorkstreamSummary
     */
    model: Model;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof FlattenedWorkstreamSummary
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof FlattenedWorkstreamSummary
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedWorkstreamSummary
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof FlattenedWorkstreamSummary
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof FlattenedWorkstreamSummary
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {Applications}
     * @memberof FlattenedWorkstreamSummary
     */
    applications?: Applications;
    /**
     * 
     * @type {FlattenedTags}
     * @memberof FlattenedWorkstreamSummary
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {FlattenedIdentifiedWorkstreamPatternEngineSources}
     * @memberof FlattenedWorkstreamSummary
     */
    sources?: FlattenedIdentifiedWorkstreamPatternEngineSources;
    /**
     * This is the embedding for the format.(NEEDs to connection.vector) and specific here because we can only index on a single name
     * NOTE: this the the vector index that corresponds the the couchbase lite index.
     * @type {Array<number>}
     * @memberof FlattenedWorkstreamSummary
     */
    workstreamSummariesVector?: Array<number>;
    /**
     * 
     * @type {CapabilitiesEnum}
     * @memberof FlattenedWorkstreamSummary
     */
    processing?: CapabilitiesEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedWorkstreamSummary
     */
    favorited?: boolean;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof FlattenedWorkstreamSummary
     */
    messages?: FlattenedConversationMessages;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof FlattenedWorkstreamSummary
     */
    mechanism?: MechanismEnum;
}



/**
 * Check if a given object implements the FlattenedWorkstreamSummary interface.
 */
export function instanceOfFlattenedWorkstreamSummary(value: object): value is FlattenedWorkstreamSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('model' in value) || value['model'] === undefined) return false;
    return true;
}

export function FlattenedWorkstreamSummaryFromJSON(json: any): FlattenedWorkstreamSummary {
    return FlattenedWorkstreamSummaryFromJSONTyped(json, false);
}

export function FlattenedWorkstreamSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWorkstreamSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'events': json['events'] == null ? undefined : FlattenedWorkstreamEventsFromJSON(json['events']),
        'name': json['name'],
        'annotations': json['annotations'] == null ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'ranges': json['ranges'] == null ? undefined : FlattenedRangesFromJSON(json['ranges']),
        'model': ModelFromJSON(json['model']),
        'websites': json['websites'] == null ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': json['anchors'] == null ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'conversations': json['conversations'] == null ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'persons': json['persons'] == null ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'applications': json['applications'] == null ? undefined : ApplicationsFromJSON(json['applications']),
        'tags': json['tags'] == null ? undefined : FlattenedTagsFromJSON(json['tags']),
        'sources': json['sources'] == null ? undefined : FlattenedIdentifiedWorkstreamPatternEngineSourcesFromJSON(json['sources']),
        'workstreamSummariesVector': json['workstreamSummariesVector'] == null ? undefined : json['workstreamSummariesVector'],
        'processing': json['processing'] == null ? undefined : CapabilitiesEnumFromJSON(json['processing']),
        'favorited': json['favorited'] == null ? undefined : json['favorited'],
        'messages': json['messages'] == null ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
        'mechanism': json['mechanism'] == null ? undefined : MechanismEnumFromJSON(json['mechanism']),
    };
}

export function FlattenedWorkstreamSummaryToJSON(json: any): FlattenedWorkstreamSummary {
    return FlattenedWorkstreamSummaryToJSONTyped(json, false);
}

export function FlattenedWorkstreamSummaryToJSONTyped(value?: FlattenedWorkstreamSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'score': ScoreToJSON(value['score']),
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'events': FlattenedWorkstreamEventsToJSON(value['events']),
        'name': value['name'],
        'annotations': FlattenedAnnotationsToJSON(value['annotations']),
        'ranges': FlattenedRangesToJSON(value['ranges']),
        'model': ModelToJSON(value['model']),
        'websites': FlattenedWebsitesToJSON(value['websites']),
        'anchors': FlattenedAnchorsToJSON(value['anchors']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'conversations': FlattenedConversationsToJSON(value['conversations']),
        'persons': FlattenedPersonsToJSON(value['persons']),
        'applications': ApplicationsToJSON(value['applications']),
        'tags': FlattenedTagsToJSON(value['tags']),
        'sources': FlattenedIdentifiedWorkstreamPatternEngineSourcesToJSON(value['sources']),
        'workstreamSummariesVector': value['workstreamSummariesVector'],
        'processing': CapabilitiesEnumToJSON(value['processing']),
        'favorited': value['favorited'],
        'messages': FlattenedConversationMessagesToJSON(value['messages']),
        'mechanism': MechanismEnumToJSON(value['mechanism']),
    };
}

