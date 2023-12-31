/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The authentication method used in the context of an API request.
 *
 * @remarks
 * Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
 */
export enum AuditLogEventContextApiAuthenticationMethod {
    Cookie = "cookie",
    Oauth = "oauth",
    PersonalAccessToken = "personal_access_token",
    ServiceAccount = "service_account",
}

/**
 * The type of context.
 *
 * @remarks
 * Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
 */
export enum AuditLogEventContextContextType {
    Web = "web",
    Desktop = "desktop",
    Mobile = "mobile",
    AsanaSupport = "asana_support",
    Asana = "asana",
    Email = "email",
    Api = "api",
}

/**
 * The context from which this event originated.
 */
export class AuditLogEventContext extends SpeakeasyBase {
    /**
     * The authentication method used in the context of an API request.
     *
     * @remarks
     * Only present if the `context_type` is `api`. Can be one of `cookie`, `oauth`, `personal_access_token`, or `service_account`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "api_authentication_method" })
    apiAuthenticationMethod?: AuditLogEventContextApiAuthenticationMethod;

    /**
     * The IP address of the client that initiated the event, if applicable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "client_ip_address" })
    clientIpAddress?: string;

    /**
     * The type of context.
     *
     * @remarks
     * Can be one of `web`, `desktop`, `mobile`, `asana_support`, `asana`, `email`, or `api`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "context_type" })
    contextType?: AuditLogEventContextContextType;

    /**
     * The name of the OAuth App that initiated the event.
     *
     * @remarks
     * Only present if the `api_authentication_method` is `oauth`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauth_app_name" })
    oauthAppName?: string;

    /**
     * The user agent of the client that initiated the event, if applicable.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_agent" })
    userAgent?: string;
}
