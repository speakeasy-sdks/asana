/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 */
export class SectionResponse extends SpeakeasyBase {
    /**
     * The time at which this resource was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * The name of the section (i.e. the text displayed as the section header).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    @Type(() => ProjectCompact)
    project?: ProjectCompact;

    /**
     * *Deprecated - please use project instead*
     */
    @SpeakeasyMetadata({ elemType: ProjectCompact })
    @Expose({ name: "projects" })
    @Type(() => ProjectCompact)
    projects?: ProjectCompact[];

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;
}
