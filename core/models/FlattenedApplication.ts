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
import type { ApplicationNameEnum } from './ApplicationNameEnum';
import {
    ApplicationNameEnumFromJSON,
    ApplicationNameEnumFromJSONTyped,
    ApplicationNameEnumToJSON,
} from './ApplicationNameEnum';
import type { CapabilitiesEnum } from './CapabilitiesEnum';
import {
    CapabilitiesEnumFromJSON,
    CapabilitiesEnumFromJSONTyped,
    CapabilitiesEnumToJSON,
} from './CapabilitiesEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { PlatformEnum } from './PlatformEnum';
import {
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
} from './PlatformEnum';
import type { PrivacyEnum } from './PrivacyEnum';
import {
    PrivacyEnumFromJSON,
    PrivacyEnumFromJSONTyped,
    PrivacyEnumToJSON,
} from './PrivacyEnum';

/**
 * Flattened version of the Application(for now just the same properties)
 * @export
 * @interface FlattenedApplication
 */
export interface FlattenedApplication {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedApplication
     */
    schema?: EmbeddedModelSchema;
    /**
     * The ID of the application at the device level
     * @type {string}
     * @memberof FlattenedApplication
     */
    id: string;
    /**
     * 
     * @type {ApplicationNameEnum}
     * @memberof FlattenedApplication
     */
    name: ApplicationNameEnum;
    /**
     * This is the specific version number 0.0.0
     * @type {string}
     * @memberof FlattenedApplication
     */
    version: string;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof FlattenedApplication
     */
    platform: PlatformEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedApplication
     */
    onboarded: boolean;
    /**
     * 
     * @type {PrivacyEnum}
     * @memberof FlattenedApplication
     */
    privacy: PrivacyEnum;
    /**
     * 
     * @type {CapabilitiesEnum}
     * @memberof FlattenedApplication
     */
    capabilities?: CapabilitiesEnum;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof FlattenedApplication
     */
    mechanism?: MechanismEnum;
    /**
     * This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
     * @type {boolean}
     * @memberof FlattenedApplication
     */
    automaticUnload?: boolean;
}

/**
 * Check if a given object implements the FlattenedApplication interface.
 */
export function instanceOfFlattenedApplication(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "onboarded" in value;
    isInstance = isInstance && "privacy" in value;

    return isInstance;
}

export function FlattenedApplicationFromJSON(json: any): FlattenedApplication {
    return FlattenedApplicationFromJSONTyped(json, false);
}

export function FlattenedApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedApplication {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': ApplicationNameEnumFromJSON(json['name']),
        'version': json['version'],
        'platform': PlatformEnumFromJSON(json['platform']),
        'onboarded': json['onboarded'],
        'privacy': PrivacyEnumFromJSON(json['privacy']),
        'capabilities': !exists(json, 'capabilities') ? undefined : CapabilitiesEnumFromJSON(json['capabilities']),
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'automaticUnload': !exists(json, 'automaticUnload') ? undefined : json['automaticUnload'],
    };
}

export function FlattenedApplicationToJSON(value?: FlattenedApplication | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'name': ApplicationNameEnumToJSON(value.name),
        'version': value.version,
        'platform': PlatformEnumToJSON(value.platform),
        'onboarded': value.onboarded,
        'privacy': PrivacyEnumToJSON(value.privacy),
        'capabilities': CapabilitiesEnumToJSON(value.capabilities),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'automaticUnload': value.automaticUnload,
    };
}

