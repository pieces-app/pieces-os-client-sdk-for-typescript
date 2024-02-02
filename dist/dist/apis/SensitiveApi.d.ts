export const __esModule: boolean;
declare const SensitiveApi_base: any;
/**
 *
 */
export class SensitiveApi extends SensitiveApi_base {
    [x: string]: any;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/sensitive/{sensitive}/scores/increment\' [POST]
     */
    sensitiveScoresIncrementRaw(requestParameters: any): Promise<any>;
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/sensitive/{sensitive}/scores/increment\' [POST]
     */
    sensitiveScoresIncrement(requestParameters: any): Promise<void>;
    /**
     * This will get a specific sensitive via the sensitive uuid.
     * /sensitive/{sensitive} [GET]
     */
    sensitiveSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a specific sensitive via the sensitive uuid.
     * /sensitive/{sensitive} [GET]
     */
    sensitiveSnapshot(requestParameters: any): Promise<any>;
    /**
     * This will update a specific sensitive
     * /sensitive/update [POST]
     */
    updateSensitiveRaw(requestParameters: any): Promise<any>;
    /**
     * This will update a specific sensitive
     * /sensitive/update [POST]
     */
    updateSensitive(requestParameters: any): Promise<any>;
}
export {};
