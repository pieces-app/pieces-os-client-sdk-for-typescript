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
import type { TLPCodeFragmentDescription } from './TLPCodeFragmentDescription';
import {
    TLPCodeFragmentDescriptionFromJSON,
    TLPCodeFragmentDescriptionFromJSONTyped,
    TLPCodeFragmentDescriptionToJSON,
    TLPCodeFragmentDescriptionToJSONTyped,
} from './TLPCodeFragmentDescription';
import type { TLPCodeFragmentTagify } from './TLPCodeFragmentTagify';
import {
    TLPCodeFragmentTagifyFromJSON,
    TLPCodeFragmentTagifyFromJSONTyped,
    TLPCodeFragmentTagifyToJSON,
    TLPCodeFragmentTagifyToJSONTyped,
} from './TLPCodeFragmentTagify';
import type { TLPCodeFragmentStatistics } from './TLPCodeFragmentStatistics';
import {
    TLPCodeFragmentStatisticsFromJSON,
    TLPCodeFragmentStatisticsFromJSONTyped,
    TLPCodeFragmentStatisticsToJSON,
    TLPCodeFragmentStatisticsToJSONTyped,
} from './TLPCodeFragmentStatistics';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { TLPCodeSnippetSuggestedInteractions } from './TLPCodeSnippetSuggestedInteractions';
import {
    TLPCodeSnippetSuggestedInteractionsFromJSON,
    TLPCodeSnippetSuggestedInteractionsFromJSONTyped,
    TLPCodeSnippetSuggestedInteractionsToJSON,
    TLPCodeSnippetSuggestedInteractionsToJSONTyped,
} from './TLPCodeSnippetSuggestedInteractions';
import type { TLPCodeFragmentReclassification } from './TLPCodeFragmentReclassification';
import {
    TLPCodeFragmentReclassificationFromJSON,
    TLPCodeFragmentReclassificationFromJSONTyped,
    TLPCodeFragmentReclassificationToJSON,
    TLPCodeFragmentReclassificationToJSONTyped,
} from './TLPCodeFragmentReclassification';
import type { TLPCodeFragmentClassification } from './TLPCodeFragmentClassification';
import {
    TLPCodeFragmentClassificationFromJSON,
    TLPCodeFragmentClassificationFromJSONTyped,
    TLPCodeFragmentClassificationToJSON,
    TLPCodeFragmentClassificationToJSONTyped,
} from './TLPCodeFragmentClassification';

/**
 * 
 * @export
 * @interface TLPCodeSnippetAnalytics
 */
export interface TLPCodeSnippetAnalytics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeSnippetAnalytics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeFragmentStatistics}
     * @memberof TLPCodeSnippetAnalytics
     */
    statistics?: TLPCodeFragmentStatistics;
    /**
     * 
     * @type {TLPCodeFragmentClassification}
     * @memberof TLPCodeSnippetAnalytics
     */
    classification?: TLPCodeFragmentClassification;
    /**
     * 
     * @type {TLPCodeFragmentReclassification}
     * @memberof TLPCodeSnippetAnalytics
     */
    reclassification?: TLPCodeFragmentReclassification;
    /**
     * 
     * @type {TLPCodeSnippetSuggestedInteractions}
     * @memberof TLPCodeSnippetAnalytics
     */
    suggested?: TLPCodeSnippetSuggestedInteractions;
    /**
     * 
     * @type {TLPCodeFragmentTagify}
     * @memberof TLPCodeSnippetAnalytics
     */
    tagify?: TLPCodeFragmentTagify;
    /**
     * 
     * @type {TLPCodeFragmentDescription}
     * @memberof TLPCodeSnippetAnalytics
     */
    description?: TLPCodeFragmentDescription;
}

/**
 * Check if a given object implements the TLPCodeSnippetAnalytics interface.
 */
export function instanceOfTLPCodeSnippetAnalytics(value: object): value is TLPCodeSnippetAnalytics {
    return true;
}

export function TLPCodeSnippetAnalyticsFromJSON(json: any): TLPCodeSnippetAnalytics {
    return TLPCodeSnippetAnalyticsFromJSONTyped(json, false);
}

export function TLPCodeSnippetAnalyticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetAnalytics {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'statistics': json['statistics'] == null ? undefined : TLPCodeFragmentStatisticsFromJSON(json['statistics']),
        'classification': json['classification'] == null ? undefined : TLPCodeFragmentClassificationFromJSON(json['classification']),
        'reclassification': json['reclassification'] == null ? undefined : TLPCodeFragmentReclassificationFromJSON(json['reclassification']),
        'suggested': json['suggested'] == null ? undefined : TLPCodeSnippetSuggestedInteractionsFromJSON(json['suggested']),
        'tagify': json['tagify'] == null ? undefined : TLPCodeFragmentTagifyFromJSON(json['tagify']),
        'description': json['description'] == null ? undefined : TLPCodeFragmentDescriptionFromJSON(json['description']),
    };
}

export function TLPCodeSnippetAnalyticsToJSON(json: any): TLPCodeSnippetAnalytics {
    return TLPCodeSnippetAnalyticsToJSONTyped(json, false);
}

export function TLPCodeSnippetAnalyticsToJSONTyped(value?: TLPCodeSnippetAnalytics | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'statistics': TLPCodeFragmentStatisticsToJSON(value['statistics']),
        'classification': TLPCodeFragmentClassificationToJSON(value['classification']),
        'reclassification': TLPCodeFragmentReclassificationToJSON(value['reclassification']),
        'suggested': TLPCodeSnippetSuggestedInteractionsToJSON(value['suggested']),
        'tagify': TLPCodeFragmentTagifyToJSON(value['tagify']),
        'description': TLPCodeFragmentDescriptionToJSON(value['description']),
    };
}

