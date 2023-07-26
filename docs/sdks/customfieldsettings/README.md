# customFieldSettings

## Overview

Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the `is_important` property determines some possible application-specific handling of that custom field.

### Available Operations

* [getCustomFieldSettingsForPortfolio](#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [getCustomFieldSettingsForProject](#getcustomfieldsettingsforproject) - Get a project's custom fields

## getCustomFieldSettingsForPortfolio

Returns a list of all of the custom fields settings on a portfolio, in compact form.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetCustomFieldSettingsForPortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.customFieldSettings.getCustomFieldSettingsForPortfolio({
  limit: 612096,
  offset: "dolor",
  optFields: [
    "laboriosam",
    "hic",
    "saepe",
  ],
  optPretty: false,
  portfolioGid: "fuga",
}).then((res: GetCustomFieldSettingsForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetCustomFieldSettingsForPortfolioRequest](../../models/operations/getcustomfieldsettingsforportfoliorequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetCustomFieldSettingsForPortfolioResponse](../../models/operations/getcustomfieldsettingsforportfolioresponse.md)>**


## getCustomFieldSettingsForProject

Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to collections which return compact representation, `opt_fields` can be used to include more data than is returned in the compact representation. See the [getting started guide on input/output options](https://developers.asana.com/docs/#input-output-options) for more information.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetCustomFieldSettingsForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.customFieldSettings.getCustomFieldSettingsForProject({
  limit: 449950,
  offset: "corporis",
  optFields: [
    "iure",
    "saepe",
    "quidem",
  ],
  optPretty: false,
  projectGid: "architecto",
}).then((res: GetCustomFieldSettingsForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetCustomFieldSettingsForProjectRequest](../../models/operations/getcustomfieldsettingsforprojectrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetCustomFieldSettingsForProjectResponse](../../models/operations/getcustomfieldsettingsforprojectresponse.md)>**

