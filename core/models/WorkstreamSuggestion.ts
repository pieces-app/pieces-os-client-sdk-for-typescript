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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
} from './FlattenedAnchors';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { FlattenedConversations } from './FlattenedConversations';
import {
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
} from './FlattenedConversations';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
} from './FlattenedPersons';
import type { FlattenedTags } from './FlattenedTags';
import {
    FlattenedTagsFromJSON,
    FlattenedTagsFromJSONTyped,
    FlattenedTagsToJSON,
} from './FlattenedTags';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
} from './FlattenedWebsites';
import type { FlattenedWorkstreamSummaries } from './FlattenedWorkstreamSummaries';
import {
    FlattenedWorkstreamSummariesFromJSON,
    FlattenedWorkstreamSummariesFromJSONTyped,
    FlattenedWorkstreamSummariesToJSON,
} from './FlattenedWorkstreamSummaries';
import type { ReferencedAnchor } from './ReferencedAnchor';
import {
    ReferencedAnchorFromJSON,
    ReferencedAnchorFromJSONTyped,
    ReferencedAnchorToJSON,
} from './ReferencedAnchor';
import type { ReferencedAsset } from './ReferencedAsset';
import {
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
} from './ReferencedAsset';
import type { ReferencedConversation } from './ReferencedConversation';
import {
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
} from './ReferencedConversation';
import type { ReferencedPerson } from './ReferencedPerson';
import {
    ReferencedPersonFromJSON,
    ReferencedPersonFromJSONTyped,
    ReferencedPersonToJSON,
} from './ReferencedPerson';
import type { ReferencedTag } from './ReferencedTag';
import {
    ReferencedTagFromJSON,
    ReferencedTagFromJSONTyped,
    ReferencedTagToJSON,
} from './ReferencedTag';
import type { ReferencedWebsite } from './ReferencedWebsite';
import {
    ReferencedWebsiteFromJSON,
    ReferencedWebsiteFromJSONTyped,
    ReferencedWebsiteToJSON,
} from './ReferencedWebsite';
import type { ReferencedWorkstreamSummary } from './ReferencedWorkstreamSummary';
import {
    ReferencedWorkstreamSummaryFromJSON,
    ReferencedWorkstreamSummaryFromJSONTyped,
    ReferencedWorkstreamSummaryToJSON,
} from './ReferencedWorkstreamSummary';
import type { Seed } from './Seed';
import {
    SeedFromJSON,
    SeedFromJSONTyped,
    SeedToJSON,
} from './Seed';
import type { Seeds } from './Seeds';
import {
    SeedsFromJSON,
    SeedsFromJSONTyped,
    SeedsToJSON,
} from './Seeds';
import type { WorkstreamSuggestions } from './WorkstreamSuggestions';
import {
    WorkstreamSuggestionsFromJSON,
    WorkstreamSuggestionsFromJSONTyped,
    WorkstreamSuggestionsToJSON,
} from './WorkstreamSuggestions';

/**
 * This is an individual material that is apart of the workstream feed.
 * might want to also consider plural uuids ie top websites/tags/and others..
 * 
 * related: this is an optional field that will only be calculated for first degree relationships.
 *          ie. an anchor may have related.iterable.first.persons that are not associated but related.
 *          via the workstream patturn engine.
 * 
 * current: if current is defined then this is the current viewed object
 * @export
 * @interface WorkstreamSuggestion
 */
export interface WorkstreamSuggestion {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamSuggestion
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ReferencedWorkstreamSummary}
     * @memberof WorkstreamSuggestion
     */
    summary?: ReferencedWorkstreamSummary;
    /**
     * 
     * @type {ReferencedAsset}
     * @memberof WorkstreamSuggestion
     */
    asset?: ReferencedAsset;
    /**
     * 
     * @type {ReferencedTag}
     * @memberof WorkstreamSuggestion
     */
    tag?: ReferencedTag;
    /**
     * 
     * @type {ReferencedWebsite}
     * @memberof WorkstreamSuggestion
     */
    website?: ReferencedWebsite;
    /**
     * 
     * @type {ReferencedAnchor}
     * @memberof WorkstreamSuggestion
     */
    anchor?: ReferencedAnchor;
    /**
     * 
     * @type {ReferencedConversation}
     * @memberof WorkstreamSuggestion
     */
    conversation?: ReferencedConversation;
    /**
     * 
     * @type {ReferencedPerson}
     * @memberof WorkstreamSuggestion
     */
    person?: ReferencedPerson;
    /**
     * 
     * @type {Seed}
     * @memberof WorkstreamSuggestion
     */
    seed?: Seed;
    /**
     * 
     * @type {Seeds}
     * @memberof WorkstreamSuggestion
     */
    seeds?: Seeds;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof WorkstreamSuggestion
     */
    summaries?: FlattenedWorkstreamSummaries;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof WorkstreamSuggestion
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedTags}
     * @memberof WorkstreamSuggestion
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof WorkstreamSuggestion
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof WorkstreamSuggestion
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof WorkstreamSuggestion
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof WorkstreamSuggestion
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {WorkstreamSuggestions}
     * @memberof WorkstreamSuggestion
     */
    related?: WorkstreamSuggestions;
    /**
     * 
     * @type {WorkstreamSuggestion}
     * @memberof WorkstreamSuggestion
     */
    current?: WorkstreamSuggestion;
}

/**
 * Check if a given object implements the WorkstreamSuggestion interface.
 */
export function instanceOfWorkstreamSuggestion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkstreamSuggestionFromJSON(json: any): WorkstreamSuggestion {
    return WorkstreamSuggestionFromJSONTyped(json, false);
}

export function WorkstreamSuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamSuggestion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'summary': !exists(json, 'summary') ? undefined : ReferencedWorkstreamSummaryFromJSON(json['summary']),
        'asset': !exists(json, 'asset') ? undefined : ReferencedAssetFromJSON(json['asset']),
        'tag': !exists(json, 'tag') ? undefined : ReferencedTagFromJSON(json['tag']),
        'website': !exists(json, 'website') ? undefined : ReferencedWebsiteFromJSON(json['website']),
        'anchor': !exists(json, 'anchor') ? undefined : ReferencedAnchorFromJSON(json['anchor']),
        'conversation': !exists(json, 'conversation') ? undefined : ReferencedConversationFromJSON(json['conversation']),
        'person': !exists(json, 'person') ? undefined : ReferencedPersonFromJSON(json['person']),
        'seed': !exists(json, 'seed') ? undefined : SeedFromJSON(json['seed']),
        'seeds': !exists(json, 'seeds') ? undefined : SeedsFromJSON(json['seeds']),
        'summaries': !exists(json, 'summaries') ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'tags': !exists(json, 'tags') ? undefined : FlattenedTagsFromJSON(json['tags']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': !exists(json, 'anchors') ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'conversations': !exists(json, 'conversations') ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'related': !exists(json, 'related') ? undefined : WorkstreamSuggestionsFromJSON(json['related']),
        'current': !exists(json, 'current') ? undefined : WorkstreamSuggestionFromJSON(json['current']),
    };
}

export function WorkstreamSuggestionToJSON(value?: WorkstreamSuggestion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'summary': ReferencedWorkstreamSummaryToJSON(value.summary),
        'asset': ReferencedAssetToJSON(value.asset),
        'tag': ReferencedTagToJSON(value.tag),
        'website': ReferencedWebsiteToJSON(value.website),
        'anchor': ReferencedAnchorToJSON(value.anchor),
        'conversation': ReferencedConversationToJSON(value.conversation),
        'person': ReferencedPersonToJSON(value.person),
        'seed': SeedToJSON(value.seed),
        'seeds': SeedsToJSON(value.seeds),
        'summaries': FlattenedWorkstreamSummariesToJSON(value.summaries),
        'assets': FlattenedAssetsToJSON(value.assets),
        'tags': FlattenedTagsToJSON(value.tags),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'anchors': FlattenedAnchorsToJSON(value.anchors),
        'conversations': FlattenedConversationsToJSON(value.conversations),
        'persons': FlattenedPersonsToJSON(value.persons),
        'related': WorkstreamSuggestionsToJSON(value.related),
        'current': WorkstreamSuggestionToJSON(value.current),
    };
}
