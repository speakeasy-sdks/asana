/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 *
 * @remarks
 *
 * Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.
 *
 * The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.
 */
export class Sections {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Add task to section
     *
     * @remarks
     * Add a task to a specific, existing section. This will remove the task from other sections of the project.
     *
     * The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.
     *
     * This does not work for separators (tasks with the resource_subtype of section).
     */
    async addTaskForSection(
        req: operations.AddTaskForSectionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.AddTaskForSectionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddTaskForSectionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/sections/{section_gid}/addTask", req);

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

        const res: operations.AddTaskForSectionResponse = new operations.AddTaskForSectionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.addTaskForSection200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.AddTaskForSection200ApplicationJSON
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
     * Create a section in a project
     *
     * @remarks
     * Creates a new section in a project.
     * Returns the full record of the newly created section.
     */
    async createSectionForProject(
        req: operations.CreateSectionForProjectRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.CreateSectionForProjectResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CreateSectionForProjectRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/projects/{project_gid}/sections", req);

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

        const res: operations.CreateSectionForProjectResponse =
            new operations.CreateSectionForProjectResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 201:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.createSectionForProject201ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.CreateSectionForProject201ApplicationJSON
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
     * Delete a section
     *
     * @remarks
     * A specific, existing section can be deleted by making a DELETE request on
     * the URL for that section.
     *
     * Note that sections must be empty to be deleted.
     *
     * The last remaining section cannot be deleted.
     *
     * Returns an empty data block.
     */
    async deleteSection(
        req: operations.DeleteSectionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteSectionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteSectionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/sections/{section_gid}", req);

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

        const res: operations.DeleteSectionResponse = new operations.DeleteSectionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.deleteSection200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.DeleteSection200ApplicationJSON
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
     * Get a section
     *
     * @remarks
     * Returns the complete record for a single section.
     */
    async getSection(
        req: operations.GetSectionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetSectionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSectionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/sections/{section_gid}", req);

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

        const res: operations.GetSectionResponse = new operations.GetSectionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getSection200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetSection200ApplicationJSON
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
     * Get sections in a project
     *
     * @remarks
     * Returns the compact records for all sections in the specified project.
     */
    async getSectionsForProject(
        req: operations.GetSectionsForProjectRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetSectionsForProjectResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSectionsForProjectRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/projects/{project_gid}/sections", req);

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

        const res: operations.GetSectionsForProjectResponse =
            new operations.GetSectionsForProjectResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getSectionsForProject200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetSectionsForProject200ApplicationJSON
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
     * Move or Insert sections
     *
     * @remarks
     * Move sections relative to each other. One of
     * `before_section` or `after_section` is required.
     *
     * Sections cannot be moved between projects.
     *
     * Returns an empty data block.
     */
    async insertSectionForProject(
        req: operations.InsertSectionForProjectRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.InsertSectionForProjectResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.InsertSectionForProjectRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/projects/{project_gid}/sections/insert",
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

        const res: operations.InsertSectionForProjectResponse =
            new operations.InsertSectionForProjectResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.insertSectionForProject200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.InsertSectionForProject200ApplicationJSON
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
     * Update a section
     *
     * @remarks
     * A specific, existing section can be updated by making a PUT request on
     * the URL for that project. Only the fields provided in the `data` block
     * will be updated; any unspecified fields will remain unchanged. (note that
     * at this time, the only field that can be updated is the `name` field.)
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated section record.
     */
    async updateSection(
        req: operations.UpdateSectionRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateSectionResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateSectionRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/sections/{section_gid}", req);

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

        const res: operations.UpdateSectionResponse = new operations.UpdateSectionResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.updateSection200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.UpdateSection200ApplicationJSON
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
