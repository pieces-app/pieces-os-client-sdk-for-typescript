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
import type { FlattenedConversationMessage } from './FlattenedConversationMessage';
import {
    FlattenedConversationMessageFromJSON,
    FlattenedConversationMessageFromJSONTyped,
    FlattenedConversationMessageToJSON,
    FlattenedConversationMessageToJSONTyped,
} from './FlattenedConversationMessage';

/**
 * This is a DAG-Safe Minimal version of a ConversationMessage.
 * @export
 * @interface ReferencedConversationMessage
 */
export interface ReferencedConversationMessage {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedConversationMessage
     */
    id: string;
    /**
     * 
     * @type {FlattenedConversationMessage}
     * @memberof ReferencedConversationMessage
     */
    reference?: FlattenedConversationMessage;
}

/**
 * Check if a given object implements the ReferencedConversationMessage interface.
 */
export function instanceOfReferencedConversationMessage(value: object): value is ReferencedConversationMessage {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReferencedConversationMessageFromJSON(json: any): ReferencedConversationMessage {
    return ReferencedConversationMessageFromJSONTyped(json, false);
}

export function ReferencedConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedConversationMessage {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedConversationMessageFromJSON(json['reference']),
    };
}

export function ReferencedConversationMessageToJSON(json: any): ReferencedConversationMessage {
    return ReferencedConversationMessageToJSONTyped(json, false);
}

export function ReferencedConversationMessageToJSONTyped(value?: ReferencedConversationMessage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedConversationMessageToJSON(value['reference']),
    };
}

