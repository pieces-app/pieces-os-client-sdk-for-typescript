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
import {
    TLPCodeSnippetCluster,
    TLPCodeSnippetClusterFromJSON,
    TLPCodeSnippetClusterToJSON
} from "./TLPCodeSnippetCluster";
import {Ext, ExtFromJSON, ExtToJSON} from "./Ext";

/**
 * This is the returned model from the cluster function within the snippetCluster facade.
 * @export
 * @interface TLPCodeSnippetClusteringReturnable
 */
export interface TLPCodeSnippetClusteringReturnable {
    /**
     * 
     * @type {Array<TLPCodeSnippetCluster>}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    iterable: Array<TLPCodeSnippetCluster>;
    /**
     * this is the time (in milliseconds) it takes to process the cluster.
     * @type {number}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    duration: number;
    /**
     * 
     * @type {Ext}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    ext?: Ext;
    /**
     * The max number of snippets returned.(input Param)
     * @type {number}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    maxImportSize: number;
    /**
     * The minimum similarity between snippets for them to be in the same cluster.
     * @type {number}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    minSimilarity: number;
    /**
     * The minimum number of other points in a cluster.
     * @type {number}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    minPoints: number;
    /**
     * The maximum parse depth for tree sitter.
     * @type {number}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    maxDepth: number;
    /**
     * The maximum parse breadth for expanding a node's children - tree sitter
     * @type {number}
     * @memberof TLPCodeSnippetClusteringReturnable
     */
    maxChildren: number;
}

export function TLPCodeSnippetClusteringReturnableFromJSON(json: any): TLPCodeSnippetClusteringReturnable {
    return TLPCodeSnippetClusteringReturnableFromJSONTyped(json, false);
}

export function TLPCodeSnippetClusteringReturnableFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetClusteringReturnable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iterable': ((json['iterable'] as Array<any>).map(TLPCodeSnippetClusterFromJSON)),
        'duration': json['duration'],
        'ext': !exists(json, 'ext') ? undefined : ExtFromJSON(json['ext']),
        'maxImportSize': json['maxImportSize'],
        'minSimilarity': json['minSimilarity'],
        'minPoints': json['minPoints'],
        'maxDepth': json['maxDepth'],
        'maxChildren': json['maxChildren'],
    };
}

export function TLPCodeSnippetClusteringReturnableToJSON(value?: TLPCodeSnippetClusteringReturnable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iterable': ((value.iterable as Array<any>).map(TLPCodeSnippetClusterToJSON)),
        'duration': value.duration,
        'ext': ExtToJSON(value.ext),
        'maxImportSize': value.maxImportSize,
        'minSimilarity': value.minSimilarity,
        'minPoints': value.minPoints,
        'maxDepth': value.maxDepth,
        'maxChildren': value.maxChildren,
    };
}


