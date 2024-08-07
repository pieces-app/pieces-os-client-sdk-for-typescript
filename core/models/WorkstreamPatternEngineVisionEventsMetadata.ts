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
import type { ByteDescriptor } from './ByteDescriptor';
import {
    ByteDescriptorFromJSON,
    ByteDescriptorFromJSONTyped,
    ByteDescriptorToJSON,
} from './ByteDescriptor';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { WorkstreamPatternEngineVisionEvent } from './WorkstreamPatternEngineVisionEvent';
import {
    WorkstreamPatternEngineVisionEventFromJSON,
    WorkstreamPatternEngineVisionEventFromJSONTyped,
    WorkstreamPatternEngineVisionEventToJSON,
} from './WorkstreamPatternEngineVisionEvent';

/**
 * This is specific model that will return the size of the WPE in bytes
 * @export
 * @interface WorkstreamPatternEngineVisionEventsMetadata
 */
export interface WorkstreamPatternEngineVisionEventsMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamPatternEngineVisionEventsMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ByteDescriptor}
     * @memberof WorkstreamPatternEngineVisionEventsMetadata
     */
    bytes: ByteDescriptor;
    /**
     * This is the total number of events.
     * @type {number}
     * @memberof WorkstreamPatternEngineVisionEventsMetadata
     */
    total: number;
    /**
     * 
     * @type {WorkstreamPatternEngineVisionEvent}
     * @memberof WorkstreamPatternEngineVisionEventsMetadata
     */
    oldest?: WorkstreamPatternEngineVisionEvent;
    /**
     * 
     * @type {WorkstreamPatternEngineVisionEvent}
     * @memberof WorkstreamPatternEngineVisionEventsMetadata
     */
    newest?: WorkstreamPatternEngineVisionEvent;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionEventsMetadata interface.
 */
export function instanceOfWorkstreamPatternEngineVisionEventsMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bytes" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function WorkstreamPatternEngineVisionEventsMetadataFromJSON(json: any): WorkstreamPatternEngineVisionEventsMetadata {
    return WorkstreamPatternEngineVisionEventsMetadataFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionEventsMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamPatternEngineVisionEventsMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'bytes': ByteDescriptorFromJSON(json['bytes']),
        'total': json['total'],
        'oldest': !exists(json, 'oldest') ? undefined : WorkstreamPatternEngineVisionEventFromJSON(json['oldest']),
        'newest': !exists(json, 'newest') ? undefined : WorkstreamPatternEngineVisionEventFromJSON(json['newest']),
    };
}

export function WorkstreamPatternEngineVisionEventsMetadataToJSON(value?: WorkstreamPatternEngineVisionEventsMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'bytes': ByteDescriptorToJSON(value.bytes),
        'total': value.total,
        'oldest': WorkstreamPatternEngineVisionEventToJSON(value.oldest),
        'newest': WorkstreamPatternEngineVisionEventToJSON(value.newest),
    };
}

