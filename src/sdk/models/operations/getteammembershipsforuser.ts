/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTeamMembershipsForUserRequest extends SpeakeasyBase {
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
     * Defines fields to return.
     *
     * @remarks
     * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
     * The id of included objects will always be returned, regardless of the field options.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
    optFields?: string[];

    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
    optPretty?: boolean;

    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a user.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_gid" })
    userGid: string;

    /**
     * Globally unique identifier for the workspace.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
    workspace: string;
}

/**
 * Successfully retrieved the requested users's memberships.
 */
export class GetTeamMembershipsForUser200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.TeamMembershipCompact })
    @Expose({ name: "data" })
    @Type(() => shared.TeamMembershipCompact)
    data?: shared.TeamMembershipCompact[];
}

export class GetTeamMembershipsForUserResponse extends SpeakeasyBase {
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
     * Successfully retrieved the requested users's memberships.
     */
    @SpeakeasyMetadata()
    getTeamMembershipsForUser200ApplicationJSONObject?: GetTeamMembershipsForUser200ApplicationJSON;
}
