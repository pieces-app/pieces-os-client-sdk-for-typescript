/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmbeddedModelSchema, ExternalProvider } from './';
/**
 *
 * @export
 * @interface ExternalProviders
 */
export interface ExternalProviders {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ExternalProviders
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ExternalProvider>}
     * @memberof ExternalProviders
     */
    iterable: Array<ExternalProvider>;
}
export declare function ExternalProvidersFromJSON(json: any): ExternalProviders;
export declare function ExternalProvidersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalProviders;
export declare function ExternalProvidersToJSON(value?: ExternalProviders | null): any;