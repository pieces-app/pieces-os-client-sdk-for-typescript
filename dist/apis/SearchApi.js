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
exports.SearchApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SearchApi extends runtime.BaseAPI {
    /**
     * This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the
     * /search/full_text [GET]
     */
    async fullTextSearchRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }
        if (requestParameters.pseudo !== undefined) {
            queryParameters['pseudo'] = requestParameters.pseudo;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/search/full_text`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SearchedAssetsFromJSON)(jsonValue));
    }
    /**
     * This will run FTS for exact search, and will NOT run fuzzy matching. This will only search the content within the
     * /search/full_text [GET]
     */
    async fullTextSearch(requestParameters) {
        const response = await this.fullTextSearchRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/neural_code [GET]
     */
    async neuralCodeSearchRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }
        if (requestParameters.pseudo !== undefined) {
            queryParameters['pseudo'] = requestParameters.pseudo;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/search/neural_code`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SearchedAssetsFromJSON)(jsonValue));
    }
    /**
     * This will run ncs on your assets. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/neural_code [GET]
     */
    async neuralCodeSearch(requestParameters) {
        const response = await this.neuralCodeSearchRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/tag_based [POST]
     */
    async tagBasedSearchRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.pseudo !== undefined) {
            queryParameters['pseudo'] = requestParameters.pseudo;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/search/tag_based`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededAssetTagsToJSON)(requestParameters.seededAssetTags),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SearchedAssetsFromJSON)(jsonValue));
    }
    /**
     * This will run our tag based search, and return the assets that best match your passed in tags. This will simply return FlattenedAssets, but will just be the assetuuids that match.
     * /search/tag_based [POST]
     */
    async tagBasedSearch(requestParameters) {
        const response = await this.tagBasedSearchRaw(requestParameters);
        return await response.value();
    }
}
exports.SearchApi = SearchApi;
