# ProjectBriefResponse

A *Project Brief* allows you to explain the what and why of the project to your team.


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `gid`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | Globally unique identifier of the resource, as a string.                          | 12345                                                                             |
| `htmlText`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | HTML formatted text for the project brief.                                        | <body>This is a <strong>project brief</strong>.</body>                            |
| `permalinkUrl`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | A url that points directly to the object within Asana.                            | https://app.asana.com/0/11111111/22222222                                         |
| `project`                                                                         | [ProjectBriefResponseProject](../../models/shared/projectbriefresponseproject.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |
| `resourceType`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | The base type of this resource.                                                   | task                                                                              |
| `text`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | [Opt In](/docs/input-output-options). The plain text of the project brief.        | This is a project brief.                                                          |
| `title`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | The title of the project brief.                                                   | Stuff to buy — Project Brief                                                      |