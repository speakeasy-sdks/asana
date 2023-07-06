# GetAttachmentResponse


## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `errorResponse`                                                                                                                        | [shared.ErrorResponse](../../models/shared/errorresponse.md)                                                                           | :heavy_minus_sign:                                                                                                                     | This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again. |
| `statusCode`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rawResponse`                                                                                                                          | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `getAttachment200ApplicationJSONObject`                                                                                                | [GetAttachment200ApplicationJSON](../../models/operations/getattachment200applicationjson.md)                                          | :heavy_minus_sign:                                                                                                                     | Successfully retrieved the record for a single attachment.                                                                             |