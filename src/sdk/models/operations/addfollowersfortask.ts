/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The followers to add to the task.
 */
export class AddFollowersForTaskRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.TaskAddFollowersRequest)
    data?: shared.TaskAddFollowersRequest;
}

export class AddFollowersForTaskRequest extends SpeakeasyBase {
    /**
     * The followers to add to the task.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: AddFollowersForTaskRequestBody;

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
     * The task to operate on.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" })
    taskGid: string;
}

/**
 * Successfully added the specified followers to the task.
 */
export class AddFollowersForTask200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.TaskResponse)
    data?: shared.TaskResponse;
}

export class AddFollowersForTaskResponse extends SpeakeasyBase {
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
     * Successfully added the specified followers to the task.
     */
    @SpeakeasyMetadata()
    addFollowersForTask200ApplicationJSONObject?: AddFollowersForTask200ApplicationJSON;
}
