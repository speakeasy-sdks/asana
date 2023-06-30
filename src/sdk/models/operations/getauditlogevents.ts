/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAuditLogEventsRequest extends SpeakeasyBase {
    /**
     * Filter to events triggered by the actor with this ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actor_gid" })
    actorGid?: string;

    /**
     * Filter to events with an actor of this type.
     *
     * @remarks
     * This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=actor_type" })
    actorType?: shared.AuditLogActorType;

    /**
     * Filter to events created before this time (exclusive).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_at" })
    endAt?: Date;

    /**
     * Filter to events of this type.
     *
     * @remarks
     * Refer to the [Supported AuditLogEvents](/docs/supported-auditlogevents) for a full list of values.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event_type" })
    eventType?: string;

    /**
     * Results per page.
     *
     * @remarks
     * The number of objects to return per page. The value must be between 1 and 100.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Offset token.
     *
     * @remarks
     * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
     * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: string;

    /**
     * Filter to events with this resource ID.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_gid" })
    resourceGid?: string;

    /**
     * Filter to events created after this time (inclusive).
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_at" })
    startAt?: Date;

    /**
     * Globally unique identifier for the workspace or organization.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" })
    workspaceGid: string;
}

/**
 * AuditLogEvents were successfully retrieved.
 */
export class GetAuditLogEvents200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.AuditLogEvent })
    @Expose({ name: "data" })
    @Type(() => shared.AuditLogEvent)
    data?: shared.AuditLogEvent[];
}

export class GetAuditLogEventsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    @SpeakeasyMetadata()
    errorResponse?: shared.ErrorResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * AuditLogEvents were successfully retrieved.
     */
    @SpeakeasyMetadata()
    getAuditLogEvents200ApplicationJSONObject?: GetAuditLogEvents200ApplicationJSON;
}
