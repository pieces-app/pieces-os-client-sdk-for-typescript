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
exports.MachineLearningApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class MachineLearningApi extends runtime.BaseAPI {
    /**
     * This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along \'classify\' then we will optionally classify the just the code that is segmented.
     * /machine_learning/text/technical_language/parsers/segmentation [POST]
     */
    async segmentTechnicalLanguageRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.classify !== undefined) {
            queryParameters['classify'] = requestParameters.classify;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/machine_learning/text/technical_language/parsers/segmentation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.UnsegmentedTechnicalLanguageToJSON)(requestParameters.unsegmentedTechnicalLanguage),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SegmentedTechnicalLanguageFromJSON)(jsonValue));
    }
    /**
     * This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along \'classify\' then we will optionally classify the just the code that is segmented.
     * /machine_learning/text/technical_language/parsers/segmentation [POST]
     */
    async segmentTechnicalLanguage(requestParameters) {
        const response = await this.segmentTechnicalLanguageRaw(requestParameters);
        return await response.value();
    }
}
exports.MachineLearningApi = MachineLearningApi;
