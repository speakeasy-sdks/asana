/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export class WorkspaceRequestInput extends SpeakeasyBase {
    /**
     * The name of the workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
