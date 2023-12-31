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
/**
 *
 * @export
 * @interface SystemExecutionCpuInformation
 */
export interface SystemExecutionCpuInformation {
    /**
     * this is the number of cpus
     * @type {number}
     * @memberof SystemExecutionCpuInformation
     */
    count: number;
    /**
     * this is the brand of cpu
     * @type {string}
     * @memberof SystemExecutionCpuInformation
     */
    brand: string;
    /**
     *
     * @type {number}
     * @memberof SystemExecutionCpuInformation
     */
    frequency: number;
}
export declare function SystemExecutionCpuInformationFromJSON(json: any): SystemExecutionCpuInformation;
export declare function SystemExecutionCpuInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemExecutionCpuInformation;
export declare function SystemExecutionCpuInformationToJSON(value?: SystemExecutionCpuInformation | null): any;
