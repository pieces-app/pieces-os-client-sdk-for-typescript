export const __esModule: boolean;
export const ActivityIdentifiersSnapshotActivityFilterEnumEnum: {};
declare const ActivityApi_base: any;
/**
 *
 */
export class ActivityApi extends ActivityApi_base {
    [x: string]: any;
    /**
     * This will attempt to get a specific activity.
     * /activity/{activity} [GET]
     */
    activitiesSpecificActivitySnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will attempt to get a specific activity.
     * /activity/{activity} [GET]
     */
    activitiesSpecificActivitySnapshot(requestParameters: any): Promise<any>;
    /**
     * This is going to return all the identifiers of the activity event in order of most recent -> oldest.
     * /activity/identifiers [GET]
     */
    activityIdentifiersSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This is going to return all the identifiers of the activity event in order of most recent -> oldest.
     * /activity/identifiers [GET]
     */
    activityIdentifiersSnapshot(requestParameters: any): Promise<any>;
    /**
     * this will update a specific activity.
     * /activity/update [POST]
     */
    activityUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * this will update a specific activity.
     * /activity/update [POST]
     */
    activityUpdate(requestParameters: any): Promise<any>;
}
export {};
