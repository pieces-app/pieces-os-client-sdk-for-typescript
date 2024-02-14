export const __esModule: boolean;
export const AuthorizeAuth0ScopeEnum: {};
export const AuthorizeAuth0ResponseTypeEnum: {};
export const AuthorizeAuth0CodeChallengeMethodEnum: {};
export const AuthorizeAuth0ResponseModeEnum: {};
export const ExchangeForAuth0TokenGrantTypeEnum: {};
declare const Auth0Api_base: any;
/**
 *
 */
export class Auth0Api extends Auth0Api_base {
    [x: string]: any;
    /**
     * https://auth0.com/docs/api/authentication#logout
     * https://auth.pieces.services/v2/logout [GET]
     */
    auth0LogoutRaw(requestParameters: any): Promise<any>;
    /**
     * https://auth0.com/docs/api/authentication#logout
     * https://auth.pieces.services/v2/logout [GET]
     */
    auth0Logout(requestParameters: any): Promise<any>;
    /**
     * An endpoint that is used locally authenticate via a PKCE Flow.  Example https://auth.pieces.services /authorize?audience=https%3A%2F%2Fpieces.us.auth0.com%2Fapi%2Fv2%2F&scope=email+profile+offline_access+openid&response_type=code&client_id=9sW4Pa1LEjX67l6VO14u0207NLYeXnu1&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpkce%2Fresponse%2Fcode&code_challenge_method=S256&code_challenge=yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk&response_mode=form_post&state=4bd0b9a389b4b229602346c33913b4c3c199628a90011ab3a901302ab62b3832
     * https://auth.pieces.services/authorize [GET]
     */
    authorizeAuth0Raw(requestParameters: any): Promise<any>;
    /**
     * An endpoint that is used locally authenticate via a PKCE Flow.  Example https://auth.pieces.services /authorize?audience=https%3A%2F%2Fpieces.us.auth0.com%2Fapi%2Fv2%2F&scope=email+profile+offline_access+openid&response_type=code&client_id=9sW4Pa1LEjX67l6VO14u0207NLYeXnu1&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpkce%2Fresponse%2Fcode&code_challenge_method=S256&code_challenge=yxRssZxdfBpMigRmDxAety1QU72Bd5WnDUbtlsCZOnk&response_mode=form_post&state=4bd0b9a389b4b229602346c33913b4c3c199628a90011ab3a901302ab62b3832
     * https://auth.pieces.services/authorize [GET]
     */
    authorizeAuth0(requestParameters: any): Promise<any>;
    /**
     * An endpoint to generate a OAuth Token for an authentication flow.
     * https://auth.pieces.services/oauth/token [POST]
     */
    exchangeForAuth0TokenRaw(requestParameters: any): Promise<any>;
    /**
     * An endpoint to generate a OAuth Token for an authentication flow.
     * https://auth.pieces.services/oauth/token [POST]
     */
    exchangeForAuth0Token(requestParameters: any): Promise<any>;
    /**
     * Get the users info from the Auth0 API
     * https://auth.pieces.services/userinfo [GET]
     */
    getAuth0UserInfoRaw(): Promise<any>;
    /**
     * Get the users info from the Auth0 API
     * https://auth.pieces.services/userinfo [GET]
     */
    getAuth0UserInfo(): Promise<any>;
}
export {};
