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
import type { Seed } from './Seed';
import {
    SeedFromJSON,
    SeedFromJSONTyped,
    SeedToJSON,
    SeedToJSONTyped,
} from './Seed';

/**
 * This is a plural model for multiple Seed.
 * @export
 * @interface Seeds
 */
export interface Seeds {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Seeds
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Seed>}
     * @memberof Seeds
     */
    iterable: Array<Seed>;
}

/**
 * Check if a given object implements the Seeds interface.
 */
export function instanceOfSeeds(value: object): value is Seeds {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function SeedsFromJSON(json: any): Seeds {
    return SeedsFromJSONTyped(json, false);
}

export function SeedsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Seeds {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SeedFromJSON)),
    };
}

export function SeedsToJSON(json: any): Seeds {
    return SeedsToJSONTyped(json, false);
}

export function SeedsToJSONTyped(value?: Seeds | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(SeedToJSON)),
    };
}

