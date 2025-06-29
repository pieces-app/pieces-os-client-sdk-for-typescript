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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { IDESelection } from './IDESelection';
import {
    IDESelectionFromJSON,
    IDESelectionFromJSONTyped,
    IDESelectionToJSON,
    IDESelectionToJSONTyped,
} from './IDESelection';

/**
 * Plural model that represent many selections in the browser
 * @export
 * @interface IDESelections
 */
export interface IDESelections {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof IDESelections
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<IDESelection>}
     * @memberof IDESelections
     */
    iterable: Array<IDESelection>;
}

/**
 * Check if a given object implements the IDESelections interface.
 */
export function instanceOfIDESelections(value: object): value is IDESelections {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function IDESelectionsFromJSON(json: any): IDESelections {
    return IDESelectionsFromJSONTyped(json, false);
}

export function IDESelectionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IDESelections {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(IDESelectionFromJSON)),
    };
}

export function IDESelectionsToJSON(json: any): IDESelections {
    return IDESelectionsToJSONTyped(json, false);
}

export function IDESelectionsToJSONTyped(value?: IDESelections | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(IDESelectionToJSON)),
    };
}

