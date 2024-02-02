export const __esModule: boolean;
declare const ApplicationsApi_base: any;
/**
 *
 */
export class ApplicationsApi extends ApplicationsApi_base {
    [x: string]: any;
    /**
     * This will get the Applications that are currently installed on your Machine, that we have detected that we have an available Pieces integration for, however that you as a user have not installed yet. + applications that are installed where Pieces is going to be coming soon.
     * /applications/external/related [GET]
     */
    applicationsExternalRelatedRaw(): Promise<any>;
    /**
     * This will get the Applications that are currently installed on your Machine, that we have detected that we have an available Pieces integration for, however that you as a user have not installed yet. + applications that are installed where Pieces is going to be coming soon.
     * /applications/external/related [GET]
     */
    applicationsExternalRelated(): Promise<any>;
    /**
     * This will get a snapshot of your installed applications on your local Machine. Applications like \"Microsoft Teams classic\", \"Google Chat\", \"Obsidian\", etc...
     * /applications/external [GET]
     */
    applicationsExternalSnapshotRaw(): Promise<any>;
    /**
     * This will get a snapshot of your installed applications on your local Machine. Applications like \"Microsoft Teams classic\", \"Google Chat\", \"Obsidian\", etc...
     * /applications/external [GET]
     */
    applicationsExternalSnapshot(): Promise<any>;
    /**
     * This will register a connected applicaiton.
     * /applications/register [POST]
     */
    applicationsRegisterRaw(requestParameters: any): Promise<any>;
    /**
     * This will register a connected applicaiton.
     * /applications/register [POST]
     */
    applicationsRegister(requestParameters: any): Promise<any>;
    /**
     * This will close your opened session! Going to want to accept a session uuid here.
     * /applications/session/close [POST]
     */
    applicationsSessionCloseRaw(requestParameters: any): Promise<any>;
    /**
     * This will close your opened session! Going to want to accept a session uuid here.
     * /applications/session/close [POST]
     */
    applicationsSessionClose(requestParameters: any): Promise<any>;
    /**
     * This will open a new session. A session is when someone is using the pieces application.
     * /applications/session/open [POST]
     */
    applicationsSessionOpenRaw(): Promise<any>;
    /**
     * This will open a new session. A session is when someone is using the pieces application.
     * /applications/session/open [POST]
     */
    applicationsSessionOpen(): Promise<any>;
    /**
     * This is an endpoint to get a snapshot of a specific session.
     * /applications/sessions/{session} [GET]
     */
    applicationsSessionSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint to get a snapshot of a specific session.
     * /applications/sessions/{session} [GET]
     */
    applicationsSessionSnapshot(requestParameters: any): Promise<any>;
    /**
     * /applications [GET]
     */
    applicationsSnapshotRaw(): Promise<any>;
    /**
     * /applications [GET]
     */
    applicationsSnapshot(): Promise<any>;
    /**
     * This will retrieve snapshot of a single application.
     * /applications/{application} [GET]
     */
    applicationsSpecificApplicationSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will retrieve snapshot of a single application.
     * /applications/{application} [GET]
     */
    applicationsSpecificApplicationSnapshot(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).
     * /applications/usage/engagement/interaction [POST] Scoped to Apps
     */
    applicationsUsageEngagementInteractionRaw(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user engages something via an interaction(ie click/tap).
     * /applications/usage/engagement/interaction [POST] Scoped to Apps
     */
    applicationsUsageEngagementInteraction(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.
     * /applications/usage/engagement/keyboard [POST] Scoped to Apps
     */
    applicationsUsageEngagementKeyboardRaw(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user uses a keyboard short cut for any sort of engagement.
     * /applications/usage/engagement/keyboard [POST] Scoped to Apps
     */
    applicationsUsageEngagementKeyboard(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces
     * /applications/usage/installation [POST]
     */
    applicationsUsageInstallationRaw(requestParameters: any): Promise<any>;
    /**
     * This is an analytics endpoint that will enable us to know when a user has installed a version of Pieces
     * /applications/usage/installation [POST]
     */
    applicationsUsageInstallation(requestParameters: any): Promise<void>;
    /**
     * This is an endpoint to determine when an application has been updated
     * /applications/usage/updated [POST]
     */
    postApplicationsUsageUpdatedRaw(requestParameters: any): Promise<any>;
    /**
     * This is an endpoint to determine when an application has been updated
     * /applications/usage/updated [POST]
     */
    postApplicationsUsageUpdated(requestParameters: any): Promise<void>;
}
export {};
