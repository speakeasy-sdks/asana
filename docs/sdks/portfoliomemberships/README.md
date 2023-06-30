# portfolioMemberships

## Overview

This object determines if a user is a member of a portfolio.

### Available Operations

* [getPortfolioMembership](#getportfoliomembership) - Get a portfolio membership
* [getPortfolioMemberships](#getportfoliomemberships) - Get multiple portfolio memberships
* [getPortfolioMembershipsForPortfolio](#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

## getPortfolioMembership

Returns the complete portfolio record for a single portfolio membership.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetPortfolioMembershipResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolioMemberships.getPortfolioMembership({
  optFields: [
    "perferendis",
    "nihil",
  ],
  optPretty: false,
  portfolioMembershipGid: "magnam",
}).then((res: GetPortfolioMembershipResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPortfolioMembershipRequest](../../models/operations/getportfoliomembershiprequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPortfolioMembershipResponse](../../models/operations/getportfoliomembershipresponse.md)>**


## getPortfolioMemberships

Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetPortfolioMembershipsResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolioMemberships.getPortfolioMemberships({
  limit: 716075,
  offset: "id",
  optFields: [
    "labore",
    "suscipit",
  ],
  optPretty: false,
  portfolio: "natus",
  user: "nobis",
  workspace: "eum",
}).then((res: GetPortfolioMembershipsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetPortfolioMembershipsRequest](../../models/operations/getportfoliomembershipsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetPortfolioMembershipsResponse](../../models/operations/getportfoliomembershipsresponse.md)>**


## getPortfolioMembershipsForPortfolio

Returns the compact portfolio membership records for the portfolio.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetPortfolioMembershipsForPortfolioResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.portfolioMemberships.getPortfolioMembershipsForPortfolio({
  limit: 878453,
  offset: "aspernatur",
  optFields: [
    "magnam",
  ],
  optPretty: false,
  portfolioGid: "et",
  user: "excepturi",
}).then((res: GetPortfolioMembershipsForPortfolioResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetPortfolioMembershipsForPortfolioRequest](../../models/operations/getportfoliomembershipsforportfoliorequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetPortfolioMembershipsForPortfolioResponse](../../models/operations/getportfoliomembershipsforportfolioresponse.md)>**

