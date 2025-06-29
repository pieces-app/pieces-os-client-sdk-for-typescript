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
import type { SeededAssetEnrichment } from './SeededAssetEnrichment';
import {
    SeededAssetEnrichmentFromJSON,
    SeededAssetEnrichmentFromJSONTyped,
    SeededAssetEnrichmentToJSON,
    SeededAssetEnrichmentToJSONTyped,
} from './SeededAssetEnrichment';
import type { AvailableFormats } from './AvailableFormats';
import {
    AvailableFormatsFromJSON,
    AvailableFormatsFromJSONTyped,
    AvailableFormatsToJSON,
    AvailableFormatsToJSONTyped,
} from './AvailableFormats';
import type { SeededFormat } from './SeededFormat';
import {
    SeededFormatFromJSON,
    SeededFormatFromJSONTyped,
    SeededFormatToJSON,
    SeededFormatToJSONTyped,
} from './SeededFormat';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ApplicationToJSONTyped,
} from './Application';
import type { SeededAssetMetadata } from './SeededAssetMetadata';
import {
    SeededAssetMetadataFromJSON,
    SeededAssetMetadataFromJSONTyped,
    SeededAssetMetadataToJSON,
    SeededAssetMetadataToJSONTyped,
} from './SeededAssetMetadata';

/**
 * This is seed data that will be come an asset.
 * 
 * discovered: if set to true this seededAsset was discovered using one of our discovery endpoints.
 * 
 * pseudo: if this is an asset that a user did NOT explicitly save.
 * 
 * available: This is a model that is used within our '/assets/draft' endpoint that will emitt a seed with all the available format that one can generate based on the original seed that was passed in. ie if a png was passed in, we may  say that there is a text/code format available. If available formats is passed into the '/assets/create' we will short curcuit certain operations to speed up the process, for instance, if we determine that there is no text within this image then there is no sense in running ocr.
 * 
 * @export
 * @interface SeededAsset
 */
export interface SeededAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededAssetMetadata}
     * @memberof SeededAsset
     */
    metadata?: SeededAssetMetadata;
    /**
     * 
     * @type {Application}
     * @memberof SeededAsset
     */
    application: Application;
    /**
     * 
     * @type {SeededFormat}
     * @memberof SeededAsset
     */
    format: SeededFormat;
    /**
     * 
     * @type {boolean}
     * @memberof SeededAsset
     */
    discovered?: boolean;
    /**
     * 
     * @type {AvailableFormats}
     * @memberof SeededAsset
     */
    available?: AvailableFormats;
    /**
     * 
     * @type {boolean}
     * @memberof SeededAsset
     */
    pseudo?: boolean;
    /**
     * 
     * @type {SeededAssetEnrichment}
     * @memberof SeededAsset
     */
    enrichment?: SeededAssetEnrichment;
    /**
     * This will let us know if this asset was generated as a 'demo' snippet
     * @type {boolean}
     * @memberof SeededAsset
     */
    demo?: boolean;
}

/**
 * Check if a given object implements the SeededAsset interface.
 */
export function instanceOfSeededAsset(value: object): value is SeededAsset {
    if (!('application' in value) || value['application'] === undefined) return false;
    if (!('format' in value) || value['format'] === undefined) return false;
    return true;
}

export function SeededAssetFromJSON(json: any): SeededAsset {
    return SeededAssetFromJSONTyped(json, false);
}

export function SeededAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'metadata': json['metadata'] == null ? undefined : SeededAssetMetadataFromJSON(json['metadata']),
        'application': ApplicationFromJSON(json['application']),
        'format': SeededFormatFromJSON(json['format']),
        'discovered': json['discovered'] == null ? undefined : json['discovered'],
        'available': json['available'] == null ? undefined : AvailableFormatsFromJSON(json['available']),
        'pseudo': json['pseudo'] == null ? undefined : json['pseudo'],
        'enrichment': json['enrichment'] == null ? undefined : SeededAssetEnrichmentFromJSON(json['enrichment']),
        'demo': json['demo'] == null ? undefined : json['demo'],
    };
}

export function SeededAssetToJSON(json: any): SeededAsset {
    return SeededAssetToJSONTyped(json, false);
}

export function SeededAssetToJSONTyped(value?: SeededAsset | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'metadata': SeededAssetMetadataToJSON(value['metadata']),
        'application': ApplicationToJSON(value['application']),
        'format': SeededFormatToJSON(value['format']),
        'discovered': value['discovered'],
        'available': AvailableFormatsToJSON(value['available']),
        'pseudo': value['pseudo'],
        'enrichment': SeededAssetEnrichmentToJSON(value['enrichment']),
        'demo': value['demo'],
    };
}

