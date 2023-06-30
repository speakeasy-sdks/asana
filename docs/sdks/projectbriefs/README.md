# projectBriefs

## Overview

A project brief object represents a rich text document that describes a project.

Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.

### Available Operations

* [createProjectBrief](#createprojectbrief) - Create a project brief
* [deleteProjectBrief](#deleteprojectbrief) - Delete a project brief
* [getProjectBrief](#getprojectbrief) - Get a project brief
* [updateProjectBrief](#updateprojectbrief) - Update a project brief

## createProjectBrief

Creates a new project brief.

Returns the full record of the newly created project brief.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateProjectBriefResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectBriefs.createProjectBrief({
  requestBody: {
    data: {
      htmlText: "<body>This is a <strong>project brief</strong>.</body>",
      text: "This is a project brief.",
      title: "Stuff to buy — Project Brief",
    },
  },
  optFields: [
    "pariatur",
  ],
  optPretty: false,
  projectGid: "nemo",
}).then((res: CreateProjectBriefResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateProjectBriefRequest](../../models/operations/createprojectbriefrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateProjectBriefResponse](../../models/operations/createprojectbriefresponse.md)>**


## deleteProjectBrief

Deletes a specific, existing project brief.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteProjectBriefResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectBriefs.deleteProjectBrief({
  optFields: [
    "perferendis",
    "fugiat",
    "amet",
    "aut",
  ],
  optPretty: false,
  projectBriefGid: "cumque",
}).then((res: DeleteProjectBriefResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteProjectBriefRequest](../../models/operations/deleteprojectbriefrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteProjectBriefResponse](../../models/operations/deleteprojectbriefresponse.md)>**


## getProjectBrief

Get the full record for a project brief.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectBriefResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectBriefs.getProjectBrief({
  optFields: [
    "hic",
    "libero",
  ],
  optPretty: false,
  projectBriefGid: "nobis",
}).then((res: GetProjectBriefResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetProjectBriefRequest](../../models/operations/getprojectbriefrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetProjectBriefResponse](../../models/operations/getprojectbriefresponse.md)>**


## updateProjectBrief

An existing project brief can be updated by making a PUT request on the URL for
that project brief. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated project brief record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateProjectBriefResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectBriefs.updateProjectBrief({
  requestBody: {
    data: {
      htmlText: "<body>This is a <strong>project brief</strong>.</body>",
      text: "This is a project brief.",
      title: "Stuff to buy — Project Brief",
    },
  },
  optFields: [
    "quis",
  ],
  optPretty: false,
  projectBriefGid: "totam",
}).then((res: UpdateProjectBriefResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateProjectBriefRequest](../../models/operations/updateprojectbriefrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateProjectBriefResponse](../../models/operations/updateprojectbriefresponse.md)>**

