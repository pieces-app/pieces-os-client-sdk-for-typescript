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
import type { ProjectModules } from './ProjectModules';
import {
    ProjectModulesFromJSON,
    ProjectModulesFromJSONTyped,
    ProjectModulesToJSON,
    ProjectModulesToJSONTyped,
} from './ProjectModules';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { IDETabs } from './IDETabs';
import {
    IDETabsFromJSON,
    IDETabsFromJSONTyped,
    IDETabsToJSON,
    IDETabsToJSONTyped,
} from './IDETabs';

/**
 * This is the given context for an IDE.
 * 
 * tabs: this here refers to the tabs w/in the IDE.
 * 
 * Modules here are the given repositories
 * 
 * Name: this is the name of a workspace, but not required.
 * @export
 * @interface WorkstreamEventTriggerContextIDE
 */
export interface WorkstreamEventTriggerContextIDE {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamEventTriggerContextIDE
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {IDETabs}
     * @memberof WorkstreamEventTriggerContextIDE
     */
    tabs?: IDETabs;
    /**
     * 
     * @type {ProjectModules}
     * @memberof WorkstreamEventTriggerContextIDE
     */
    modules?: ProjectModules;
    /**
     * 
     * @type {string}
     * @memberof WorkstreamEventTriggerContextIDE
     */
    name?: string;
}

/**
 * Check if a given object implements the WorkstreamEventTriggerContextIDE interface.
 */
export function instanceOfWorkstreamEventTriggerContextIDE(value: object): value is WorkstreamEventTriggerContextIDE {
    return true;
}

export function WorkstreamEventTriggerContextIDEFromJSON(json: any): WorkstreamEventTriggerContextIDE {
    return WorkstreamEventTriggerContextIDEFromJSONTyped(json, false);
}

export function WorkstreamEventTriggerContextIDEFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamEventTriggerContextIDE {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'tabs': json['tabs'] == null ? undefined : IDETabsFromJSON(json['tabs']),
        'modules': json['modules'] == null ? undefined : ProjectModulesFromJSON(json['modules']),
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function WorkstreamEventTriggerContextIDEToJSON(json: any): WorkstreamEventTriggerContextIDE {
    return WorkstreamEventTriggerContextIDEToJSONTyped(json, false);
}

export function WorkstreamEventTriggerContextIDEToJSONTyped(value?: WorkstreamEventTriggerContextIDE | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'tabs': IDETabsToJSON(value['tabs']),
        'modules': ProjectModulesToJSON(value['modules']),
        'name': value['name'],
    };
}

