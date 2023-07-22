# BatchRequestActionOptions

Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.


## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `fields`                               | *string*[]                             | :heavy_minus_sign:                     | The fields to retrieve in the request. |                                        |
| `limit`                                | *number*                               | :heavy_minus_sign:                     | Pagination limit for the request.      | 50                                     |
| `offset`                               | *number*                               | :heavy_minus_sign:                     | Pagination offset for the request.     | eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9   |