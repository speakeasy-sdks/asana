# organizationExports

## Overview

An `organization_export` object represents a request to export the complete data of an organization in JSON format.

To export an organization using this API:

* Create an `organization_export`
  [request](/docs/create-an-organization-export-request)
  and store the ID that is returned.
* Request the `organization_export` every few minutes, until the
  `state` field contains ‘finished’.
* Download the file located at the URL in the `download_url` field. * Exports can take a long time, from several minutes to a few hours
  for large organizations.


*Note: These endpoints are only available to [Service Accounts](https://asana.com/guide/help/premium/service-accounts) of an [Enterprise](https://asana.com/enterprise) organization.*

### Available Operations

* [createOrganizationExport](#createorganizationexport) - Create an organization export request
* [getOrganizationExport](#getorganizationexport) - Get details on an org export request

## createOrganizationExport

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateOrganizationExportResponse } from "Asana/dist/sdk/models/operations";
import { OrganizationExportResponseState } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.organizationExports.createOrganizationExport({
  requestBody: {
    data: {
      organization: "1331",
    },
  },
  limit: 659669,
  offset: "blanditiis",
  optFields: [
    "sapiente",
    "amet",
    "deserunt",
  ],
  optPretty: false,
}).then((res: CreateOrganizationExportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.CreateOrganizationExportRequest](../../models/operations/createorganizationexportrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateOrganizationExportResponse](../../models/operations/createorganizationexportresponse.md)>**


## getOrganizationExport

Returns details of a previously-requested Organization export.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetOrganizationExportResponse } from "Asana/dist/sdk/models/operations";
import { OrganizationExportResponseState } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.organizationExports.getOrganizationExport({
  optFields: [
    "vel",
    "natus",
  ],
  optPretty: false,
  organizationExportGid: "omnis",
}).then((res: GetOrganizationExportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetOrganizationExportRequest](../../models/operations/getorganizationexportrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetOrganizationExportResponse](../../models/operations/getorganizationexportresponse.md)>**

