/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The primary object that was affected by this event.
 */
export class AuditLogEventResource extends SpeakeasyBase {
    /**
     * The email of the resource, if applicable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Globally unique identifier of the resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * The name of the resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The subtype of resource. Most resources will not have a subtype.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_subtype" })
    resourceSubtype?: string;

    /**
     * The type of resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;
}
