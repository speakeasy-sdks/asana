# ProjectDuplicateRequestScheduleDates

A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.


## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dueOn`                                                                                                                                                                          | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.        | 2019-05-21                                                                                                                                                                       |
| `shouldSkipWeekends`                                                                                                                                                             | *boolean*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                               | Determines if the auto-shifted dates should skip weekends.                                                                                                                       | true                                                                                                                                                                             |
| `startOn`                                                                                                                                                                        | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project. | 2019-05-21                                                                                                                                                                       |