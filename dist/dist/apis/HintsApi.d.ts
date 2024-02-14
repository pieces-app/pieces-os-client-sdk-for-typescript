export const __esModule: boolean;
declare const HintsApi_base: any;
/**
 *
 */
export class HintsApi extends HintsApi_base {
    [x: string]: any;
    /**
     * This will create a hint.
     * /hints/create [POST]
     */
    hintsCreateNewHintRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a hint.
     * /hints/create [POST]
     */
    hintsCreateNewHint(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific hint.
     * /hints/{hint}/delete [POST]
     */
    hintsDeleteSpecificHintRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific hint.
     * /hints/{hint}/delete [POST]
     */
    hintsDeleteSpecificHint(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all of the hints.
     * /hints [GET]
     */
    hintsSnapshotRaw(): Promise<any>;
    /**
     * This will get a snapshot of all of the hints.
     * /hints [GET]
     */
    hintsSnapshot(): Promise<any>;
}
export {};
