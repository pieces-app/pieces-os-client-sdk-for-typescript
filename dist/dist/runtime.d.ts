export const __esModule: boolean;
export const BASE_PATH: string;
export namespace COLLECTION_FORMATS {
    let csv: string;
    let ssv: string;
    let tsv: string;
    let pipes: string;
}
/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {
    constructor(configuration?: Configuration);
    configuration: Configuration;
    fetchApi: (url: any, init: any) => Promise<any>;
    middleware: any;
    withMiddleware(...middlewares: any[]): any;
    withPreMiddleware(...preMiddlewares: any[]): any;
    withPostMiddleware(...postMiddlewares: any[]): any;
    request(context: any, initOverrides: any): Promise<any>;
    createFetchParams(context: any, initOverrides: any): {
        url: any;
        init: any;
    };
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    clone(): any;
}
export class RequiredError extends Error {
    constructor(field: any, msg: any);
    field: any;
}
export class Configuration {
    constructor(configuration?: {});
    configuration: {};
    get basePath(): any;
    get fetchApi(): any;
    get middleware(): any;
    get queryParamsStringify(): any;
    get username(): any;
    get password(): any;
    get apiKey(): any;
    get accessToken(): any;
    get headers(): any;
    get credentials(): any;
}
export function exists(json: any, key: any): boolean;
export function querystring(params: any, prefix?: string): any;
export function mapValues(data: any, fn: any): {};
export function canConsumeForm(consumes: any): boolean;
export class JSONApiResponse {
    constructor(raw: any, transformer?: (jsonValue: any) => any);
    raw: any;
    transformer: (jsonValue: any) => any;
    value(): Promise<any>;
}
export class VoidApiResponse {
    constructor(raw: any);
    raw: any;
    value(): Promise<undefined>;
}
export class BlobApiResponse {
    constructor(raw: any);
    raw: any;
    value(): Promise<any>;
}
export class TextApiResponse {
    constructor(raw: any);
    raw: any;
    value(): Promise<any>;
}
