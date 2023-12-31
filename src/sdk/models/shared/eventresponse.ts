/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AsanaNamedResource } from "./asananamedresource";
import { UserCompact } from "./usercompact";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Information about the type of change that has occurred. This field is only present when the value of the property `action`, describing the action taken on the **resource**, is `changed`.
 */
export class EventResponseChange extends SpeakeasyBase {
    /**
     * The type of action taken on the **field** which has been changed.  This can be one of `changed`, `added`, or `removed` depending on the nature of the change.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action?: string;

    /**
     * *Conditional.* This property is only present when the **field's** `action` is `added` _and_ the `added_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/input-output-options)) when using the [Events](/docs/asana-events) endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "added_value" })
    addedValue?: any;

    /**
     * The name of the field that has changed in the resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "field" })
    field?: string;

    /**
     * *Conditional.* This property is only present when the **field's** `action` is `changed` _and_ the `new_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/input-output-options)) when using the [Events](/docs/asana-events) endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_value" })
    newValue?: any;

    /**
     * *Conditional.* This property is only present when the **field's** `action` is `removed` _and_ the `removed_value` is an Asana resource. This will be only the `gid` and `resource_type` of the resource when the events come from webhooks; this will be the compact representation (and can have fields expanded with [opt_fields](/docs/input-output-options)) when using the [Events](/docs/asana-events) endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "removed_value" })
    removedValue?: any;
}

/**
 * An *event* is an object representing a change to a resource that was
 *
 * @remarks
 * observed by an event subscription or delivered asynchronously to
 * the target location of an active webhook.
 *
 * The event may be triggered by a different `user` than the
 * subscriber. For example, if user A subscribes to a task and user B
 * modified it, the event’s user will be user B. Note: Some events
 * are generated by the system, and will have `null` as the user. API
 * consumers should make sure to handle this case.
 *
 * The `resource` that triggered the event may be different from the one
 * that the events were requested for or the webhook is subscribed to. For
 * example, a subscription to a project will contain events for tasks
 * contained within the project.
 *
 * **Note:** pay close attention to the relationship between the fields
 * `Event.action` and `Event.change.action`.
 * `Event.action` represents the action taken on the resource
 * itself, and `Event.change.action` represents how the information
 * within the resource's fields have been modified.
 *
 * For instance, consider these scenarios:
 *
 *
 * * When at task is added to a project, `Event.action` will be
 * `added`, `Event.parent` will be an object with the `id` and
 * `type` of the project, and there will be no `change` field.
 *
 *
 * * When an assignee is set on the task, `Event.parent` will be
 * `null`, `Event.action` will be `changed`,
 * `Event.change.action` will be `changed`, and `new_value` will
 * be an object with the user's `id` and `type`.
 *
 *
 * * When a collaborator is added to the task, `Event.parent` will
 * be `null`, `Event.action` will be `changed`,
 * `Event.change.action` will be `added`, and `added_value` will be
 * an object with the user's `id` and `type`.
 */
export class EventResponse extends SpeakeasyBase {
    /**
     * The type of action taken on the **resource** that triggered the event.  This can be one of `changed`, `added`, `removed`, `deleted`, or `undeleted` depending on the nature of the event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action?: string;

    /**
     * Information about the type of change that has occurred. This field is only present when the value of the property `action`, describing the action taken on the **resource**, is `changed`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "change" })
    @Type(() => EventResponseChange)
    change?: EventResponseChange;

    /**
     * The timestamp when the event occurred.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "parent" })
    @Type(() => AsanaNamedResource)
    parent?: AsanaNamedResource;

    @SpeakeasyMetadata()
    @Expose({ name: "resource" })
    @Type(() => AsanaNamedResource)
    resource?: AsanaNamedResource;

    /**
     * *Deprecated: Refer to the resource_type of the resource.* The type of the resource that generated the event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => UserCompact)
    user?: UserCompact;
}
