/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A response object returned from the task count endpoint.
 */
export class TaskCountResponse extends SpeakeasyBase {
    /**
     * The number of completed milestones in a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_completed_milestones" })
    numCompletedMilestones?: number;

    /**
     * The number of completed tasks in a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_completed_tasks" })
    numCompletedTasks?: number;

    /**
     * The number of incomplete milestones in a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_incomplete_milestones" })
    numIncompleteMilestones?: number;

    /**
     * The number of incomplete tasks in a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_incomplete_tasks" })
    numIncompleteTasks?: number;

    /**
     * The number of milestones in a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_milestones" })
    numMilestones?: number;

    /**
     * The number of tasks in a project.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_tasks" })
    numTasks?: number;
}
