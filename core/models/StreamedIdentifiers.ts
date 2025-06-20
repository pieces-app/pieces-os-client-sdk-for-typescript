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
import type { StreamedIdentifier } from './StreamedIdentifier';
import {
    StreamedIdentifierFromJSON,
    StreamedIdentifierFromJSONTyped,
    StreamedIdentifierToJSON,
    StreamedIdentifierToJSONTyped,
} from './StreamedIdentifier';

/**
 * This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class. && expand the StreamedIdentifier class.
 * @export
 * @interface StreamedIdentifiers
 */
export interface StreamedIdentifiers {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof StreamedIdentifiers
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<StreamedIdentifier>}
     * @memberof StreamedIdentifiers
     */
    iterable: Array<StreamedIdentifier>;
}

/**
 * Check if a given object implements the StreamedIdentifiers interface.
 */
export function instanceOfStreamedIdentifiers(value: object): value is StreamedIdentifiers {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function StreamedIdentifiersFromJSON(json: any): StreamedIdentifiers {
    return StreamedIdentifiersFromJSONTyped(json, false);
}

export function StreamedIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamedIdentifiers {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(StreamedIdentifierFromJSON)),
    };
}

export function StreamedIdentifiersToJSON(json: any): StreamedIdentifiers {
    return StreamedIdentifiersToJSONTyped(json, false);
}

export function StreamedIdentifiersToJSONTyped(value?: StreamedIdentifiers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(StreamedIdentifierToJSON)),
    };
}

