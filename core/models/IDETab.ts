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
import type { LanguageServerProtocol } from './LanguageServerProtocol';
import {
    LanguageServerProtocolFromJSON,
    LanguageServerProtocolFromJSONTyped,
    LanguageServerProtocolToJSON,
    LanguageServerProtocolToJSONTyped,
} from './LanguageServerProtocol';
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
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
    ClassificationToJSONTyped,
} from './Classification';
import type { IDESelections } from './IDESelections';
import {
    IDESelectionsFromJSON,
    IDESelectionsFromJSONTyped,
    IDESelectionsToJSON,
    IDESelectionsToJSONTyped,
} from './IDESelections';
import type { AnonymousTemporalRange } from './AnonymousTemporalRange';
import {
    AnonymousTemporalRangeFromJSON,
    AnonymousTemporalRangeFromJSONTyped,
    AnonymousTemporalRangeToJSON,
    AnonymousTemporalRangeToJSONTyped,
} from './AnonymousTemporalRange';
import type { TransferableString } from './TransferableString';
import {
    TransferableStringFromJSON,
    TransferableStringFromJSONTyped,
    TransferableStringToJSON,
    TransferableStringToJSONTyped,
} from './TransferableString';

/**
 * This is a representation of an IDE Tab
 * 
 * value: is the value of the entire file(that being said we do not recomment passing this over as we can read this file on PieceOS side of things)
 * classification: this is the classifcation of this file
 * 
 * selection: this is a represention of a copy/paste/selection of a bit of code
 * 
 * anchor: this is the file path
 * 
 * range: this is the duration that this user has been on this Tab
 * 
 * current: is a boolean that will let us know if this is the current active tab
 * 
 * contributors: is the people that are extracted via git
 * 
 * lsp: this is the languageserverprotocol this is used for may things such as error,stackstrces, mainly information extracted from the lang server
 * @export
 * @interface IDETab
 */
export interface IDETab {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof IDETab
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TransferableString}
     * @memberof IDETab
     */
    value?: TransferableString;
    /**
     * 
     * @type {Classification}
     * @memberof IDETab
     */
    classification?: Classification;
    /**
     * 
     * @type {IDESelections}
     * @memberof IDETab
     */
    selections?: IDESelections;
    /**
     * 
     * @type {SeededAnchor}
     * @memberof IDETab
     */
    anchor: SeededAnchor;
    /**
     * 
     * @type {AnonymousTemporalRange}
     * @memberof IDETab
     */
    range?: AnonymousTemporalRange;
    /**
     * 
     * @type {boolean}
     * @memberof IDETab
     */
    current?: boolean;
    /**
     * 
     * @type {DocumentContributors}
     * @memberof IDETab
     */
    contributors?: DocumentContributors;
    /**
     * 
     * @type {LanguageServerProtocol}
     * @memberof IDETab
     */
    lsp?: LanguageServerProtocol;
}

/**
 * Check if a given object implements the IDETab interface.
 */
export function instanceOfIDETab(value: object): value is IDETab {
    if (!('anchor' in value) || value['anchor'] === undefined) return false;
    return true;
}

export function IDETabFromJSON(json: any): IDETab {
    return IDETabFromJSONTyped(json, false);
}

export function IDETabFromJSONTyped(json: any, ignoreDiscriminator: boolean): IDETab {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'value': json['value'] == null ? undefined : TransferableStringFromJSON(json['value']),
        'classification': json['classification'] == null ? undefined : ClassificationFromJSON(json['classification']),
        'selections': json['selections'] == null ? undefined : IDESelectionsFromJSON(json['selections']),
        'anchor': SeededAnchorFromJSON(json['anchor']),
        'range': json['range'] == null ? undefined : AnonymousTemporalRangeFromJSON(json['range']),
        'current': json['current'] == null ? undefined : json['current'],
        'contributors': json['contributors'] == null ? undefined : DocumentContributorsFromJSON(json['contributors']),
        'lsp': json['lsp'] == null ? undefined : LanguageServerProtocolFromJSON(json['lsp']),
    };
}

export function IDETabToJSON(json: any): IDETab {
    return IDETabToJSONTyped(json, false);
}

export function IDETabToJSONTyped(value?: IDETab | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'value': TransferableStringToJSON(value['value']),
        'classification': ClassificationToJSON(value['classification']),
        'selections': IDESelectionsToJSON(value['selections']),
        'anchor': SeededAnchorToJSON(value['anchor']),
        'range': AnonymousTemporalRangeToJSON(value['range']),
        'current': value['current'],
        'contributors': DocumentContributorsToJSON(value['contributors']),
        'lsp': LanguageServerProtocolToJSON(value['lsp']),
    };
}

