/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ErrorT extends SpeakeasyBase {
    /**
     * Additional information directing developers to resources on how to address and fix the problem, if available.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "help" })
    help?: string;

    /**
     * Message providing more detail about the error that occurred, if available.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * *500 errors only*. A unique error phrase which can be used when contacting developer support to help identify the exact occurrence of the problem in Asana’s logs.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phrase" })
    phrase?: string;
}
