/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ProjectSaveAsTemplateRequest extends SpeakeasyBase {
    /**
     * The name of the new project template.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Sets the project template to public to its team.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public" })
    public: boolean;

    /**
     * Sets the team of the new project template. If the project exists in an organization, specify team and not workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "team" })
    team?: string;

    /**
     * Sets the workspace of the new project template. Only specify workspace if the project exists in a workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace" })
    workspace?: string;
}
