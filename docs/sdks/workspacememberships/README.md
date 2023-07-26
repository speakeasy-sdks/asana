# workspaceMemberships

## Overview

This object determines if a user is a member of a workspace.

### Available Operations

* [getWorkspaceMembership](#getworkspacemembership) - Get a workspace membership
* [getWorkspaceMembershipsForUser](#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [getWorkspaceMembershipsForWorkspace](#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

## getWorkspaceMembership

Returns the complete workspace record for a single workspace membership.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWorkspaceMembershipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaceMemberships.getWorkspaceMembership({
  optFields: [
    "error",
    "officiis",
    "officiis",
  ],
  optPretty: false,
  workspaceMembershipGid: "accusamus",
}).then((res: GetWorkspaceMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetWorkspaceMembershipRequest](../../models/operations/getworkspacemembershiprequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetWorkspaceMembershipResponse](../../models/operations/getworkspacemembershipresponse.md)>**


## getWorkspaceMembershipsForUser

Returns the compact workspace membership records for the user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWorkspaceMembershipsForUserResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaceMemberships.getWorkspaceMembershipsForUser({
  limit: 618826,
  offset: "minima",
  optFields: [
    "ex",
  ],
  optPretty: false,
  userGid: "maiores",
}).then((res: GetWorkspaceMembershipsForUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetWorkspaceMembershipsForUserRequest](../../models/operations/getworkspacemembershipsforuserrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetWorkspaceMembershipsForUserResponse](../../models/operations/getworkspacemembershipsforuserresponse.md)>**


## getWorkspaceMembershipsForWorkspace

Returns the compact workspace membership records for the workspace.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWorkspaceMembershipsForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.workspaceMemberships.getWorkspaceMembershipsForWorkspace({
  limit: 544647,
  offset: "at",
  optFields: [
    "blanditiis",
    "suscipit",
    "repudiandae",
  ],
  optPretty: false,
  user: "atque",
  workspaceGid: "atque",
}).then((res: GetWorkspaceMembershipsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetWorkspaceMembershipsForWorkspaceRequest](../../models/operations/getworkspacemembershipsforworkspacerequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetWorkspaceMembershipsForWorkspaceResponse](../../models/operations/getworkspacemembershipsforworkspaceresponse.md)>**

