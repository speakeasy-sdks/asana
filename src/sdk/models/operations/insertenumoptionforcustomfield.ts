/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The enum option object to create.
 */
export class InsertEnumOptionForCustomFieldRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.EnumOptionInsertRequest)
    data?: shared.EnumOptionInsertRequest;
}

export class InsertEnumOptionForCustomFieldRequest extends SpeakeasyBase {
    /**
     * The enum option object to create.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: InsertEnumOptionForCustomFieldRequestBody;

    /**
     * Globally unique identifier for the custom field.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" })
    customFieldGid: string;

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
}

/**
 * Custom field enum option successfully reordered.
 */
export class InsertEnumOptionForCustomField200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.EnumOption)
    data?: shared.EnumOption;
}

export class InsertEnumOptionForCustomFieldResponse extends SpeakeasyBase {
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
     * Custom field enum option successfully reordered.
     */
    @SpeakeasyMetadata()
    insertEnumOptionForCustomField200ApplicationJSONObject?: InsertEnumOptionForCustomField200ApplicationJSON;
}
