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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { OSAppletEnum } from './OSAppletEnum';
import {
    OSAppletEnumFromJSON,
    OSAppletEnumFromJSONTyped,
    OSAppletEnumToJSON,
} from './OSAppletEnum';

/**
 * Note: parent is optional here in the case that (parent here is the integration that wants the module launched(VSCode))
 * @export
 * @interface InactiveOSServerApplet
 */
export interface InactiveOSServerApplet {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof InactiveOSServerApplet
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Application}
     * @memberof InactiveOSServerApplet
     */
    parent?: Application;
    /**
     * This is the port number in which we want to serve the copilot at.
     * @type {number}
     * @memberof InactiveOSServerApplet
     */
    port?: number | null;
    /**
     * 
     * @type {OSAppletEnum}
     * @memberof InactiveOSServerApplet
     */
    type: OSAppletEnum;
}

/**
 * Check if a given object implements the InactiveOSServerApplet interface.
 */
export function instanceOfInactiveOSServerApplet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function InactiveOSServerAppletFromJSON(json: any): InactiveOSServerApplet {
    return InactiveOSServerAppletFromJSONTyped(json, false);
}

export function InactiveOSServerAppletFromJSONTyped(json: any, ignoreDiscriminator: boolean): InactiveOSServerApplet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'parent': !exists(json, 'parent') ? undefined : ApplicationFromJSON(json['parent']),
        'port': !exists(json, 'port') ? undefined : json['port'],
        'type': OSAppletEnumFromJSON(json['type']),
    };
}

export function InactiveOSServerAppletToJSON(value?: InactiveOSServerApplet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'parent': ApplicationToJSON(value.parent),
        'port': value.port,
        'type': OSAppletEnumToJSON(value.type),
    };
}

