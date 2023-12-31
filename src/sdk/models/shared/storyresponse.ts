/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { CustomFieldCompact } from "./customfieldcompact";
import { EnumOption } from "./enumoption";
import { Like } from "./like";
import { Preview } from "./preview";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { StoryCompact } from "./storycompact";
import { StoryResponseDates } from "./storyresponsedates";
import { TagCompact } from "./tagcompact";
import { TaskCompact } from "./taskcompact";
import { UserCompact } from "./usercompact";
import { Expose, Transform, Type } from "class-transformer";

/**
 * *Conditional* The new value of a date custom field story.
 */
export class StoryResponseNewDateValue extends SpeakeasyBase {
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dueAt?: Date;

    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_on" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    dueOn?: RFCDate;

    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_on" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startOn?: RFCDate;
}

/**
 * *Conditional*. The old value of a date custom field story.
 */
export class StoryResponseOldDateValue extends SpeakeasyBase {
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dueAt?: Date;

    /**
     * The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "due_on" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    dueOn?: RFCDate;

    /**
     * The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_on" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    startOn?: RFCDate;
}

/**
 * The component of the Asana product the user used to trigger the story.
 */
export enum StoryResponseSource {
    Web = "web",
    Email = "email",
    Mobile = "mobile",
    Api = "api",
    Unknown = "unknown",
}

/**
 * The name of the sticker in this story. `null` if there is no sticker.
 */
export enum StoryResponseStickerName {
    GreenCheckmark = "green_checkmark",
    PeopleDancing = "people_dancing",
    DancingUnicorn = "dancing_unicorn",
    Heart = "heart",
    PartyPopper = "party_popper",
    PeopleWavingFlags = "people_waving_flags",
    SplashingNarwhal = "splashing_narwhal",
    Trophy = "trophy",
    YetiRidingUnicorn = "yeti_riding_unicorn",
    CelebratingPeople = "celebrating_people",
    DeterminedClimbers = "determined_climbers",
    PhoenixSpreadingLove = "phoenix_spreading_love",
}

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export enum StoryResponseTargetResourceSubtype {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval",
}

/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export class StoryResponseTarget extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * The name of the task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_subtype" })
    resourceSubtype?: StoryResponseTargetResourceSubtype;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;
}

export enum StoryResponseType {
    Comment = "comment",
    System = "system",
}

/**
 * A story represents an activity associated with an object in the Asana system.
 */
export class StoryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "assignee" })
    @Type(() => UserCompact)
    assignee?: UserCompact;

    /**
     * The time at which this resource was created.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "created_by" })
    @Type(() => UserCompact)
    createdBy?: UserCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_field" })
    @Type(() => CustomFieldCompact)
    customField?: CustomFieldCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "dependency" })
    @Type(() => TaskCompact)
    dependency?: TaskCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "duplicate_of" })
    @Type(() => TaskCompact)
    duplicateOf?: TaskCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "duplicated_from" })
    @Type(() => TaskCompact)
    duplicatedFrom?: TaskCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "follower" })
    @Type(() => UserCompact)
    follower?: UserCompact;

    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    /**
     * *Deprecated - please use likes instead*
     *
     * @remarks
     * *Conditional*. True if the story is hearted by the authorized user, false if not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hearted" })
    hearted?: boolean;

    /**
     * *Deprecated - please use likes instead*
     *
     * @remarks
     *
     * *Conditional*. Array of likes for users who have hearted this story.
     */
    @SpeakeasyMetadata({ elemType: Like })
    @Expose({ name: "hearts" })
    @Type(() => Like)
    hearts?: Like[];

    /**
     * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include the name of the creator.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "html_text" })
    htmlText?: string;

    /**
     * *Conditional*. Whether the text of the story can be edited after creation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_editable" })
    isEditable?: boolean;

    /**
     * *Conditional*. Whether the text of the story has been edited after creation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_edited" })
    isEdited?: boolean;

    /**
     * *Conditional*. Whether the story should be pinned on the resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_pinned" })
    isPinned?: boolean;

    /**
     * *Conditional*. True if the story is liked by the authorized user, false if not.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "liked" })
    liked?: boolean;

    /**
     * *Conditional*. Array of likes for users who have liked this story.
     */
    @SpeakeasyMetadata({ elemType: Like })
    @Expose({ name: "likes" })
    @Type(() => Like)
    likes?: Like[];

    /**
     * *Conditional*. The new value of approval status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_approval_status" })
    newApprovalStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "new_date_value" })
    @Type(() => StoryResponseNewDateValue)
    newDateValue?: StoryResponseNewDateValue;

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_dates" })
    @Type(() => StoryResponseDates)
    newDates?: StoryResponseDates;

    @SpeakeasyMetadata()
    @Expose({ name: "new_enum_value" })
    @Type(() => EnumOption)
    newEnumValue?: EnumOption;

    /**
     * *Conditional*. The new value of a multi-enum custom field story.
     */
    @SpeakeasyMetadata({ elemType: EnumOption })
    @Expose({ name: "new_multi_enum_values" })
    @Type(() => EnumOption)
    newMultiEnumValues?: EnumOption[];

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_name" })
    newName?: string;

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_number_value" })
    newNumberValue?: number;

    /**
     * *Conditional*. The new value of a people custom field story.
     */
    @SpeakeasyMetadata({ elemType: UserCompact })
    @Expose({ name: "new_people_value" })
    @Type(() => UserCompact)
    newPeopleValue?: UserCompact[];

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_resource_subtype" })
    newResourceSubtype?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "new_section" })
    @Type(() => SectionCompact)
    newSection?: SectionCompact;

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "new_text_value" })
    newTextValue?: string;

    /**
     * *Deprecated - please use likes instead*
     *
     * @remarks
     *
     * *Conditional*. The number of users who have hearted this story.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_hearts" })
    numHearts?: number;

    /**
     * *Conditional*. The number of users who have liked this story.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_likes" })
    numLikes?: number;

    /**
     * *Conditional*. The old value of approval status.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "old_approval_status" })
    oldApprovalStatus?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "old_date_value" })
    @Type(() => StoryResponseOldDateValue)
    oldDateValue?: StoryResponseOldDateValue;

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "old_dates" })
    @Type(() => StoryResponseDates)
    oldDates?: StoryResponseDates;

    @SpeakeasyMetadata()
    @Expose({ name: "old_enum_value" })
    @Type(() => EnumOption)
    oldEnumValue?: EnumOption;

    /**
     * *Conditional*. The old value of a multi-enum custom field story.
     */
    @SpeakeasyMetadata({ elemType: EnumOption })
    @Expose({ name: "old_multi_enum_values" })
    @Type(() => EnumOption)
    oldMultiEnumValues?: EnumOption[];

    /**
     * *Conditional*'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "old_name" })
    oldName?: string;

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "old_number_value" })
    oldNumberValue?: number;

    /**
     * *Conditional*. The old value of a people custom field story.
     */
    @SpeakeasyMetadata({ elemType: UserCompact })
    @Expose({ name: "old_people_value" })
    @Type(() => UserCompact)
    oldPeopleValue?: UserCompact[];

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "old_resource_subtype" })
    oldResourceSubtype?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "old_section" })
    @Type(() => SectionCompact)
    oldSection?: SectionCompact;

    /**
     * *Conditional*
     */
    @SpeakeasyMetadata()
    @Expose({ name: "old_text_value" })
    oldTextValue?: string;

    /**
     * *Conditional*. A collection of previews to be displayed in the story.
     *
     * @remarks
     *
     * *Note: This property only exists for comment stories.*
     */
    @SpeakeasyMetadata({ elemType: Preview })
    @Expose({ name: "previews" })
    @Type(() => Preview)
    previews?: Preview[];

    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    @Type(() => ProjectCompact)
    project?: ProjectCompact;

    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_subtype" })
    resourceSubtype?: string;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;

    /**
     * The component of the Asana product the user used to trigger the story.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: StoryResponseSource;

    /**
     * The name of the sticker in this story. `null` if there is no sticker.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sticker_name" })
    stickerName?: StoryResponseStickerName;

    @SpeakeasyMetadata()
    @Expose({ name: "story" })
    @Type(() => StoryCompact)
    story?: StoryCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    @Type(() => TagCompact)
    tag?: TagCompact;

    @SpeakeasyMetadata()
    @Expose({ name: "target" })
    @Type(() => StoryResponseTarget)
    target?: StoryResponseTarget;

    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    @Type(() => TaskCompact)
    task?: TaskCompact;

    /**
     * The plain text of the comment to add. Cannot be used with html_text.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: StoryResponseType;
}
