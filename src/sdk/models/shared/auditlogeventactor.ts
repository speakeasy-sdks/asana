/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of actor.
 *
 * @remarks
 * Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
 */
export enum AuditLogEventActorActorType {
    User = "user",
    Asana = "asana",
    AsanaSupport = "asana_support",
    Anonymous = "anonymous",
    ExternalAdministrator = "external_administrator",
}

/**
 * The entity that triggered the event. Will typically be a user.
 */
export class AuditLogEventActor extends SpeakeasyBase {
    /**
     * The type of actor.
     *
     * @remarks
     * Can be one of `user`, `asana`, `asana_support`, `anonymous`, or `external_administrator`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actor_type" })
    actorType?: AuditLogEventActorActorType;

    /**
     * The email of the actor, if it is a user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Globally unique identifier of the actor, if it is a user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * The name of the actor, if it is a user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
