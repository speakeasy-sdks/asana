# auditLogAPI

## Overview

Asana's audit log is an immutable log of [important events](/docs/supported-auditlogevents) in your organization's Asana instance.

The audit log API allows you to monitor and act upon important security and compliance-related changes. Organizations might use this API endpoint to:

* Set up proactive alerting with a Security Information and Event Management (SIEM) tool like [Splunk](https://asana.com/guide/help/api/splunk)
* Conduct reactive investigations when a security incident takes place
* Visualize key domain data in aggregate to identify security trends

Note that since the API provides insight into what is happening in an Asana instance, the data is [read-only](/docs/get-audit-log-events). That is, there are no "write" or "update" endpoints for audit log events.

Only [Service Accounts](https://asana.com/guide/help/premium/service-accounts) in [Enterprise Domains](https://asana.com/enterprise) can access audit log API endpoints. Authentication with a Service Account's [personal access token](/docs/personal-access-token) is required.

For a full list of supported events, see [supported AuditLogEvents](/docs/supported-auditlogevents).

### Available Operations

* [getAuditLogEvents](#getauditlogevents) - Get audit log events

## getAuditLogEvents

Retrieve the audit log events that have been captured in your domain.

This endpoint will return a list of [AuditLogEvent](/docs/audit-log-event) objects, sorted by creation time in ascending order. Note that the Audit Log API captures events from October 8th, 2021 and later. Queries for events before this date will not return results.

There are a number of query parameters (below) that can be used to filter the set of [AuditLogEvent](/docs/audit-log-event) objects that are returned in the response. Any combination of query parameters is valid. When no filters are provided, all of the events that have been captured in your domain will match.

The list of events will always be [paginated](/docs/pagination). The default limit is 1000 events. The next set of events can be retrieved using the `offset` from the previous response. If there are no events that match the provided filters in your domain, the endpoint will return `null` for the `next_page` field. Querying again with the same filters may return new events if they were captured after the last request. Once a response includes a `next_page` with an `offset`, subsequent requests can be made with the latest `offset` to poll for new events that match the provided filters.

When no `offset` is provided, the response will begin with the oldest events that match the provided filters. It is important to note that [AuditLogEvent](/docs/audit-log-event) objects will be permanently deleted from our systems after 90 days. If you wish to keep a permanent record of these events, we recommend using a SIEM tool to ingest and store these logs.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetAuditLogEventsResponse } from "Asana/dist/sdk/models/operations";
import { AuditLogActorType } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.auditLogAPI.getAuditLogEvents({
  actorGid: "esse",
  actorType: AuditLogActorType.AsanaSupport,
  endAt: new Date("2020-12-18T15:02:44.758Z"),
  eventType: "dicta",
  limit: 720633,
  offset: "officia",
  resourceGid: "occaecati",
  startAt: new Date("2022-06-18T20:36:37.412Z"),
  workspaceGid: "hic",
}).then((res: GetAuditLogEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetAuditLogEventsRequest](../../models/operations/getauditlogeventsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetAuditLogEventsResponse](../../models/operations/getauditlogeventsresponse.md)>**

