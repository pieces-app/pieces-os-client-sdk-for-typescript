export const __esModule: boolean;
declare const MachineLearningApi_base: any;
/**
 *
 */
export class MachineLearningApi extends MachineLearningApi_base {
    [x: string]: any;
    /**
     * This is going to take in some personification details ie languages & personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.
     * /machine_learning/text/technical_language/generators/personification [GET]
     */
    personificationTechnicalLanguageGenerationRaw(requestParameters: any): Promise<any>;
    /**
     * This is going to take in some personification details ie languages & personas.  and will return generated Seeds that can be used as snippets post/pre onboarding.
     * /machine_learning/text/technical_language/generators/personification [GET]
     */
    personificationTechnicalLanguageGeneration(requestParameters: any): Promise<any>;
    /**
     * This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along \'classify\' then we will optionally classify the just the code that is segmented.
     * /machine_learning/text/technical_language/parsers/segmentation [POST]
     */
    segmentTechnicalLanguageRaw(requestParameters: any): Promise<any>;
    /**
     * This is a functional endpoint that will parse a message or text in to text or code.  if the optional query param is passed along \'classify\' then we will optionally classify the just the code that is segmented.
     * /machine_learning/text/technical_language/parsers/segmentation [POST]
     */
    segmentTechnicalLanguage(requestParameters: any): Promise<any>;
}
export {};
