export const __esModule: boolean;
declare const OpenAIApi_base: any;
/**
 *
 */
export class OpenAIApi extends OpenAIApi_base {
    [x: string]: any;
    /**
     * This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI\'s server to get the models.
     * /open_ai/models/list [POST]
     */
    openAiModelsListRaw(requestParameters: any): Promise<any>;
    /**
     * This will get a list of all of your Models from OpenAI w/ you user.auth0.openAI.apiKey.  if the user is unauthenticated or if the openAI key doesnt exist or if it is invalid we will return a 401.  Requires internet as this will ping out to OpenAI\'s server to get the models.
     * /open_ai/models/list [POST]
     */
    openAiModelsList(requestParameters: any): Promise<any>;
}
export {};
