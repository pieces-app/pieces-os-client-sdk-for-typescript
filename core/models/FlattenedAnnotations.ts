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
import type { ReferencedAnnotation } from './ReferencedAnnotation';
import {
    ReferencedAnnotationFromJSON,
    ReferencedAnnotationFromJSONTyped,
    ReferencedAnnotationToJSON,
    ReferencedAnnotationToJSONTyped,
} from './ReferencedAnnotation';

/**
 * This is a flattened plural of Annotation, typically this will just be a list of uuids.
 * @export
 * @interface FlattenedAnnotations
 */
export interface FlattenedAnnotations {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnnotations
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedAnnotation>}
     * @memberof FlattenedAnnotations
     */
    iterable: Array<ReferencedAnnotation>;
    /**
     * This is a Map<String, int> where the the key is an annotation id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedAnnotations
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAnnotations
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedAnnotations interface.
 */
export function instanceOfFlattenedAnnotations(value: object): value is FlattenedAnnotations {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedAnnotationsFromJSON(json: any): FlattenedAnnotations {
    return FlattenedAnnotationsFromJSONTyped(json, false);
}

export function FlattenedAnnotationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnnotations {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedAnnotationFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedAnnotationsToJSON(json: any): FlattenedAnnotations {
    return FlattenedAnnotationsToJSONTyped(json, false);
}

export function FlattenedAnnotationsToJSONTyped(value?: FlattenedAnnotations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedAnnotationToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}

