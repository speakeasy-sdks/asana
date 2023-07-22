# sections

## Overview

A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.

Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.

The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.

### Available Operations

* [addTaskForSection](#addtaskforsection) - Add task to section
* [createSectionForProject](#createsectionforproject) - Create a section in a project
* [deleteSection](#deletesection) - Delete a section
* [getSection](#getsection) - Get a section
* [getSectionsForProject](#getsectionsforproject) - Get sections in a project
* [insertSectionForProject](#insertsectionforproject) - Move or Insert sections
* [updateSection](#updatesection) - Update a section

## addTaskForSection

Add a task to a specific, existing section. This will remove the task from other sections of the project.

The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.

This does not work for separators (tasks with the resource_subtype of section).

### Example Usage

```typescript
import { Asana } from "Asana";
import { AddTaskForSectionResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.addTaskForSection({
  requestBody: {
    data: {
      insertAfter: "987654",
      insertBefore: "86420",
      task: "123456",
    },
  },
  optFields: [
    "quae",
  ],
  optPretty: false,
  sectionGid: "aut",
}).then((res: AddTaskForSectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.AddTaskForSectionRequest](../../models/operations/addtaskforsectionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.AddTaskForSectionResponse](../../models/operations/addtaskforsectionresponse.md)>**


## createSectionForProject

Creates a new section in a project.
Returns the full record of the newly created section.

### Example Usage

```typescript
import { Asana } from "Asana";
import { CreateSectionForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.createSectionForProject({
  requestBody: {
    data: {
      insertAfter: "987654",
      insertBefore: "86420",
      name: "Next Actions",
    },
  },
  optFields: [
    "itaque",
    "consequatur",
    "est",
  ],
  optPretty: false,
  projectGid: "repellendus",
}).then((res: CreateSectionForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateSectionForProjectRequest](../../models/operations/createsectionforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateSectionForProjectResponse](../../models/operations/createsectionforprojectresponse.md)>**


## deleteSection

A specific, existing section can be deleted by making a DELETE request on
the URL for that section.

Note that sections must be empty to be deleted.

The last remaining section cannot be deleted.

Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { DeleteSectionResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.deleteSection({
  optFields: [
    "doloribus",
    "ut",
    "facilis",
    "cupiditate",
  ],
  optPretty: false,
  sectionGid: "qui",
}).then((res: DeleteSectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteSectionRequest](../../models/operations/deletesectionrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteSectionResponse](../../models/operations/deletesectionresponse.md)>**


## getSection

Returns the complete record for a single section.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetSectionResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.getSection({
  optFields: [
    "laudantium",
  ],
  optPretty: false,
  sectionGid: "odio",
}).then((res: GetSectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetSectionRequest](../../models/operations/getsectionrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetSectionResponse](../../models/operations/getsectionresponse.md)>**


## getSectionsForProject

Returns the compact records for all sections in the specified project.

### Example Usage

```typescript
import { Asana } from "Asana";
import { GetSectionsForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.getSectionsForProject({
  limit: 580447,
  offset: "voluptatibus",
  optFields: [
    "vero",
    "omnis",
    "quis",
    "ipsum",
  ],
  optPretty: false,
  projectGid: "delectus",
}).then((res: GetSectionsForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetSectionsForProjectRequest](../../models/operations/getsectionsforprojectrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetSectionsForProjectResponse](../../models/operations/getsectionsforprojectresponse.md)>**


## insertSectionForProject

Move sections relative to each other. One of
`before_section` or `after_section` is required.

Sections cannot be moved between projects.

Returns an empty data block.

### Example Usage

```typescript
import { Asana } from "Asana";
import { InsertSectionForProjectResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.insertSectionForProject({
  requestBody: {
    data: {
      afterSection: "987654",
      beforeSection: "86420",
      project: "123456",
      section: "321654",
    },
  },
  optFields: [
    "consectetur",
    "vero",
  ],
  optPretty: false,
  projectGid: "tenetur",
}).then((res: InsertSectionForProjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.InsertSectionForProjectRequest](../../models/operations/insertsectionforprojectrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.InsertSectionForProjectResponse](../../models/operations/insertsectionforprojectresponse.md)>**


## updateSection

A specific, existing section can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged. (note that
at this time, the only field that can be updated is the `name` field.)

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated section record.

### Example Usage

```typescript
import { Asana } from "Asana";
import { UpdateSectionResponse } from "Asana/dist/sdk/models/operations";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.sections.updateSection({
  requestBody: {
    data: {
      insertAfter: "987654",
      insertBefore: "86420",
      name: "Next Actions",
    },
  },
  optFields: [
    "hic",
    "distinctio",
  ],
  optPretty: false,
  sectionGid: "quod",
}).then((res: UpdateSectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateSectionRequest](../../models/operations/updatesectionrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateSectionResponse](../../models/operations/updatesectionresponse.md)>**

