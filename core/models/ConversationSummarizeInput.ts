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
import type { FlattenedConversationMessages } from './FlattenedConversationMessages';
import {
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
    FlattenedConversationMessagesToJSONTyped,
} from './FlattenedConversationMessages';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * Optionally you may pass in a list of conversation message that you would like to use for the summary.
 * @export
 * @interface ConversationSummarizeInput
 */
export interface ConversationSummarizeInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ConversationSummarizeInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof ConversationSummarizeInput
     */
    messages?: FlattenedConversationMessages;
}

/**
 * Check if a given object implements the ConversationSummarizeInput interface.
 */
export function instanceOfConversationSummarizeInput(value: object): value is ConversationSummarizeInput {
    return true;
}

export function ConversationSummarizeInputFromJSON(json: any): ConversationSummarizeInput {
    return ConversationSummarizeInputFromJSONTyped(json, false);
}

export function ConversationSummarizeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationSummarizeInput {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'messages': json['messages'] == null ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
    };
}

export function ConversationSummarizeInputToJSON(json: any): ConversationSummarizeInput {
    return ConversationSummarizeInputToJSONTyped(json, false);
}

export function ConversationSummarizeInputToJSONTyped(value?: ConversationSummarizeInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'messages': FlattenedConversationMessagesToJSON(value['messages']),
    };
}

