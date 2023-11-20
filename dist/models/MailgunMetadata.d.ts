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
import { EmbeddedModelSchema } from './index';
/**
 * TODO add additional properties.
 * TODO eventually modify this model to look like the response from Mailgun.
 * @export
 * @interface MailgunMetadata
 */
export interface MailgunMetadata {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof MailgunMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the id given to us from mailgun when the email was sent successfully.
     * @type {string}
     * @memberof MailgunMetadata
     */
    messageId: string;
}
export declare function MailgunMetadataFromJSON(json: any): MailgunMetadata;
export declare function MailgunMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailgunMetadata;
export declare function MailgunMetadataToJSON(value?: MailgunMetadata | null): any;
