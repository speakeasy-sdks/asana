# TaskCountResponse

A response object returned from the task count endpoint.


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `numCompletedMilestones`                          | *number*                                          | :heavy_minus_sign:                                | The number of completed milestones in a project.  | 3                                                 |
| `numCompletedTasks`                               | *number*                                          | :heavy_minus_sign:                                | The number of completed tasks in a project.       | 150                                               |
| `numIncompleteMilestones`                         | *number*                                          | :heavy_minus_sign:                                | The number of incomplete milestones in a project. | 7                                                 |
| `numIncompleteTasks`                              | *number*                                          | :heavy_minus_sign:                                | The number of incomplete tasks in a project.      | 50                                                |
| `numMilestones`                                   | *number*                                          | :heavy_minus_sign:                                | The number of milestones in a project.            | 10                                                |
| `numTasks`                                        | *number*                                          | :heavy_minus_sign:                                | The number of tasks in a project.                 | 200                                               |