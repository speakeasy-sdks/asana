# jobs

## Overview

Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.

Only the creator of the duplication process can access the duplication status of the new object.

*Note*: With any work that is handled asynchronously (e.g., [project instantation from a template](/docs/instantiate-a-project-from-a-project-template), duplicating a [task](/docs/duplicate-a-task) or [project](/docs/duplicate-a-project), etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job `status` has returned a `succeeded` value.

### Available Operations

* [getJob](#getjob) - Get a job by id

## getJob

Returns the full record for a job.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetJobResponse } from "Asana/dist/sdk/models/operations";
import { JobResponseStatus, TaskCompactResourceSubtype } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.jobs.getJob({
  jobGid: "enim",
  optFields: [
    "delectus",
    "quidem",
    "provident",
    "nam",
  ],
  optPretty: false,
}).then((res: GetJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [operations.GetJobRequest](../../models/operations/getjobrequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GetJobResponse](../../models/operations/getjobresponse.md)>**

