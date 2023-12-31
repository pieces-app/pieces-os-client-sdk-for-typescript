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


import * as runtime from '../runtime';
import {
    OAuthToken,
    OAuthTokenFromJSON,
    OAuthTokenToJSON,
    UserProfile,
    UserProfileFromJSON,
    UserProfileToJSON,
    Users,
    UsersFromJSON,
    UsersToJSON,
} from '../models';

export interface AuthenticateFromOauthTokenRequest {
    oAuthToken?: OAuthToken;
}

export interface UsersDisconnectUserRequest {
    user: string;
}

export interface UsersSpecificUserSnapshotRequest {
    user: string;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Creates a User From a oAuth Token
     * /users/authenticate/from_token [POST]
     */
    async authenticateFromOauthTokenRaw(requestParameters: AuthenticateFromOauthTokenRequest): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("auth0", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("auth0", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("auth0", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/users/authenticate/from_token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OAuthTokenToJSON(requestParameters.oAuthToken),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Creates a User From a oAuth Token
     * /users/authenticate/from_token [POST]
     */
    async authenticateFromOauthToken(requestParameters: AuthenticateFromOauthTokenRequest): Promise<UserProfile> {
        const response = await this.authenticateFromOauthTokenRaw(requestParameters);
        return await response.value();
    }

    /**
     * Locally Removing a user for the purpose of Signing Out
     * /users/{user}/disconnect [POST]
     */
    async usersDisconnectUserRaw(requestParameters: UsersDisconnectUserRequest): Promise<runtime.ApiResponse<Users>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling usersDisconnectUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{user}/disconnect`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersFromJSON(jsonValue));
    }

    /**
     * Locally Removing a user for the purpose of Signing Out
     * /users/{user}/disconnect [POST]
     */
    async usersDisconnectUser(requestParameters: UsersDisconnectUserRequest): Promise<Users> {
        const response = await this.usersDisconnectUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.
     * /users [GET]
     */
    async usersSnapshotRaw(): Promise<runtime.ApiResponse<Users>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersFromJSON(jsonValue));
    }

    /**
     * this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.
     * /users [GET]
     */
    async usersSnapshot(): Promise<Users> {
        const response = await this.usersSnapshotRaw();
        return await response.value();
    }

    /**
     * This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.
     * /users/{user} [GET] Scoped to Users
     */
    async usersSpecificUserSnapshotRaw(requestParameters: UsersSpecificUserSnapshotRequest): Promise<runtime.ApiResponse<UserProfile>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling usersSpecificUserSnapshot.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.
     * /users/{user} [GET] Scoped to Users
     */
    async usersSpecificUserSnapshot(requestParameters: UsersSpecificUserSnapshotRequest): Promise<UserProfile> {
        const response = await this.usersSpecificUserSnapshotRaw(requestParameters);
        return await response.value();
    }

}
