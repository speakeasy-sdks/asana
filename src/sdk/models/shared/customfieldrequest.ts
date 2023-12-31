/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EnumOptionInput } from "./enumoption";
import { Expose, Type } from "class-transformer";

/**
 * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
 */
export enum CustomFieldRequestCustomLabelPosition {
    Prefix = "prefix",
    Suffix = "suffix",
}

/**
 * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
 */
export class CustomFieldRequestDateValue extends SpeakeasyBase {
    /**
     * A string representing the date in YYYY-MM-DD format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date?: string;

    /**
     * A string representing the date in ISO 8601 format. If no time value is selected, the value of `date-time` will be `null`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date_time" })
    dateTime?: string;
}

/**
 * Enum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 500.
 *
 * @remarks
 *
 * You can add enum options to a custom field by using the `POST /custom_fields/custom_field_gid/enum_options` endpoint.
 *
 * **It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the `enabled` field to false with the `PUT /enum_options/enum_option_gid` endpoint. Other attributes can be updated similarly.
 *
 * On creation of an enum option, `enabled` is always set to `true`, meaning the enum option is a selectable value for the custom field. Setting `enabled=false` is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.
 *
 * Enum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using `insert_before` or `insert_after` to reference an existing enum option. Only one of `insert_before` and `insert_after` can be provided when creating a new enum option.
 *
 * An enum options list can be reordered with the `POST /custom_fields/custom_field_gid/enum_options/insert` endpoint.
 */
export class CustomFieldRequestEnumValueInput extends SpeakeasyBase {
    /**
     * The color of the enum option. Defaults to ‘none’.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: string;

    /**
     * Whether or not the enum option is a selectable value for the custom field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    /**
     * The name of the enum option.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * The format of this custom field.
 */
export enum CustomFieldRequestFormat {
    Currency = "currency",
    Identifier = "identifier",
    Percentage = "percentage",
    Custom = "custom",
    None = "none",
}

/**
 * The type of the custom field. Must be one of the given values.
 *
 * @remarks
 *
 */
export enum CustomFieldRequestResourceSubtype {
    Text = "text",
    Enum = "enum",
    MultiEnum = "multi_enum",
    Number = "number",
    Date = "date",
    People = "people",
}

/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 *
 * @remarks
 *
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
 */
export class CustomFieldRequestInput extends SpeakeasyBase {
    /**
     * ISO 4217 currency code to format this custom field. This will be null if the `format` is not `currency`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency_code" })
    currencyCode?: string;

    /**
     * This is the string that appears next to the custom field value. This will be null if the `format` is not `custom`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_label" })
    customLabel?: string;

    /**
     * Only relevant for custom fields with `custom` format. This depicts where to place the custom label. This will be null if the `format` is not `custom`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_label_position" })
    customLabelPosition?: CustomFieldRequestCustomLabelPosition;

    /**
     * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen date (and optionally, time) value of a `date` custom field. If no date is selected, the value of `date_value` will be `null`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date_value" })
    @Type(() => CustomFieldRequestDateValue)
    dateValue?: CustomFieldRequestDateValue;

    /**
     * [Opt In](/docs/input-output-options). The description of the custom field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * *Conditional*. Determines if the custom field is enabled or not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "enabled" })
    enabled?: boolean;

    /**
     * *Conditional*. Only relevant for custom fields of type `enum`. This array specifies the possible values which an `enum` custom field can adopt. To modify the enum options, refer to [working with enum options](/docs/create-an-enum-option).
     */
    @SpeakeasyMetadata({ elemType: EnumOptionInput })
    @Expose({ name: "enum_options" })
    @Type(() => EnumOptionInput)
    enumOptions?: EnumOptionInput[];

    @SpeakeasyMetadata()
    @Expose({ name: "enum_value" })
    @Type(() => CustomFieldRequestEnumValueInput)
    enumValue?: CustomFieldRequestEnumValueInput;

    /**
     * The format of this custom field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "format" })
    format?: CustomFieldRequestFormat;

    /**
     * *Conditional*. This flag describes whether a follower of a task with this field should receive inbox notifications from changes to this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "has_notifications_enabled" })
    hasNotificationsEnabled?: boolean;

    /**
     * *Conditional*. Only relevant for custom fields of type `multi_enum`. This object is the chosen values of a `multi_enum` custom field.
     */
    @SpeakeasyMetadata({ elemType: EnumOptionInput })
    @Expose({ name: "multi_enum_values" })
    @Type(() => EnumOptionInput)
    multiEnumValues?: EnumOptionInput[];

    /**
     * The name of the custom field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * *Conditional*. This number is the value of a `number` custom field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number_value" })
    numberValue?: number;

    /**
     * *Conditional*. Only relevant for custom fields of type `people`. This array of user GIDs reflects the users to be written to a `people` custom field. Note that *write* operations will replace existing users (if any) in the custom field with the users specified in this array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "people_value" })
    peopleValue?: string[];

    /**
     * Only relevant for custom fields of type ‘Number’. This field dictates the number of places after the decimal to round to, i.e. 0 is integer values, 1 rounds to the nearest tenth, and so on. Must be between 0 and 6, inclusive.
     *
     * @remarks
     * For percentage format, this may be unintuitive, as a value of 0.25 has a precision of 0, while a value of 0.251 has a precision of 1. This is due to 0.25 being displayed as 25%.
     * The identifier format will always have a precision of 0.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "precision" })
    precision?: number;

    /**
     * The type of the custom field. Must be one of the given values.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_subtype" })
    resourceSubtype?: CustomFieldRequestResourceSubtype;

    /**
     * *Conditional*. This string is the value of a `text` custom field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text_value" })
    textValue?: string;

    /**
     * *Create-Only* The workspace to create a custom field in.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace" })
    workspace: string;
}
