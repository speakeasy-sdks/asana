/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SectionTaskInsertRequest extends SpeakeasyBase {
    /**
     * An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insert_after" })
    insertAfter?: string;

    /**
     * An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "insert_before" })
    insertBefore?: string;

    /**
     * The task to add to this section.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    task: string;
}