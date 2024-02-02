export const __esModule: boolean;
declare const PersonApi_base: any;
/**
 *
 */
export class PersonApi extends PersonApi_base {
    [x: string]: any;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/person/{person}/scores/increment\' [POST]
     */
    personScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/person/{person}/scores/increment\' [POST]
     */
    personScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of a specific person
     * /person/{person} [GET]
     */
    personSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a specific person
     * /person/{person} [GET]
     */
    personSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific person
     * /person/update [POST]
     */
    updatePersonRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific person
     * /person/update [POST]
     */
    updatePerson(requestParameters: any): Promise<any>;
}
export {};
