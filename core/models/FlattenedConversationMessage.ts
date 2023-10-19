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

import { exists, mapValues } from '../runtime';
import {
    ConversationMessageRoleEnum,
    ConversationMessageRoleEnumFromJSON,
    ConversationMessageRoleEnumFromJSONTyped,
    ConversationMessageRoleEnumToJSON,
    ConversationMessageSentimentEnum,
    ConversationMessageSentimentEnumFromJSON,
    ConversationMessageSentimentEnumFromJSONTyped,
    ConversationMessageSentimentEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FragmentFormat,
    FragmentFormatFromJSON,
    FragmentFormatFromJSONTyped,
    FragmentFormatToJSON,
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    Model,
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
    ReferencedConversation,
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
} from './';

/**
 * This is a flattened DAG safe version of a ConversationMessage.
 * @export
 * @interface FlattenedConversationMessage
 */
export interface FlattenedConversationMessage {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedConversationMessage
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedConversationMessage
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {Model}
     * @memberof FlattenedConversationMessage
     */
    model?: Model;
    /**
     * 
     * @type {FragmentFormat}
     * @memberof FlattenedConversationMessage
     */
    fragment?: FragmentFormat;
    /**
     * 
     * @type {ReferencedConversation}
     * @memberof FlattenedConversationMessage
     */
    conversation: ReferencedConversation;
    /**
     * 
     * @type {ConversationMessageSentimentEnum}
     * @memberof FlattenedConversationMessage
     */
    sentiment?: ConversationMessageSentimentEnum;
    /**
     * 
     * @type {ConversationMessageRoleEnum}
     * @memberof FlattenedConversationMessage
     */
    role: ConversationMessageRoleEnum;
}

export function FlattenedConversationMessageFromJSON(json: any): FlattenedConversationMessage {
    return FlattenedConversationMessageFromJSONTyped(json, false);
}

export function FlattenedConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversationMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'model': !exists(json, 'model') ? undefined : ModelFromJSON(json['model']),
        'fragment': !exists(json, 'fragment') ? undefined : FragmentFormatFromJSON(json['fragment']),
        'conversation': ReferencedConversationFromJSON(json['conversation']),
        'sentiment': !exists(json, 'sentiment') ? undefined : ConversationMessageSentimentEnumFromJSON(json['sentiment']),
        'role': ConversationMessageRoleEnumFromJSON(json['role']),
    };
}

export function FlattenedConversationMessageToJSON(value?: FlattenedConversationMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'model': ModelToJSON(value.model),
        'fragment': FragmentFormatToJSON(value.fragment),
        'conversation': ReferencedConversationToJSON(value.conversation),
        'sentiment': ConversationMessageSentimentEnumToJSON(value.sentiment),
        'role': ConversationMessageRoleEnumToJSON(value.role),
    };
}


