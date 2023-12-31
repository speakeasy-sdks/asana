/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TaskRemoveTagRequest extends SpeakeasyBase {
    /**
     * The tag to remove from the task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag: string;
}
