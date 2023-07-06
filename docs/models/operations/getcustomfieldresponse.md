# GetCustomFieldResponse


## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `errorResponse`                                                                                                                        | [shared.ErrorResponse](../../models/shared/errorresponse.md)                                                                           | :heavy_minus_sign:                                                                                                                     | This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again. |
| `statusCode`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rawResponse`                                                                                                                          | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `getCustomField200ApplicationJSONObject`                                                                                               | [GetCustomField200ApplicationJSON](../../models/operations/getcustomfield200applicationjson.md)                                        | :heavy_minus_sign:                                                                                                                     | Successfully retrieved the complete definition of a custom field’s metadata.                                                           |