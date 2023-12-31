/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export class GoalRequestInput extends SpeakeasyBase {
    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_on" })
    dueOn?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "followers" })
    followers?: string[];

    /**
     * The notes of the goal with formatting as HTML.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "html_notes" })
    htmlNotes?: string;

    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization. Whether the goal belongs to the `workspace` (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_workspace_level" })
    isWorkspaceLevel?: boolean;

    /**
     * True if the goal is liked by the authorized user, false if not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "liked" })
    liked?: boolean;

    /**
     * The name of the goal.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Free-form textual information associated with the goal (i.e. its description).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    /**
     * The `gid` of a user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owner" })
    owner?: string;

    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_on" })
    startOn?: string;

    /**
     * The current status of this goal. When the goal is open, its status can be `green`, `yellow`, and `red` to reflect "On Track", "At Risk", and "Off Track", respectively. When the goal is closed, the value can be `missed`, `achieved`, `partial`, or `dropped`.
     *
     * @remarks
     * *Note* you can only write to this property if `metric` is set.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;

    /**
     * *Conditional*. This property is only present when the `workspace` provided is an organization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "team" })
    team?: string;

    /**
     * The `gid` of a time period.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "time_period" })
    timePeriod?: string;

    /**
     * The `gid` of a workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace" })
    workspace?: string;
}
