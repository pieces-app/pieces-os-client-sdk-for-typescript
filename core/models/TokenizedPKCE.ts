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

import { mapValues } from '../runtime';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    EmbeddedModelSchemaToJSONTyped,
} from './EmbeddedModelSchema';

/**
 * This is the flow that mobile apps use to access an API. Use this endpoint to exchange an Authorization Code for a Token.
 * @export
 * @interface TokenizedPKCE
 */
export interface TokenizedPKCE {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TokenizedPKCE
     */
    schema?: EmbeddedModelSchema;
    /**
     * Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token.
     * @type {string}
     * @memberof TokenizedPKCE
     */
    grantType: TokenizedPKCEGrantTypeEnum;
    /**
     * Your application's Client ID.
     * @type {string}
     * @memberof TokenizedPKCE
     */
    clientId: string;
    /**
     * The Authorization Code received from the initial /authorize call.
     * @type {string}
     * @memberof TokenizedPKCE
     */
    code: string;
    /**
     * This is required only if it was set at the GET /authorize endpoint. The values must match.
     * @type {string}
     * @memberof TokenizedPKCE
     */
    redirectUri: string;
    /**
     * Cryptographically random key that was used to generate the code_challenge passed to /authorize.
     * @type {string}
     * @memberof TokenizedPKCE
     */
    codeVerifier: string;
    /**
     * The audience domain: i.e. https://pieces.us.auth0.com
     * @type {string}
     * @memberof TokenizedPKCE
     */
    audience?: string;
}


/**
 * @export
 */
export const TokenizedPKCEGrantTypeEnum = {
    Unknown: 'UNKNOWN',
    RefreshToken: 'refresh_token',
    AuthorizationCode: 'authorization_code'
} as const;
export type TokenizedPKCEGrantTypeEnum = typeof TokenizedPKCEGrantTypeEnum[keyof typeof TokenizedPKCEGrantTypeEnum];


/**
 * Check if a given object implements the TokenizedPKCE interface.
 */
export function instanceOfTokenizedPKCE(value: object): value is TokenizedPKCE {
    if (!('grantType' in value) || value['grantType'] === undefined) return false;
    if (!('clientId' in value) || value['clientId'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('redirectUri' in value) || value['redirectUri'] === undefined) return false;
    if (!('codeVerifier' in value) || value['codeVerifier'] === undefined) return false;
    return true;
}

export function TokenizedPKCEFromJSON(json: any): TokenizedPKCE {
    return TokenizedPKCEFromJSONTyped(json, false);
}

export function TokenizedPKCEFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenizedPKCE {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'grantType': json['grant_type'],
        'clientId': json['client_id'],
        'code': json['code'],
        'redirectUri': json['redirect_uri'],
        'codeVerifier': json['code_verifier'],
        'audience': json['audience'] == null ? undefined : json['audience'],
    };
}

export function TokenizedPKCEToJSON(json: any): TokenizedPKCE {
    return TokenizedPKCEToJSONTyped(json, false);
}

export function TokenizedPKCEToJSONTyped(value?: TokenizedPKCE | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'grant_type': value['grantType'],
        'client_id': value['clientId'],
        'code': value['code'],
        'redirect_uri': value['redirectUri'],
        'code_verifier': value['codeVerifier'],
        'audience': value['audience'],
    };
}

