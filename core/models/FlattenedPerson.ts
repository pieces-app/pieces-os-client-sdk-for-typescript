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
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
} from './FlattenedAnnotations';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { FlattenedConversationMessages } from './FlattenedConversationMessages';
import {
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
} from './FlattenedConversationMessages';
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
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { PersonAccess } from './PersonAccess';
import {
    PersonAccessFromJSON,
    PersonAccessFromJSONTyped,
    PersonAccessToJSON,
} from './PersonAccess';
import type { PersonModel } from './PersonModel';
import {
    PersonModelFromJSON,
    PersonModelFromJSONTyped,
    PersonModelToJSON,
} from './PersonModel';
import type { PersonType } from './PersonType';
import {
    PersonTypeFromJSON,
    PersonTypeFromJSONTyped,
    PersonTypeToJSON,
} from './PersonType';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...
 * 
 * if asset is passed then that means this person belongs to a scoped asset.
 * @export
 * @interface FlattenedPerson
 */
export interface FlattenedPerson {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedPerson
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedPerson
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedPerson
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedPerson
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {PersonType}
     * @memberof FlattenedPerson
     */
    type: PersonType;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedPerson
     */
    assets?: FlattenedAssets;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof FlattenedPerson
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof FlattenedPerson
     */
    interactions?: number;
    /**
     * This is a Map<String, PersonAccess> where the the key is an asset id.
     * @type {{ [key: string]: PersonAccess; }}
     * @memberof FlattenedPerson
     */
    access?: { [key: string]: PersonAccess; };
    /**
     * 
     * @type {FlattenedTags}
     * @memberof FlattenedPerson
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof FlattenedPerson
     */
    websites?: FlattenedWebsites;
    /**
     * This is a Map<String, PersonModel>, where the the key is an asset id.
     * @type {{ [key: string]: PersonModel; }}
     * @memberof FlattenedPerson
     */
    models?: { [key: string]: PersonModel; };
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedPerson
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedPerson
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedPerson
     */
    summaries?: FlattenedWorkstreamSummaries;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof FlattenedPerson
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof FlattenedPerson
     */
    messages?: FlattenedConversationMessages;
}

/**
 * Check if a given object implements the FlattenedPerson interface.
 */
export function instanceOfFlattenedPerson(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FlattenedPersonFromJSON(json: any): FlattenedPerson {
    return FlattenedPersonFromJSONTyped(json, false);
}

export function FlattenedPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedPerson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'type': PersonTypeFromJSON(json['type']),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'mechanisms': !exists(json, 'mechanisms') ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'interactions': !exists(json, 'interactions') ? undefined : json['interactions'],
        'access': !exists(json, 'access') ? undefined : (mapValues(json['access'], PersonAccessFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : FlattenedTagsFromJSON(json['tags']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'models': !exists(json, 'models') ? undefined : (mapValues(json['models'], PersonModelFromJSON)),
        'annotations': !exists(json, 'annotations') ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'summaries': !exists(json, 'summaries') ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
        'anchors': !exists(json, 'anchors') ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'messages': !exists(json, 'messages') ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
    };
}

export function FlattenedPersonToJSON(value?: FlattenedPerson | null): any {
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
        'type': PersonTypeToJSON(value.type),
        'assets': FlattenedAssetsToJSON(value.assets),
        'mechanisms': value.mechanisms === undefined ? undefined : (mapValues(value.mechanisms, MechanismEnumToJSON)),
        'interactions': value.interactions,
        'access': value.access === undefined ? undefined : (mapValues(value.access, PersonAccessToJSON)),
        'tags': FlattenedTagsToJSON(value.tags),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'models': value.models === undefined ? undefined : (mapValues(value.models, PersonModelToJSON)),
        'annotations': FlattenedAnnotationsToJSON(value.annotations),
        'score': ScoreToJSON(value.score),
        'summaries': FlattenedWorkstreamSummariesToJSON(value.summaries),
        'anchors': FlattenedAnchorsToJSON(value.anchors),
        'messages': FlattenedConversationMessagesToJSON(value.messages),
    };
}

