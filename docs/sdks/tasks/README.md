# tasks

## Overview

The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.

Sections are unique in that they will be included in the `memberships` field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.

[Queries](/docs/get-multiple-tasks) return a [compact representation of each task object](/docs/task-compact). To retrieve *all* fields or *specific set* of the fields, use [field selectors](/docs/input-output-options) to manipulate what data is included in a response.

### Available Operations

* [addDependenciesForTask](#adddependenciesfortask) - Set dependencies for a task
* [addDependentsForTask](#adddependentsfortask) - Set dependents for a task
* [addFollowersForTask](#addfollowersfortask) - Add followers to a task
* [addProjectForTask](#addprojectfortask) - Add a project to a task
* [addTagForTask](#addtagfortask) - Add a tag to a task
* [createSubtaskForTask](#createsubtaskfortask) - Create a subtask
* [createTask](#createtask) - Create a task
* [deleteTask](#deletetask) - Delete a task
* [duplicateTask](#duplicatetask) - Duplicate a task
* [getDependenciesForTask](#getdependenciesfortask) - Get dependencies from a task
* [getDependentsForTask](#getdependentsfortask) - Get dependents from a task
* [getSubtasksForTask](#getsubtasksfortask) - Get subtasks from a task
* [getTask](#gettask) - Get a task
* [getTasks](#gettasks) - Get multiple tasks
* [getTasksForProject](#gettasksforproject) - Get tasks from a project
* [getTasksForSection](#gettasksforsection) - Get tasks from a section
* [getTasksForTag](#gettasksfortag) - Get tasks from a tag
* [getTasksForUserTaskList](#gettasksforusertasklist) - Get tasks from a user task list
* [removeDependenciesForTask](#removedependenciesfortask) - Unlink dependencies from a task
* [removeDependentsForTask](#removedependentsfortask) - Unlink dependents from a task
* [removeFollowerForTask](#removefollowerfortask) - Remove followers from a task
* [removeProjectForTask](#removeprojectfortask) - Remove a project from a task
* [removeTagForTask](#removetagfortask) - Remove a tag from a task
* [searchTasksForWorkspace](#searchtasksforworkspace) - Search tasks in a workspace
* [setParentForTask](#setparentfortask) - Set the parent of a task
* [updateTask](#updatetask) - Update a task

## addDependenciesForTask

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddDependenciesForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.addDependenciesForTask({
  requestBody: {
    data: {
      dependencies: [
        "fugiat",
        "ut",
        "eum",
      ],
    },
  },
  optFields: [
    "assumenda",
    "eos",
  ],
  optPretty: false,
  taskGid: "praesentium",
}).then((res: AddDependenciesForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AddDependenciesForTaskRequest](../../models/operations/adddependenciesfortaskrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AddDependenciesForTaskResponse](../../models/operations/adddependenciesfortaskresponse.md)>**


## addDependentsForTask

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddDependentsForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.addDependentsForTask({
  requestBody: {
    data: {
      dependents: [
        "veritatis",
        "ipsa",
        "id",
        "quidem",
      ],
    },
  },
  optFields: [
    "quo",
  ],
  optPretty: false,
  taskGid: "illum",
}).then((res: AddDependentsForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.AddDependentsForTaskRequest](../../models/operations/adddependentsfortaskrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.AddDependentsForTaskResponse](../../models/operations/adddependentsfortaskresponse.md)>**


## addFollowersForTask

Adds followers to a task. Returns an empty data block.
Each task can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated task record, described above.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddFollowersForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.addFollowersForTask({
  requestBody: {
    data: {
      followers: [
        "fuga",
        "eius",
        "eos",
        "voluptas",
      ],
    },
  },
  optFields: [
    "cupiditate",
  ],
  optPretty: false,
  taskGid: "consequatur",
}).then((res: AddFollowersForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.AddFollowersForTaskRequest](../../models/operations/addfollowersfortaskrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.AddFollowersForTaskResponse](../../models/operations/addfollowersfortaskresponse.md)>**


## addProjectForTask

Adds the task to the specified project, in the optional location
specified. If no location arguments are given, the task will be added to
the end of the project.

`addProject` can also be used to reorder a task within a project or
section that already contains it.

At most one of `insert_before`, `insert_after`, or `section` should be
specified. Inserting into a section in an non-order-dependent way can be
done by specifying section, otherwise, to insert within a section in a
particular place, specify `insert_before` or `insert_after` and a task
within the section to anchor the position of this task.

Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddProjectForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.addProjectForTask({
  requestBody: {
    data: {
      insertAfter: "124816",
      insertBefore: "432134",
      project: "13579",
      section: "987654",
    },
  },
  optFields: [
    "debitis",
    "ipsam",
  ],
  optPretty: false,
  taskGid: "aspernatur",
}).then((res: AddProjectForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AddProjectForTaskRequest](../../models/operations/addprojectfortaskrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AddProjectForTaskResponse](../../models/operations/addprojectfortaskresponse.md)>**


## addTagForTask

Adds a tag to a task. Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddTagForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.addTagForTask({
  requestBody: {
    data: {
      tag: "13579",
    },
  },
  optFields: [
    "quo",
  ],
  optPretty: false,
  taskGid: "esse",
}).then((res: AddTagForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.AddTagForTaskRequest](../../models/operations/addtagfortaskrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.AddTagForTaskResponse](../../models/operations/addtagfortaskresponse.md)>**


## createSubtaskForTask

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateSubtaskForTaskResponse } from "Asana/dist/sdk/models/operations";
import { TaskRequestApprovalStatus, TaskRequestAssigneeStatus, TaskRequestResourceSubtype } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.createSubtaskForTask({
  requestBody: {
    data: {
      approvalStatus: TaskRequestApprovalStatus.Pending,
      assignee: "12345",
      assigneeSection: "12345",
      assigneeStatus: TaskRequestAssigneeStatus.Upcoming,
      completed: false,
      completedBy: {
        name: "Greg Sanchez",
      },
      customFields: {
        "aperiam": "distinctio",
        "quod": "dignissimos",
        "inventore": "nihil",
        "totam": "accusamus",
      },
      dueAt: new RFCDate("2019-09-15T02:06:58.147Z"),
      dueOn: new RFCDate("2019-09-15"),
      external: {
        data: "A blob of information.",
        gid: "1234",
      },
      followers: [
        "odio",
        "occaecati",
      ],
      htmlNotes: "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
      liked: true,
      name: "Bug Task",
      notes: "Mittens really likes the stuff from Humboldt.",
      parent: "12345",
      projects: [
        "sapiente",
        "dolores",
      ],
      resourceSubtype: TaskRequestResourceSubtype.DefaultTask,
      startAt: new RFCDate("2019-09-14T02:06:58.147Z"),
      startOn: new RFCDate("2019-09-14"),
      tags: [
        "molestiae",
        "accusantium",
        "porro",
      ],
      workspace: "12345",
    },
  },
  optFields: [
    "quas",
    "praesentium",
  ],
  optPretty: false,
  taskGid: "consequuntur",
}).then((res: CreateSubtaskForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateSubtaskForTaskRequest](../../models/operations/createsubtaskfortaskrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateSubtaskForTaskResponse](../../models/operations/createsubtaskfortaskresponse.md)>**


## createTask

Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
data block containing the fields you’d like to set on the task. Any
unspecified fields will take on default values.

Every task is required to be created in a specific workspace, and this
workspace cannot be changed once set. The workspace need not be set
explicitly if you specify `projects` or a `parent` task instead.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateTaskResponse } from "Asana/dist/sdk/models/operations";
import { TaskRequestApprovalStatus, TaskRequestAssigneeStatus, TaskRequestResourceSubtype } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.createTask({
  requestBody: {
    data: {
      approvalStatus: TaskRequestApprovalStatus.Pending,
      assignee: "12345",
      assigneeSection: "12345",
      assigneeStatus: TaskRequestAssigneeStatus.Upcoming,
      completed: false,
      completedBy: {
        name: "Greg Sanchez",
      },
      customFields: {
        "fugit": "fuga",
        "mollitia": "incidunt",
        "atque": "explicabo",
      },
      dueAt: new RFCDate("2019-09-15T02:06:58.147Z"),
      dueOn: new RFCDate("2019-09-15"),
      external: {
        data: "A blob of information.",
        gid: "1234",
      },
      followers: [
        "nisi",
        "fugit",
      ],
      htmlNotes: "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
      liked: true,
      name: "Bug Task",
      notes: "Mittens really likes the stuff from Humboldt.",
      parent: "12345",
      projects: [
        "consequuntur",
        "ratione",
        "explicabo",
        "saepe",
      ],
      resourceSubtype: TaskRequestResourceSubtype.DefaultTask,
      startAt: new RFCDate("2019-09-14T02:06:58.147Z"),
      startOn: new RFCDate("2019-09-14"),
      tags: [
        "atque",
        "et",
        "esse",
      ],
      workspace: "12345",
    },
  },
  optFields: [
    "accusamus",
    "veritatis",
    "esse",
    "quod",
  ],
  optPretty: false,
}).then((res: CreateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.CreateTaskRequest](../../models/operations/createtaskrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateTaskResponse](../../models/operations/createtaskresponse.md)>**


## deleteTask

A specific, existing task can be deleted by making a DELETE request on
the URL for that task. Deleted tasks go into the “trash” of the user
making the delete request. Tasks can be recovered from the trash within a
period of 30 days; afterward they are completely removed from the system.

Returns an empty data record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.deleteTask({
  optFields: [
    "vero",
    "aliquid",
    "quasi",
  ],
  optPretty: false,
  taskGid: "saepe",
}).then((res: DeleteTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteTaskRequest](../../models/operations/deletetaskrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteTaskResponse](../../models/operations/deletetaskresponse.md)>**


## duplicateTask

Creates and returns a job that will asynchronously handle the duplication.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DuplicateTaskResponse } from "Asana/dist/sdk/models/operations";
import { TaskDuplicateRequestInclude } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.duplicateTask({
  requestBody: {
    data: {
      include: TaskDuplicateRequestInclude.Tags,
      name: "New Task Name",
    },
  },
  optFields: [
    "molestiae",
    "rerum",
    "occaecati",
  ],
  optPretty: false,
  taskGid: "minima",
}).then((res: DuplicateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DuplicateTaskRequest](../../models/operations/duplicatetaskrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DuplicateTaskResponse](../../models/operations/duplicatetaskresponse.md)>**


## getDependenciesForTask

Returns the compact representations of all of the dependencies of a task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetDependenciesForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getDependenciesForTask({
  limit: 716244,
  offset: "eligendi",
  optFields: [
    "culpa",
  ],
  optPretty: false,
  taskGid: "tempore",
}).then((res: GetDependenciesForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetDependenciesForTaskRequest](../../models/operations/getdependenciesfortaskrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetDependenciesForTaskResponse](../../models/operations/getdependenciesfortaskresponse.md)>**


## getDependentsForTask

Returns the compact representations of all of the dependents of a task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetDependentsForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getDependentsForTask({
  limit: 240020,
  offset: "cumque",
  optFields: [
    "consequatur",
  ],
  optPretty: false,
  taskGid: "minus",
}).then((res: GetDependentsForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetDependentsForTaskRequest](../../models/operations/getdependentsfortaskrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetDependentsForTaskResponse](../../models/operations/getdependentsfortaskresponse.md)>**


## getSubtasksForTask

Returns a compact representation of all of the subtasks of a task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetSubtasksForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getSubtasksForTask({
  limit: 308286,
  offset: "sapiente",
  optFields: [
    "esse",
  ],
  optPretty: false,
  taskGid: "blanditiis",
}).then((res: GetSubtasksForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetSubtasksForTaskRequest](../../models/operations/getsubtasksfortaskrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetSubtasksForTaskResponse](../../models/operations/getsubtasksfortaskresponse.md)>**


## getTask

Returns the complete task record for a single task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getTask({
  optFields: [
    "a",
    "nulla",
    "quas",
  ],
  optPretty: false,
  taskGid: "esse",
}).then((res: GetTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetTaskRequest](../../models/operations/gettaskrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetTaskResponse](../../models/operations/gettaskresponse.md)>**


## getTasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTasksResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getTasks({
  assignee: "quasi",
  completedSince: new Date("2012-02-22T02:06:58.158Z"),
  limit: 951875,
  modifiedSince: new Date("2021-11-06T16:50:22.586Z"),
  offset: "pariatur",
  optFields: [
    "quia",
    "eveniet",
    "asperiores",
    "facere",
  ],
  optPretty: false,
  project: "veritatis",
  section: "consequuntur",
  workspace: "quasi",
}).then((res: GetTasksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetTasksRequest](../../models/operations/gettasksrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetTasksResponse](../../models/operations/gettasksresponse.md)>**


## getTasksForProject

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTasksForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getTasksForProject({
  completedSince: "similique",
  limit: 633608,
  offset: "aliquid",
  optFields: [
    "quae",
    "earum",
    "vel",
    "in",
  ],
  optPretty: false,
  projectGid: "eius",
}).then((res: GetTasksForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTasksForProjectRequest](../../models/operations/gettasksforprojectrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTasksForProjectResponse](../../models/operations/gettasksforprojectresponse.md)>**


## getTasksForSection

*Board view only*: Returns the compact section records for all tasks within the given section.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTasksForSectionResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getTasksForSection({
  limit: 727697,
  offset: "illum",
  optFields: [
    "accusantium",
    "aliquam",
    "sapiente",
  ],
  optPretty: false,
  sectionGid: "dicta",
}).then((res: GetTasksForSectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetTasksForSectionRequest](../../models/operations/gettasksforsectionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetTasksForSectionResponse](../../models/operations/gettasksforsectionresponse.md)>**


## getTasksForTag

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTasksForTagResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getTasksForTag({
  limit: 355369,
  offset: "reprehenderit",
  optFields: [
    "nisi",
    "aut",
  ],
  optPretty: false,
  tagGid: "voluptatum",
}).then((res: GetTasksForTagResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTasksForTagRequest](../../models/operations/gettasksfortagrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTasksForTagResponse](../../models/operations/gettasksfortagresponse.md)>**


## getTasksForUserTaskList

Returns the compact list of tasks in a user’s My Tasks list.
*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetTasksForUserTaskListResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.getTasksForUserTaskList({
  completedSince: "qui",
  limit: 845358,
  offset: "ex",
  optFields: [
    "itaque",
    "dolorum",
    "architecto",
  ],
  optPretty: false,
  userTaskListGid: "omnis",
}).then((res: GetTasksForUserTaskListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetTasksForUserTaskListRequest](../../models/operations/gettasksforusertasklistrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetTasksForUserTaskListResponse](../../models/operations/gettasksforusertasklistresponse.md)>**


## removeDependenciesForTask

Unlinks a set of dependencies from this task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveDependenciesForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.removeDependenciesForTask({
  requestBody: {
    data: {
      dependencies: [
        "quasi",
        "at",
        "et",
        "voluptate",
      ],
    },
  },
  optFields: [
    "minima",
  ],
  optPretty: false,
  taskGid: "veritatis",
}).then((res: RemoveDependenciesForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RemoveDependenciesForTaskRequest](../../models/operations/removedependenciesfortaskrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RemoveDependenciesForTaskResponse](../../models/operations/removedependenciesfortaskresponse.md)>**


## removeDependentsForTask

Unlinks a set of dependents from this task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveDependentsForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.removeDependentsForTask({
  requestBody: {
    data: {
      dependents: [
        "adipisci",
      ],
    },
  },
  optFields: [
    "temporibus",
    "accusantium",
    "rem",
  ],
  optPretty: false,
  taskGid: "aut",
}).then((res: RemoveDependentsForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RemoveDependentsForTaskRequest](../../models/operations/removedependentsfortaskrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RemoveDependentsForTaskResponse](../../models/operations/removedependentsfortaskresponse.md)>**


## removeFollowerForTask

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveFollowerForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.removeFollowerForTask({
  requestBody: {
    data: {
      followers: [
        "eum",
        "mollitia",
        "ab",
      ],
    },
  },
  optFields: [
    "non",
    "voluptatem",
    "dolor",
  ],
  optPretty: false,
  taskGid: "occaecati",
}).then((res: RemoveFollowerForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveFollowerForTaskRequest](../../models/operations/removefollowerfortaskrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveFollowerForTaskResponse](../../models/operations/removefollowerfortaskresponse.md)>**


## removeProjectForTask

Removes the task from the specified project. The task will still exist in
the system, but it will not be in the project anymore.

Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveProjectForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.removeProjectForTask({
  requestBody: {
    data: {
      project: "13579",
    },
  },
  optFields: [
    "impedit",
    "explicabo",
  ],
  optPretty: false,
  taskGid: "voluptas",
}).then((res: RemoveProjectForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RemoveProjectForTaskRequest](../../models/operations/removeprojectfortaskrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveProjectForTaskResponse](../../models/operations/removeprojectfortaskresponse.md)>**


## removeTagForTask

Removes a tag from a task. Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { RemoveTagForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.removeTagForTask({
  requestBody: {
    data: {
      tag: "13579",
    },
  },
  optFields: [
    "dignissimos",
  ],
  optPretty: false,
  taskGid: "dicta",
}).then((res: RemoveTagForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RemoveTagForTaskRequest](../../models/operations/removetagfortaskrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RemoveTagForTaskResponse](../../models/operations/removetagfortaskresponse.md)>**


## searchTasksForWorkspace

To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
#### Premium access
Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:

- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace

Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
#### Pagination
Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
#### Eventual consistency
Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
#### Rate limits
You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
#### Custom field parameters
| Parameter name | Custom field type | Accepted type |
|---|---|---|
| custom_fields.{gid}.is_set | All | Boolean |
| custom_fields.{gid}.value | Text | String |
| custom_fields.{gid}.value | Number | Number |
| custom_fields.{gid}.value | Enum | Enum option ID |
| custom_fields.{gid}.starts_with | Text only | String |
| custom_fields.{gid}.ends_with | Text only | String |
| custom_fields.{gid}.contains | Text only | String |
| custom_fields.{gid}.less_than | Number only | Number |
| custom_fields.{gid}.greater_than | Number only | Number |


For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.

**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field

*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

### Example Usage

```typescript
import { Asana } from "Asana";
import {
  SearchTasksForWorkspaceResourceSubtype,
  SearchTasksForWorkspaceResponse,
  SearchTasksForWorkspaceSortBy,
} from "Asana/dist/sdk/models/operations";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.searchTasksForWorkspace({
  assignedByAny: "maiores",
  assignedByNot: "natus",
  assigneeAny: "velit",
  assigneeNot: "voluptatibus",
  commentedOnByNot: "voluptas",
  completed: false,
  completedAtAfter: new Date("2022-11-12T00:03:51.639Z"),
  completedAtBefore: new Date("2022-09-09T19:48:26.093Z"),
  completedOn: new RFCDate("2022-03-03"),
  completedOnAfter: new RFCDate("2021-05-21"),
  completedOnBefore: new RFCDate("2022-05-12"),
  createdAtAfter: new Date("2021-11-23T22:16:07.257Z"),
  createdAtBefore: new Date("2022-09-08T20:16:51.473Z"),
  createdByAny: "porro",
  createdByNot: "quod",
  createdOn: new RFCDate("2022-12-06"),
  createdOnAfter: new RFCDate("2022-04-26"),
  createdOnBefore: new RFCDate("2022-03-29"),
  dueAtAfter: new Date("2022-05-14T14:45:53.115Z"),
  dueAtBefore: new Date("2021-02-23T09:04:41.843Z"),
  dueOn: new RFCDate("2021-04-17"),
  dueOnAfter: new RFCDate("2022-07-03"),
  dueOnBefore: new RFCDate("2022-02-22"),
  followersNot: "labore",
  hasAttachment: false,
  isBlocked: false,
  isBlocking: false,
  isSubtask: false,
  likedByNot: "possimus",
  modifiedAtAfter: new Date("2021-07-11T02:16:12.828Z"),
  modifiedAtBefore: new Date("2022-07-21T19:01:11.341Z"),
  modifiedOn: new RFCDate("2022-01-12"),
  modifiedOnAfter: new RFCDate("2021-11-29"),
  modifiedOnBefore: new RFCDate("2021-10-22"),
  optFields: [
    "cum",
  ],
  optPretty: false,
  portfoliosAny: "consectetur",
  projectsAll: "in",
  projectsAny: "exercitationem",
  projectsNot: "earum",
  resourceSubtype: SearchTasksForWorkspaceResourceSubtype.Milestone,
  sectionsAll: "numquam",
  sectionsAny: "doloribus",
  sectionsNot: "suscipit",
  sortAscending: false,
  sortBy: SearchTasksForWorkspaceSortBy.ModifiedAt,
  startOn: new RFCDate("2021-03-11"),
  startOnAfter: new RFCDate("2022-02-10"),
  startOnBefore: new RFCDate("2022-01-03"),
  tagsAll: "adipisci",
  tagsAny: "non",
  tagsNot: "amet",
  teamsAny: "beatae",
  text: "dignissimos",
  workspaceGid: "a",
}).then((res: SearchTasksForWorkspaceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.SearchTasksForWorkspaceRequest](../../models/operations/searchtasksforworkspacerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.SearchTasksForWorkspaceResponse](../../models/operations/searchtasksforworkspaceresponse.md)>**


## setParentForTask

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

### Example Usage

```typescript
import { Asana } from "Asana";
import { SetParentForTaskResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.setParentForTask({
  requestBody: {
    data: {
      insertAfter: "null",
      insertBefore: "124816",
      parent: "987654",
    },
  },
  optFields: [
    "consectetur",
    "corporis",
    "harum",
    "laboriosam",
  ],
  optPretty: false,
  taskGid: "ipsa",
}).then((res: SetParentForTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.SetParentForTaskRequest](../../models/operations/setparentfortaskrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SetParentForTaskResponse](../../models/operations/setparentfortaskresponse.md)>**


## updateTask

A specific, existing task can be updated by making a PUT request on the
URL for that task. Only the fields provided in the `data` block will be
updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated task record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateTaskResponse } from "Asana/dist/sdk/models/operations";
import { TaskRequestApprovalStatus, TaskRequestAssigneeStatus, TaskRequestResourceSubtype } from "Asana/dist/sdk/models/shared";
import { RFCDate } from "Asana/dist/sdk/types";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.tasks.updateTask({
  requestBody: {
    data: {
      approvalStatus: TaskRequestApprovalStatus.Pending,
      assignee: "12345",
      assigneeSection: "12345",
      assigneeStatus: TaskRequestAssigneeStatus.Upcoming,
      completed: false,
      completedBy: {
        name: "Greg Sanchez",
      },
      customFields: {
        "libero": "vitae",
        "accusamus": "similique",
        "tempora": "aspernatur",
        "voluptas": "voluptas",
      },
      dueAt: new RFCDate("2019-09-15T02:06:58.147Z"),
      dueOn: new RFCDate("2019-09-15"),
      external: {
        data: "A blob of information.",
        gid: "1234",
      },
      followers: [
        "minima",
        "nobis",
      ],
      htmlNotes: "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
      liked: true,
      name: "Bug Task",
      notes: "Mittens really likes the stuff from Humboldt.",
      parent: "12345",
      projects: [
        "adipisci",
        "minus",
        "dolores",
      ],
      resourceSubtype: TaskRequestResourceSubtype.DefaultTask,
      startAt: new RFCDate("2019-09-14T02:06:58.147Z"),
      startOn: new RFCDate("2019-09-14"),
      tags: [
        "in",
        "dolore",
        "aliquam",
      ],
      workspace: "12345",
    },
  },
  optFields: [
    "temporibus",
    "ullam",
    "adipisci",
    "cum",
  ],
  optPretty: false,
  taskGid: "blanditiis",
}).then((res: UpdateTaskResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateTaskRequest](../../models/operations/updatetaskrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateTaskResponse](../../models/operations/updatetaskresponse.md)>**

