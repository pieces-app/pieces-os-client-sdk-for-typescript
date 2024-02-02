export const __esModule: boolean;
declare const WellKnownApi_base: any;
/**
 *
 */
export class WellKnownApi extends WellKnownApi_base {
    [x: string]: any;
    /**
     * This will get the health of the server.
     * /.well-known/health [GET]
     */
    getWellKnownHealthRaw(): Promise<any>;
    /**
     * This will get the health of the server.
     * /.well-known/health [GET]
     */
    getWellKnownHealth(): Promise<any>;
    /**
     * This will get the version of the server. This will return a string of current version.
     * /.well-known/version [Get]
     */
    getWellKnownVersionRaw(): Promise<any>;
    /**
     * This will get the version of the server. This will return a string of current version.
     * /.well-known/version [Get]
     */
    getWellKnownVersion(): Promise<any>;
}
export {};
