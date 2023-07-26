# userTaskLists

## Overview

A user task list represents the tasks assigned to a particular user. This list is the user's [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) list.

### Available Operations

* [getUserTaskList](#getusertasklist) - Get a user task list
* [getUserTaskListForUser](#getusertasklistforuser) - Get a user's task list

## getUserTaskList

Returns the full record for a user task list.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetUserTaskListResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.userTaskLists.getUserTaskList({
  optFields: [
    "tempora",
    "atque",
    "fugit",
    "ut",
  ],
  optPretty: false,
  userTaskListGid: "fugiat",
}).then((res: GetUserTaskListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetUserTaskListRequest](../../models/operations/getusertasklistrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetUserTaskListResponse](../../models/operations/getusertasklistresponse.md)>**


## getUserTaskListForUser

Returns the full record for a user's task list.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetUserTaskListForUserResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.userTaskLists.getUserTaskListForUser({
  optFields: [
    "culpa",
  ],
  optPretty: false,
  userGid: "expedita",
  workspace: "magnam",
}).then((res: GetUserTaskListForUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUserTaskListForUserRequest](../../models/operations/getusertasklistforuserrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUserTaskListForUserResponse](../../models/operations/getusertasklistforuserresponse.md)>**

