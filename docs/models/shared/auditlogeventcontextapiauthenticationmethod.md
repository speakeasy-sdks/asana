# AuditLogEventContextApiAuthenticationMethod

The authentication method used in the context of an API request.
Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.


## Values

| Name                  | Value                 |
| --------------------- | --------------------- |
| `Cookie`              | cookie                |
| `Oauth`               | oauth                 |
| `PersonalAccessToken` | personal_access_token |
| `ServiceAccount`      | service_account       |