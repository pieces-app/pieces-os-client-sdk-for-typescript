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
import { QGPTQuestionAnswer, RelevantQGPTSeeds } from './';
/**
 * Query is your followup question.
 * Relevant is the relevant snippets.
 * Answer is the previous answer.(that we are asking a follow up for.
 *
 * Query and Answer are both optional here because, you may pass over relevant snippets over ahead of hand if you already have them to answer your questions.
 * @export
 * @interface QGPTFollowupInput
 */
export interface QGPTFollowupInput {
    /**
     *
     * @type {string}
     * @memberof QGPTFollowupInput
     */
    query?: string;
    /**
     *
     * @type {QGPTQuestionAnswer}
     * @memberof QGPTFollowupInput
     */
    answer?: QGPTQuestionAnswer;
    /**
     *
     * @type {RelevantQGPTSeeds}
     * @memberof QGPTFollowupInput
     */
    relevant: RelevantQGPTSeeds;
}
export declare function QGPTFollowupInputFromJSON(json: any): QGPTFollowupInput;
export declare function QGPTFollowupInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTFollowupInput;
export declare function QGPTFollowupInputToJSON(value?: QGPTFollowupInput | null): any;
