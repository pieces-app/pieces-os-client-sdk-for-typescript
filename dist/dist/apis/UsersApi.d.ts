export const __esModule: boolean;
declare const UsersApi_base: any;
/**
 *
 */
export class UsersApi extends UsersApi_base {
    [x: string]: any;
    /**
     * Creates a User From a oAuth Token
     * /users/authenticate/from_token [POST]
     */
    authenticateFromOauthTokenRaw(requestParameters: any): Promise<any>;
    /**
     * Creates a User From a oAuth Token
     * /users/authenticate/from_token [POST]
     */
    authenticateFromOauthToken(requestParameters: any): Promise<any>;
    /**
     * Locally Removing a user for the purpose of Signing Out
     * /users/{user}/disconnect [POST]
     */
    usersDisconnectUserRaw(requestParameters: any): Promise<any>;
    /**
     * Locally Removing a user for the purpose of Signing Out
     * /users/{user}/disconnect [POST]
     */
    usersDisconnectUser(requestParameters: any): Promise<any>;
    /**
     * this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.
     * /users [GET]
     */
    usersSnapshotRaw(): Promise<any>;
    /**
     * this will return a snapshot of all of the users that are in the users database. TODO might want to make this internal.
     * /users [GET]
     */
    usersSnapshot(): Promise<any>;
    /**
     * This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.
     * /users/{user} [GET] Scoped to Users
     */
    usersSpecificUserSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This enables the client to get the current user.  This endpoint will return a UserPRofile or will throw an error since you are sending user uid.
     * /users/{user} [GET] Scoped to Users
     */
    usersSpecificUserSnapshot(requestParameters: any): Promise<any>;
}
export {};
