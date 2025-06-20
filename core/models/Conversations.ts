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
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    ScoreToJSONTyped,
} from './Score';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { Conversation } from './Conversation';
import {
    ConversationFromJSON,
    ConversationFromJSONTyped,
    ConversationToJSON,
    ConversationToJSONTyped,
} from './Conversation';

/**
 * This is a plural version of a Conversation.
 * @export
 * @interface Conversations
 */
export interface Conversations {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Conversations
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Conversation>}
     * @memberof Conversations
     */
    iterable: Array<Conversation>;
    /**
     * This is a Map<String, int> where the the key is an Conversation id.
     * @type {{ [key: string]: number; }}
     * @memberof Conversations
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof Conversations
     */
    score?: Score;
}

/**
 * Check if a given object implements the Conversations interface.
 */
export function instanceOfConversations(value: object): value is Conversations {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function ConversationsFromJSON(json: any): Conversations {
    return ConversationsFromJSONTyped(json, false);
}

export function ConversationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Conversations {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ConversationFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function ConversationsToJSON(json: any): Conversations {
    return ConversationsToJSONTyped(json, false);
}

export function ConversationsToJSONTyped(value?: Conversations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ConversationToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}

