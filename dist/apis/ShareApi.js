"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ShareApi extends runtime.BaseAPI {
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    async shareScoresIncrementRaw(requestParameters) {
        if (requestParameters.share === null || requestParameters.share === undefined) {
            throw new runtime.RequiredError('share', 'Required parameter requestParameters.share was null or undefined when calling shareScoresIncrement.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/share/{share}/scores/increment`.replace(`{${"share"}}`, encodeURIComponent(String(requestParameters.share))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededScoreIncrementToJSON)(requestParameters.seededScoreIncrement),
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/share/{share}/scores/increment\' [POST]
     */
    async shareScoresIncrement(requestParameters) {
        await this.shareScoresIncrementRaw(requestParameters);
    }
    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    async shareSnapshotRaw(requestParameters) {
        if (requestParameters.share === null || requestParameters.share === undefined) {
            throw new runtime.RequiredError('share', 'Required parameter requestParameters.share was null or undefined when calling shareSnapshot.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/share/{share}`.replace(`{${"share"}}`, encodeURIComponent(String(requestParameters.share))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ShareFromJSON)(jsonValue));
    }
    /**
     * Get the snapshot of a specific share.
     * /share/{share}
     */
    async shareSnapshot(requestParameters) {
        const response = await this.shareSnapshotRaw(requestParameters);
        return await response.value();
    }
    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    async shareUpdateRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/share/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ShareToJSON)(requestParameters.share),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ShareFromJSON)(jsonValue));
    }
    /**
     * This endpoint will accept a Share that the user wants to update, and will return a full Share that was updated!
     * /share/update [POST]
     */
    async shareUpdate(requestParameters) {
        const response = await this.shareUpdateRaw(requestParameters);
        return await response.value();
    }
}
exports.ShareApi = ShareApi;
