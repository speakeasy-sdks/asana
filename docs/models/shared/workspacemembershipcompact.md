# WorkspaceMembershipCompact

This object determines if a user is a member of a workspace.


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `gid`                                                       | *string*                                                    | :heavy_minus_sign:                                          | Globally unique identifier of the resource, as a string.    | 12345                                                       |
| `resourceType`                                              | *string*                                                    | :heavy_minus_sign:                                          | The base type of this resource.                             | task                                                        |
| `user`                                                      | [UserCompact](../../models/shared/usercompact.md)           | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `workspace`                                                 | [WorkspaceCompact](../../models/shared/workspacecompact.md) | :heavy_minus_sign:                                          | N/A                                                         |                                                             |