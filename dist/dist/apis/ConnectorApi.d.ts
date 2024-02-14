export const __esModule: boolean;
declare const ConnectorApi_base: any;
/**
 *
 */
export class ConnectorApi extends ConnectorApi_base {
    [x: string]: any;
    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    connectRaw(requestParameters: any): Promise<any>;
    /**
     * An endpoint which abstracts a bootup/connection for a specific context
     * /connect [POST]
     */
    connect(requestParameters: any): Promise<any>;
    /**
     * This can be used to send a SeededAsset over that you may use to compair in the future.
     * /{application}/intention [POST]
     */
    intentionRaw(requestParameters: any): Promise<any>;
    /**
     * This can be used to send a SeededAsset over that you may use to compair in the future.
     * /{application}/intention [POST]
     */
    intention(requestParameters: any): Promise<any>;
    /**
     * A consolidation endpoint to handle the updating of an onboarding process.
     * /onboarded [POST]
     */
    onboardedRaw(requestParameters: any): Promise<any>;
    /**
     * A consolidation endpoint to handle the updating of an onboarding process.
     * /onboarded [POST]
     */
    onboarded(requestParameters: any): Promise<any>;
    /**
     * This will react to the response returned from the /suggest endpoint.
     * /{application}/reaction [POST]
     */
    reactRaw(requestParameters: any): Promise<any>;
    /**
     * This will react to the response returned from the /suggest endpoint.
     * /{application}/reaction [POST]
     */
    react(requestParameters: any): Promise<any>;
    /**
     * This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.
     * /{application}/suggestion [POST]
     */
    suggestRaw(requestParameters: any): Promise<any>;
    /**
     * This can and should be called everytime a snippet is coppied from an integration. IE A Jetbrains user coppies some code, then this end point can get called to weigh if we want to suggest a piece to be reused (if reuse is true we should provide asset that the user may want to use) or saved or neither.   **Note: Could potentially accept a SeededFormat for the request body if we want.  TODO potentially just make this a get endpoint. (because we are trying to retireve data.
     * /{application}/suggestion [POST]
     */
    suggest(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    trackRaw(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint specifically to abstract the work of packaging for segment on a per-context basis
     * /{application}/track [POST]
     */
    track(requestParameters: any): Promise<any>;
}
export {};
