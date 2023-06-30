# teamMemberships

## Overview

This object determines if a user is a member of a team.

### Available Operations

* [getTeamMembership](#getteammembership) - Get a team membership
* [getTeamMemberships](#getteammemberships) - Get team memberships
* [getTeamMembershipsForTeam](#getteammembershipsforteam) - Get memberships from a team
* [getTeamMembershipsForUser](#getteammembershipsforuser) - Get memberships from a user

## getTeamMembership

Returns the complete team membership record for a single team membership.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamMembershipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teamMemberships.getTeamMembership({
  optFields: [
    "hic",
    "nesciunt",
    "culpa",
  ],
  optPretty: false,
  teamMembershipGid: "corrupti",
}).then((res: GetTeamMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetTeamMembershipRequest](../../models/operations/getteammembershiprequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetTeamMembershipResponse](../../models/operations/getteammembershipresponse.md)>**


## getTeamMemberships

Returns compact team membership records.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamMembershipsResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teamMemberships.getTeamMemberships({
  limit: 867290,
  offset: "totam",
  optFields: [
    "exercitationem",
    "nobis",
    "sit",
    "rerum",
  ],
  optPretty: false,
  team: "sed",
  user: "reiciendis",
  workspace: "explicabo",
}).then((res: GetTeamMembershipsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTeamMembershipsRequest](../../models/operations/getteammembershipsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTeamMembershipsResponse](../../models/operations/getteammembershipsresponse.md)>**


## getTeamMembershipsForTeam

Returns the compact team memberships for the team.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamMembershipsForTeamResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teamMemberships.getTeamMembershipsForTeam({
  limit: 994401,
  offset: "facilis",
  optFields: [
    "expedita",
    "ab",
  ],
  optPretty: false,
  teamGid: "iste",
}).then((res: GetTeamMembershipsForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetTeamMembershipsForTeamRequest](../../models/operations/getteammembershipsforteamrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetTeamMembershipsForTeamResponse](../../models/operations/getteammembershipsforteamresponse.md)>**


## getTeamMembershipsForUser

Returns the compact team membership records for the user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTeamMembershipsForUserResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.teamMemberships.getTeamMembershipsForUser({
  limit: 292794,
  offset: "laborum",
  optFields: [
    "in",
  ],
  optPretty: false,
  userGid: "commodi",
  workspace: "quidem",
}).then((res: GetTeamMembershipsForUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetTeamMembershipsForUserRequest](../../models/operations/getteammembershipsforuserrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetTeamMembershipsForUserResponse](../../models/operations/getteammembershipsforuserresponse.md)>**

