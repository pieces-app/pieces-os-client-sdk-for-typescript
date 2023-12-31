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
exports.ConnectorApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ConnectorApi extends runtime.BaseAPI {
    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    async connectRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/connect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededConnectorConnectionToJSON)(requestParameters.seededConnectorConnection),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ContextFromJSON)(jsonValue));
    }
    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    async connect(requestParameters) {
        const response = await this.connectRaw(requestParameters);
        return await response.value();
    }
    /**
     * This can be used to send a SeededAsset over that you may use to compair in the future.
     * /{application}/intention [POST]
     */
    async intentionRaw(requestParameters) {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application', 'Required parameter requestParameters.application was null or undefined when calling intention.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{application}/intention`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededConnectorAssetToJSON)(requestParameters.seededConnectorAsset),
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This can be used to send a SeededAsset over that you may use to compair in the future.
     * /{application}/intention [POST]
     */
    async intention(requestParameters) {
        const response = await this.intentionRaw(requestParameters);
        return await response.value();
    }
    /**
     * A consolidation endpoint to handle the updating of an onboarding process.
     * /onboarded [POST]
     */
    async onboardedRaw(requestParameters) {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application', 'Required parameter requestParameters.application was null or undefined when calling onboarded.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{application}/onboarded`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body,
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * A consolidation endpoint to handle the updating of an onboarding process.
     * /onboarded [POST]
     */
    async onboarded(requestParameters) {
        const response = await this.onboardedRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will react to the response returned from the /suggest endpoint.
     * /{application}/reaction [POST]
     */
    async reactRaw(requestParameters) {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application', 'Required parameter requestParameters.application was null or undefined when calling react.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{application}/reaction`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.ReactionToJSON)(requestParameters.reaction),
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This will react to the response returned from the /suggest endpoint.
     * /{application}/reaction [POST]
     */
    async react(requestParameters) {
        const response = await this.reactRaw(requestParameters);
        return await response.value();
    }
    /**
     * This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.
     * /{application}/suggestion [POST]
     */
    async suggestRaw(requestParameters) {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application', 'Required parameter requestParameters.application was null or undefined when calling suggest.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{application}/suggestion`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededConnectorCreationToJSON)(requestParameters.seededConnectorCreation),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.SuggestionFromJSON)(jsonValue));
    }
    /**
     * This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.
     * /{application}/suggestion [POST]
     */
    async suggest(requestParameters) {
        const response = await this.suggestRaw(requestParameters);
        return await response.value();
    }
    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    async trackRaw(requestParameters) {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application', 'Required parameter requestParameters.application was null or undefined when calling track.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/{application}/track`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededConnectorTrackingToJSON)(requestParameters.seededConnectorTracking),
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    async track(requestParameters) {
        const response = await this.trackRaw(requestParameters);
        return await response.value();
    }
}
exports.ConnectorApi = ConnectorApi;
