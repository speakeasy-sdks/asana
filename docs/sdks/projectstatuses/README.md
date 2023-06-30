# projectStatuses

## Overview

*Deprecated: new integrations should prefer using [status updates](/docs/asana-statuses)*

A project status is an update on the progress of a particular project,
and is sent out to all project followers when created. These updates
include both text describing the update and a color code intended to
represent the overall state of the project: "green" for projects that
are on track, "yellow" for projects at risk, "red" for projects that
are behind, and "blue" for projects on hold.

Project statuses can be created and deleted, but not modified.

### Available Operations

* [createProjectStatusForProject](#createprojectstatusforproject) - Create a project status
* [deleteProjectStatus](#deleteprojectstatus) - Delete a project status
* [getProjectStatus](#getprojectstatus) - Get a project status
* [getProjectStatusesForProject](#getprojectstatusesforproject) - Get statuses from a project

## createProjectStatusForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Creates a new status update on the project.

Returns the full record of the newly created project status update.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateProjectStatusForProjectResponse } from "Asana/dist/sdk/models/operations";
import { ProjectStatusRequestColor, ProjectStatusResponseColor } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectStatuses.createProjectStatusForProject({
  requestBody: {
    data: {
      color: ProjectStatusRequestColor.Blue,
      htmlText: "<body>The project <strong>is</strong> moving forward according to plan...</body>",
      text: "The project is moving forward according to plan...",
      title: "Status Update - Jun 15",
    },
  },
  optFields: [
    "hic",
    "recusandae",
  ],
  optPretty: false,
  projectGid: "omnis",
}).then((res: CreateProjectStatusForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.CreateProjectStatusForProjectRequest](../../models/operations/createprojectstatusforprojectrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.CreateProjectStatusForProjectResponse](../../models/operations/createprojectstatusforprojectresponse.md)>**


## deleteProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Deletes a specific, existing project status update.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteProjectStatusResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectStatuses.deleteProjectStatus({
  optFields: [
    "perspiciatis",
    "voluptatem",
    "porro",
  ],
  optPretty: false,
  projectStatusGid: "consequuntur",
}).then((res: DeleteProjectStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteProjectStatusRequest](../../models/operations/deleteprojectstatusrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteProjectStatusResponse](../../models/operations/deleteprojectstatusresponse.md)>**


## getProjectStatus

*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*

Returns the complete record for a single status update.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectStatusResponse } from "Asana/dist/sdk/models/operations";
import { ProjectStatusResponseColor } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectStatuses.getProjectStatus({
  optFields: [
    "error",
    "eaque",
    "occaecati",
  ],
  optPretty: false,
  projectStatusGid: "rerum",
}).then((res: GetProjectStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetProjectStatusRequest](../../models/operations/getprojectstatusrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetProjectStatusResponse](../../models/operations/getprojectstatusresponse.md)>**


## getProjectStatusesForProject

*Deprecated: new integrations should prefer the `/status_updates` route.*

Returns the compact project status update records for all updates on the project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectStatusesForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectStatuses.getProjectStatusesForProject({
  limit: 237893,
  offset: "asperiores",
  optFields: [
    "modi",
    "iste",
    "dolorum",
    "deleniti",
  ],
  optPretty: false,
  projectGid: "pariatur",
}).then((res: GetProjectStatusesForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetProjectStatusesForProjectRequest](../../models/operations/getprojectstatusesforprojectrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetProjectStatusesForProjectResponse](../../models/operations/getprojectstatusesforprojectresponse.md)>**

