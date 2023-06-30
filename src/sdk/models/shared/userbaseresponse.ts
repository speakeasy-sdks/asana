/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
 */
export class UserBaseResponsePhoto extends SpeakeasyBase {
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
export class UserBaseResponse extends SpeakeasyBase {
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
    @Type(() => UserBaseResponsePhoto)
    photo?: UserBaseResponsePhoto;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;
}
