# tags

## Overview

A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.

Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.

### Available Operations

* [createTag](#createtag) - Create a tag
* [createTagForWorkspace](#createtagforworkspace) - Create a tag in a workspace
* [deleteTag](#deletetag) - Delete a tag
* [getTag](#gettag) - Get a tag
* [getTags](#gettags) - Get multiple tags
* [getTagsForTask](#gettagsfortask) - Get a task's tags
* [getTagsForWorkspace](#gettagsforworkspace) - Get tags in a workspace
* [updateTag](#updatetag) - Update a tag

## createTag

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateTagResponse } from "Asana/dist/sdk/models/operations";
import { TagRequestColor } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.createTag({
  requestBody: {
    data: {
      color: TagRequestColor.LightGreen,
      followers: [
        "inventore",
        "magnam",
      ],
      name: "Stuff to buy",
      notes: "Mittens really likes the stuff from Humboldt.",
      workspace: "12345",
    },
  },
  optFields: [
    "quo",
    "consectetur",
  ],
  optPretty: false,
}).then((res: CreateTagResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.CreateTagRequest](../../models/operations/createtagrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateTagResponse](../../models/operations/createtagresponse.md)>**


## createTagForWorkspace

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateTagForWorkspaceResponse } from "Asana/dist/sdk/models/operations";
import { TagResponseColor } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.createTagForWorkspace({
  requestBody: {
    data: {
      color: TagResponseColor.LightGreen,
      name: "Stuff to buy",
      notes: "Mittens really likes the stuff from Humboldt.",
      workspace: {
        name: "My Company Workspace",
      },
    },
  },
  optFields: [
    "aspernatur",
    "minima",
    "eaque",
    "a",
  ],
  optPretty: false,
  workspaceGid: "libero",
}).then((res: CreateTagForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateTagForWorkspaceRequest](../../models/operations/createtagforworkspacerequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateTagForWorkspaceResponse](../../models/operations/createtagforworkspaceresponse.md)>**


## deleteTag

A specific, existing tag can be deleted by making a DELETE request on
the URL for that tag.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteTagResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.deleteTag({
  limit: 13948,
  offset: "aut",
  optFields: [
    "impedit",
    "aliquam",
    "fugit",
  ],
  optPretty: false,
  tagGid: "accusamus",
}).then((res: DeleteTagResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.DeleteTagRequest](../../models/operations/deletetagrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.DeleteTagResponse](../../models/operations/deletetagresponse.md)>**


## getTag

Returns the complete tag record for a single tag.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTagResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.getTag({
  limit: 79522,
  offset: "non",
  optFields: [
    "dolorum",
  ],
  optPretty: false,
  tagGid: "laborum",
}).then((res: GetTagResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [operations.GetTagRequest](../../models/operations/gettagrequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetTagResponse](../../models/operations/gettagresponse.md)>**


## getTags

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTagsResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.getTags({
  limit: 810424,
  offset: "velit",
  optFields: [
    "autem",
    "nobis",
  ],
  optPretty: false,
  workspace: "quas",
}).then((res: GetTagsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetTagsRequest](../../models/operations/gettagsrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetTagsResponse](../../models/operations/gettagsresponse.md)>**


## getTagsForTask

Get a compact representation of all of the tags the task has.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTagsForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.getTagsForTask({
  limit: 829603,
  offset: "nulla",
  optFields: [
    "libero",
    "quasi",
  ],
  optPretty: false,
  taskGid: "tempora",
}).then((res: GetTagsForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTagsForTaskRequest](../../models/operations/gettagsfortaskrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTagsForTaskResponse](../../models/operations/gettagsfortaskresponse.md)>**


## getTagsForWorkspace

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTagsForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.getTagsForWorkspace({
  limit: 256139,
  offset: "explicabo",
  optFields: [
    "ipsa",
    "molestiae",
    "magnam",
  ],
  optPretty: false,
  workspaceGid: "odio",
}).then((res: GetTagsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetTagsForWorkspaceRequest](../../models/operations/gettagsforworkspacerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetTagsForWorkspaceResponse](../../models/operations/gettagsforworkspaceresponse.md)>**


## updateTag

Updates the properties of a tag. Only the fields provided in the `data`
block will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the tag.

Returns the complete updated tag record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateTagResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tags.updateTag({
  limit: 262118,
  offset: "esse",
  optFields: [
    "rem",
    "fuga",
  ],
  optPretty: false,
  tagGid: "reprehenderit",
}).then((res: UpdateTagResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.UpdateTagRequest](../../models/operations/updatetagrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdateTagResponse](../../models/operations/updatetagresponse.md)>**

