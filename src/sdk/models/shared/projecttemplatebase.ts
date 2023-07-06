/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DateVariableCompact } from "./datevariablecompact";
import { TeamCompact } from "./teamcompact";
import { Expose, Type } from "class-transformer";

/**
 * Color of the project template.
 */
export enum ProjectTemplateBaseColor {
    DarkPink = "dark-pink",
    DarkGreen = "dark-green",
    DarkBlue = "dark-blue",
    DarkRed = "dark-red",
    DarkTeal = "dark-teal",
    DarkBrown = "dark-brown",
    DarkOrange = "dark-orange",
    DarkPurple = "dark-purple",
    DarkWarmGray = "dark-warm-gray",
    LightPink = "light-pink",
    LightGreen = "light-green",
    LightBlue = "light-blue",
    LightRed = "light-red",
    LightTeal = "light-teal",
    LightBrown = "light-brown",
    LightOrange = "light-orange",
    LightPurple = "light-purple",
    LightWarmGray = "light-warm-gray",
}

/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export class ProjectTemplateBaseOwner extends SpeakeasyBase {
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
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;
}

/**
 * A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time.
 */
export class ProjectTemplateBase extends SpeakeasyBase {
    /**
     * Color of the project template.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: ProjectTemplateBaseColor;

    /**
     * Free-form textual information associated with the project template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * The description of the project template with formatting as HTML.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "html_description" })
    htmlDescription?: string;

    /**
     * Name of the project template.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The current owner of the project template, may be null.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owner" })
    @Type(() => ProjectTemplateBaseOwner)
    owner?: ProjectTemplateBaseOwner;

    /**
     * True if the project template is public to its team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public" })
    public?: boolean;

    /**
     * Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.
     */
    @SpeakeasyMetadata({ elemType: DateVariableCompact })
    @Expose({ name: "requested_dates" })
    @Type(() => DateVariableCompact)
    requestedDates?: DateVariableCompact[];

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "team" })
    @Type(() => TeamCompact)
    team?: TeamCompact;
}