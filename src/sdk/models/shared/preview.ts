/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A collection of rich text that will be displayed as a preview to another app.
 *
 * @remarks
 *
 * This is read-only except for a small group of whitelisted apps.
 */
export class Preview extends SpeakeasyBase {
    /**
     * Some fallback text to display if unable to display the full preview.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fallback" })
    fallback?: string;

    /**
     * Text to display in the footer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "footer" })
    footer?: string;

    /**
     * Text to display in the header.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "header" })
    header?: string;

    /**
     * Where the header will link to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "header_link" })
    headerLink?: string;

    /**
     * HTML formatted text for the body of the preview.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "html_text" })
    htmlText?: string;

    /**
     * Text for the body of the preview.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text?: string;

    /**
     * Text to display as the title.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    /**
     * Where to title will link to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title_link" })
    titleLink?: string;
}
