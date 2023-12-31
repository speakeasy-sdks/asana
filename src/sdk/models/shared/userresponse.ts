/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";
import { Expose, Type } from "class-transformer";

/**
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
 */
export class UserResponsePhoto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "image_1024x1024" })
    image1024x1024?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_128x128" })
    image128x128?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_21x21" })
    image21x21?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_27x27" })
    image27x27?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_36x36" })
    image36x36?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "image_60x60" })
    image60x60?: string;
}

/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export class UserResponse extends SpeakeasyBase {
    /**
     * The user's email address.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photo" })
    @Type(() => UserResponsePhoto)
    photo?: UserResponsePhoto;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;

    /**
     * Workspaces and organizations this user may access.
     *
     * @remarks
     * Note\: The API will only return workspaces and organizations that also contain the authenticated user.
     */
    @SpeakeasyMetadata({ elemType: WorkspaceCompact })
    @Expose({ name: "workspaces" })
    @Type(() => WorkspaceCompact)
    workspaces?: WorkspaceCompact[];
}
