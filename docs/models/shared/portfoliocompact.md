# PortfolioCompact

A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `gid`                                                    | *string*                                                 | :heavy_minus_sign:                                       | Globally unique identifier of the resource, as a string. | 12345                                                    |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The name of the portfolio.                               | Bug Portfolio                                            |
| `resourceType`                                           | *string*                                                 | :heavy_minus_sign:                                       | The base type of this resource.                          | task                                                     |