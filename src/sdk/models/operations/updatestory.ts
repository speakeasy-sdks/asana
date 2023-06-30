/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The comment story to update.
 */
export class UpdateStoryRequestBodyInput extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.StoryRequestInput)
    data?: shared.StoryRequestInput;
}

export class UpdateStoryRequest extends SpeakeasyBase {
    /**
     * The comment story to update.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: UpdateStoryRequestBodyInput;

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
     * Globally unique identifier for the story.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_gid" })
    storyGid: string;
}

/**
 * Successfully retrieved the specified story.
 */
export class UpdateStory200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.StoryResponse)
    data?: shared.StoryResponse;
}

export class UpdateStoryResponse extends SpeakeasyBase {
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
     * Successfully retrieved the specified story.
     */
    @SpeakeasyMetadata()
    updateStory200ApplicationJSONObject?: UpdateStory200ApplicationJSON;
}
