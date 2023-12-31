/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PortfolioRemoveItemRequest extends SpeakeasyBase {
    /**
     * The item to remove from the portfolio.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "item" })
    item: string;
}
