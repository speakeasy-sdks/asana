/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Information about the custom field setting being removed.
 */
export class RemoveCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.RemoveCustomFieldSettingRequest)
    data?: shared.RemoveCustomFieldSettingRequest;
}

export class RemoveCustomFieldSettingForProjectRequest extends SpeakeasyBase {
    /**
     * Information about the custom field setting being removed.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: RemoveCustomFieldSettingForProjectRequestBody;

    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
    optPretty?: boolean;

    /**
     * Globally unique identifier for the project.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_gid" })
    projectGid: string;
}

/**
 * Successfully removed the custom field from the project.
 */
export class RemoveCustomFieldSettingForProject200ApplicationJSON extends SpeakeasyBase {
    /**
     * An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.EmptyResponse)
    data?: shared.EmptyResponse;
}

export class RemoveCustomFieldSettingForProjectResponse extends SpeakeasyBase {
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
     * Successfully removed the custom field from the project.
     */
    @SpeakeasyMetadata()
    removeCustomFieldSettingForProject200ApplicationJSONObject?: RemoveCustomFieldSettingForProject200ApplicationJSON;
}
