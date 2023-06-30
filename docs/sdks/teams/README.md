# teams

## Overview

A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.

### Available Operations

* [addUserForTeam](#adduserforteam) - Add a user to a team
* [createTeam](#createteam) - Create a team
* [getTeam](#getteam) - Get a team
* [getTeamsForUser](#getteamsforuser) - Get teams for a user
* [getTeamsForWorkspace](#getteamsforworkspace) - Get teams in a workspace
* [removeUserForTeam](#removeuserforteam) - Remove a user from a team
* [updateTeam](#updateteam) - Update a team

## addUserForTeam

The user making this call must be a member of the team in order to add others. The user being added must exist in the same organization as the team.

Returns the complete team membership record for the newly added user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddUserForTeamResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.addUserForTeam({
  requestBody: {
    data: {
      user: "12345",
    },
  },
  optFields: [
    "voluptas",
  ],
  optPretty: false,
  teamGid: "unde",
}).then((res: AddUserForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.AddUserForTeamRequest](../../models/operations/adduserforteamrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.AddUserForTeamResponse](../../models/operations/adduserforteamresponse.md)>**


## createTeam

Creates a team within the current workspace.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateTeamResponse } from "Asana/dist/sdk/models/operations";
import { TeamRequestVisibility, TeamResponseVisibility } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.createTeam({
  requestBody: {
    data: {
      description: "All developers should be members of this team.",
      htmlDescription: "<body><em>All</em> developers should be members of this team.</body>",
      name: "Marketing",
      organization: "123456789",
      visibility: TeamRequestVisibility.Secret,
    },
  },
  limit: 382808,
  offset: "sapiente",
  optFields: [
    "illo",
    "reiciendis",
    "perferendis",
    "corrupti",
  ],
  optPretty: false,
}).then((res: CreateTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateTeamRequest](../../models/operations/createteamrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateTeamResponse](../../models/operations/createteamresponse.md)>**


## getTeam

Returns the full record for a single team.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamResponse } from "Asana/dist/sdk/models/operations";
import { TeamResponseVisibility } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.getTeam({
  limit: 979574,
  offset: "incidunt",
  optFields: [
    "provident",
  ],
  optPretty: false,
  teamGid: "eius",
}).then((res: GetTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetTeamRequest](../../models/operations/getteamrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetTeamResponse](../../models/operations/getteamresponse.md)>**


## getTeamsForUser

Returns the compact records for all teams to which the given user is assigned.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamsForUserResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.getTeamsForUser({
  limit: 896762,
  offset: "ipsum",
  optFields: [
    "occaecati",
    "quos",
  ],
  optPretty: false,
  organization: "voluptatibus",
  userGid: "tempora",
}).then((res: GetTeamsForUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetTeamsForUserRequest](../../models/operations/getteamsforuserrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetTeamsForUserResponse](../../models/operations/getteamsforuserresponse.md)>**


## getTeamsForWorkspace

Returns the compact records for all teams in the workspace visible to the authorized user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamsForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.getTeamsForWorkspace({
  limit: 273009,
  offset: "voluptate",
  optFields: [
    "ex",
    "sit",
    "non",
    "officiis",
  ],
  optPretty: false,
  workspaceGid: "praesentium",
}).then((res: GetTeamsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetTeamsForWorkspaceRequest](../../models/operations/getteamsforworkspacerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetTeamsForWorkspaceResponse](../../models/operations/getteamsforworkspaceresponse.md)>**


## removeUserForTeam

The user making this call must be a member of the team in order to remove themselves or others.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveUserForTeamResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.removeUserForTeam({
  requestBody: {
    data: {
      user: "12345",
    },
  },
  optFields: [
    "quaerat",
    "incidunt",
    "ipsam",
  ],
  optPretty: false,
  teamGid: "debitis",
}).then((res: RemoveUserForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RemoveUserForTeamRequest](../../models/operations/removeuserforteamrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RemoveUserForTeamResponse](../../models/operations/removeuserforteamresponse.md)>**


## updateTeam

Updates a team within the current workspace.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateTeamResponse } from "Asana/dist/sdk/models/operations";
import { TeamRequestVisibility, TeamResponseVisibility } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teams.updateTeam({
  requestBody: {
    data: {
      description: "All developers should be members of this team.",
      htmlDescription: "<body><em>All</em> developers should be members of this team.</body>",
      name: "Marketing",
      organization: "123456789",
      visibility: TeamRequestVisibility.RequestToJoin,
    },
  },
  limit: 26522,
  offset: "nobis",
  optFields: [
    "veniam",
    "minima",
    "recusandae",
  ],
  optPretty: false,
}).then((res: UpdateTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateTeamRequest](../../models/operations/updateteamrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateTeamResponse](../../models/operations/updateteamresponse.md)>**

