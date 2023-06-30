# timePeriods

## Overview

A time period is an object that represents a domain-scoped date range that can be set on [goals](/docs/goals).

### Available Operations

* [getTimePeriod](#gettimeperiod) - Get a time period
* [getTimePeriods](#gettimeperiods) - Get time periods

## getTimePeriod

Returns the full record for a single time period.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTimePeriodResponse } from "Asana/dist/sdk/models/operations";
import { TimePeriodCompactPeriod, TimePeriodResponsePeriod } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.timePeriods.getTimePeriod({
  optFields: [
    "nulla",
    "magni",
    "aperiam",
    "saepe",
  ],
  optPretty: false,
  timePeriodGid: "numquam",
}).then((res: GetTimePeriodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetTimePeriodRequest](../../models/operations/gettimeperiodrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetTimePeriodResponse](../../models/operations/gettimeperiodresponse.md)>**


## getTimePeriods

Returns compact time period records.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTimePeriodsResponse } from "Asana/dist/sdk/models/operations";
import { TimePeriodCompactPeriod } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.timePeriods.getTimePeriods({
  endOn: new RFCDate("2022-07-22"),
  limit: 889234,
  offset: "beatae",
  optFields: [
    "exercitationem",
    "praesentium",
    "cum",
  ],
  optPretty: false,
  startOn: new RFCDate("2022-04-27"),
  workspace: "voluptatum",
}).then((res: GetTimePeriodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTimePeriodsRequest](../../models/operations/gettimeperiodsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTimePeriodsResponse](../../models/operations/gettimeperiodsresponse.md)>**

