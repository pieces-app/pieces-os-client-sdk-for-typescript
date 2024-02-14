export const __esModule: boolean;
declare const ModelsApi_base: any;
/**
 *
 */
export class ModelsApi extends ModelsApi_base {
    [x: string]: any;
    /**
     * This will create a ml model, this is aloud however all models will be set to custom: true.  && we will verify we dont have a model that matches this model.
     * /models/create [POST]
     */
    modelsCreateNewModelRaw(requestParameters: any): Promise<any>;
    /**
     * This will create a ml model, this is aloud however all models will be set to custom: true.  && we will verify we dont have a model that matches this model.
     * /models/create [POST]
     */
    modelsCreateNewModel(requestParameters: any): Promise<any>;
    /**
     * This will delete a model, This is only available for custom: true models.
     * /models/{model}/delete [POST]
     */
    modelsDeleteSpecificModelRaw(requestParameters: any): Promise<any>;
    /**
     * This will delete a model, This is only available for custom: true models.
     * /models/{model}/delete [POST]
     */
    modelsDeleteSpecificModel(requestParameters: any): Promise<void>;
    /**
     * This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.
     * /models/{model}/delete/cache [POST]
     */
    modelsDeleteSpecificModelCacheRaw(requestParameters: any): Promise<any>;
    /**
     * This is going to delete and sort of data that is associated with the Model itself IE the Assets/Libraries downloaded specifically for this model.  This is only available for the LLLM models for now.
     * /models/{model}/delete/cache [POST]
     */
    modelsDeleteSpecificModelCache(requestParameters: any): Promise<any>;
    /**
     * This will get a snapshot of all of your models.
     * /models [GET]
     */
    modelsSnapshotRaw(): Promise<any>;
    /**
     * This will get a snapshot of all of your models.
     * /models [GET]
     */
    modelsSnapshot(): Promise<any>;
    /**
     * This will unload all of the ml models.(that are unloadable)
     * /models/unload [POST]
     */
    unloadModelsRaw(): Promise<any>;
    /**
     * This will unload all of the ml models.(that are unloadable)
     * /models/unload [POST]
     */
    unloadModels(): Promise<void>;
}
export {};
