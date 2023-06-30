# TaskRequestApprovalStatus

*Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.


## Values

| Name               | Value              |
| ------------------ | ------------------ |
| `Pending`          | pending            |
| `Approved`         | approved           |
| `Rejected`         | rejected           |
| `ChangesRequested` | changes_requested  |