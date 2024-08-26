/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  SeededScoreIncrement,
  Website,
} from '../models/index';
import {
    SeededScoreIncrementFromJSON,
    SeededScoreIncrementToJSON,
    WebsiteFromJSON,
    WebsiteToJSON,
} from '../models/index';

export interface WebsiteAssociateAssetRequest {
    asset: string;
    website: string;
}

export interface WebsiteAssociateConversationRequest {
    website: string;
    conversation: string;
}

export interface WebsiteAssociateMessageRequest {
    website: string;
    message: string;
}

export interface WebsiteAssociatePersonRequest {
    website: string;
    person: string;
}

export interface WebsiteAssociateWorkstreamSummaryRequest {
    website: string;
    workstreamSummary: string;
}

export interface WebsiteDisassociateAssetRequest {
    website: string;
    asset: string;
}

export interface WebsiteDisassociateConversationRequest {
    website: string;
    conversation: string;
}

export interface WebsiteDisassociateMessageRequest {
    website: string;
    message: string;
}

export interface WebsiteDisassociatePersonRequest {
    website: string;
    person: string;
}

export interface WebsiteDisassociateWorkstreamSummaryRequest {
    website: string;
    workstreamSummary: string;
}

export interface WebsiteScoresIncrementRequest {
    website: string;
    seededScoreIncrement?: SeededScoreIncrement;
}

export interface WebsiteUpdateRequest {
    transferables?: boolean;
    website?: Website;
}

export interface WebsitesSpecificWebsiteSnapshotRequest {
    website: string;
    transferables?: boolean;
}

/**
 * 
 */
export class WebsiteApi extends runtime.BaseAPI {

    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    async websiteAssociateAssetRaw(requestParameters: WebsiteAssociateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling websiteAssociateAsset.');
        }

        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteAssociateAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/assets/associate/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    async websiteAssociateAsset(requestParameters: WebsiteAssociateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteAssociateAssetRaw(requestParameters, initOverrides);
    }

    /**
     * This will associate a website with a conversation.
     * /website/{website}/conversations/associate/{conversation} [POST]
     */
    async websiteAssociateConversationRaw(requestParameters: WebsiteAssociateConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteAssociateConversation.');
        }

        if (requestParameters.conversation === null || requestParameters.conversation === undefined) {
            throw new runtime.RequiredError('conversation','Required parameter requestParameters.conversation was null or undefined when calling websiteAssociateConversation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/conversations/associate/{conversation}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"conversation"}}`, encodeURIComponent(String(requestParameters.conversation))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a conversation.
     * /website/{website}/conversations/associate/{conversation} [POST]
     */
    async websiteAssociateConversation(requestParameters: WebsiteAssociateConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteAssociateConversationRaw(requestParameters, initOverrides);
    }

    /**
     * This will associate a website with a message.
     * /website/{website}/messages/associate/{message} [POST]
     */
    async websiteAssociateMessageRaw(requestParameters: WebsiteAssociateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteAssociateMessage.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling websiteAssociateMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/messages/associate/{message}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a message.
     * /website/{website}/messages/associate/{message} [POST]
     */
    async websiteAssociateMessage(requestParameters: WebsiteAssociateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteAssociateMessageRaw(requestParameters, initOverrides);
    }

    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    async websiteAssociatePersonRaw(requestParameters: WebsiteAssociatePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteAssociatePerson.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling websiteAssociatePerson.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/persons/associate/{person}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"person"}}`, encodeURIComponent(String(requestParameters.person))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    async websiteAssociatePerson(requestParameters: WebsiteAssociatePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteAssociatePersonRaw(requestParameters, initOverrides);
    }

    /**
     * This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /website/{website}/workstream_summaries/associate/{workstream_summary} [POST]
     */
    async websiteAssociateWorkstreamSummaryRaw(requestParameters: WebsiteAssociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteAssociateWorkstreamSummary.');
        }

        if (requestParameters.workstreamSummary === null || requestParameters.workstreamSummary === undefined) {
            throw new runtime.RequiredError('workstreamSummary','Required parameter requestParameters.workstreamSummary was null or undefined when calling websiteAssociateWorkstreamSummary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/workstream_summaries/associate/{workstream_summary}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"workstream_summary"}}`, encodeURIComponent(String(requestParameters.workstreamSummary))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will associate a website with a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /website/{website}/workstream_summaries/associate/{workstream_summary} [POST]
     */
    async websiteAssociateWorkstreamSummary(requestParameters: WebsiteAssociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteAssociateWorkstreamSummaryRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    async websiteDisassociateAssetRaw(requestParameters: WebsiteDisassociateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteDisassociateAsset.');
        }

        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling websiteDisassociateAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/assets/disassociate/{asset}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    async websiteDisassociateAsset(requestParameters: WebsiteDisassociateAssetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteDisassociateAssetRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to dissassociate a website from a conversation.
     * /website/{website}/conversations/disassociate/{conversation} [POST]
     */
    async websiteDisassociateConversationRaw(requestParameters: WebsiteDisassociateConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteDisassociateConversation.');
        }

        if (requestParameters.conversation === null || requestParameters.conversation === undefined) {
            throw new runtime.RequiredError('conversation','Required parameter requestParameters.conversation was null or undefined when calling websiteDisassociateConversation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/conversations/disassociate/{conversation}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"conversation"}}`, encodeURIComponent(String(requestParameters.conversation))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a website from a conversation.
     * /website/{website}/conversations/disassociate/{conversation} [POST]
     */
    async websiteDisassociateConversation(requestParameters: WebsiteDisassociateConversationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteDisassociateConversationRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to disassociate a website from a message.
     * /website/{website}/messages/disassociate/{message} [POST]
     */
    async websiteDisassociateMessageRaw(requestParameters: WebsiteDisassociateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteDisassociateMessage.');
        }

        if (requestParameters.message === null || requestParameters.message === undefined) {
            throw new runtime.RequiredError('message','Required parameter requestParameters.message was null or undefined when calling websiteDisassociateMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/messages/disassociate/{message}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"message"}}`, encodeURIComponent(String(requestParameters.message))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to disassociate a website from a message.
     * /website/{website}/messages/disassociate/{message} [POST]
     */
    async websiteDisassociateMessage(requestParameters: WebsiteDisassociateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteDisassociateMessageRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    async websiteDisassociatePersonRaw(requestParameters: WebsiteDisassociatePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteDisassociatePerson.');
        }

        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person','Required parameter requestParameters.person was null or undefined when calling websiteDisassociatePerson.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/persons/disassociate/{person}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"person"}}`, encodeURIComponent(String(requestParameters.person))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    async websiteDisassociatePerson(requestParameters: WebsiteDisassociatePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteDisassociatePersonRaw(requestParameters, initOverrides);
    }

    /**
     * This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /website/{website}/workstream_summaries/disassociate/{workstream_summary} [POST]
     */
    async websiteDisassociateWorkstreamSummaryRaw(requestParameters: WebsiteDisassociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteDisassociateWorkstreamSummary.');
        }

        if (requestParameters.workstreamSummary === null || requestParameters.workstreamSummary === undefined) {
            throw new runtime.RequiredError('workstreamSummary','Required parameter requestParameters.workstreamSummary was null or undefined when calling websiteDisassociateWorkstreamSummary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}/workstream_summaries/disassociate/{workstream_summary}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"workstream_summary"}}`, encodeURIComponent(String(requestParameters.workstreamSummary))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will enable us to disassociate a website from a workstream summary. This will do the same thing as the workstreamSummary equivalent.
     * /website/{website}/workstream_summaries/disassociate/{workstream_summary} [POST]
     */
    async websiteDisassociateWorkstreamSummary(requestParameters: WebsiteDisassociateWorkstreamSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteDisassociateWorkstreamSummaryRaw(requestParameters, initOverrides);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    async websiteScoresIncrementRaw(requestParameters: WebsiteScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websiteScoresIncrement.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/website/{website}/scores/increment`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededScoreIncrementToJSON(requestParameters.seededScoreIncrement),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    async websiteScoresIncrement(requestParameters: WebsiteScoresIncrementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.websiteScoresIncrementRaw(requestParameters, initOverrides);
    }

    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    async websiteUpdateRaw(requestParameters: WebsiteUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Website>> {
        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/website/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebsiteToJSON(requestParameters.website),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebsiteFromJSON(jsonValue));
    }

    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    async websiteUpdate(requestParameters: WebsiteUpdateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Website> {
        const response = await this.websiteUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    async websitesSpecificWebsiteSnapshotRaw(requestParameters: WebsitesSpecificWebsiteSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Website>> {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website','Required parameter requestParameters.website was null or undefined when calling websitesSpecificWebsiteSnapshot.');
        }

        const queryParameters: any = {};

        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/website/{website}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebsiteFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    async websitesSpecificWebsiteSnapshot(requestParameters: WebsitesSpecificWebsiteSnapshotRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Website> {
        const response = await this.websitesSpecificWebsiteSnapshotRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
