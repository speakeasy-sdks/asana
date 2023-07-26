/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AddCustomFieldSettingRequest extends SpeakeasyBase {
    /**
     * The custom field to associate with this container.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_field" })
    customField: string;

    /**
     * A gid of a Custom Field Setting on this container, after which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insert_after" })
    insertAfter?: string;

    /**
     * A gid of a Custom Field Setting on this container, before which the new Custom Field Setting will be added.  `insert_before` and `insert_after` parameters cannot both be specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insert_before" })
    insertBefore?: string;

    /**
     * Whether this field should be considered important to this container (for instance, to display in the list view of items in the container).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_important" })
    isImportant?: boolean;
}
