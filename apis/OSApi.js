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
exports.OSApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class OSApi extends runtime.BaseAPI {
    /**
     * This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.
     * /os/link_provider [POST]
     */
    async linkProviderRaw(requestParameters) {
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/os/link_provider`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededExternalProviderToJSON)(requestParameters.seededExternalProvider),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ReturnedUserProfileFromJSON)(jsonValue));
    }
    /**
     * This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.
     * /os/link_provider [POST]
     */
    async linkProvider(requestParameters) {
        const response = await this.linkProviderRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.
     * Your GET endpoint
     */
    async osRestartRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/os/restart`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.
     * Your GET endpoint
     */
    async osRestart() {
        await this.osRestartRaw();
    }
    /**
     * A trigger that launches a Sign into OS Server
     */
    async signIntoOSRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/os/sign_in`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.UserProfileFromJSON)(jsonValue));
    }
    /**
     * A trigger that launches a Sign into OS Server
     */
    async signIntoOS() {
        const response = await this.signIntoOSRaw();
        return await response.value();
    }
    /**
     * A trigger that signs out a user from the OS
     * /os/sign_out [POST]
     */
    async signOutOfOSRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/os/sign_out`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.UsersFromJSON)(jsonValue));
    }
    /**
     * A trigger that signs out a user from the OS
     * /os/sign_out [POST]
     */
    async signOutOfOS() {
        const response = await this.signOutOfOSRaw();
        return await response.value();
    }
}
exports.OSApi = OSApi;
