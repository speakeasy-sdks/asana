# webhooks

## Overview

Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).

For a more detailed explanation of webhooks see the [overview of webhooks](/docs/overview-of-webhooks).

### Available Operations

* [createWebhook](#createwebhook) - Establish a webhook
* [deleteWebhook](#deletewebhook) - Delete a webhook
* [getWebhook](#getwebhook) - Get a webhook
* [getWebhooks](#getwebhooks) - Get multiple webhooks
* [updateWebhook](#updatewebhook) - Update a webhook

## createWebhook

Establishing a webhook is a two-part process. First, a simple HTTP POST
request initiates the creation similar to creating any other resource.

Next, in the middle of this request comes the confirmation handshake.
When a webhook is created, we will send a test POST to the target with an
`X-Hook-Secret` header. The target must respond with a `200 OK` or `204
No Content` and a matching `X-Hook-Secret` header to confirm that this
webhook subscription is indeed expected. We strongly recommend storing
this secret to be used to verify future webhook event signatures.

The POST request to create the webhook will then return with the status
of the request. If you do not acknowledge the webhook’s confirmation
handshake it will fail to setup, and you will receive an error in
response to your attempt to create it. This means you need to be able to
receive and complete the webhook *while* the POST request is in-flight
(in other words, have a server that can handle requests asynchronously).

Invalid hostnames like localhost will recieve a 403 Forbidden status code.

```
# Request
curl -H "Authorization: Bearer <personal_access_token>" \
-X POST https://app.asana.com/api/1.0/webhooks \
-d "resource=8675309" \
-d "target=https://example.com/receive-webhook/7654"
```

```
# Handshake sent to https://example.com/
POST /receive-webhook/7654
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Handshake response sent by example.com
HTTP/1.1 200
X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
```

```
# Response
HTTP/1.1 201
{
  "data": {
    "gid": "43214",
    "resource": {
      "gid": "8675309",
      "name": "Bugs"
    },
    "target": "https://example.com/receive-webhook/7654",
    "active": false,
    "last_success_at": null,
    "last_failure_at": null,
    "last_failure_content": null
  }
}
```

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateWebhookResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.webhooks.createWebhook({
  requestBody: {
    data: {
      filters: [
        {
          action: "changed",
          fields: [
            "laborum",
            "nam",
            "tenetur",
          ],
          resourceSubtype: "milestone",
          resourceType: "task",
        },
        {
          action: "changed",
          fields: [
            "alias",
            "amet",
          ],
          resourceSubtype: "milestone",
          resourceType: "task",
        },
        {
          action: "changed",
          fields: [
            "voluptate",
            "unde",
            "reiciendis",
          ],
          resourceSubtype: "milestone",
          resourceType: "task",
        },
      ],
      resource: "12345",
      target: "https://example.com/receive-webhook/7654?app_specific_param=app_specific_value",
    },
  },
  optFields: [
    "repellendus",
    "delectus",
    "voluptates",
  ],
  optPretty: false,
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateWebhookRequest](../../models/operations/createwebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**


## deleteWebhook

This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteWebhookResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.webhooks.deleteWebhook({
  optFields: [
    "est",
  ],
  optPretty: false,
  webhookGid: "quidem",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteWebhookRequest](../../models/operations/deletewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## getWebhook

Returns the full record for the given webhook.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWebhookResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.webhooks.getWebhook({
  optFields: [
    "facere",
    "fuga",
  ],
  optPretty: false,
  webhookGid: "praesentium",
}).then((res: GetWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetWebhookRequest](../../models/operations/getwebhookrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetWebhookResponse](../../models/operations/getwebhookresponse.md)>**


## getWebhooks

Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetWebhooksResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.webhooks.getWebhooks({
  limit: 648598,
  offset: "veniam",
  optFields: [
    "quisquam",
  ],
  optPretty: false,
  resource: "repudiandae",
  workspace: "quasi",
}).then((res: GetWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetWebhooksRequest](../../models/operations/getwebhooksrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetWebhooksResponse](../../models/operations/getwebhooksresponse.md)>**


## updateWebhook

An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateWebhookResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.webhooks.updateWebhook({
  requestBody: {
    data: {
      filters: [
        {
          action: "changed",
          fields: [
            "asperiores",
            "totam",
          ],
          resourceSubtype: "milestone",
          resourceType: "task",
        },
        {
          action: "changed",
          fields: [
            "quidem",
            "maxime",
          ],
          resourceSubtype: "milestone",
          resourceType: "task",
        },
        {
          action: "changed",
          fields: [
            "esse",
          ],
          resourceSubtype: "milestone",
          resourceType: "task",
        },
      ],
    },
  },
  optFields: [
    "assumenda",
  ],
  optPretty: false,
  webhookGid: "ea",
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateWebhookRequest](../../models/operations/updatewebhookrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**

