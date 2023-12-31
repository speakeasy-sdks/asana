/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ProjectSectionInsertRequest extends SpeakeasyBase {
    /**
     * Insert the given section immediately after the section specified by this parameter.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "after_section" })
    afterSection?: string;

    /**
     * Insert the given section immediately before the section specified by this parameter.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "before_section" })
    beforeSection?: string;

    /**
     * The project in which to reorder the given section.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project: string;

    /**
     * The section to reorder.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "section" })
    section: string;
}
