# TeamMembershipCompact

This object represents a user's connection to a team.


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `gid`                                                    | *string*                                                 | :heavy_minus_sign:                                       | Globally unique identifier of the resource, as a string. | 12345                                                    |
| `isGuest`                                                | *boolean*                                                | :heavy_minus_sign:                                       | Describes if the user is a guest in the team.            | false                                                    |
| `resourceType`                                           | *string*                                                 | :heavy_minus_sign:                                       | The base type of this resource.                          | task                                                     |
| `team`                                                   | [TeamCompact](../../models/shared/teamcompact.md)        | :heavy_minus_sign:                                       | N/A                                                      |                                                          |
| `user`                                                   | [UserCompact](../../models/shared/usercompact.md)        | :heavy_minus_sign:                                       | N/A                                                      |                                                          |