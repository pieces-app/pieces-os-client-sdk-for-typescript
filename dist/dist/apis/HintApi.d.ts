export const __esModule: boolean;
declare const HintApi_base: any;
/**
 *
 */
export class HintApi extends HintApi_base {
    [x: string]: any;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/hint/{hint}/scores/increment\' [POST]
     */
    hintScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/hint/{hint}/scores/increment\' [POST]
     */
    hintScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a snapshot of a specific hint.
     * /hint/{hint} [POST]
     */
    hintSpecificHintSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of a specific hint.
     * /hint/{hint} [POST]
     */
    hintSpecificHintSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific hint.
     * /hint/update [POST]
     */
    hintUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific hint.
     * /hint/update [POST]
     */
    hintUpdate(requestParameters: any): Promise<any>;
}
export {};
