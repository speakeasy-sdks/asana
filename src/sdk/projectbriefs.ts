/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * A project brief object represents a rich text document that describes a project.
 *
 * @remarks
 *
 * Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.
 */
export class ProjectBriefs {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a project brief
     *
     * @remarks
     * Creates a new project brief.
     *
     * Returns the full record of the newly created project brief.
     */
    async createProjectBrief(
        req: operations.CreateProjectBriefRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateProjectBriefResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateProjectBriefRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/projects/{project_gid}/project_briefs",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.CreateProjectBriefResponse =
            new operations.CreateProjectBriefResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createProjectBrief201ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.CreateProjectBrief201ApplicationJSON
                    );
                }
                break;
            case [400, 401, 402, 403, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Delete a project brief
     *
     * @remarks
     * Deletes a specific, existing project brief.
     *
     * Returns an empty data record.
     */
    async deleteProjectBrief(
        req: operations.DeleteProjectBriefRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteProjectBriefResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteProjectBriefRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project_briefs/{project_brief_gid}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "delete",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteProjectBriefResponse =
            new operations.DeleteProjectBriefResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteProjectBrief200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteProjectBrief200ApplicationJSON
                    );
                }
                break;
            case [400, 401, 403, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get a project brief
     *
     * @remarks
     * Get the full record for a project brief.
     */
    async getProjectBrief(
        req: operations.GetProjectBriefRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetProjectBriefResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetProjectBriefRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project_briefs/{project_brief_gid}", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetProjectBriefResponse = new operations.GetProjectBriefResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getProjectBrief200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetProjectBrief200ApplicationJSON
                    );
                }
                break;
            case [400, 401, 402, 403, 404, 424, 500, 501, 503, 504].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Update a project brief
     *
     * @remarks
     * An existing project brief can be updated by making a PUT request on the URL for
     * that project brief. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated project brief record.
     */
    async updateProjectBrief(
        req: operations.UpdateProjectBriefRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateProjectBriefResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateProjectBriefRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/project_briefs/{project_brief_gid}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateProjectBriefResponse =
            new operations.UpdateProjectBriefResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateProjectBrief200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateProjectBrief200ApplicationJSON
                    );
                }
                break;
            case [400, 401, 403, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
                    );
                }
                break;
        }

        return res;
    }
}