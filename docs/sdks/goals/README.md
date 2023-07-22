# goals

## Overview

A goal is an object in the goal-tracking system that helps your organization drive measurable results.

### Available Operations

* [addFollowers](#addfollowers) - Add a collaborator to a goal
* [createGoal](#creategoal) - Create a goal
* [createGoalMetric](#creategoalmetric) - Create a goal metric
* [deleteGoal](#deletegoal) - Delete a goal
* [getGoal](#getgoal) - Get a goal
* [getGoals](#getgoals) - Get goals
* [getParentGoalsForGoal](#getparentgoalsforgoal) - Get parent goals from a goal
* [removeFollowers](#removefollowers) - Remove a collaborator from a goal
* [updateGoal](#updategoal) - Update a goal
* [updateGoalMetric](#updategoalmetric) - Update a goal metric

## addFollowers

Adds followers to a goal. Returns the goal the followers were added to.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddFollowersResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.addFollowers({
  requestBody: {
    data: {
      followers: [
        "quae",
        "ipsum",
        "quidem",
        "molestias",
      ],
    },
  },
  goalGid: "excepturi",
  optFields: [
    "modi",
    "praesentium",
    "rem",
    "voluptates",
  ],
  optPretty: false,
}).then((res: AddFollowersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.AddFollowersRequest](../../models/operations/addfollowersrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.AddFollowersResponse](../../models/operations/addfollowersresponse.md)>**


## createGoal

Creates a new goal in a workspace or team.

Returns the full record of the newly created goal.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateGoalResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.createGoal({
  requestBody: {
    data: {
      dueOn: "2019-09-15",
      followers: [
        "repudiandae",
      ],
      htmlNotes: "<body>Start building brand awareness.</body>",
      isWorkspaceLevel: true,
      liked: false,
      name: "Grow web traffic by 30%",
      notes: "Start building brand awareness.",
      owner: "12345",
      startOn: "2019-09-14",
      status: "green",
      team: "12345",
      timePeriod: "12345",
      workspace: "12345",
    },
  },
  limit: 575947,
  offset: "veritatis",
  optFields: [
    "incidunt",
    "enim",
    "consequatur",
    "est",
  ],
  optPretty: false,
}).then((res: CreateGoalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateGoalRequest](../../models/operations/creategoalrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateGoalResponse](../../models/operations/creategoalresponse.md)>**


## createGoalMetric

Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exists.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateGoalMetricResponse } from "Asana/dist/sdk/models/operations";
import { GoalMetricRequestProgressSource, GoalMetricRequestUnit } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.createGoalMetric({
  requestBody: {
    data: {
      currencyCode: "EUR",
      currentNumberValue: 8.12,
      initialNumberValue: 5.2,
      precision: 2,
      progressSource: GoalMetricRequestProgressSource.Manual,
      targetNumberValue: 10.2,
      unit: GoalMetricRequestUnit.Percentage,
    },
  },
  goalGid: "explicabo",
  optFields: [
    "distinctio",
    "quibusdam",
    "labore",
  ],
  optPretty: false,
}).then((res: CreateGoalMetricResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateGoalMetricRequest](../../models/operations/creategoalmetricrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateGoalMetricResponse](../../models/operations/creategoalmetricresponse.md)>**


## deleteGoal

A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteGoalResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.deleteGoal({
  goalGid: "modi",
  optFields: [
    "aliquid",
  ],
  optPretty: false,
}).then((res: DeleteGoalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteGoalRequest](../../models/operations/deletegoalrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteGoalResponse](../../models/operations/deletegoalresponse.md)>**


## getGoal

Returns the complete goal record for a single goal.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetGoalResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.getGoal({
  goalGid: "cupiditate",
  optFields: [
    "perferendis",
    "magni",
    "assumenda",
  ],
  optPretty: false,
}).then((res: GetGoalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetGoalRequest](../../models/operations/getgoalrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetGoalResponse](../../models/operations/getgoalresponse.md)>**


## getGoals

Returns compact goal records.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetGoalsResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.getGoals({
  isWorkspaceLevel: false,
  limit: 369808,
  offset: "alias",
  optFields: [
    "dolorum",
  ],
  optPretty: false,
  portfolio: "excepturi",
  project: "tempora",
  team: "facilis",
  timePeriods: [
    "labore",
    "delectus",
    "eum",
  ],
  workspace: "non",
}).then((res: GetGoalsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetGoalsRequest](../../models/operations/getgoalsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetGoalsResponse](../../models/operations/getgoalsresponse.md)>**


## getParentGoalsForGoal

Returns a compact representation of all of the parent goals of a goal.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetParentGoalsForGoalResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.getParentGoalsForGoal({
  goalGid: "eligendi",
  optFields: [
    "aliquid",
    "provident",
    "necessitatibus",
  ],
  optPretty: false,
}).then((res: GetParentGoalsForGoalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetParentGoalsForGoalRequest](../../models/operations/getparentgoalsforgoalrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetParentGoalsForGoalResponse](../../models/operations/getparentgoalsforgoalresponse.md)>**


## removeFollowers

Removes followers from a goal. Returns the goal the followers were removed from.
Each goal can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated goal record, described above.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveFollowersResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.removeFollowers({
  requestBody: {
    data: {
      followers: [
        "officia",
        "dolor",
        "debitis",
      ],
    },
  },
  goalGid: "a",
  optFields: [
    "in",
    "in",
    "illum",
  ],
  optPretty: false,
}).then((res: RemoveFollowersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.RemoveFollowersRequest](../../models/operations/removefollowersrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.RemoveFollowersResponse](../../models/operations/removefollowersresponse.md)>**


## updateGoal

An existing goal can be updated by making a PUT request on the URL for
that goal. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateGoalResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.updateGoal({
  requestBody: {
    data: {
      dueOn: "2019-09-15",
      followers: [
        "rerum",
        "dicta",
        "magnam",
        "cumque",
      ],
      htmlNotes: "<body>Start building brand awareness.</body>",
      isWorkspaceLevel: true,
      liked: false,
      name: "Grow web traffic by 30%",
      notes: "Start building brand awareness.",
      owner: "12345",
      startOn: "2019-09-14",
      status: "green",
      team: "12345",
      timePeriod: "12345",
      workspace: "12345",
    },
  },
  goalGid: "facere",
  optFields: [
    "aliquid",
    "laborum",
  ],
  optPretty: false,
}).then((res: UpdateGoalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateGoalRequest](../../models/operations/updategoalrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateGoalResponse](../../models/operations/updategoalresponse.md)>**


## updateGoalMetric

Updates a goal's existing metric's `current_number_value` if one exists,
otherwise responds with a 400 status code.

Returns the complete updated goal metric record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateGoalMetricResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goals.updateGoalMetric({
  requestBody: {
    data: {
      currentNumberValue: 8.12,
    },
  },
  goalGid: "accusamus",
  optFields: [
    "occaecati",
  ],
  optPretty: false,
}).then((res: UpdateGoalMetricResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateGoalMetricRequest](../../models/operations/updategoalmetricrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateGoalMetricResponse](../../models/operations/updategoalmetricresponse.md)>**

