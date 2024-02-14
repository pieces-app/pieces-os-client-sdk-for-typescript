export const __esModule: boolean;
declare const UserApi_base: any;
/**
 *
 */
export class UserApi extends UserApi_base {
    [x: string]: any;
    /**
     * An endpoint to clear the current user.
     * /user/clear
     */
    clearUserRaw(): Promise<any>;
    /**
     * An endpoint to clear the current user.
     * /user/clear
     */
    clearUser(): Promise<void>;
    /**
     * This will select the current user.
     * /user/select [POST]
     */
    selectUserRaw(requestParameters: any): Promise<any>;
    /**
     * This will select the current user.
     * /user/select [POST]
     */
    selectUser(requestParameters: any): Promise<any>;
    /**
     * This will stream in the current user, not quiet sure yet how we want to do this.
     * /user/stream [GET]
     */
    streamUserRaw(): Promise<any>;
    /**
     * This will stream in the current user, not quiet sure yet how we want to do this.
     * /user/stream [GET]
     */
    streamUser(): Promise<any>;
    /**
     * This will update a specific user in the database.
     * /user/update [POST]
     */
    updateUserRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific user in the database.
     * /user/update [POST]
     */
    updateUser(requestParameters: any): Promise<any>;
    /**
     * This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.
     * Your GET endpoint
     */
    userProvidersRaw(): Promise<any>;
    /**
     * This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.
     * Your GET endpoint
     */
    userProviders(): Promise<any>;
    /**
     * This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.
     * /user [GET]
     */
    userSnapshotRaw(): Promise<any>;
    /**
     * This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.
     * /user [GET]
     */
    userSnapshot(): Promise<any>;
    /**
     * This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.
     * /user/update/vanity [POST]
     */
    userUpdateVanityRaw(requestParameters: any): Promise<any>;
    /**
     * This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.
     * /user/update/vanity [POST]
     */
    userUpdateVanity(requestParameters: any): Promise<any>;
}
export {};
