# projectMemberships

## Overview

With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.

### Available Operations

* [getProjectMembership](#getprojectmembership) - Get a project membership
* [getProjectMembershipsForProject](#getprojectmembershipsforproject) - Get memberships from a project

## getProjectMembership

Returns the complete project record for a single project membership.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectMembershipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectMemberships.getProjectMembership({
  optFields: [
    "eaque",
    "quis",
  ],
  optPretty: false,
  projectMembershipGid: "nesciunt",
}).then((res: GetProjectMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetProjectMembershipRequest](../../models/operations/getprojectmembershiprequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetProjectMembershipResponse](../../models/operations/getprojectmembershipresponse.md)>**


## getProjectMembershipsForProject

Returns the compact project membership records for the project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectMembershipsForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectMemberships.getProjectMembershipsForProject({
  limit: 179490,
  offset: "perferendis",
  optFields: [
    "minus",
  ],
  optPretty: false,
  projectGid: "quam",
  user: "dolor",
}).then((res: GetProjectMembershipsForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetProjectMembershipsForProjectRequest](../../models/operations/getprojectmembershipsforprojectrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetProjectMembershipsForProjectResponse](../../models/operations/getprojectmembershipsforprojectresponse.md)>**

