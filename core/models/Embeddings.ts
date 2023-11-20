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
    Embedding,
    EmbeddingFromJSON,
    EmbeddingFromJSONTyped,
    EmbeddingToJSON,
} from './index';

/**
 * 
 * @export
 * @interface Embeddings
 */
export interface Embeddings {
    /**
     * 
     * @type {Array<Embedding>}
     * @memberof Embeddings
     */
    iterable: Array<Embedding>;
}

export function EmbeddingsFromJSON(json: any): Embeddings {
    return EmbeddingsFromJSONTyped(json, false);
}

export function EmbeddingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Embeddings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iterable': ((json['iterable'] as Array<any>).map(EmbeddingFromJSON)),
    };
}

export function EmbeddingsToJSON(value?: Embeddings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iterable': ((value.iterable as Array<any>).map(EmbeddingToJSON)),
    };
}


