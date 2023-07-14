# statusUpdates

## Overview

A status update is an update on the progress of a particular object,
and is sent out to all followers when created. These updates
include both text describing the update and a `status_type` intended to
represent the overall state of the project. These include: `on_track` for projects that
are on track, `at_risk` for projects at risk, `off_track` for projects that
are behind, and `on_hold` for projects on hold.

Status updates can be created and deleted, but not modified.

### Available Operations

* [createStatusForObject](#createstatusforobject) - Create a status update
* [deleteStatus](#deletestatus) - Delete a status update
* [getStatus](#getstatus) - Get a status update
* [getStatusesForObject](#getstatusesforobject) - Get status updates from an object

## createStatusForObject

Creates a new status update on an object.
Returns the full record of the newly created status update.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateStatusForObjectResponse } from "Asana/dist/sdk/models/operations";
import { StatusUpdateRequestStatusType } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.statusUpdates.createStatusForObject({
  requestBody: {
    data: {
      htmlText: "<body>The project <strong>is</strong> moving forward according to plan...</body>",
      parent: "odio",
      statusType: StatusUpdateRequestStatusType.Achieved,
      text: "The project is moving forward according to plan...",
      title: "Status Update - Jun 15",
    },
  },
  limit: 708548,
  offset: "vero",
  optFields: [
    "dolore",
    "quibusdam",
  ],
  optPretty: false,
}).then((res: CreateStatusForObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateStatusForObjectRequest](../../models/operations/createstatusforobjectrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateStatusForObjectResponse](../../models/operations/createstatusforobjectresponse.md)>**


## deleteStatus

Deletes a specific, existing status update.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteStatusResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.statusUpdates.deleteStatus({
  optFields: [
    "sequi",
    "natus",
    "impedit",
    "aut",
  ],
  optPretty: false,
  statusGid: "voluptatibus",
}).then((res: DeleteStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DeleteStatusRequest](../../models/operations/deletestatusrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DeleteStatusResponse](../../models/operations/deletestatusresponse.md)>**


## getStatus

Returns the complete record for a single status update.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetStatusResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.statusUpdates.getStatus({
  optFields: [
    "nulla",
    "fugit",
  ],
  optPretty: false,
  statusGid: "porro",
}).then((res: GetStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetStatusRequest](../../models/operations/getstatusrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetStatusResponse](../../models/operations/getstatusresponse.md)>**


## getStatusesForObject

Returns the compact status update records for all updates on the object.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetStatusesForObjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.statusUpdates.getStatusesForObject({
  createdSince: new Date("2020-01-18T09:21:05.997Z"),
  limit: 478370,
  offset: "eligendi",
  optFields: [
    "alias",
    "officia",
  ],
  optPretty: false,
  parent: "tempora",
}).then((res: GetStatusesForObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetStatusesForObjectRequest](../../models/operations/getstatusesforobjectrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetStatusesForObjectResponse](../../models/operations/getstatusesforobjectresponse.md)>**

