# WorkspaceResponse

A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `emailDomains`                                             | *string*[]                                                 | :heavy_minus_sign:                                         | The email domains that are associated with this workspace. |                                                            |
| `gid`                                                      | *string*                                                   | :heavy_minus_sign:                                         | Globally unique identifier of the resource, as a string.   | 12345                                                      |
| `isOrganization`                                           | *boolean*                                                  | :heavy_minus_sign:                                         | Whether the workspace is an *organization*.                | false                                                      |
| `name`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The name of the workspace.                                 | My Company Workspace                                       |
| `resourceType`                                             | *string*                                                   | :heavy_minus_sign:                                         | The base type of this resource.                            | task                                                       |