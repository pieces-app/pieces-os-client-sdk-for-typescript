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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { SeededAnnotation } from './SeededAnnotation';
import {
    SeededAnnotationFromJSON,
    SeededAnnotationFromJSONTyped,
    SeededAnnotationToJSON,
    SeededAnnotationToJSONTyped,
} from './SeededAnnotation';
import type { CapabilitiesEnum } from './CapabilitiesEnum';
import {
    CapabilitiesEnumFromJSON,
    CapabilitiesEnumFromJSONTyped,
    CapabilitiesEnumToJSON,
    CapabilitiesEnumToJSONTyped,
} from './CapabilitiesEnum';
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
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedAssetsToJSONTyped,
} from './FlattenedAssets';
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
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
    FlattenedAnchorsToJSONTyped,
} from './FlattenedAnchors';

/**
 * This is a seeded version of a WorkstreamSummary
 * Note: sources for the summary will be calculated based on the events used
 * @export
 * @interface SeededWorkstreamSummary
 */
export interface SeededWorkstreamSummary {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededWorkstreamSummary
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {FlattenedWorkstreamEvents}
     * @memberof SeededWorkstreamSummary
     */
    events?: FlattenedWorkstreamEvents;
    /**
     * 
     * @type {string}
     * @memberof SeededWorkstreamSummary
     */
    name: string;
    /**
     * 
     * @type {Array<SeededAnnotation>}
     * @memberof SeededWorkstreamSummary
     */
    annotations?: Array<SeededAnnotation>;
    /**
     * 
     * @type {FlattenedRanges}
     * @memberof SeededWorkstreamSummary
     */
    ranges?: FlattenedRanges;
    /**
     * 
     * @type {Model}
     * @memberof SeededWorkstreamSummary
     */
    model: Model;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof SeededWorkstreamSummary
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof SeededWorkstreamSummary
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof SeededWorkstreamSummary
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof SeededWorkstreamSummary
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof SeededWorkstreamSummary
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {FlattenedTags}
     * @memberof SeededWorkstreamSummary
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {Applications}
     * @memberof SeededWorkstreamSummary
     */
    applications?: Applications;
    /**
     * This is the embedding for the format.(NEEDs to connection.vector) and specific here because we can only index on a single name
     * NOTE: this the the vector index that corresponds the the couchbase lite index.
     * @type {Array<number>}
     * @memberof SeededWorkstreamSummary
     */
    workstreamSummariesVector?: Array<number>;
    /**
     * 
     * @type {CapabilitiesEnum}
     * @memberof SeededWorkstreamSummary
     */
    processing?: CapabilitiesEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SeededWorkstreamSummary
     */
    favorited?: boolean;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededWorkstreamSummary
     */
    mechanism?: MechanismEnum;
}



/**
 * Check if a given object implements the SeededWorkstreamSummary interface.
 */
export function instanceOfSeededWorkstreamSummary(value: object): value is SeededWorkstreamSummary {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('model' in value) || value['model'] === undefined) return false;
    return true;
}

export function SeededWorkstreamSummaryFromJSON(json: any): SeededWorkstreamSummary {
    return SeededWorkstreamSummaryFromJSONTyped(json, false);
}

export function SeededWorkstreamSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededWorkstreamSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'events': json['events'] == null ? undefined : FlattenedWorkstreamEventsFromJSON(json['events']),
        'name': json['name'],
        'annotations': json['annotations'] == null ? undefined : ((json['annotations'] as Array<any>).map(SeededAnnotationFromJSON)),
        'ranges': json['ranges'] == null ? undefined : FlattenedRangesFromJSON(json['ranges']),
        'model': ModelFromJSON(json['model']),
        'websites': json['websites'] == null ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': json['anchors'] == null ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'conversations': json['conversations'] == null ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'persons': json['persons'] == null ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'tags': json['tags'] == null ? undefined : FlattenedTagsFromJSON(json['tags']),
        'applications': json['applications'] == null ? undefined : ApplicationsFromJSON(json['applications']),
        'workstreamSummariesVector': json['workstreamSummariesVector'] == null ? undefined : json['workstreamSummariesVector'],
        'processing': json['processing'] == null ? undefined : CapabilitiesEnumFromJSON(json['processing']),
        'favorited': json['favorited'] == null ? undefined : json['favorited'],
        'mechanism': json['mechanism'] == null ? undefined : MechanismEnumFromJSON(json['mechanism']),
    };
}

export function SeededWorkstreamSummaryToJSON(json: any): SeededWorkstreamSummary {
    return SeededWorkstreamSummaryToJSONTyped(json, false);
}

export function SeededWorkstreamSummaryToJSONTyped(value?: SeededWorkstreamSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'events': FlattenedWorkstreamEventsToJSON(value['events']),
        'name': value['name'],
        'annotations': value['annotations'] == null ? undefined : ((value['annotations'] as Array<any>).map(SeededAnnotationToJSON)),
        'ranges': FlattenedRangesToJSON(value['ranges']),
        'model': ModelToJSON(value['model']),
        'websites': FlattenedWebsitesToJSON(value['websites']),
        'anchors': FlattenedAnchorsToJSON(value['anchors']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'conversations': FlattenedConversationsToJSON(value['conversations']),
        'persons': FlattenedPersonsToJSON(value['persons']),
        'tags': FlattenedTagsToJSON(value['tags']),
        'applications': ApplicationsToJSON(value['applications']),
        'workstreamSummariesVector': value['workstreamSummariesVector'],
        'processing': CapabilitiesEnumToJSON(value['processing']),
        'favorited': value['favorited'],
        'mechanism': MechanismEnumToJSON(value['mechanism']),
    };
}

