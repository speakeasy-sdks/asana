# portfolios

## Overview

A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [status update](/docs/asana-statuses).
Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.

### Available Operations

* [addCustomFieldSettingForPortfolio](#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [addItemForPortfolio](#additemforportfolio) - Add a portfolio item
* [addMembersForPortfolio](#addmembersforportfolio) - Add users to a portfolio
* [createPortfolio](#createportfolio) - Create a portfolio
* [deletePortfolio](#deleteportfolio) - Delete a portfolio
* [getItemsForPortfolio](#getitemsforportfolio) - Get portfolio items
* [getPortfolio](#getportfolio) - Get a portfolio
* [getPortfolios](#getportfolios) - Get multiple portfolios
* [removeCustomFieldSettingForPortfolio](#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [removeItemForPortfolio](#removeitemforportfolio) - Remove a portfolio item
* [removeMembersForPortfolio](#removemembersforportfolio) - Remove users from a portfolio
* [updatePortfolio](#updateportfolio) - Update a portfolio

## addCustomFieldSettingForPortfolio

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddCustomFieldSettingForPortfolioResponse } from "Asana/dist/sdk/models/operations";
import {
  CustomFieldSettingResponseCustomFieldAsanaCreatedField,
  CustomFieldSettingResponseCustomFieldCustomLabelPosition,
  CustomFieldSettingResponseCustomFieldFormat,
  CustomFieldSettingResponseCustomFieldResourceSubtype,
  CustomFieldSettingResponseCustomFieldType,
} from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.addCustomFieldSettingForPortfolio({
  requestBody: {
    data: {
      customField: "14916",
      insertAfter: "1331",
      insertBefore: "1331",
      isImportant: true,
    },
  },
  optPretty: false,
  portfolioGid: "ullam",
}).then((res: AddCustomFieldSettingForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.AddCustomFieldSettingForPortfolioRequest](../../models/operations/addcustomfieldsettingforportfoliorequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.AddCustomFieldSettingForPortfolioResponse](../../models/operations/addcustomfieldsettingforportfolioresponse.md)>**


## addItemForPortfolio

Add an item to a portfolio.
Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddItemForPortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.addItemForPortfolio({
  requestBody: {
    data: {
      insertAfter: "1331",
      insertBefore: "1331",
      item: "1331",
    },
  },
  optFields: [
    "quos",
    "sint",
    "accusantium",
  ],
  optPretty: false,
  portfolioGid: "mollitia",
}).then((res: AddItemForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AddItemForPortfolioRequest](../../models/operations/additemforportfoliorequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AddItemForPortfolioResponse](../../models/operations/additemforportfolioresponse.md)>**


## addMembersForPortfolio

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddMembersForPortfolioResponse } from "Asana/dist/sdk/models/operations";
import {
  CustomFieldCompactResourceSubtype,
  CustomFieldCompactType,
  CustomFieldSettingResponseCustomFieldAsanaCreatedField,
  CustomFieldSettingResponseCustomFieldCustomLabelPosition,
  CustomFieldSettingResponseCustomFieldFormat,
  CustomFieldSettingResponseCustomFieldResourceSubtype,
  CustomFieldSettingResponseCustomFieldType,
  PortfolioResponseColor,
  PortfolioResponseCurrentStatusUpdateResourceSubtype,
} from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.addMembersForPortfolio({
  requestBody: {
    data: {
      members: "521621,621373",
    },
  },
  optFields: [
    "mollitia",
    "ad",
    "eum",
    "dolor",
  ],
  optPretty: false,
  portfolioGid: "necessitatibus",
}).then((res: AddMembersForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AddMembersForPortfolioRequest](../../models/operations/addmembersforportfoliorequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AddMembersForPortfolioResponse](../../models/operations/addmembersforportfolioresponse.md)>**


## createPortfolio

Creates a new portfolio in the given workspace with the supplied name.

Note that portfolios created in the Asana UI may have some state
(like the “Priority” custom field) which is automatically added
to the portfolio when it is created. Portfolios created via our
API will *not* be created with the same initial state to allow
integrations to create their own starting state on a portfolio.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreatePortfolioResponse } from "Asana/dist/sdk/models/operations";
import {
  CustomFieldCompactResourceSubtype,
  CustomFieldCompactType,
  CustomFieldSettingResponseCustomFieldAsanaCreatedField,
  CustomFieldSettingResponseCustomFieldCustomLabelPosition,
  CustomFieldSettingResponseCustomFieldFormat,
  CustomFieldSettingResponseCustomFieldResourceSubtype,
  CustomFieldSettingResponseCustomFieldType,
  PortfolioRequestColor,
  PortfolioResponseColor,
  PortfolioResponseCurrentStatusUpdateResourceSubtype,
} from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.createPortfolio({
  requestBody: {
    data: {
      color: PortfolioRequestColor.LightGreen,
      name: "Bug Portfolio",
      public: false,
      workspace: "167589",
    },
  },
  optFields: [
    "nemo",
  ],
  optPretty: false,
}).then((res: CreatePortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreatePortfolioRequest](../../models/operations/createportfoliorequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreatePortfolioResponse](../../models/operations/createportfolioresponse.md)>**


## deletePortfolio

An existing portfolio can be deleted by making a DELETE request on
the URL for that portfolio.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeletePortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.deletePortfolio({
  optFields: [
    "iure",
  ],
  optPretty: false,
  portfolioGid: "doloribus",
}).then((res: DeletePortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeletePortfolioRequest](../../models/operations/deleteportfoliorequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeletePortfolioResponse](../../models/operations/deleteportfolioresponse.md)>**


## getItemsForPortfolio

Get a list of the items in compact form in a portfolio.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetItemsForPortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.getItemsForPortfolio({
  limit: 891924,
  offset: "eius",
  optFields: [
    "deleniti",
    "facilis",
    "in",
    "architecto",
  ],
  optPretty: false,
  portfolioGid: "architecto",
}).then((res: GetItemsForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetItemsForPortfolioRequest](../../models/operations/getitemsforportfoliorequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetItemsForPortfolioResponse](../../models/operations/getitemsforportfolioresponse.md)>**


## getPortfolio

Returns the complete portfolio record for a single portfolio.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetPortfolioResponse } from "Asana/dist/sdk/models/operations";
import {
  CustomFieldCompactResourceSubtype,
  CustomFieldCompactType,
  CustomFieldSettingResponseCustomFieldAsanaCreatedField,
  CustomFieldSettingResponseCustomFieldCustomLabelPosition,
  CustomFieldSettingResponseCustomFieldFormat,
  CustomFieldSettingResponseCustomFieldResourceSubtype,
  CustomFieldSettingResponseCustomFieldType,
  PortfolioResponseColor,
  PortfolioResponseCurrentStatusUpdateResourceSubtype,
} from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.getPortfolio({
  optFields: [
    "ullam",
    "expedita",
    "nihil",
    "repellat",
  ],
  optPretty: false,
  portfolioGid: "quibusdam",
}).then((res: GetPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetPortfolioRequest](../../models/operations/getportfoliorequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetPortfolioResponse](../../models/operations/getportfolioresponse.md)>**


## getPortfolios

Returns a list of the portfolios in compact representation that are owned by the current API user.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetPortfoliosResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.getPortfolios({
  limit: 149448,
  offset: "saepe",
  optFields: [
    "accusantium",
    "consequuntur",
    "praesentium",
    "natus",
  ],
  optPretty: false,
  owner: "magni",
  workspace: "sunt",
}).then((res: GetPortfoliosResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetPortfoliosRequest](../../models/operations/getportfoliosrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetPortfoliosResponse](../../models/operations/getportfoliosresponse.md)>**


## removeCustomFieldSettingForPortfolio

Removes a custom field setting from a portfolio.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveCustomFieldSettingForPortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.removeCustomFieldSettingForPortfolio({
  requestBody: {
    data: {
      customField: "14916",
    },
  },
  optPretty: false,
  portfolioGid: "quo",
}).then((res: RemoveCustomFieldSettingForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.RemoveCustomFieldSettingForPortfolioRequest](../../models/operations/removecustomfieldsettingforportfoliorequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.RemoveCustomFieldSettingForPortfolioResponse](../../models/operations/removecustomfieldsettingforportfolioresponse.md)>**


## removeItemForPortfolio

Remove an item from a portfolio.
Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveItemForPortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.removeItemForPortfolio({
  requestBody: {
    data: {
      item: "1331",
    },
  },
  optFields: [
    "pariatur",
    "maxime",
    "ea",
    "excepturi",
  ],
  optPretty: false,
  portfolioGid: "odit",
}).then((res: RemoveItemForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.RemoveItemForPortfolioRequest](../../models/operations/removeitemforportfoliorequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.RemoveItemForPortfolioResponse](../../models/operations/removeitemforportfolioresponse.md)>**


## removeMembersForPortfolio

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveMembersForPortfolioResponse } from "Asana/dist/sdk/models/operations";
import {
  CustomFieldCompactResourceSubtype,
  CustomFieldCompactType,
  CustomFieldSettingResponseCustomFieldAsanaCreatedField,
  CustomFieldSettingResponseCustomFieldCustomLabelPosition,
  CustomFieldSettingResponseCustomFieldFormat,
  CustomFieldSettingResponseCustomFieldResourceSubtype,
  CustomFieldSettingResponseCustomFieldType,
  PortfolioResponseColor,
  PortfolioResponseCurrentStatusUpdateResourceSubtype,
} from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.removeMembersForPortfolio({
  requestBody: {
    data: {
      members: "521621,621373",
    },
  },
  optFields: [
    "accusantium",
    "ab",
  ],
  optPretty: false,
  portfolioGid: "maiores",
}).then((res: RemoveMembersForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RemoveMembersForPortfolioRequest](../../models/operations/removemembersforportfoliorequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RemoveMembersForPortfolioResponse](../../models/operations/removemembersforportfolioresponse.md)>**


## updatePortfolio

An existing portfolio can be updated by making a PUT request on the URL for
that portfolio. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated portfolio record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdatePortfolioResponse } from "Asana/dist/sdk/models/operations";
import {
  CustomFieldCompactResourceSubtype,
  CustomFieldCompactType,
  CustomFieldSettingResponseCustomFieldAsanaCreatedField,
  CustomFieldSettingResponseCustomFieldCustomLabelPosition,
  CustomFieldSettingResponseCustomFieldFormat,
  CustomFieldSettingResponseCustomFieldResourceSubtype,
  CustomFieldSettingResponseCustomFieldType,
  PortfolioRequestColor,
  PortfolioResponseColor,
  PortfolioResponseCurrentStatusUpdateResourceSubtype,
} from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolios.updatePortfolio({
  requestBody: {
    data: {
      color: PortfolioRequestColor.LightGreen,
      name: "Bug Portfolio",
      public: false,
      workspace: "167589",
    },
  },
  optFields: [
    "ipsam",
    "voluptate",
    "autem",
  ],
  optPretty: false,
  portfolioGid: "nam",
}).then((res: UpdatePortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdatePortfolioRequest](../../models/operations/updateportfoliorequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdatePortfolioResponse](../../models/operations/updateportfolioresponse.md)>**

