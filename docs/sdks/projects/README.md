# projects

## Overview

A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.

Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.

Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.

**Note:** You can use certain project endpoints to operate on [user task lists](/docs/user-task-lists) ([My Tasks](https://asana.com/guide/help/fundamentals/my-tasks)) by substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform operations on the custom fields of a [user task list](/docs/user-task-lists) by using the following projects endpoints: [Add a custom field to a project](/docs/add-a-custom-field-to-a-project), [Remove a custom field from a project](/docs/remove-a-custom-field-from-a-project) and [Get a project's custom fields](/docs/get-a-projects-custom-fields)

### Available Operations

* [addCustomFieldSettingForProject](#addcustomfieldsettingforproject) - Add a custom field to a project
* [addFollowersForProject](#addfollowersforproject) - Add followers to a project
* [addMembersForProject](#addmembersforproject) - Add users to a project
* [createProject](#createproject) - Create a project
* [createProjectForTeam](#createprojectforteam) - Create a project in a team
* [createProjectForWorkspace](#createprojectforworkspace) - Create a project in a workspace
* [deleteProject](#deleteproject) - Delete a project
* [duplicateProject](#duplicateproject) - Duplicate a project
* [getProject](#getproject) - Get a project
* [getProjects](#getprojects) - Get multiple projects
* [getProjectsForTask](#getprojectsfortask) - Get projects a task is in
* [getProjectsForTeam](#getprojectsforteam) - Get a team's projects
* [getProjectsForWorkspace](#getprojectsforworkspace) - Get all projects in a workspace
* [getTaskCountsForProject](#gettaskcountsforproject) - Get task count of a project
* [projectSaveAsTemplate](#projectsaveastemplate) - Create a project template from a project
* [removeCustomFieldSettingForProject](#removecustomfieldsettingforproject) - Remove a custom field from a project
* [removeFollowersForProject](#removefollowersforproject) - Remove followers from a project
* [removeMembersForProject](#removemembersforproject) - Remove users from a project
* [updateProject](#updateproject) - Update a project

## addCustomFieldSettingForProject

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddCustomFieldSettingForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.addCustomFieldSettingForProject({
  requestBody: {
    data: {
      customField: "14916",
      insertAfter: "1331",
      insertBefore: "1331",
      isImportant: true,
    },
  },
  optPretty: false,
  projectGid: "iure",
}).then((res: AddCustomFieldSettingForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.AddCustomFieldSettingForProjectRequest](../../models/operations/addcustomfieldsettingforprojectrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.AddCustomFieldSettingForProjectResponse](../../models/operations/addcustomfieldsettingforprojectresponse.md)>**


## addFollowersForProject

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddFollowersForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.addFollowersForProject({
  requestBody: {
    data: {
      followers: "521621,621373",
    },
  },
  optFields: [
    "quaerat",
    "accusamus",
  ],
  optPretty: false,
  projectGid: "quidem",
}).then((res: AddFollowersForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AddFollowersForProjectRequest](../../models/operations/addfollowersforprojectrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AddFollowersForProjectResponse](../../models/operations/addfollowersforprojectresponse.md)>**


## addMembersForProject

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddMembersForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.addMembersForProject({
  requestBody: {
    data: {
      members: "521621,621373",
    },
  },
  optFields: [
    "voluptas",
    "natus",
    "eos",
    "atque",
  ],
  optPretty: false,
  projectGid: "sit",
}).then((res: AddMembersForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AddMembersForProjectRequest](../../models/operations/addmembersforprojectrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AddMembersForProjectResponse](../../models/operations/addmembersforprojectresponse.md)>**


## createProject

Create a new project in a workspace or team.

Every project is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the `workspace` parameter regardless of whether or not it is an
organization.

If the workspace for your project is an organization, you must also
supply a `team` to share the project with.

Returns the full record of the newly created project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateProjectResponse } from "Asana/dist/sdk/models/operations";
import { ProjectRequestColor, ProjectRequestCurrentStatusColor, ProjectRequestDefaultView } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.createProject({
  requestBody: {
    data: {
      archived: false,
      color: ProjectRequestColor.LightGreen,
      currentStatus: {
        author: {
          name: "Greg Sanchez",
        },
        color: ProjectRequestCurrentStatusColor.Blue,
        createdBy: {
          name: "Greg Sanchez",
        },
        htmlText: "<body>The project <strong>is</strong> moving forward according to plan...</body>",
        text: "The project is moving forward according to plan...",
        title: "Status Update - Jun 15",
      },
      currentStatusUpdate: {
        title: "Status Update - Jun 15",
      },
      customFields: {
        "soluta": "dolorum",
      },
      defaultView: ProjectRequestDefaultView.Calendar,
      dueDate: new Date("2019-09-15"),
      dueOn: new Date("2019-09-15"),
      followers: "12345,23456",
      htmlNotes: "<body>These are things we need to purchase.</body>",
      isTemplate: false,
      name: "Stuff to buy",
      notes: "These are things we need to purchase.",
      owner: "12345",
      public: false,
      startOn: new RFCDate("2019-09-14"),
      team: "12345",
      workspace: {
        name: "My Company Workspace",
      },
    },
  },
  optFields: [
    "voluptate",
    "dolorum",
  ],
  optPretty: false,
}).then((res: CreateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateProjectRequest](../../models/operations/createprojectrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateProjectResponse](../../models/operations/createprojectresponse.md)>**


## createProjectForTeam

Creates a project shared with the given team.

Returns the full record of the newly created project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateProjectForTeamResponse } from "Asana/dist/sdk/models/operations";
import { ProjectRequestColor, ProjectRequestCurrentStatusColor, ProjectRequestDefaultView } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.createProjectForTeam({
  requestBody: {
    data: {
      archived: false,
      color: ProjectRequestColor.LightGreen,
      currentStatus: {
        author: {
          name: "Greg Sanchez",
        },
        color: ProjectRequestCurrentStatusColor.Red,
        createdBy: {
          name: "Greg Sanchez",
        },
        htmlText: "<body>The project <strong>is</strong> moving forward according to plan...</body>",
        text: "The project is moving forward according to plan...",
        title: "Status Update - Jun 15",
      },
      currentStatusUpdate: {
        title: "Status Update - Jun 15",
      },
      customFields: {
        "necessitatibus": "distinctio",
        "asperiores": "nihil",
        "ipsum": "voluptate",
      },
      defaultView: ProjectRequestDefaultView.Calendar,
      dueDate: new Date("2019-09-15"),
      dueOn: new Date("2019-09-15"),
      followers: "12345,23456",
      htmlNotes: "<body>These are things we need to purchase.</body>",
      isTemplate: false,
      name: "Stuff to buy",
      notes: "These are things we need to purchase.",
      owner: "12345",
      public: false,
      startOn: new RFCDate("2019-09-14"),
      team: "12345",
      workspace: {
        name: "My Company Workspace",
      },
    },
  },
  optFields: [
    "saepe",
    "eius",
    "aspernatur",
  ],
  optPretty: false,
  teamGid: "perferendis",
}).then((res: CreateProjectForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateProjectForTeamRequest](../../models/operations/createprojectforteamrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateProjectForTeamResponse](../../models/operations/createprojectforteamresponse.md)>**


## createProjectForWorkspace

Returns the compact project records for all projects in the workspace.

If the workspace for your project is an organization, you must also
supply a team to share the project with.

Returns the full record of the newly created project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateProjectForWorkspaceResponse } from "Asana/dist/sdk/models/operations";
import { ProjectRequestColor, ProjectRequestCurrentStatusColor, ProjectRequestDefaultView } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.createProjectForWorkspace({
  requestBody: {
    data: {
      archived: false,
      color: ProjectRequestColor.LightGreen,
      currentStatus: {
        author: {
          name: "Greg Sanchez",
        },
        color: ProjectRequestCurrentStatusColor.Green,
        createdBy: {
          name: "Greg Sanchez",
        },
        htmlText: "<body>The project <strong>is</strong> moving forward according to plan...</body>",
        text: "The project is moving forward according to plan...",
        title: "Status Update - Jun 15",
      },
      currentStatusUpdate: {
        title: "Status Update - Jun 15",
      },
      customFields: {
        "accusamus": "ad",
        "saepe": "suscipit",
        "deserunt": "provident",
        "minima": "repellendus",
      },
      defaultView: ProjectRequestDefaultView.Calendar,
      dueDate: new Date("2019-09-15"),
      dueOn: new Date("2019-09-15"),
      followers: "12345,23456",
      htmlNotes: "<body>These are things we need to purchase.</body>",
      isTemplate: false,
      name: "Stuff to buy",
      notes: "These are things we need to purchase.",
      owner: "12345",
      public: false,
      startOn: new RFCDate("2019-09-14"),
      team: "12345",
      workspace: {
        name: "My Company Workspace",
      },
    },
  },
  optFields: [
    "similique",
    "alias",
    "at",
  ],
  optPretty: false,
  workspaceGid: "quaerat",
}).then((res: CreateProjectForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateProjectForWorkspaceRequest](../../models/operations/createprojectforworkspacerequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateProjectForWorkspaceResponse](../../models/operations/createprojectforworkspaceresponse.md)>**


## deleteProject

A specific, existing project can be deleted by making a DELETE request on
the URL for that project.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.deleteProject({
  optFields: [
    "vel",
    "quod",
  ],
  optPretty: false,
  projectGid: "officiis",
}).then((res: DeleteProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteProjectRequest](../../models/operations/deleteprojectrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteProjectResponse](../../models/operations/deleteprojectresponse.md)>**


## duplicateProject

Creates and returns a job that will asynchronously handle the duplication.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DuplicateProjectResponse } from "Asana/dist/sdk/models/operations";
import { ProjectDuplicateRequestInclude } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.duplicateProject({
  requestBody: {
    data: {
      include: ProjectDuplicateRequestInclude.Forms,
      name: "New Project Name",
      scheduleDates: {
        dueOn: "2019-05-21",
        shouldSkipWeekends: true,
        startOn: "2019-05-21",
      },
      team: "12345",
    },
  },
  optFields: [
    "a",
    "esse",
    "harum",
  ],
  optPretty: false,
  projectGid: "iusto",
}).then((res: DuplicateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DuplicateProjectRequest](../../models/operations/duplicateprojectrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DuplicateProjectResponse](../../models/operations/duplicateprojectresponse.md)>**


## getProject

Returns the complete project record for a single project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.getProject({
  optFields: [
    "quisquam",
  ],
  optPretty: false,
  projectGid: "tenetur",
}).then((res: GetProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetProjectRequest](../../models/operations/getprojectrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetProjectResponse](../../models/operations/getprojectresponse.md)>**


## getProjects

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectsResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.getProjects({
  archived: false,
  limit: 229442,
  offset: "tempore",
  optFields: [
    "numquam",
    "enim",
    "dolorem",
    "sapiente",
  ],
  optPretty: false,
  team: "totam",
  workspace: "nihil",
}).then((res: GetProjectsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetProjectsRequest](../../models/operations/getprojectsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetProjectsResponse](../../models/operations/getprojectsresponse.md)>**


## getProjectsForTask

Returns a compact representation of all of the projects the task is in.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectsForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.getProjectsForTask({
  limit: 25662,
  offset: "expedita",
  optFields: [
    "sed",
  ],
  optPretty: false,
  taskGid: "vel",
}).then((res: GetProjectsForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetProjectsForTaskRequest](../../models/operations/getprojectsfortaskrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProjectsForTaskResponse](../../models/operations/getprojectsfortaskresponse.md)>**


## getProjectsForTeam

Returns the compact project records for all projects in the team.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectsForTeamResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.getProjectsForTeam({
  archived: false,
  limit: 730442,
  offset: "voluptas",
  optFields: [
    "quam",
    "ipsum",
    "incidunt",
  ],
  optPretty: false,
  teamGid: "qui",
}).then((res: GetProjectsForTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetProjectsForTeamRequest](../../models/operations/getprojectsforteamrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetProjectsForTeamResponse](../../models/operations/getprojectsforteamresponse.md)>**


## getProjectsForWorkspace

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetProjectsForWorkspaceResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.getProjectsForWorkspace({
  archived: false,
  limit: 586784,
  offset: "maxime",
  optFields: [
    "soluta",
    "dicta",
    "laborum",
    "totam",
  ],
  optPretty: false,
  workspaceGid: "incidunt",
}).then((res: GetProjectsForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetProjectsForWorkspaceRequest](../../models/operations/getprojectsforworkspacerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetProjectsForWorkspaceResponse](../../models/operations/getprojectsforworkspaceresponse.md)>**


## getTaskCountsForProject

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.

This endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).

Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTaskCountsForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.getTaskCountsForProject({
  limit: 132068,
  offset: "dolores",
  optFields: [
    "facilis",
    "aliquid",
    "quam",
  ],
  optPretty: false,
  projectGid: "molestias",
}).then((res: GetTaskCountsForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetTaskCountsForProjectRequest](../../models/operations/gettaskcountsforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTaskCountsForProjectResponse](../../models/operations/gettaskcountsforprojectresponse.md)>**


## projectSaveAsTemplate

Creates and returns a job that will asynchronously handle the project template creation. Note that
while the resulting project template can be accessed with the API, it won't be visible in the Asana
UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

### Example Usage

```typescript
import { Asana } from "Asana";
import { ProjectSaveAsTemplateResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.projectSaveAsTemplate({
  requestBody: {
    data: {
      name: "New Project Template",
      public: true,
      team: "12345",
      workspace: "12345",
    },
  },
  optFields: [
    "qui",
    "neque",
    "fugit",
    "magni",
  ],
  optPretty: false,
  projectGid: "odio",
}).then((res: ProjectSaveAsTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ProjectSaveAsTemplateRequest](../../models/operations/projectsaveastemplaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ProjectSaveAsTemplateResponse](../../models/operations/projectsaveastemplateresponse.md)>**


## removeCustomFieldSettingForProject

Removes a custom field setting from a project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveCustomFieldSettingForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.removeCustomFieldSettingForProject({
  requestBody: {
    data: {
      customField: "14916",
    },
  },
  optPretty: false,
  projectGid: "sunt",
}).then((res: RemoveCustomFieldSettingForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.RemoveCustomFieldSettingForProjectRequest](../../models/operations/removecustomfieldsettingforprojectrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.RemoveCustomFieldSettingForProjectResponse](../../models/operations/removecustomfieldsettingforprojectresponse.md)>**


## removeFollowersForProject

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveFollowersForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.removeFollowersForProject({
  requestBody: {
    data: {
      followers: "521621,621373",
    },
  },
  optFields: [
    "nam",
    "hic",
  ],
  optPretty: false,
  projectGid: "voluptatem",
}).then((res: RemoveFollowersForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RemoveFollowersForProjectRequest](../../models/operations/removefollowersforprojectrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RemoveFollowersForProjectResponse](../../models/operations/removefollowersforprojectresponse.md)>**


## removeMembersForProject

Removes the specified list of users from members of the project.
Returns the updated project record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveMembersForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.removeMembersForProject({
  requestBody: {
    data: {
      members: "521621,621373",
    },
  },
  optFields: [
    "soluta",
    "nobis",
    "et",
    "saepe",
  ],
  optPretty: false,
  projectGid: "ipsum",
}).then((res: RemoveMembersForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RemoveMembersForProjectRequest](../../models/operations/removemembersforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RemoveMembersForProjectResponse](../../models/operations/removemembersforprojectresponse.md)>**


## updateProject

A specific, existing project can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated project record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateProjectResponse } from "Asana/dist/sdk/models/operations";
import { ProjectRequestColor, ProjectRequestCurrentStatusColor, ProjectRequestDefaultView } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.projects.updateProject({
  requestBody: {
    data: {
      archived: false,
      color: ProjectRequestColor.LightGreen,
      currentStatus: {
        author: {
          name: "Greg Sanchez",
        },
        color: ProjectRequestCurrentStatusColor.Green,
        createdBy: {
          name: "Greg Sanchez",
        },
        htmlText: "<body>The project <strong>is</strong> moving forward according to plan...</body>",
        text: "The project is moving forward according to plan...",
        title: "Status Update - Jun 15",
      },
      currentStatusUpdate: {
        title: "Status Update - Jun 15",
      },
      customFields: {
        "quos": "tempore",
        "cupiditate": "aperiam",
        "delectus": "dolorem",
      },
      defaultView: ProjectRequestDefaultView.Calendar,
      dueDate: new Date("2019-09-15"),
      dueOn: new Date("2019-09-15"),
      followers: "12345,23456",
      htmlNotes: "<body>These are things we need to purchase.</body>",
      isTemplate: false,
      name: "Stuff to buy",
      notes: "These are things we need to purchase.",
      owner: "12345",
      public: false,
      startOn: new RFCDate("2019-09-14"),
      team: "12345",
      workspace: {
        name: "My Company Workspace",
      },
    },
  },
  optFields: [
    "labore",
    "adipisci",
  ],
  optPretty: false,
  projectGid: "dolorum",
}).then((res: UpdateProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateProjectRequest](../../models/operations/updateprojectrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateProjectResponse](../../models/operations/updateprojectresponse.md)>**

