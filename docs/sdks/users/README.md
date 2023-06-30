# users

## Overview

A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.

Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier `me` can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, `GET /users/me`).

### Available Operations

* [getFavoritesForUser](#getfavoritesforuser) - Get a user's favorites
* [getUser](#getuser) - Get a user
* [getUsers](#getusers) - Get multiple users
* [getUsersForTeam](#getusersforteam) - Get users in a team
* [getUsersForWorkspace](#getusersforworkspace) - Get users in a workspace or organization

## getFavoritesForUser

Returns all of a user's favorites in the given workspace, of the given type.
Results are given in order (The same order as Asana's sidebar).

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetFavoritesForUserResourceType, GetFavoritesForUserResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.users.getFavoritesForUser({
  optFields: [
    "esse",
  ],
  optPretty: false,
  resourceType: GetFavoritesForUserResourceType.Tag,
  userGid: "sit",
  workspace: "voluptatum",
}).then((res: GetFavoritesForUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetFavoritesForUserRequest](../../models/operations/getfavoritesforuserrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetFavoritesForUserResponse](../../models/operations/getfavoritesforuserresponse.md)>**


## getUser

Returns the full user record for the single user with the provided ID.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetUserResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.users.getUser({
  optFields: [
    "repudiandae",
    "corporis",
    "et",
  ],
  optPretty: false,
  userGid: "blanditiis",
}).then((res: GetUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetUserRequest](../../models/operations/getuserrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetUserResponse](../../models/operations/getuserresponse.md)>**


## getUsers

Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts an optional workspace ID parameter.
Results are sorted by user ID.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetUsersResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.users.getUsers({
  limit: 405942,
  offset: "sed",
  optFields: [
    "vel",
  ],
  optPretty: false,
  team: "nostrum",
  workspace: "saepe",
}).then((res: GetUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetUsersRequest](../../models/operations/getusersrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetUsersResponse](../../models/operations/getusersresponse.md)>**


## getUsersForTeam

Returns the compact records for all users that are members of the team.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetUsersForTeamResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.users.getUsersForTeam({
  offset: "error",
  optFields: [
    "incidunt",
  ],
  optPretty: false,
  teamGid: "reiciendis",
}).then((res: GetUsersForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetUsersForTeamRequest](../../models/operations/getusersforteamrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetUsersForTeamResponse](../../models/operations/getusersforteamresponse.md)>**


## getUsersForWorkspace

Returns the compact records for all users in the specified workspace or organization.
Results are sorted alphabetically and limited to 2000. For more results use the `/users` endpoint.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetUsersForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.users.getUsersForWorkspace({
  offset: "dolorem",
  optFields: [
    "dicta",
    "architecto",
    "occaecati",
  ],
  optPretty: false,
  workspaceGid: "labore",
}).then((res: GetUsersForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetUsersForWorkspaceRequest](../../models/operations/getusersforworkspacerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUsersForWorkspaceResponse](../../models/operations/getusersforworkspaceresponse.md)>**

