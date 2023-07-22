/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A user identification object for specification with the addUser/removeUser endpoints.
 */
export class WorkspaceRemoveUserRequest extends SpeakeasyBase {
    /**
     * A string identifying a user. This can either be the string "me", an email, or the gid of a user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: string;
}
