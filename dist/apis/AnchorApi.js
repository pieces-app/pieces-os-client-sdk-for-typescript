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
exports.AnchorApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AnchorApi extends runtime.BaseAPI {
    /**
     * This will rename a specific anchor.
     * /anchor/{anchor}/rename [POST]
     */
    async anchorRenameRaw(requestParameters) {
        if (requestParameters.anchor === null || requestParameters.anchor === undefined) {
            throw new runtime.RequiredError('anchor', 'Required parameter requestParameters.anchor was null or undefined when calling anchorRename.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/anchor/{anchor}/rename`.replace(`{${"anchor"}}`, encodeURIComponent(String(requestParameters.anchor))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnchorFromJSON)(jsonValue));
    }
    /**
     * This will rename a specific anchor.
     * /anchor/{anchor}/rename [POST]
     */
    async anchorRename(requestParameters) {
        const response = await this.anchorRenameRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/anchor/{anchor}/scores/increment\' [POST]
     */
    async anchorScoresIncrementRaw(requestParameters) {
        if (requestParameters.anchor === null || requestParameters.anchor === undefined) {
            throw new runtime.RequiredError('anchor', 'Required parameter requestParameters.anchor was null or undefined when calling anchorScoresIncrement.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/anchor/{anchor}/scores/increment`.replace(`{${"anchor"}}`, encodeURIComponent(String(requestParameters.anchor))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededScoreIncrementToJSON)(requestParameters.seededScoreIncrement),
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/anchor/{anchor}/scores/increment\' [POST]
     */
    async anchorScoresIncrement(requestParameters) {
        await this.anchorScoresIncrementRaw(requestParameters);
    }
    /**
     * This will get a snapshot of a single anchor.
     * /anchor/{anchor} [GET]
     */
    async anchorSpecificAnchorSnapshotRaw(requestParameters) {
        if (requestParameters.anchor === null || requestParameters.anchor === undefined) {
            throw new runtime.RequiredError('anchor', 'Required parameter requestParameters.anchor was null or undefined when calling anchorSpecificAnchorSnapshot.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/anchor/{anchor}`.replace(`{${"anchor"}}`, encodeURIComponent(String(requestParameters.anchor))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnchorFromJSON)(jsonValue));
    }
    /**
     * This will get a snapshot of a single anchor.
     * /anchor/{anchor} [GET]
     */
    async anchorSpecificAnchorSnapshot(requestParameters) {
        const response = await this.anchorSpecificAnchorSnapshotRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will update a specific anchor.
     * /anchor/update [POST]
     */
    async anchorUpdateRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/anchor/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.AnchorToJSON)(requestParameters.anchor),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AnchorFromJSON)(jsonValue));
    }
    /**
     * This will update a specific anchor.
     * /anchor/update [POST]
     */
    async anchorUpdate(requestParameters) {
        const response = await this.anchorUpdateRaw(requestParameters);
        return await response.value();
    }
}
exports.AnchorApi = AnchorApi;
