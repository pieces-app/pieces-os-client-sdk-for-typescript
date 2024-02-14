export const __esModule: boolean;
declare const OSApi_base: any;
/**
 *
 */
export class OSApi extends OSApi_base {
    [x: string]: any;
    /**
     * This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.
     * /os/link_provider [POST]
     */
    linkProviderRaw(requestParameters: any): Promise<any>;
    /**
     * This will link an external provider to your current auth0 account.  Will throw errors if your user is not signed in.
     * /os/link_provider [POST]
     */
    linkProvider(requestParameters: any): Promise<any>;
    /**
     * This will get information related to your specific device.
     * /os/device/information [GET]
     */
    osDeviceInformationRaw(): Promise<any>;
    /**
     * This will get information related to your specific device.
     * /os/device/information [GET]
     */
    osDeviceInformation(): Promise<any>;
    /**
     * This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.
     * Your GET endpoint
     */
    osRestartRaw(): Promise<any>;
    /**
     * This will restart PiecesOS, if successfull with return a 204. This is a LOCALOS Only Endpoint.
     * Your GET endpoint
     */
    osRestart(): Promise<void>;
    /**
     * This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc
     * /os/update/check [POST]
     */
    osUpdateCheckRaw(requestParameters: any): Promise<any>;
    /**
     * This is a helper endpoint that will check the status of an update for PiecesOS. IE if there is an update downloading, if there is one available, but the downloading has not started... etc
     * /os/update/check [POST]
     */
    osUpdateCheck(requestParameters: any): Promise<any>;
    /**
     * This will trigger a filer picker and return the string paths of the files that were selected.
     * /os/files/pick [POST]
     */
    pickFilesRaw(requestParameters: any): Promise<any>;
    /**
     * This will trigger a filer picker and return the string paths of the files that were selected.
     * /os/files/pick [POST]
     */
    pickFiles(requestParameters: any): Promise<any>;
    /**
     * This will trigger a folder picker and return the string paths of the folders that were selected.
     * /os/folders/pick [POST]
     */
    pickFoldersRaw(): Promise<any>;
    /**
     * This will trigger a folder picker and return the string paths of the folders that were selected.
     * /os/folders/pick [POST]
     */
    pickFolders(): Promise<any>;
    /**
     * A trigger that launches a Sign into OS Server
     */
    signIntoOSRaw(): Promise<any>;
    /**
     * A trigger that launches a Sign into OS Server
     */
    signIntoOS(): Promise<any>;
    /**
     * A trigger that signs out a user from the OS
     * /os/sign_out [POST]
     */
    signOutOfOSRaw(): Promise<any>;
    /**
     * A trigger that signs out a user from the OS
     * /os/sign_out [POST]
     */
    signOutOfOS(): Promise<any>;
}
export {};
