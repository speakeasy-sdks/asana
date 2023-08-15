/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Attachments } from "./attachments";
import { AuditLogAPI } from "./auditlogapi";
import { BatchAPI } from "./batchapi";
import { CustomFields } from "./customfields";
import { CustomFieldSettings } from "./customfieldsettings";
import { Events } from "./events";
import { GoalRelationships } from "./goalrelationships";
import { Goals } from "./goals";
import { Jobs } from "./jobs";
import * as shared from "./models/shared";
import { OrganizationExports } from "./organizationexports";
import { PortfolioMemberships } from "./portfoliomemberships";
import { Portfolios } from "./portfolios";
import { ProjectBriefs } from "./projectbriefs";
import { ProjectMemberships } from "./projectmemberships";
import { Projects } from "./projects";
import { ProjectStatuses } from "./projectstatuses";
import { ProjectTemplates } from "./projecttemplates";
import { Sections } from "./sections";
import { StatusUpdates } from "./statusupdates";
import { Stories } from "./stories";
import { Tags } from "./tags";
import { Tasks } from "./tasks";
import { TeamMemberships } from "./teammemberships";
import { Teams } from "./teams";
import { TimePeriods } from "./timeperiods";
import { Typeahead } from "./typeahead";
import { Users } from "./users";
import { UserTaskLists } from "./usertasklists";
import { Webhooks } from "./webhooks";
import { WorkspaceMemberships } from "./workspacememberships";
import { Workspaces } from "./workspaces";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Main endpoint.
     */
    "https://app.asana.com/api/1.0",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "1.14.0";
    genVersion = "2.84.1";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Asana: This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml).
 */
export class Asana {
    /**
     * An *attachment* object represents any file attached to a task in Asana, whether it’s an uploaded file or one associated via a third-party service such as Dropbox or Google Drive.
     */
    public attachments: Attachments;
    /**
     * Asana's audit log is an immutable log of [important events](/docs/supported-auditlogevents) in your organization's Asana instance.
     *
     * @remarks
     *
     * The audit log API allows you to monitor and act upon important security and compliance-related changes. Organizations might use this API endpoint to:
     *
     * * Set up proactive alerting with a Security Information and Event Management (SIEM) tool like [Splunk](https://asana.com/guide/help/api/splunk)
     * * Conduct reactive investigations when a security incident takes place
     * * Visualize key domain data in aggregate to identify security trends
     *
     * Note that since the API provides insight into what is happening in an Asana instance, the data is [read-only](/docs/get-audit-log-events). That is, there are no "write" or "update" endpoints for audit log events.
     *
     * Only [Service Accounts](https://asana.com/guide/help/premium/service-accounts) in [Enterprise Domains](https://asana.com/enterprise) can access audit log API endpoints. Authentication with a Service Account's [personal access token](/docs/personal-access-token) is required.
     *
     * For a full list of supported events, see [supported AuditLogEvents](/docs/supported-auditlogevents).
     */
    public auditLogAPI: AuditLogAPI;
    /**
     * There are many cases where you want to accomplish a variety of work in the Asana API but want to minimize the number of HTTP requests you make. For example:
     *
     * @remarks
     *
     * * Modern browsers limit the number of requests that a single web page can
     *   make at once.
     * * Mobile apps will use more battery life to keep the cellular radio on
     *   when making a series of requests.
     * * There is an overhead cost to developing software that can make multiple
     *   requests in parallel.
     * * Some cloud platforms handle parallelism poorly, or disallow it
     *   entirely.
     *
     *
     * To make development easier in these use cases, Asana provides a **batch API** that enables developers to perform multiple “actions” by making only a single HTTP request.
     *
     * #### Making a batch request
     *
     * To make a batch request, send a `POST` request to `/batch`. Like other `POST` endpoints, the body should contain a `data` envelope. Inside this envelope should be a single `actions` field, containing a list of “action” objects.  Each action represents a standard request to an existing endpoint in the Asana API.
     *
     * **The maximum number of actions allowed in a single batch request is 10**. Making a batch request with no actions in it will result in a `400 Bad Request`.
     *
     * When the batch API receives the list of actions to execute, it will dispatch those actions to the already-implemented endpoints specified by the `relative_path` and `method` for each action. This happens in parallel, so all actions in the request will be processed simultaneously. There is no guarantee of the execution order for these actions, nor is there a way to use the output of one action as the input of another action (such as creating a task and then commenting on it).
     *
     * The response to the batch request will contain (within the `data` envelope) a list of result objects, one for each action. The results are guaranteed to be in the same order as the actions in the request (e.g., the first result in the response corresponds to the first action in the request)
     *
     * The batch API will always attempt to return a `200 Success` response with individual result objects for each individual action in the request. Only in certain cases (such as missing authorization or malformed JSON in the body) will the entire request fail with another status code. Even if every individual action in the request fails, the batch API will still return a `200 Success` response, and each result object in the response will contain the errors encountered with each action.
     *
     * #### Rate limiting
     *
     * The batch API fully respects all of our rate limiting. This means that a batch request counts against *both* the standard rate limiter and the concurrent request limiter as though you had made a separate HTTP request for every individual action. For example, a batch request with five actions counts as five separate requests in the standard rate limiter, and counts as five concurrent requests in the concurrent request limiter. The batch request itself incurs no cost.
     *
     * If any of the actions in a batch request would exceed any of the enforced limits, the *entire* request will fail with a `429 Too Many Requests` error. This is to prevent the unpredictability of which actions might succeed if not all of them could succeed.
     *
     * #### Restrictions
     *
     * Not every endpoint can be accessed through the batch API. Specifically, the following actions cannot be taken and will result in a `400 Bad Request` for that action:
     *
     * * Uploading attachments
     * * Creating, getting, or deleting organization exports
     * * Any SCIM operations
     * * Nested calls to the batch API
     */
    public batchAPI: BatchAPI;
    /**
     * Custom fields are attached to a particular project with the custom field settings resource. This resource both represents the many-to-many join of the custom field and project as well as stores information that is relevant to that particular pairing. For instance, the `is_important` property determines some possible application-specific handling of that custom field.
     */
    public customFieldSettings: CustomFieldSettings;
    /**
     * _Note: Custom fields are a premium feature. Integrations which work with custom fields need to handle an assortment of use cases for free and premium users in context of free and premium organizations. For a detailed examination of which data users will have access in different circumstances, review the section below on access control._
     *
     * @remarks
     *
     * In the Asana application, tasks, projects, and portfolios can hold user-specified [custom fields](https://asana.com/guide/help/premium/custom-fields) which provide extra information (e.g., a "priority" property with an associated value, or a number representing the time required to complete a task). This lets a user define the type of information that each item within a project or portfolio can contain in addition to the built-in fields that Asana provides.
     * `display_value` is a read-only field that will always be a string. For apps that use custom fields, this is a great way to safely display/export the value of a custom field, regardless of its type. We suggest apps use this field in order to future-proof for changes to custom fields.
     *
     * #### Characteristics of custom fields
     *
     * * There is metadata that defines the custom field. This metadata can be shared across an entire workspace, or be specific to a project or portfolio.
     * * Creating a custom field setting on a project or portfolio means each direct child will have the custom field. This is conceptually akin to adding columns in a database or a spreadsheet: every task (row) in the project (table) can contain information for that field, including "blank" values (i.e., `null` data). For portfolio custom fields, every project (row) in the portfolio (table) will contain information for the custom field.
     * * Custom field settings only go one child deep. This means that a custom field setting on a portfolio will give each project the custom field, but not each task within those projects.
     * * Tasks have custom field _values_ assigned to them.
     *
     * #### Types of custom fields
     *
     * Integrations using custom fields need to be aware of the six basic types that a custom field can adopt. These types are:
     *
     * * `text` - an arbitrary, relatively short string of text
     * * `number` - a number with a defined level of precision
     * * `enum` - a selection of a single option from a defined list of options (i.e., mutually exclusive selections)
     * * `multi_enum` - a selection of one or more options from a defined list of options (i.e., mutually inclusive selections)
     * * `date` - a reference date with an optional time value
     * * `people` - a list of active contributors (i.e., where their relationship to the work is defined in the custom field title)
     *
     * #### Example use case
     *
     * Consider an organization that has defined a custom field for "Priority". This field is of `enum` type and can have user-defined values of `Low`, `Medium`, or `High`. This is the field metadata, and it is visible within, and shared across, the entire organization.
     *
     * A project is then created in the organization, called "Bugs", and the "Priority" custom field is associated with that project. This will allow all tasks within the "Bugs" project to have an associated "Priority".
     *
     * A new task is created within "Bugs". This task, then, has a field named "Priority" which can take on the custom field value of one of `[null]`, `Low`, `Medium`, and `High`.
     *
     * #### Custom fields in the API
     *
     * These custom fields are accessible via the API through a number of endpoints at the top level (e.g. `/custom_fields` and `/custom_field_settings`) and through requests on workspaces, portfolios, projects, and tasks resources. The API also provides a way to fetch both the metadata and data which define each particular custom field, so that a client application may render proper UI to display or edit the values.
     *
     * Text fields are currently limited to 1024 characters. On tasks, their custom field value will have a `text_value` property to represent this field.
     *
     * Number fields can have an arbitrary `precision` associated with them; for example, a precision of `2` would round its value to the second (hundredths) place (e.g., `1.2345` would round to `1.23`). On tasks, the custom field value will have a `number_value` property to represent this field.
     *
     * #### Enum fields
     *
     * Enum fields represent a selection from a list of options. On the metadata, they will contain all of the options in an array. Each option has 4 properties:
     *
     * * `gid` - the GID of this enum option. Note that this is the GID of the individual _option_. The custom field itself has a separate `gid`.
     * * `name` - the name of the option (e.g., "Choice #1")
     * * `enabled` - whether this field is enabled. Disabled fields are not available to choose from when disabled, and are visually hidden in the Asana application, but they remain in the metadata for custom field values which were set to the option before the option was disabled.
     * * `color` - a color associated with this choice.
     *
     * On the task's custom field value, the enum will have an `enum_value` property which will be the same as one of the choices from the list defined in the custom field metadata.
     *
     * #### Querying an organization for its custom fields
     *
     * For custom fields shared across the workspace or organization, the workspace [can be queried](/docs/get-a-workspaces-custom-fields) for its list of defined custom fields. Like other collection queries, the fields will be returned as a compact record; slightly different from most other compact records is the fact that the compact record for custom fields includes `type` as well as `gid` and `name`.
     *
     * #### Accessing custom field definitions
     *
     * The [custom fields](/docs/get-a-custom-field) reference describes how the metadata which defines a custom field is accessed. A GET request with a `gid` can be issued on the `/custom_fields` endpoint to fetch the full definition of a single custom field given its `gid` from (for instance) listing all custom fields on a workspace, or getting the `gid` from a custom field settings object or a task.
     *
     * #### Associating custom fields with a project or portfolio
     *
     * A mapping between a custom field and a project or portfolio is handled with a [custom field settings](/docs/asana-custom-field-settings) object. This object contains a reference for each of the custom fields and the project or portfolio, as well as additional information about the status of that particular custom field (e.g., `is_important`, which defines whether or not the custom field will appear in the list/grid on the Asana application).
     *
     * #### Accessing custom field values on tasks or projects
     *
     * The [tasks](/docs/get-a-task) reference has information on how custom fields look on tasks. custom fields will return as an array on the property `custom_fields`, and each entry will contain, side-by-side, the compact representation of the custom field metadata and a `{typename}_value` property that stores the value set for the custom field.
     *
     * Of particular note is that the top-level `gid` of each entry in the `custom_fields` array is the `gid` of the custom field metadata, as it is the compact representation of this metadata. This can be used to refer to the full metadata by making a request to the `/custom_fields/{custom_fields_id}` endpoint as described above.
     *
     * Custom fields can be set just as in the Asana-defined fields on a task via `POST` or `PUT` requests. You can see an example in the [update a task](/docs/update-a-task) endpoint.
     *
     * Custom fields on projects follow this same pattern.
     *
     * #### Warning: Program defensively with regards to custom field definitions
     *
     * Asana application users have the ability to change the definitions of custom field metadata. This means that as you write scripts or applications to work with them, it is possible for the definitions to change at any time, which may cause an application using them to break or malfunction if it makes assumptions about the metadata for a particular custom field. When using custom fields, it is a good idea to program *defensively*, meaning you your application should double-check that the custom field metadata are what it expects.
     *
     * Storing the state of the custom field metadata for too long if you dynamically create a model for it can cause your model to become out of sync with the model stored in Asana. For example, if you encounter an `enum` value on a task that does not match any option in your metadata model, your metadata model has become out of date with the custom field metadata.
     *
     * #### Enabled and disabled values
     *
     * When information that is contained in a custom field value loses a logical association with its metadata definition, the value becomes disabled. This can happen in a couple of simple ways, for example, if you remove the custom field metadata from a project, or move a task with a custom field to a different project which does not have the custom field metadata associated with it. The value remains on the task, and the custom field metadata can still be found and examined, but as the context in which the custom field makes sense is gone, the custom field cannot change its value; it can only be cleared.
     *
     * _Note: Tasks that are associated with multiple projects do not become disabled, so long as at least one of the projects is still associated with the custom field metadata. In other words, tasks with multiple projects will retain logically associated to the set of custom field metadata represented by all of their projects._
     *
     * Moving the task back under a project with that custom field applied to it or applying the custom field metadata to the current project will return the custom field value to an enabled state. In this scenario, the custom field will be re-enabled and editable again.
     *
     * In the Asana application, disabled fields are grayed out and not allowed to change, other than to be discarded. In the API, we return a property `enabled: false` to inform the external application that the value has been disabled.
     *
     * Note that the API enforces the same operations on disabled custom field values as hold in the Asana application: they may not have their values changed, since the lack of context for the values of a custom field in general doesn't provide enough information to know what new values should be. Setting the custom field value to `null` will clear and remove the custom field value from the task.
     *
     * #### Custom field access control
     *
     * Custom fields are a complex feature of the Asana platform, and their access in the Asana application and in the API vary based on the status of the user and project. When building your application, it is best to be defensive and not assume the given user will have read or write access to a custom field, and fail gracefully when this occurs.
     */
    public customFields: CustomFields;
    /**
     * An event is an object representing a change to a resource that was observed by an event subscription. Event streams rely on the same infrastructure as webhooks, which ensures events are delivered within a minute (on average). This system is designed for at most once delivery, meaning in exceptional circumstances a small number of events may be missing from the stream. For this reason, if your use case requires strong guarantees about processing all changes on a resource and cannot tolerate any missing events, regardless of how rare that might be, we recommend building a fallback polling system that fetches the resource periodically as well. Note that while webhooks cannot be replayed once delivered, events are retrievable from the event stream for 24 hours after being processed.
     *
     * @remarks
     *
     * In general, requesting events on a resource is faster and subject to higher rate limits than requesting the resource itself. Additionally, change events "bubble up" (e.g., listening to events on a project would include when stories are added to tasks in the project, and even to subtasks).
     *
     * Establish an initial sync token by making a request with no sync token. The response will be a `412 Precondition Failed` error - the same as if the sync token had expired.
     *
     * Subsequent requests should always provide the sync token from the immediately preceding call.
     *
     * Sync tokens may not be valid if you attempt to go "backward" in the history by requesting previous tokens, though re-requesting the current sync token is generally safe, and will always return the same results.
     *
     * When you receive a `412 Precondition Failed` error, it means that the sync token is either invalid or expired. If you are attempting to keep a set of data in sync, this signals you may need to re-crawl the data.
     *
     * Sync tokens always expire after 24 hours, but may expire sooner, depending on load on the service.
     */
    public events: Events;
    /**
     * A goal relationship is an object representing the relationship between a goal and another goal, a project, or a portfolio.
     */
    public goalRelationships: GoalRelationships;
    /**
     * A goal is an object in the goal-tracking system that helps your organization drive measurable results.
     */
    public goals: Goals;
    /**
     * Jobs represent processes that handle asynchronous work. A job created when an endpoint requests an action that will be handled asynchronously, such as project or task duplication.
     *
     * @remarks
     *
     * Only the creator of the duplication process can access the duplication status of the new object.
     *
     * *Note*: With any work that is handled asynchronously (e.g., [project instantation from a template](/docs/instantiate-a-project-from-a-project-template), duplicating a [task](/docs/duplicate-a-task) or [project](/docs/duplicate-a-project), etc.), the *intermittent states* of newly-created objects may not be consistent. That is, object properties may return different values each time when polled until the job `status` has returned a `succeeded` value.
     */
    public jobs: Jobs;
    /**
     * An `organization_export` object represents a request to export the complete data of an organization in JSON format.
     *
     * @remarks
     *
     * To export an organization using this API:
     *
     * * Create an `organization_export`
     *   [request](/docs/create-an-organization-export-request)
     *   and store the ID that is returned.
     * * Request the `organization_export` every few minutes, until the
     *   `state` field contains ‘finished’.
     * * Download the file located at the URL in the `download_url` field. * Exports can take a long time, from several minutes to a few hours
     *   for large organizations.
     *
     *
     * *Note: These endpoints are only available to [Service Accounts](https://asana.com/guide/help/premium/service-accounts) of an [Enterprise](https://asana.com/enterprise) organization.*
     */
    public organizationExports: OrganizationExports;
    /**
     * This object determines if a user is a member of a portfolio.
     */
    public portfolioMemberships: PortfolioMemberships;
    /**
     * A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [status update](/docs/asana-statuses).
     *
     * @remarks
     * Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.
     */
    public portfolios: Portfolios;
    /**
     * A project brief object represents a rich text document that describes a project.
     *
     * @remarks
     *
     * Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.
     */
    public projectBriefs: ProjectBriefs;
    /**
     * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (i.e., whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
     */
    public projectMemberships: ProjectMemberships;
    /**
     * *Deprecated: new integrations should prefer using [status updates](/docs/asana-statuses)*
     *
     * @remarks
     *
     * A project status is an update on the progress of a particular project,
     * and is sent out to all project followers when created. These updates
     * include both text describing the update and a color code intended to
     * represent the overall state of the project: "green" for projects that
     * are on track, "yellow" for projects at risk, "red" for projects that
     * are behind, and "blue" for projects on hold.
     *
     * Project statuses can be created and deleted, but not modified.
     */
    public projectStatuses: ProjectStatuses;
    /**
     * A project template is an object that allows new projects to be created
     *
     * @remarks
     * with a predefined setup, which may include tasks, sections, rules, etc.
     * It simplifies the process of running a workflow that involves a similar
     * set of work every time.
     *
     *
     * Project templates in organizations are shared with a single team. Currently, the
     * team of a project template cannot be changed via the API.
     */
    public projectTemplates: ProjectTemplates;
    /**
     * A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
     *
     * @remarks
     *
     * Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.
     *
     * Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.
     *
     * **Note:** You can use certain project endpoints to operate on [user task lists](/docs/user-task-lists) ([My Tasks](https://asana.com/guide/help/fundamentals/my-tasks)) by substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform operations on the custom fields of a [user task list](/docs/user-task-lists) by using the following projects endpoints: [Add a custom field to a project](/docs/add-a-custom-field-to-a-project), [Remove a custom field from a project](/docs/remove-a-custom-field-from-a-project) and [Get a project's custom fields](/docs/get-a-projects-custom-fields)
     */
    public projects: Projects;
    /**
     * A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
     *
     * @remarks
     *
     * Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.
     *
     * The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.
     */
    public sections: Sections;
    /**
     * A status update is an update on the progress of a particular object,
     *
     * @remarks
     * and is sent out to all followers when created. These updates
     * include both text describing the update and a `status_type` intended to
     * represent the overall state of the project. These include: `on_track` for projects that
     * are on track, `at_risk` for projects at risk, `off_track` for projects that
     * are behind, and `on_hold` for projects on hold.
     *
     * Status updates can be created and deleted, but not modified.
     */
    public statusUpdates: StatusUpdates;
    /**
     * *See [our forum post](https://forum.asana.com/t/no-more-parsing-story-text-new-fields-on-stories/42924) for more info on when conditional fields are returned.*
     *
     * @remarks
     *
     * A story represents an activity associated with an object in the Asana system. Stories are generated by the system whenever users take actions such as creating or assigning tasks, or moving tasks between projects. "Comments" are also a form of user-generated story.
     */
    public stories: Stories;
    /**
     * A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
     *
     * @remarks
     *
     * Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.
     */
    public tags: Tags;
    /**
     * The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.
     *
     * @remarks
     *
     * Sections are unique in that they will be included in the `memberships` field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.
     *
     * [Queries](/docs/get-multiple-tasks) return a [compact representation of each task object](/docs/task-compact). To retrieve *all* fields or *specific set* of the fields, use [field selectors](/docs/input-output-options) to manipulate what data is included in a response.
     */
    public tasks: Tasks;
    /**
     * This object determines if a user is a member of a team.
     */
    public teamMemberships: TeamMemberships;
    /**
     * A team is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
     */
    public teams: Teams;
    /**
     * A time period is an object that represents a domain-scoped date range that can be set on [goals](/docs/goals).
     */
    public timePeriods: TimePeriods;
    /**
     * The typeahead search API provides search for objects from a single workspace.
     */
    public typeahead: Typeahead;
    /**
     * A user task list represents the tasks assigned to a particular user. This list is the user's [My Tasks](https://asana.com/guide/help/fundamentals/my-tasks) list.
     */
    public userTaskLists: UserTaskLists;
    /**
     * A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
     *
     * @remarks
     *
     * Like other objects in the system, users are referred to by numerical IDs. However, the special string identifier `me` can be used anywhere a user ID is accepted, to refer to the current authenticated user (e.g, `GET /users/me`).
     */
    public users: Users;
    /**
     * Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).
     *
     * @remarks
     *
     * For a more detailed explanation of webhooks see the [overview of webhooks](/docs/overview-of-webhooks).
     */
    public webhooks: Webhooks;
    /**
     * This object determines if a user is a member of a workspace.
     */
    public workspaceMemberships: WorkspaceMemberships;
    /**
     * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
     *
     * @remarks
     *
     * An *organization* is a special kind of workspace that represents a company. In an organization, you can group your projects into teams. You can read more about how organizations work on the Asana Guide. To tell if your workspace is an organization or not, check its `is_organization` property.
     *
     * Over time, we intend to migrate most workspaces into organizations and to release more organization-specific functionality. We may eventually deprecate using workspace-based APIs for organizations. Currently, and until after some reasonable grace period following any further announcements, you can still reference organizations in any `workspace` parameter.
     */
    public workspaces: Workspaces;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.attachments = new Attachments(this.sdkConfiguration);
        this.auditLogAPI = new AuditLogAPI(this.sdkConfiguration);
        this.batchAPI = new BatchAPI(this.sdkConfiguration);
        this.customFieldSettings = new CustomFieldSettings(this.sdkConfiguration);
        this.customFields = new CustomFields(this.sdkConfiguration);
        this.events = new Events(this.sdkConfiguration);
        this.goalRelationships = new GoalRelationships(this.sdkConfiguration);
        this.goals = new Goals(this.sdkConfiguration);
        this.jobs = new Jobs(this.sdkConfiguration);
        this.organizationExports = new OrganizationExports(this.sdkConfiguration);
        this.portfolioMemberships = new PortfolioMemberships(this.sdkConfiguration);
        this.portfolios = new Portfolios(this.sdkConfiguration);
        this.projectBriefs = new ProjectBriefs(this.sdkConfiguration);
        this.projectMemberships = new ProjectMemberships(this.sdkConfiguration);
        this.projectStatuses = new ProjectStatuses(this.sdkConfiguration);
        this.projectTemplates = new ProjectTemplates(this.sdkConfiguration);
        this.projects = new Projects(this.sdkConfiguration);
        this.sections = new Sections(this.sdkConfiguration);
        this.statusUpdates = new StatusUpdates(this.sdkConfiguration);
        this.stories = new Stories(this.sdkConfiguration);
        this.tags = new Tags(this.sdkConfiguration);
        this.tasks = new Tasks(this.sdkConfiguration);
        this.teamMemberships = new TeamMemberships(this.sdkConfiguration);
        this.teams = new Teams(this.sdkConfiguration);
        this.timePeriods = new TimePeriods(this.sdkConfiguration);
        this.typeahead = new Typeahead(this.sdkConfiguration);
        this.userTaskLists = new UserTaskLists(this.sdkConfiguration);
        this.users = new Users(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
        this.workspaceMemberships = new WorkspaceMemberships(this.sdkConfiguration);
        this.workspaces = new Workspaces(this.sdkConfiguration);
    }
}
