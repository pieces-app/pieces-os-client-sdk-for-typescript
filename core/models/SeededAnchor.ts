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
import type { SeededAnnotation } from './SeededAnnotation';
import {
    SeededAnnotationFromJSON,
    SeededAnnotationFromJSONTyped,
    SeededAnnotationToJSON,
    SeededAnnotationToJSONTyped,
} from './SeededAnnotation';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
    FlattenedPersonsToJSONTyped,
} from './FlattenedPersons';
import type { AnchorTypeEnum } from './AnchorTypeEnum';
import {
    AnchorTypeEnumFromJSON,
    AnchorTypeEnumFromJSONTyped,
    AnchorTypeEnumToJSON,
    AnchorTypeEnumToJSONTyped,
} from './AnchorTypeEnum';
import type { PlatformEnum } from './PlatformEnum';
import {
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
    PlatformEnumToJSONTyped,
} from './PlatformEnum';

/**
 * 
 * @export
 * @interface SeededAnchor
 */
export interface SeededAnchor {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAnchor
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {AnchorTypeEnum}
     * @memberof SeededAnchor
     */
    type: AnchorTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof SeededAnchor
     */
    watch?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeededAnchor
     */
    fullpath: string;
    /**
     * You may associate a SeededAnchor with an asset
     * @type {string}
     * @memberof SeededAnchor
     */
    asset?: string;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof SeededAnchor
     */
    platform?: PlatformEnum;
    /**
     * 
     * @type {string}
     * @memberof SeededAnchor
     */
    name?: string;
    /**
     * 
     * @type {Array<SeededAnnotation>}
     * @memberof SeededAnchor
     */
    annotations?: Array<SeededAnnotation>;
    /**
     * 
     * @type {string}
     * @memberof SeededAnchor
     */
    conversation?: string;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof SeededAnchor
     */
    persons?: FlattenedPersons;
}



/**
 * Check if a given object implements the SeededAnchor interface.
 */
export function instanceOfSeededAnchor(value: object): value is SeededAnchor {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fullpath' in value) || value['fullpath'] === undefined) return false;
    return true;
}

export function SeededAnchorFromJSON(json: any): SeededAnchor {
    return SeededAnchorFromJSONTyped(json, false);
}

export function SeededAnchorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAnchor {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'type': AnchorTypeEnumFromJSON(json['type']),
        'watch': json['watch'] == null ? undefined : json['watch'],
        'fullpath': json['fullpath'],
        'asset': json['asset'] == null ? undefined : json['asset'],
        'platform': json['platform'] == null ? undefined : PlatformEnumFromJSON(json['platform']),
        'name': json['name'] == null ? undefined : json['name'],
        'annotations': json['annotations'] == null ? undefined : ((json['annotations'] as Array<any>).map(SeededAnnotationFromJSON)),
        'conversation': json['conversation'] == null ? undefined : json['conversation'],
        'persons': json['persons'] == null ? undefined : FlattenedPersonsFromJSON(json['persons']),
    };
}

export function SeededAnchorToJSON(json: any): SeededAnchor {
    return SeededAnchorToJSONTyped(json, false);
}

export function SeededAnchorToJSONTyped(value?: SeededAnchor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'type': AnchorTypeEnumToJSON(value['type']),
        'watch': value['watch'],
        'fullpath': value['fullpath'],
        'asset': value['asset'],
        'platform': PlatformEnumToJSON(value['platform']),
        'name': value['name'],
        'annotations': value['annotations'] == null ? undefined : ((value['annotations'] as Array<any>).map(SeededAnnotationToJSON)),
        'conversation': value['conversation'],
        'persons': FlattenedPersonsToJSON(value['persons']),
    };
}

