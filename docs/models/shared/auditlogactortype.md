# AuditLogActorType

Filter to events with an actor of this type.
This only needs to be included if querying for actor types without an ID. If `actor_gid` is included, this should be excluded.


## Values

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `User`                  | user                    |
| `Asana`                 | asana                   |
| `AsanaSupport`          | asana_support           |
| `Anonymous`             | anonymous               |
| `ExternalAdministrator` | external_administrator  |