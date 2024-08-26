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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedApplication } from './FlattenedApplication';
import {
    FlattenedApplicationFromJSON,
    FlattenedApplicationFromJSONTyped,
    FlattenedApplicationToJSON,
} from './FlattenedApplication';

/**
 * 
 * @export
 * @interface ReferencedApplication
 */
export interface ReferencedApplication {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedApplication
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedApplication
     */
    id: string;
    /**
     * 
     * @type {FlattenedApplication}
     * @memberof ReferencedApplication
     */
    reference?: FlattenedApplication;
}

/**
 * Check if a given object implements the ReferencedApplication interface.
 */
export function instanceOfReferencedApplication(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReferencedApplicationFromJSON(json: any): ReferencedApplication {
    return ReferencedApplicationFromJSONTyped(json, false);
}

export function ReferencedApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedApplication {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedApplicationFromJSON(json['reference']),
    };
}

export function ReferencedApplicationToJSON(value?: ReferencedApplication | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedApplicationToJSON(value.reference),
    };
}

