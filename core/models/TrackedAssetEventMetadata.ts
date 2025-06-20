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
import type { ReferencedSensitive } from './ReferencedSensitive';
import {
    ReferencedSensitiveFromJSON,
    ReferencedSensitiveFromJSONTyped,
    ReferencedSensitiveToJSON,
    ReferencedSensitiveToJSONTyped,
} from './ReferencedSensitive';
import type { ReferencedTag } from './ReferencedTag';
import {
    ReferencedTagFromJSON,
    ReferencedTagFromJSONTyped,
    ReferencedTagToJSON,
    ReferencedTagToJSONTyped,
} from './ReferencedTag';
import type { TrackedAssetEventFormatReclassificationMetadata } from './TrackedAssetEventFormatReclassificationMetadata';
import {
    TrackedAssetEventFormatReclassificationMetadataFromJSON,
    TrackedAssetEventFormatReclassificationMetadataFromJSONTyped,
    TrackedAssetEventFormatReclassificationMetadataToJSON,
    TrackedAssetEventFormatReclassificationMetadataToJSONTyped,
} from './TrackedAssetEventFormatReclassificationMetadata';
import type { TrackedAssetsEventSearchMetadata } from './TrackedAssetsEventSearchMetadata';
import {
    TrackedAssetsEventSearchMetadataFromJSON,
    TrackedAssetsEventSearchMetadataFromJSONTyped,
    TrackedAssetsEventSearchMetadataToJSON,
    TrackedAssetsEventSearchMetadataToJSONTyped,
} from './TrackedAssetsEventSearchMetadata';
import type { TrackedAssetEventCreationMetadata } from './TrackedAssetEventCreationMetadata';
import {
    TrackedAssetEventCreationMetadataFromJSON,
    TrackedAssetEventCreationMetadataFromJSONTyped,
    TrackedAssetEventCreationMetadataToJSON,
    TrackedAssetEventCreationMetadataToJSONTyped,
} from './TrackedAssetEventCreationMetadata';
import type { ReferencedAnnotation } from './ReferencedAnnotation';
import {
    ReferencedAnnotationFromJSON,
    ReferencedAnnotationFromJSONTyped,
    ReferencedAnnotationToJSON,
    ReferencedAnnotationToJSONTyped,
} from './ReferencedAnnotation';
import type { ReferencedWebsite } from './ReferencedWebsite';
import {
    ReferencedWebsiteFromJSON,
    ReferencedWebsiteFromJSONTyped,
    ReferencedWebsiteToJSON,
    ReferencedWebsiteToJSONTyped,
} from './ReferencedWebsite';
import type { ReferencedHint } from './ReferencedHint';
import {
    ReferencedHintFromJSON,
    ReferencedHintFromJSONTyped,
    ReferencedHintToJSON,
    ReferencedHintToJSONTyped,
} from './ReferencedHint';
import type { TrackedAssetEventRenameMetadata } from './TrackedAssetEventRenameMetadata';
import {
    TrackedAssetEventRenameMetadataFromJSON,
    TrackedAssetEventRenameMetadataFromJSONTyped,
    TrackedAssetEventRenameMetadataToJSON,
    TrackedAssetEventRenameMetadataToJSONTyped,
} from './TrackedAssetEventRenameMetadata';
import type { ReferencedShare } from './ReferencedShare';
import {
    ReferencedShareFromJSON,
    ReferencedShareFromJSONTyped,
    ReferencedShareToJSON,
    ReferencedShareToJSONTyped,
} from './ReferencedShare';
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

/**
 * 
 * @export
 * @interface TrackedAssetEventMetadata
 */
export interface TrackedAssetEventMetadata {
    /**
     * 
     * @type {TrackedAssetEventFormatReclassificationMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    reclassification?: TrackedAssetEventFormatReclassificationMetadata;
    /**
     * 
     * @type {TrackedAssetEventCreationMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    creation?: TrackedAssetEventCreationMetadata;
    /**
     * 
     * @type {TrackedAssetEventRenameMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    rename?: TrackedAssetEventRenameMetadata;
    /**
     * 
     * @type {ReferencedTag}
     * @memberof TrackedAssetEventMetadata
     */
    tag?: ReferencedTag;
    /**
     * 
     * @type {ReferencedWebsite}
     * @memberof TrackedAssetEventMetadata
     */
    website?: ReferencedWebsite;
    /**
     * 
     * @type {ReferencedPerson}
     * @memberof TrackedAssetEventMetadata
     */
    person?: ReferencedPerson;
    /**
     * 
     * @type {ReferencedSensitive}
     * @memberof TrackedAssetEventMetadata
     */
    sensitive?: ReferencedSensitive;
    /**
     * 
     * @type {ReferencedShare}
     * @memberof TrackedAssetEventMetadata
     */
    share?: ReferencedShare;
    /**
     * 
     * @type {TrackedAssetsEventSearchMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    search?: TrackedAssetsEventSearchMetadata;
    /**
     * 
     * @type {ReferencedAnnotation}
     * @memberof TrackedAssetEventMetadata
     */
    annotation?: ReferencedAnnotation;
    /**
     * 
     * @type {ReferencedHint}
     * @memberof TrackedAssetEventMetadata
     */
    hint?: ReferencedHint;
    /**
     * 
     * @type {ReferencedAnchor}
     * @memberof TrackedAssetEventMetadata
     */
    anchor?: ReferencedAnchor;
}

/**
 * Check if a given object implements the TrackedAssetEventMetadata interface.
 */
export function instanceOfTrackedAssetEventMetadata(value: object): value is TrackedAssetEventMetadata {
    return true;
}

export function TrackedAssetEventMetadataFromJSON(json: any): TrackedAssetEventMetadata {
    return TrackedAssetEventMetadataFromJSONTyped(json, false);
}

export function TrackedAssetEventMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'reclassification': json['reclassification'] == null ? undefined : TrackedAssetEventFormatReclassificationMetadataFromJSON(json['reclassification']),
        'creation': json['creation'] == null ? undefined : TrackedAssetEventCreationMetadataFromJSON(json['creation']),
        'rename': json['rename'] == null ? undefined : TrackedAssetEventRenameMetadataFromJSON(json['rename']),
        'tag': json['tag'] == null ? undefined : ReferencedTagFromJSON(json['tag']),
        'website': json['website'] == null ? undefined : ReferencedWebsiteFromJSON(json['website']),
        'person': json['person'] == null ? undefined : ReferencedPersonFromJSON(json['person']),
        'sensitive': json['sensitive'] == null ? undefined : ReferencedSensitiveFromJSON(json['sensitive']),
        'share': json['share'] == null ? undefined : ReferencedShareFromJSON(json['share']),
        'search': json['search'] == null ? undefined : TrackedAssetsEventSearchMetadataFromJSON(json['search']),
        'annotation': json['annotation'] == null ? undefined : ReferencedAnnotationFromJSON(json['annotation']),
        'hint': json['hint'] == null ? undefined : ReferencedHintFromJSON(json['hint']),
        'anchor': json['anchor'] == null ? undefined : ReferencedAnchorFromJSON(json['anchor']),
    };
}

export function TrackedAssetEventMetadataToJSON(json: any): TrackedAssetEventMetadata {
    return TrackedAssetEventMetadataToJSONTyped(json, false);
}

export function TrackedAssetEventMetadataToJSONTyped(value?: TrackedAssetEventMetadata | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reclassification': TrackedAssetEventFormatReclassificationMetadataToJSON(value['reclassification']),
        'creation': TrackedAssetEventCreationMetadataToJSON(value['creation']),
        'rename': TrackedAssetEventRenameMetadataToJSON(value['rename']),
        'tag': ReferencedTagToJSON(value['tag']),
        'website': ReferencedWebsiteToJSON(value['website']),
        'person': ReferencedPersonToJSON(value['person']),
        'sensitive': ReferencedSensitiveToJSON(value['sensitive']),
        'share': ReferencedShareToJSON(value['share']),
        'search': TrackedAssetsEventSearchMetadataToJSON(value['search']),
        'annotation': ReferencedAnnotationToJSON(value['annotation']),
        'hint': ReferencedHintToJSON(value['hint']),
        'anchor': ReferencedAnchorToJSON(value['anchor']),
    };
}

