/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Color of the portfolio.
 */
export enum PortfolioRequestColor {
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
 * A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
 *
 * @remarks
 * Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.
 */
export class PortfolioRequestInput extends SpeakeasyBase {
    /**
     * Color of the portfolio.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: PortfolioRequestColor;

    /**
     * The name of the portfolio.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * True if the portfolio is public to its workspace members.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public" })
    public?: boolean;

    /**
     * Gid of an object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace" })
    workspace?: string;
}
