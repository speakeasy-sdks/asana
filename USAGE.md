<!-- Start SDK Example Usage -->
```typescript
import { Asana } from "Asana";
import { CreateAttachmentForObjectResponse } from "Asana/dist/sdk/models/operations";
import { AttachmentRequestResourceSubtype, AttachmentResponseParentResourceSubtype } from "Asana/dist/sdk/models/shared";

const sdk = new Asana({
  security: {
    oauth2: "",
  },
});

sdk.attachments.createAttachmentForObject({
  attachmentRequest1: {
    connectToApp: false,
    file: {
      content: "corrupti".encode(),
      file: "provident",
    },
    name: "Ellis Mitchell",
    parent: "illum",
    resourceSubtype: AttachmentRequestResourceSubtype.External,
    url: "vel",
  },
  optFields: [
    "deserunt",
    "suscipit",
    "iure",
  ],
  optPretty: false,
}).then((res: CreateAttachmentForObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->