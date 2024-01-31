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
import { QGPTQuestionInput, QGPTRelevanceInput } from './index';
/**
 * This is the input for the /qgpt/stream endpoint.
 * @export
 * @interface QGPTStreamInput
 */
export interface QGPTStreamInput {
    /**
     *
     * @type {QGPTRelevanceInput}
     * @memberof QGPTStreamInput
     */
    relevance?: QGPTRelevanceInput;
    /**
     *
     * @type {QGPTQuestionInput}
     * @memberof QGPTStreamInput
     */
    question?: QGPTQuestionInput;
    /**
     * This is an optional Id you can use to identify the result from your request.
     * @type {string}
     * @memberof QGPTStreamInput
     */
    request?: string;
    /**
     * This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question)
     * @type {string}
     * @memberof QGPTStreamInput
     */
    conversation?: string;
    /**
     *
     * @type {boolean}
     * @memberof QGPTStreamInput
     */
    stop?: boolean;
    /**
     * This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput.
     * @type {boolean}
     * @memberof QGPTStreamInput
     */
    agent?: boolean;
}
export declare function QGPTStreamInputFromJSON(json: any): QGPTStreamInput;
export declare function QGPTStreamInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTStreamInput;
export declare function QGPTStreamInputToJSON(value?: QGPTStreamInput | null): any;