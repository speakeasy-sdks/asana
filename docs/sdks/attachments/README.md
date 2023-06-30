# attachments

## Overview

An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.

### Available Operations

* [createAttachmentForObject](#createattachmentforobject) - Upload an attachment
* [deleteAttachment](#deleteattachment) - Delete an attachment
* [getAttachment](#getattachment) - Get an attachment
* [getAttachmentsForObject](#getattachmentsforobject) - Get attachments from an object

## createAttachmentForObject

Upload an attachment.

This method uploads an attachment on an object and returns the compact
record for the created attachment object. This is possible by either:

- Providing the URL of the external resource being attached, or
- Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach
files from third party services such as Dropbox, Box, Vimeo & Google Drive via the API

The 100MB size limit on attachments in Asana is enforced on this endpoint.

This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.

Requests made should follow the HTTP/1.1 specification that line
terminators are of the form `CRLF` or `\r\n` outlined
[here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateAttachmentForObjectResponse } from "Asana/dist/sdk/models/operations";
import { AttachmentRequestResourceSubtype, AttachmentResponseParentResourceSubtype } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.attachments.createAttachmentForObject({
  attachmentRequest1: {
    connectToApp: false,
    file: {
      content: "magnam".encode(),
      file: "debitis",
    },
    name: "Lucia Goldner",
    parent: "minus",
    resourceSubtype: AttachmentRequestResourceSubtype.External,
    url: "placeat",
  },
  optFields: [
    "iusto",
    "excepturi",
    "nisi",
  ],
  optPretty: false,
}).then((res: CreateAttachmentForObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateAttachmentForObjectRequest](../../models/operations/createattachmentforobjectrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateAttachmentForObjectResponse](../../models/operations/createattachmentforobjectresponse.md)>**


## deleteAttachment

Deletes a specific, existing attachment.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteAttachmentResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.attachments.deleteAttachment({
  attachmentGid: "recusandae",
  optFields: [
    "ab",
    "quis",
    "veritatis",
    "deserunt",
  ],
  optPretty: false,
}).then((res: DeleteAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DeleteAttachmentRequest](../../models/operations/deleteattachmentrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DeleteAttachmentResponse](../../models/operations/deleteattachmentresponse.md)>**


## getAttachment

Get the full record for a single attachment.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetAttachmentResponse } from "Asana/dist/sdk/models/operations";
import { AttachmentResponseParentResourceSubtype } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.attachments.getAttachment({
  attachmentGid: "perferendis",
  optFields: [
    "repellendus",
    "sapiente",
  ],
  optPretty: false,
}).then((res: GetAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAttachmentRequest](../../models/operations/getattachmentrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAttachmentResponse](../../models/operations/getattachmentresponse.md)>**


## getAttachmentsForObject

Returns the compact records for all attachments on the object.

There are three possible `parent` values for this request: `project`, `project_brief`, and `task`. For a project, an attachment refers to a file uploaded to the "Key resources" section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetAttachmentsForObjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.attachments.getAttachmentsForObject({
  limit: 778157,
  offset: "odit",
  optFields: [
    "at",
    "maiores",
    "molestiae",
    "quod",
  ],
  optPretty: false,
  parent: "quod",
}).then((res: GetAttachmentsForObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAttachmentsForObjectRequest](../../models/operations/getattachmentsforobjectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAttachmentsForObjectResponse](../../models/operations/getattachmentsforobjectresponse.md)>**

