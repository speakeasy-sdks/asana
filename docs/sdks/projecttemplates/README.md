# projectTemplates

## Overview

A project template is an object that allows new projects to be created
with a predefined setup, which may include tasks, sections, rules, etc.
It simplifies the process of running a workflow that involves a similar
set of work every time.


Project templates in organizations are shared with a single team. Currently, the
team of a project template cannot be changed via the API.

### Available Operations

* [getProjectTemplate](#getprojecttemplate) - Get a project template
* [getProjectTemplates](#getprojecttemplates) - Get multiple project templates
* [getProjectTemplatesForTeam](#getprojecttemplatesforteam) - Get a team's project templates
* [instantiateProject](#instantiateproject) - Instantiate a project from a project template

## getProjectTemplate

Returns the complete project template record for a single project template.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectTemplateResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectTemplates.getProjectTemplate({
  optFields: [
    "nobis",
    "libero",
    "delectus",
  ],
  optPretty: false,
  projectTemplateGid: "quaerat",
}).then((res: GetProjectTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetProjectTemplateRequest](../../models/operations/getprojecttemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProjectTemplateResponse](../../models/operations/getprojecttemplateresponse.md)>**


## getProjectTemplates

Returns the compact project template records for all project templates in the given team or workspace.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectTemplatesResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectTemplates.getProjectTemplates({
  limit: 554242,
  offset: "aliquid",
  optFields: [
    "dolorem",
  ],
  optPretty: false,
  team: "dolor",
  workspace: "qui",
}).then((res: GetProjectTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetProjectTemplatesRequest](../../models/operations/getprojecttemplatesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetProjectTemplatesResponse](../../models/operations/getprojecttemplatesresponse.md)>**


## getProjectTemplatesForTeam

Returns the compact project template records for all project templates in the team.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectTemplatesForTeamResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectTemplates.getProjectTemplatesForTeam({
  limit: 218749,
  offset: "hic",
  optFields: [
    "cum",
    "voluptate",
    "dignissimos",
  ],
  optPretty: false,
  teamGid: "reiciendis",
}).then((res: GetProjectTemplatesForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetProjectTemplatesForTeamRequest](../../models/operations/getprojecttemplatesforteamrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetProjectTemplatesForTeamResponse](../../models/operations/getprojecttemplatesforteamresponse.md)>**


## instantiateProject

Creates and returns a job that will asynchronously handle the project instantiation.

To form this request, it is recommended to first make a request to [get a project template](/docs/get-a-project-template). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.

_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/docs/workspace) parameter._

### Example Usage

```typescript
import { Asana } from "Asana";
import { InstantiateProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projectTemplates.instantiateProject({
  requestBody: {
    data: {
      isStrict: true,
      name: "New Project Name",
      public: true,
      requestedDates: [
        {
          gid: "1",
          value: new Date("2022-01-01"),
        },
      ],
      team: "12345",
      workspace: "12345",
    },
  },
  optFields: [
    "numquam",
    "veritatis",
    "ipsa",
  ],
  optPretty: false,
  projectTemplateGid: "ipsa",
}).then((res: InstantiateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.InstantiateProjectRequest](../../models/operations/instantiateprojectrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.InstantiateProjectResponse](../../models/operations/instantiateprojectresponse.md)>**

