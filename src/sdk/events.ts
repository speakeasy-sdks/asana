/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * An event is an object representing a change to a resource that was observed by an event subscription. Event streams rely on the same infrastructure as webhooks, which ensures events are delivered within a minute (on average). This system is designed for at most once delivery, meaning in exceptional circumstances a small number of events may be missing from the stream. For this reason, if your use case requires strong guarantees about processing all changes on a resource and cannot tolerate any missing events, regardless of how rare that might be, we recommend building a fallback polling system that fetches the resource periodically as well. Note that while webhooks cannot be replayed once delivered, events are retrievable from the event stream for 24 hours after being processed.
 *
 * @remarks
 *
 * In general, requesting events on a resource is faster and subject to higher rate limits than requesting the resource itself. Additionally, change events "bubble up" (e.g., listening to events on a project would include when stories are added to tasks in the project, and even to subtasks).
 *
 * Establish an initial sync token by making a request with no sync token. The response will be a `412 Precondition Failed` error - the same as if the sync token had expired.
 *
 * Subsequent requests should always provide the sync token from the immediately preceding call.
 *
 * Sync tokens may not be valid if you attempt to go "backward" in the history by requesting previous tokens, though re-requesting the current sync token is generally safe, and will always return the same results.
 *
 * When you receive a `412 Precondition Failed` error, it means that the sync token is either invalid or expired. If you are attempting to keep a set of data in sync, this signals you may need to re-crawl the data.
 *
 * Sync tokens always expire after 24 hours, but may expire sooner, depending on load on the service.
 */

export class Events {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get events on a resource
     *
     * @remarks
     * Returns the full record for all events that have occurred since the sync
     * token was created.
     *
     * A `GET` request to the endpoint `/[path_to_resource]/events` can be made in
     * lieu of including the resource ID in the data for the request.
     *
     * Asana limits a single sync token to 100 events. If more than 100 events exist
     * for a given resource, `has_more: true` will be returned in the response, indicating
     * that there are more events to pull.
     *
     * *Note: The resource returned will be the resource that triggered the
     * event. This may be different from the one that the events were requested
     * for. For example, a subscription to a project will contain events for
     * tasks contained within the project.*
     */
    async getEvents(
        req: operations.GetEventsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetEventsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetEventsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/events";

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

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

        const res: operations.GetEventsResponse = new operations.GetEventsResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.getEvents200ApplicationJSONObject = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetEvents200ApplicationJSON
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [400, 401, 403, 404, 500].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
