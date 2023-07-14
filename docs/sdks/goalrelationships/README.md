# goalRelationships

## Overview

A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.

### Available Operations

* [addSupportingRelationship](#addsupportingrelationship) - Add a supporting goal relationship
* [getGoalRelationship](#getgoalrelationship) - Get a goal relationship
* [getGoalRelationships](#getgoalrelationships) - Get goal relationships
* [removeSupportingRelationship](#removesupportingrelationship) - Removes a supporting goal relationship
* [updateGoalRelationship](#updategoalrelationship) - Update a goal relationship

## addSupportingRelationship

Creates a goal relationship by adding a supporting resource to a given goal.

Returns the newly created goal relationship record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddSupportingRelationshipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goalRelationships.addSupportingRelationship({
  requestBody: {
    data: {
      contributionWeight: 1,
      insertAfter: "1331",
      insertBefore: "1331",
      supportingResource: "12345",
    },
  },
  goalGid: "quasi",
  optFields: [
    "voluptatibus",
    "vero",
    "nihil",
    "praesentium",
  ],
  optPretty: false,
}).then((res: AddSupportingRelationshipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.AddSupportingRelationshipRequest](../../models/operations/addsupportingrelationshiprequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.AddSupportingRelationshipResponse](../../models/operations/addsupportingrelationshipresponse.md)>**


## getGoalRelationship

Returns the complete updated goal relationship record for a single goal relationship.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetGoalRelationshipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goalRelationships.getGoalRelationship({
  goalRelationshipGid: "voluptatibus",
  optFields: [
    "omnis",
  ],
  optPretty: false,
}).then((res: GetGoalRelationshipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetGoalRelationshipRequest](../../models/operations/getgoalrelationshiprequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetGoalRelationshipResponse](../../models/operations/getgoalrelationshipresponse.md)>**


## getGoalRelationships

Returns compact goal relationship records.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetGoalRelationshipsResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goalRelationships.getGoalRelationships({
  optFields: [
    "cum",
    "perferendis",
  ],
  optPretty: false,
  resourceSubtype: "doloremque",
  supportedGoal: "reprehenderit",
}).then((res: GetGoalRelationshipsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetGoalRelationshipsRequest](../../models/operations/getgoalrelationshipsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetGoalRelationshipsResponse](../../models/operations/getgoalrelationshipsresponse.md)>**


## removeSupportingRelationship

Removes a goal relationship for a given parent goal.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveSupportingRelationshipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goalRelationships.removeSupportingRelationship({
  requestBody: {
    data: {
      supportingResource: "12345",
    },
  },
  goalGid: "ut",
  optFields: [
    "dicta",
    "corporis",
    "dolore",
    "iusto",
  ],
  optPretty: false,
}).then((res: RemoveSupportingRelationshipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.RemoveSupportingRelationshipRequest](../../models/operations/removesupportingrelationshiprequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.RemoveSupportingRelationshipResponse](../../models/operations/removesupportingrelationshipresponse.md)>**


## updateGoalRelationship

An existing goal relationship can be updated by making a PUT request on the URL for
that goal relationship. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated goal relationship record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateGoalRelationshipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.goalRelationships.updateGoalRelationship({
  requestBody: {
    data: {
      contributionWeight: 1,
      supportedGoal: {
        name: "Grow web traffic by 30%",
        owner: {
          name: "Greg Sanchez",
        },
      },
      supportingResource: {
        name: "Stuff to buy",
      },
    },
  },
  goalRelationshipGid: "dicta",
  optFields: [
    "enim",
    "accusamus",
    "commodi",
  ],
  optPretty: false,
}).then((res: UpdateGoalRelationshipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateGoalRelationshipRequest](../../models/operations/updategoalrelationshiprequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateGoalRelationshipResponse](../../models/operations/updategoalrelationshipresponse.md)>**

