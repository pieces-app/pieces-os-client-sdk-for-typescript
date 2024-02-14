export const __esModule: boolean;
declare const ActivitiesApi_base: any;
/**
 *
 */
export class ActivitiesApi extends ActivitiesApi_base {
    [x: string]: any;
    /**
     * This will create a new Activity.
     * /activities/create [POST]
     */
    activitiesCreateNewActivityRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a new Activity.
     * /activities/create [POST]
     */
    activitiesCreateNewActivity(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.
     * /activities/{activity}/delete [POST]
     */
    activitiesDeleteSpecificActivityRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.
     * /activities/{activity}/delete [POST]
     */
    activitiesDeleteSpecificActivity(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all of the activities
     * /activities [GET]
     */
    activitiesSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all of the activities
     * /activities [GET]
     */
    activitiesSnapshot(requestParameters: any): Promise<any>;
}
export {};
