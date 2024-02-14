export const __esModule: boolean;
declare const PersonsApi_base: any;
/**
 *
 */
export class PersonsApi extends PersonsApi_base {
    [x: string]: any;
    /**
     * This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.
     * /persons/{person}/assets/delete/{asset} [POST]
     */
    personDisassociateAssetRaw(requestParameters: any): Promise<any>;
    /**
     * This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.
     * /persons/{person}/assets/delete/{asset} [POST]
     */
    personDisassociateAsset(requestParameters: any): Promise<void>;
    /**
     * This will create a new person.
     * /persons/create [POST]
     */
    personsCreateNewPersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a new person.
     * /persons/create [POST]
     */
    personsCreateNewPerson(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific person.
     * /persons/{person}/delete [POST]
     */
    personsDeletePersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a specific person.
     * /persons/{person}/delete [POST]
     */
    personsDeletePerson(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of all of your people
     * /persons [GET]
     */
    personsSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all of your people
     * /persons [GET]
     */
    personsSnapshot(requestParameters: any): Promise<any>;
}
export {};
