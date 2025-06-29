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
import type { ReferencedConversation } from './ReferencedConversation';
import {
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
    ReferencedConversationToJSONTyped,
} from './ReferencedConversation';
import type { ReferencedAnchorPoint } from './ReferencedAnchorPoint';
import {
    ReferencedAnchorPointFromJSON,
    ReferencedAnchorPointFromJSONTyped,
    ReferencedAnchorPointToJSON,
    ReferencedAnchorPointToJSONTyped,
} from './ReferencedAnchorPoint';
import type { ReferencedWorkstreamPatternEngineSourceWindow } from './ReferencedWorkstreamPatternEngineSourceWindow';
import {
    ReferencedWorkstreamPatternEngineSourceWindowFromJSON,
    ReferencedWorkstreamPatternEngineSourceWindowFromJSONTyped,
    ReferencedWorkstreamPatternEngineSourceWindowToJSON,
    ReferencedWorkstreamPatternEngineSourceWindowToJSONTyped,
} from './ReferencedWorkstreamPatternEngineSourceWindow';
import type { ReferencedIdentifiedWorkstreamPatternEngineSource } from './ReferencedIdentifiedWorkstreamPatternEngineSource';
import {
    ReferencedIdentifiedWorkstreamPatternEngineSourceFromJSON,
    ReferencedIdentifiedWorkstreamPatternEngineSourceFromJSONTyped,
    ReferencedIdentifiedWorkstreamPatternEngineSourceToJSON,
    ReferencedIdentifiedWorkstreamPatternEngineSourceToJSONTyped,
} from './ReferencedIdentifiedWorkstreamPatternEngineSource';
import type { ReferencedWebsite } from './ReferencedWebsite';
import {
    ReferencedWebsiteFromJSON,
    ReferencedWebsiteFromJSONTyped,
    ReferencedWebsiteToJSON,
    ReferencedWebsiteToJSONTyped,
} from './ReferencedWebsite';
import type { ReferencedActivity } from './ReferencedActivity';
import {
    ReferencedActivityFromJSON,
    ReferencedActivityFromJSONTyped,
    ReferencedActivityToJSON,
    ReferencedActivityToJSONTyped,
} from './ReferencedActivity';
import type { ReferencedAnchor } from './ReferencedAnchor';
import {
    ReferencedAnchorFromJSON,
    ReferencedAnchorFromJSONTyped,
    ReferencedAnchorToJSON,
    ReferencedAnchorToJSONTyped,
} from './ReferencedAnchor';
import type { ReferencedPerson } from './ReferencedPerson';
import {
    ReferencedPersonFromJSON,
    ReferencedPersonFromJSONTyped,
    ReferencedPersonToJSON,
    ReferencedPersonToJSONTyped,
} from './ReferencedPerson';
import type { ReferencedRange } from './ReferencedRange';
import {
    ReferencedRangeFromJSON,
    ReferencedRangeFromJSONTyped,
    ReferencedRangeToJSON,
    ReferencedRangeToJSONTyped,
} from './ReferencedRange';
import type { ReferencedFormat } from './ReferencedFormat';
import {
    ReferencedFormatFromJSON,
    ReferencedFormatFromJSONTyped,
    ReferencedFormatToJSON,
    ReferencedFormatToJSONTyped,
} from './ReferencedFormat';
import type { ReferencedSensitive } from './ReferencedSensitive';
import {
    ReferencedSensitiveFromJSON,
    ReferencedSensitiveFromJSONTyped,
    ReferencedSensitiveToJSON,
    ReferencedSensitiveToJSONTyped,
} from './ReferencedSensitive';
import type { ReferencedAsset } from './ReferencedAsset';
import {
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
    ReferencedAssetToJSONTyped,
} from './ReferencedAsset';
import type { ReferencedTag } from './ReferencedTag';
import {
    ReferencedTagFromJSON,
    ReferencedTagFromJSONTyped,
    ReferencedTagToJSON,
    ReferencedTagToJSONTyped,
} from './ReferencedTag';
import type { ReferencedWorkstreamSummary } from './ReferencedWorkstreamSummary';
import {
    ReferencedWorkstreamSummaryFromJSON,
    ReferencedWorkstreamSummaryFromJSONTyped,
    ReferencedWorkstreamSummaryToJSON,
    ReferencedWorkstreamSummaryToJSONTyped,
} from './ReferencedWorkstreamSummary';
import type { ReferencedAnnotation } from './ReferencedAnnotation';
import {
    ReferencedAnnotationFromJSON,
    ReferencedAnnotationFromJSONTyped,
    ReferencedAnnotationToJSON,
    ReferencedAnnotationToJSONTyped,
} from './ReferencedAnnotation';
import type { ReferencedHint } from './ReferencedHint';
import {
    ReferencedHintFromJSON,
    ReferencedHintFromJSONTyped,
    ReferencedHintToJSON,
    ReferencedHintToJSONTyped,
} from './ReferencedHint';
import type { ReferencedModel } from './ReferencedModel';
import {
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
    ReferencedModelToJSONTyped,
} from './ReferencedModel';
import type { ReferencedApplication } from './ReferencedApplication';
import {
    ReferencedApplicationFromJSON,
    ReferencedApplicationFromJSONTyped,
    ReferencedApplicationToJSON,
    ReferencedApplicationToJSONTyped,
} from './ReferencedApplication';
import type { ReferencedConversationMessage } from './ReferencedConversationMessage';
import {
    ReferencedConversationMessageFromJSON,
    ReferencedConversationMessageFromJSONTyped,
    ReferencedConversationMessageToJSON,
    ReferencedConversationMessageToJSONTyped,
} from './ReferencedConversationMessage';

/**
 * This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers && annotations but can be used with other as well, if we want to expand this class.
 * @export
 * @interface StreamedIdentifier
 */
export interface StreamedIdentifier {
    /**
     * 
     * @type {ReferencedAsset}
     * @memberof StreamedIdentifier
     */
    asset?: ReferencedAsset;
    /**
     * 
     * @type {ReferencedConversation}
     * @memberof StreamedIdentifier
     */
    conversation?: ReferencedConversation;
    /**
     * 
     * @type {ReferencedAnnotation}
     * @memberof StreamedIdentifier
     */
    annotation?: ReferencedAnnotation;
    /**
     * 
     * @type {ReferencedActivity}
     * @memberof StreamedIdentifier
     */
    activity?: ReferencedActivity;
    /**
     * 
     * @type {ReferencedAnchor}
     * @memberof StreamedIdentifier
     */
    anchor?: ReferencedAnchor;
    /**
     * 
     * @type {ReferencedAnchorPoint}
     * @memberof StreamedIdentifier
     */
    anchorPoint?: ReferencedAnchorPoint;
    /**
     * 
     * @type {ReferencedHint}
     * @memberof StreamedIdentifier
     */
    hint?: ReferencedHint;
    /**
     * 
     * @type {ReferencedConversationMessage}
     * @memberof StreamedIdentifier
     */
    conversationMessage?: ReferencedConversationMessage;
    /**
     * 
     * @type {ReferencedFormat}
     * @memberof StreamedIdentifier
     */
    format?: ReferencedFormat;
    /**
     * 
     * @type {ReferencedPerson}
     * @memberof StreamedIdentifier
     */
    person?: ReferencedPerson;
    /**
     * 
     * @type {ReferencedRange}
     * @memberof StreamedIdentifier
     */
    range?: ReferencedRange;
    /**
     * 
     * @type {ReferencedSensitive}
     * @memberof StreamedIdentifier
     */
    sensitive?: ReferencedSensitive;
    /**
     * 
     * @type {ReferencedTag}
     * @memberof StreamedIdentifier
     */
    tag?: ReferencedTag;
    /**
     * 
     * @type {ReferencedWebsite}
     * @memberof StreamedIdentifier
     */
    website?: ReferencedWebsite;
    /**
     * 
     * @type {ReferencedApplication}
     * @memberof StreamedIdentifier
     */
    application?: ReferencedApplication;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof StreamedIdentifier
     */
    model?: ReferencedModel;
    /**
     * 
     * @type {ReferencedWorkstreamSummary}
     * @memberof StreamedIdentifier
     */
    workstreamSummary?: ReferencedWorkstreamSummary;
    /**
     * 
     * @type {ReferencedIdentifiedWorkstreamPatternEngineSource}
     * @memberof StreamedIdentifier
     */
    workstreamPatternEngineSource?: ReferencedIdentifiedWorkstreamPatternEngineSource;
    /**
     * 
     * @type {ReferencedWorkstreamPatternEngineSourceWindow}
     * @memberof StreamedIdentifier
     */
    workstreamPatternEngineSourceWindow?: ReferencedWorkstreamPatternEngineSourceWindow;
    /**
     * This is a specific bool that will let us know if we deleted an Identifierfrom the db.
     * @type {boolean}
     * @memberof StreamedIdentifier
     */
    deleted?: boolean;
}

/**
 * Check if a given object implements the StreamedIdentifier interface.
 */
export function instanceOfStreamedIdentifier(value: object): value is StreamedIdentifier {
    return true;
}

export function StreamedIdentifierFromJSON(json: any): StreamedIdentifier {
    return StreamedIdentifierFromJSONTyped(json, false);
}

export function StreamedIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamedIdentifier {
    if (json == null) {
        return json;
    }
    return {
        
        'asset': json['asset'] == null ? undefined : ReferencedAssetFromJSON(json['asset']),
        'conversation': json['conversation'] == null ? undefined : ReferencedConversationFromJSON(json['conversation']),
        'annotation': json['annotation'] == null ? undefined : ReferencedAnnotationFromJSON(json['annotation']),
        'activity': json['activity'] == null ? undefined : ReferencedActivityFromJSON(json['activity']),
        'anchor': json['anchor'] == null ? undefined : ReferencedAnchorFromJSON(json['anchor']),
        'anchorPoint': json['anchorPoint'] == null ? undefined : ReferencedAnchorPointFromJSON(json['anchorPoint']),
        'hint': json['hint'] == null ? undefined : ReferencedHintFromJSON(json['hint']),
        'conversationMessage': json['conversationMessage'] == null ? undefined : ReferencedConversationMessageFromJSON(json['conversationMessage']),
        'format': json['format'] == null ? undefined : ReferencedFormatFromJSON(json['format']),
        'person': json['person'] == null ? undefined : ReferencedPersonFromJSON(json['person']),
        'range': json['range'] == null ? undefined : ReferencedRangeFromJSON(json['range']),
        'sensitive': json['sensitive'] == null ? undefined : ReferencedSensitiveFromJSON(json['sensitive']),
        'tag': json['tag'] == null ? undefined : ReferencedTagFromJSON(json['tag']),
        'website': json['website'] == null ? undefined : ReferencedWebsiteFromJSON(json['website']),
        'application': json['application'] == null ? undefined : ReferencedApplicationFromJSON(json['application']),
        'model': json['model'] == null ? undefined : ReferencedModelFromJSON(json['model']),
        'workstreamSummary': json['workstream_summary'] == null ? undefined : ReferencedWorkstreamSummaryFromJSON(json['workstream_summary']),
        'workstreamPatternEngineSource': json['workstreamPatternEngineSource'] == null ? undefined : ReferencedIdentifiedWorkstreamPatternEngineSourceFromJSON(json['workstreamPatternEngineSource']),
        'workstreamPatternEngineSourceWindow': json['workstreamPatternEngineSourceWindow'] == null ? undefined : ReferencedWorkstreamPatternEngineSourceWindowFromJSON(json['workstreamPatternEngineSourceWindow']),
        'deleted': json['deleted'] == null ? undefined : json['deleted'],
    };
}

export function StreamedIdentifierToJSON(json: any): StreamedIdentifier {
    return StreamedIdentifierToJSONTyped(json, false);
}

export function StreamedIdentifierToJSONTyped(value?: StreamedIdentifier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'asset': ReferencedAssetToJSON(value['asset']),
        'conversation': ReferencedConversationToJSON(value['conversation']),
        'annotation': ReferencedAnnotationToJSON(value['annotation']),
        'activity': ReferencedActivityToJSON(value['activity']),
        'anchor': ReferencedAnchorToJSON(value['anchor']),
        'anchorPoint': ReferencedAnchorPointToJSON(value['anchorPoint']),
        'hint': ReferencedHintToJSON(value['hint']),
        'conversationMessage': ReferencedConversationMessageToJSON(value['conversationMessage']),
        'format': ReferencedFormatToJSON(value['format']),
        'person': ReferencedPersonToJSON(value['person']),
        'range': ReferencedRangeToJSON(value['range']),
        'sensitive': ReferencedSensitiveToJSON(value['sensitive']),
        'tag': ReferencedTagToJSON(value['tag']),
        'website': ReferencedWebsiteToJSON(value['website']),
        'application': ReferencedApplicationToJSON(value['application']),
        'model': ReferencedModelToJSON(value['model']),
        'workstream_summary': ReferencedWorkstreamSummaryToJSON(value['workstreamSummary']),
        'workstreamPatternEngineSource': ReferencedIdentifiedWorkstreamPatternEngineSourceToJSON(value['workstreamPatternEngineSource']),
        'workstreamPatternEngineSourceWindow': ReferencedWorkstreamPatternEngineSourceWindowToJSON(value['workstreamPatternEngineSourceWindow']),
        'deleted': value['deleted'],
    };
}

