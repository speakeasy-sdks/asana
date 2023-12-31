/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class AttachmentRequestFile extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    file: string;
}

/**
 * The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.
 *
 * @remarks
 *
 */
export enum AttachmentRequestResourceSubtype {
    Asana = "asana",
    Dropbox = "dropbox",
    Gdrive = "gdrive",
    Onedrive = "onedrive",
    Box = "box",
    Vimeo = "vimeo",
    External = "external",
}

/**
 * The file you want to upload.
 *
 * @remarks
 *
 * *Note when using curl:*
 *
 * Be sure to add an `‘@’` before the file path, and use the `--form`
 * option instead of the `-d` option.
 *
 * When uploading PDFs with curl, force the content-type to be pdf by
 * appending the content type to the file path: `--form
 * "file=@file.pdf;type=application/pdf"`.
 */
export class AttachmentRequest1 extends SpeakeasyBase {
    /**
     * *Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app should be connected with the attachment for the purposes of showing an app components widget. Requires the app to have been added to a project the parent task is in.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=connect_to_app" })
    connectToApp?: boolean;

    /**
     * Required for `asana` attachments.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file?: AttachmentRequestFile;

    /**
     * The name of the external resource being attached. Required for attachments of type `external`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=name" })
    name?: string;

    /**
     * Required identifier of the parent task, project, or project_brief, as a string.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=parent" })
    parent?: string;

    /**
     * The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=resource_subtype" })
    resourceSubtype?: AttachmentRequestResourceSubtype;

    /**
     * The URL of the external resource being attached. Required for attachments of type `external`.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=url" })
    url?: string;
}
