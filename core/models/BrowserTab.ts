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
import type { SeededAnchor } from './SeededAnchor';
import {
    SeededAnchorFromJSON,
    SeededAnchorFromJSONTyped,
    SeededAnchorToJSON,
    SeededAnchorToJSONTyped,
} from './SeededAnchor';
import type { DocumentContributors } from './DocumentContributors';
import {
    DocumentContributorsFromJSON,
    DocumentContributorsFromJSONTyped,
    DocumentContributorsToJSON,
    DocumentContributorsToJSONTyped,
} from './DocumentContributors';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { SeededWebsite } from './SeededWebsite';
import {
    SeededWebsiteFromJSON,
    SeededWebsiteFromJSONTyped,
    SeededWebsiteToJSON,
    SeededWebsiteToJSONTyped,
} from './SeededWebsite';
import type { BrowserTabValues } from './BrowserTabValues';
import {
    BrowserTabValuesFromJSON,
    BrowserTabValuesFromJSONTyped,
    BrowserTabValuesToJSON,
    BrowserTabValuesToJSONTyped,
} from './BrowserTabValues';
import type { AnonymousTemporalRange } from './AnonymousTemporalRange';
import {
    AnonymousTemporalRangeFromJSON,
    AnonymousTemporalRangeFromJSONTyped,
    AnonymousTemporalRangeToJSON,
    AnonymousTemporalRangeToJSONTyped,
} from './AnonymousTemporalRange';

/**
 * a tab can have many values because you might want to pass in a value that represents the code_blocks(snippets) or a md represenet
 * note: please only pass 1 representation, I will clean on POS side tho (txt || md || html)
 * 
 * anchor: can be defined in the browser if view a local file
 * 
 * website: this is the given url of the tab
 * 
 * range: this is the amount of time this user is current on this given tab
 * 
 * current: means that this is the current tab that is open
 * 
 * contributors: these are all the extracted people from this given tab
 * @export
 * @interface BrowserTab
 */
export interface BrowserTab {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof BrowserTab
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {BrowserTabValues}
     * @memberof BrowserTab
     */
    values?: BrowserTabValues;
    /**
     * 
     * @type {SeededAnchor}
     * @memberof BrowserTab
     */
    anchor?: SeededAnchor;
    /**
     * 
     * @type {SeededWebsite}
     * @memberof BrowserTab
     */
    website?: SeededWebsite;
    /**
     * 
     * @type {AnonymousTemporalRange}
     * @memberof BrowserTab
     */
    range?: AnonymousTemporalRange;
    /**
     * 
     * @type {boolean}
     * @memberof BrowserTab
     */
    current?: boolean;
    /**
     * 
     * @type {DocumentContributors}
     * @memberof BrowserTab
     */
    contributors?: DocumentContributors;
}

/**
 * Check if a given object implements the BrowserTab interface.
 */
export function instanceOfBrowserTab(value: object): value is BrowserTab {
    return true;
}

export function BrowserTabFromJSON(json: any): BrowserTab {
    return BrowserTabFromJSONTyped(json, false);
}

export function BrowserTabFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowserTab {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'values': json['values'] == null ? undefined : BrowserTabValuesFromJSON(json['values']),
        'anchor': json['anchor'] == null ? undefined : SeededAnchorFromJSON(json['anchor']),
        'website': json['website'] == null ? undefined : SeededWebsiteFromJSON(json['website']),
        'range': json['range'] == null ? undefined : AnonymousTemporalRangeFromJSON(json['range']),
        'current': json['current'] == null ? undefined : json['current'],
        'contributors': json['contributors'] == null ? undefined : DocumentContributorsFromJSON(json['contributors']),
    };
}

export function BrowserTabToJSON(json: any): BrowserTab {
    return BrowserTabToJSONTyped(json, false);
}

export function BrowserTabToJSONTyped(value?: BrowserTab | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'values': BrowserTabValuesToJSON(value['values']),
        'anchor': SeededAnchorToJSON(value['anchor']),
        'website': SeededWebsiteToJSON(value['website']),
        'range': AnonymousTemporalRangeToJSON(value['range']),
        'current': value['current'],
        'contributors': DocumentContributorsToJSON(value['contributors']),
    };
}

