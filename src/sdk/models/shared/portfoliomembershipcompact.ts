/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PortfolioCompact } from "./portfoliocompact";
import { UserCompact } from "./usercompact";
import { Expose, Type } from "class-transformer";

/**
 * This object determines if a user is a member of a portfolio.
 */
export class PortfolioMembershipCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gid" })
    gid?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "portfolio" })
    @Type(() => PortfolioCompact)
    portfolio?: PortfolioCompact;

    /**
     * The base type of this resource.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resource_type" })
    resourceType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => UserCompact)
    user?: UserCompact;
}