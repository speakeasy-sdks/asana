# workspaces

## Overview

A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.

An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its `is_organization` property.

Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any `workspace` parameter.

### Available Operations

* [addUserForWorkspace](#adduserforworkspace) - Add a user to a workspace or organization
* [getWorkspace](#getworkspace) - Get a workspace
* [getWorkspaces](#getworkspaces) - Get multiple workspaces
* [removeUserForWorkspace](#removeuserforworkspace) - Remove a user from a workspace or organization
* [updateWorkspace](#updateworkspace) - Update a workspace

## addUserForWorkspace

Add a user to a workspace or organization.
The user can be referenced by their globally unique user ID or their email address. Returns the full user record for the invited user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddUserForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaces.addUserForWorkspace({
  requestBody: {
    data: {
      user: "12345",
    },
  },
  optFields: [
    "recusandae",
  ],
  optPretty: false,
  workspaceGid: "dolorum",
}).then((res: AddUserForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AddUserForWorkspaceRequest](../../models/operations/adduserforworkspacerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AddUserForWorkspaceResponse](../../models/operations/adduserforworkspaceresponse.md)>**


## getWorkspace

Returns the full workspace record for a single workspace.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaces.getWorkspace({
  optFields: [
    "labore",
    "reiciendis",
    "doloremque",
    "repudiandae",
  ],
  optPretty: false,
  workspaceGid: "dicta",
}).then((res: GetWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetWorkspaceRequest](../../models/operations/getworkspacerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetWorkspaceResponse](../../models/operations/getworkspaceresponse.md)>**


## getWorkspaces

Returns the compact records for all workspaces visible to the authorized user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWorkspacesResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaces.getWorkspaces({
  limit: 36033,
  offset: "beatae",
  optFields: [
    "enim",
  ],
  optPretty: false,
}).then((res: GetWorkspacesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetWorkspacesRequest](../../models/operations/getworkspacesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetWorkspacesResponse](../../models/operations/getworkspacesresponse.md)>**


## removeUserForWorkspace

Remove a user from a workspace or organization.
The user making this call must be an admin in the workspace. The user can be referenced by their globally unique user ID or their email address.
Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveUserForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaces.removeUserForWorkspace({
  requestBody: {
    data: {
      user: "12345",
    },
  },
  optFields: [
    "velit",
    "a",
  ],
  optPretty: false,
  workspaceGid: "molestias",
}).then((res: RemoveUserForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.RemoveUserForWorkspaceRequest](../../models/operations/removeuserforworkspacerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.RemoveUserForWorkspaceResponse](../../models/operations/removeuserforworkspaceresponse.md)>**


## updateWorkspace

A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields provided in the data block will be updated; any unspecified fields will remain unchanged.
Currently the only field that can be modified for a workspace is its name.
Returns the complete, updated workspace record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaces.updateWorkspace({
  requestBody: {
    data: {
      name: "My Company Workspace",
    },
  },
  optFields: [
    "saepe",
    "consequuntur",
  ],
  optPretty: false,
  workspaceGid: "occaecati",
}).then((res: UpdateWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateWorkspaceRequest](../../models/operations/updateworkspacerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateWorkspaceResponse](../../models/operations/updateworkspaceresponse.md)>**

