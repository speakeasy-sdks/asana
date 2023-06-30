# AttachmentRequestResourceSubtype

The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is `external`, a `parent`, `name`, and `url` must also be provided.



## Values

| Name       | Value      |
| ---------- | ---------- |
| `Asana`    | asana      |
| `Dropbox`  | dropbox    |
| `Gdrive`   | gdrive     |
| `Onedrive` | onedrive   |
| `Box`      | box        |
| `Vimeo`    | vimeo      |
| `External` | external   |