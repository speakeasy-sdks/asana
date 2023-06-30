# ProjectMembershipCompact

With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `gid`                                                    | *string*                                                 | :heavy_minus_sign:                                       | Globally unique identifier of the resource, as a string. | 12345                                                    |
| `resourceType`                                           | *string*                                                 | :heavy_minus_sign:                                       | The base type of this resource.                          | task                                                     |
| `user`                                                   | [UserCompact](../../models/shared/usercompact.md)        | :heavy_minus_sign:                                       | N/A                                                      |                                                          |