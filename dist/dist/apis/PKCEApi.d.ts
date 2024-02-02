export const __esModule: boolean;
declare const PKCEApi_base: any;
/**
 *
 */
export class PKCEApi extends PKCEApi_base {
    [x: string]: any;
    /**
     * This is a function to Clear a PKCE Authentication Flow
     * /pkce/clear [POST]
     */
    clearPKCERaw(): Promise<any>;
    /**
     * This is a function to Clear a PKCE Authentication Flow
     * /pkce/clear [POST]
     */
    clearPKCE(): Promise<void>;
    /**
     * An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0
     * /pkce/code [POST]
     */
    generateCodeRaw(requestParameters: any): Promise<any>;
    /**
     * An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0
     * /pkce/code [POST]
     */
    generateCode(requestParameters: any): Promise<any>;
    /**
     * A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token
     * /pkce/token [POST]
     */
    generateTokenRaw(requestParameters: any): Promise<any>;
    /**
     * A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token
     * /pkce/token [POST]
     */
    generateToken(requestParameters: any): Promise<any>;
    /**
     * An endpoint that returns a PKCE Challenge
     * Your GET endpoint
     */
    getChallengeRaw(): Promise<any>;
    /**
     * An endpoint that returns a PKCE Challenge
     * Your GET endpoint
     */
    getChallenge(): Promise<any>;
    /**
     * This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.
     * /pkce/response/code [POST]
     */
    respondWithCodeRaw(requestParameters: any): Promise<any>;
    /**
     * This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.
     * /pkce/response/code [POST]
     */
    respondWithCode(requestParameters: any): Promise<any>;
}
export {};
