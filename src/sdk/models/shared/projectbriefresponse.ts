/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export class ProjectBriefResponseProject extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;
}

/**
 * A *Project Brief* allows you to explain the what and why of the project to your team.
 */
export class ProjectBriefResponse extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * HTML formatted text for the project brief.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "html_text" })
    htmlText?: string;

    /**
     * A url that points directly to the object within Asana.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "permalink_url" })
    permalinkUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    @Type(() => ProjectBriefResponseProject)
    project?: ProjectBriefResponseProject;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;

    /**
     * [Opt In](/docs/input-output-options). The plain text of the project brief.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text?: string;

    /**
     * The title of the project brief.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;
}
