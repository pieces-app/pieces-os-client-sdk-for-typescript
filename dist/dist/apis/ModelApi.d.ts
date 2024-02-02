export const __esModule: boolean;
declare const ModelApi_base: any;
/**
 *
 */
export class ModelApi extends ModelApi_base {
    [x: string]: any;
    /**
     * This will download a specific model onto your local machine.
     * /model/{model}/download [POST]
     */
    modelSpecificModelDownloadRaw(requestParameters: any): Promise<any>;
    /**
     * This will download a specific model onto your local machine.
     * /model/{model}/download [POST]
     */
    modelSpecificModelDownload(requestParameters: any): Promise<any>;
    /**
     * This will cancel a specific model download in progress.
     * /model/{model}/download/cancel [POST]
     */
    modelSpecificModelDownloadCancelRaw(requestParameters: any): Promise<any>;
    /**
     * This will cancel a specific model download in progress.
     * /model/{model}/download/cancel [POST]
     */
    modelSpecificModelDownloadCancel(requestParameters: any): Promise<any>;
    /**
     * This is a Websocket Connection, to get the progress of the downloading of a specific model.
     * /model/{model}/download/progress [WS]
     */
    modelSpecificModelDownloadProgressRaw(requestParameters: any): Promise<any>;
    /**
     * This is a Websocket Connection, to get the progress of the downloading of a specific model.
     * /model/{model}/download/progress [WS]
     */
    modelSpecificModelDownloadProgress(requestParameters: any): Promise<any>;
    /**
     * This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.
     * /model/{model}/load [POST]
     */
    modelSpecificModelLoadRaw(requestParameters: any): Promise<any>;
    /**
     * This will load an already downloaded model into memory. This is different that downloading becuase downloading the entire model onto your machine, load will load the downloaded model into memory.
     * /model/{model}/load [POST]
     */
    modelSpecificModelLoad(requestParameters: any): Promise<any>;
    /**
     * This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.
     * /model/{model}/unload [POST]
     */
    modelSpecificModelUnloadRaw(requestParameters: any): Promise<any>;
    /**
     * This will unload an already loaded model from memory. This will free up the ram that this model is currently consuming.
     * /model/{model}/unload [POST]
     */
    modelSpecificModelUnload(requestParameters: any): Promise<any>;
    /**
     * This will update Machinelearning Model, this is only available for \"custom:true\" models.
     * /model/update [POST]
     */
    modelUpdateRaw(requestParameters: any): Promise<any>;
    /**
     * This will update Machinelearning Model, this is only available for \"custom:true\" models.
     * /model/update [POST]
     */
    modelUpdate(requestParameters: any): Promise<any>;
    /**
     * /model/{model} [GET]
     */
    modelsSpecificModelSnapshotRaw(requestParameters: any): Promise<any>;
    /**
     * /model/{model} [GET]
     */
    modelsSpecificModelSnapshot(requestParameters: any): Promise<any>;
}
export {};
