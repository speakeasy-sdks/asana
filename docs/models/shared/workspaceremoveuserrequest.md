# WorkspaceRemoveUserRequest

A user identification object for specification with the addUser/removeUser endpoints.


## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `user`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | A string identifying a user. This can either be the string "me", an email, or the gid of a user. | 12345                                                                                            |