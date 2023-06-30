# Asana

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/asana
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/asana
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attachments](docs/sdks/attachments/README.md)

* [createAttachmentForObject](docs/sdks/attachments/README.md#createattachmentforobject) - Upload an attachment
* [deleteAttachment](docs/sdks/attachments/README.md#deleteattachment) - Delete an attachment
* [getAttachment](docs/sdks/attachments/README.md#getattachment) - Get an attachment
* [getAttachmentsForObject](docs/sdks/attachments/README.md#getattachmentsforobject) - Get attachments from an object

### [auditLogAPI](docs/sdks/auditlogapi/README.md)

* [getAuditLogEvents](docs/sdks/auditlogapi/README.md#getauditlogevents) - Get audit log events

### [batchAPI](docs/sdks/batchapi/README.md)

* [createBatchRequest](docs/sdks/batchapi/README.md#createbatchrequest) - Submit parallel requests

### [customFieldSettings](docs/sdks/customfieldsettings/README.md)

* [getCustomFieldSettingsForPortfolio](docs/sdks/customfieldsettings/README.md#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [getCustomFieldSettingsForProject](docs/sdks/customfieldsettings/README.md#getcustomfieldsettingsforproject) - Get a project's custom fields

### [customFields](docs/sdks/customfields/README.md)

* [createCustomField](docs/sdks/customfields/README.md#createcustomfield) - Create a custom field
* [createEnumOptionForCustomField](docs/sdks/customfields/README.md#createenumoptionforcustomfield) - Create an enum option
* [deleteCustomField](docs/sdks/customfields/README.md#deletecustomfield) - Delete a custom field
* [getCustomField](docs/sdks/customfields/README.md#getcustomfield) - Get a custom field
* [getCustomFieldsForWorkspace](docs/sdks/customfields/README.md#getcustomfieldsforworkspace) - Get a workspace's custom fields
* [insertEnumOptionForCustomField](docs/sdks/customfields/README.md#insertenumoptionforcustomfield) - Reorder a custom field's enum
* [updateCustomField](docs/sdks/customfields/README.md#updatecustomfield) - Update a custom field
* [updateEnumOption](docs/sdks/customfields/README.md#updateenumoption) - Update an enum option

### [events](docs/sdks/events/README.md)

* [getEvents](docs/sdks/events/README.md#getevents) - Get events on a resource

### [goalRelationships](docs/sdks/goalrelationships/README.md)

* [addSupportingRelationship](docs/sdks/goalrelationships/README.md#addsupportingrelationship) - Add a supporting goal relationship
* [getGoalRelationship](docs/sdks/goalrelationships/README.md#getgoalrelationship) - Get a goal relationship
* [getGoalRelationships](docs/sdks/goalrelationships/README.md#getgoalrelationships) - Get goal relationships
* [removeSupportingRelationship](docs/sdks/goalrelationships/README.md#removesupportingrelationship) - Removes a supporting goal relationship
* [updateGoalRelationship](docs/sdks/goalrelationships/README.md#updategoalrelationship) - Update a goal relationship

### [goals](docs/sdks/goals/README.md)

* [addFollowers](docs/sdks/goals/README.md#addfollowers) - Add a collaborator to a goal
* [createGoal](docs/sdks/goals/README.md#creategoal) - Create a goal
* [createGoalMetric](docs/sdks/goals/README.md#creategoalmetric) - Create a goal metric
* [deleteGoal](docs/sdks/goals/README.md#deletegoal) - Delete a goal
* [getGoal](docs/sdks/goals/README.md#getgoal) - Get a goal
* [getGoals](docs/sdks/goals/README.md#getgoals) - Get goals
* [getParentGoalsForGoal](docs/sdks/goals/README.md#getparentgoalsforgoal) - Get parent goals from a goal
* [removeFollowers](docs/sdks/goals/README.md#removefollowers) - Remove a collaborator from a goal
* [updateGoal](docs/sdks/goals/README.md#updategoal) - Update a goal
* [updateGoalMetric](docs/sdks/goals/README.md#updategoalmetric) - Update a goal metric

### [jobs](docs/sdks/jobs/README.md)

* [getJob](docs/sdks/jobs/README.md#getjob) - Get a job by id

### [organizationExports](docs/sdks/organizationexports/README.md)

* [createOrganizationExport](docs/sdks/organizationexports/README.md#createorganizationexport) - Create an organization export request
* [getOrganizationExport](docs/sdks/organizationexports/README.md#getorganizationexport) - Get details on an org export request

### [portfolioMemberships](docs/sdks/portfoliomemberships/README.md)

* [getPortfolioMembership](docs/sdks/portfoliomemberships/README.md#getportfoliomembership) - Get a portfolio membership
* [getPortfolioMemberships](docs/sdks/portfoliomemberships/README.md#getportfoliomemberships) - Get multiple portfolio memberships
* [getPortfolioMembershipsForPortfolio](docs/sdks/portfoliomemberships/README.md#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

### [portfolios](docs/sdks/portfolios/README.md)

* [addCustomFieldSettingForPortfolio](docs/sdks/portfolios/README.md#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [addItemForPortfolio](docs/sdks/portfolios/README.md#additemforportfolio) - Add a portfolio item
* [addMembersForPortfolio](docs/sdks/portfolios/README.md#addmembersforportfolio) - Add users to a portfolio
* [createPortfolio](docs/sdks/portfolios/README.md#createportfolio) - Create a portfolio
* [deletePortfolio](docs/sdks/portfolios/README.md#deleteportfolio) - Delete a portfolio
* [getItemsForPortfolio](docs/sdks/portfolios/README.md#getitemsforportfolio) - Get portfolio items
* [getPortfolio](docs/sdks/portfolios/README.md#getportfolio) - Get a portfolio
* [getPortfolios](docs/sdks/portfolios/README.md#getportfolios) - Get multiple portfolios
* [removeCustomFieldSettingForPortfolio](docs/sdks/portfolios/README.md#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [removeItemForPortfolio](docs/sdks/portfolios/README.md#removeitemforportfolio) - Remove a portfolio item
* [removeMembersForPortfolio](docs/sdks/portfolios/README.md#removemembersforportfolio) - Remove users from a portfolio
* [updatePortfolio](docs/sdks/portfolios/README.md#updateportfolio) - Update a portfolio

### [projectBriefs](docs/sdks/projectbriefs/README.md)

* [createProjectBrief](docs/sdks/projectbriefs/README.md#createprojectbrief) - Create a project brief
* [deleteProjectBrief](docs/sdks/projectbriefs/README.md#deleteprojectbrief) - Delete a project brief
* [getProjectBrief](docs/sdks/projectbriefs/README.md#getprojectbrief) - Get a project brief
* [updateProjectBrief](docs/sdks/projectbriefs/README.md#updateprojectbrief) - Update a project brief

### [projectMemberships](docs/sdks/projectmemberships/README.md)

* [getProjectMembership](docs/sdks/projectmemberships/README.md#getprojectmembership) - Get a project membership
* [getProjectMembershipsForProject](docs/sdks/projectmemberships/README.md#getprojectmembershipsforproject) - Get memberships from a project

### [projectStatuses](docs/sdks/projectstatuses/README.md)

* [createProjectStatusForProject](docs/sdks/projectstatuses/README.md#createprojectstatusforproject) - Create a project status
* [deleteProjectStatus](docs/sdks/projectstatuses/README.md#deleteprojectstatus) - Delete a project status
* [getProjectStatus](docs/sdks/projectstatuses/README.md#getprojectstatus) - Get a project status
* [getProjectStatusesForProject](docs/sdks/projectstatuses/README.md#getprojectstatusesforproject) - Get statuses from a project

### [projectTemplates](docs/sdks/projecttemplates/README.md)

* [getProjectTemplate](docs/sdks/projecttemplates/README.md#getprojecttemplate) - Get a project template
* [getProjectTemplates](docs/sdks/projecttemplates/README.md#getprojecttemplates) - Get multiple project templates
* [getProjectTemplatesForTeam](docs/sdks/projecttemplates/README.md#getprojecttemplatesforteam) - Get a team's project templates
* [instantiateProject](docs/sdks/projecttemplates/README.md#instantiateproject) - Instantiate a project from a project template

### [projects](docs/sdks/projects/README.md)

* [addCustomFieldSettingForProject](docs/sdks/projects/README.md#addcustomfieldsettingforproject) - Add a custom field to a project
* [addFollowersForProject](docs/sdks/projects/README.md#addfollowersforproject) - Add followers to a project
* [addMembersForProject](docs/sdks/projects/README.md#addmembersforproject) - Add users to a project
* [createProject](docs/sdks/projects/README.md#createproject) - Create a project
* [createProjectForTeam](docs/sdks/projects/README.md#createprojectforteam) - Create a project in a team
* [createProjectForWorkspace](docs/sdks/projects/README.md#createprojectforworkspace) - Create a project in a workspace
* [deleteProject](docs/sdks/projects/README.md#deleteproject) - Delete a project
* [duplicateProject](docs/sdks/projects/README.md#duplicateproject) - Duplicate a project
* [getProject](docs/sdks/projects/README.md#getproject) - Get a project
* [getProjects](docs/sdks/projects/README.md#getprojects) - Get multiple projects
* [getProjectsForTask](docs/sdks/projects/README.md#getprojectsfortask) - Get projects a task is in
* [getProjectsForTeam](docs/sdks/projects/README.md#getprojectsforteam) - Get a team's projects
* [getProjectsForWorkspace](docs/sdks/projects/README.md#getprojectsforworkspace) - Get all projects in a workspace
* [getTaskCountsForProject](docs/sdks/projects/README.md#gettaskcountsforproject) - Get task count of a project
* [projectSaveAsTemplate](docs/sdks/projects/README.md#projectsaveastemplate) - Create a project template from a project
* [removeCustomFieldSettingForProject](docs/sdks/projects/README.md#removecustomfieldsettingforproject) - Remove a custom field from a project
* [removeFollowersForProject](docs/sdks/projects/README.md#removefollowersforproject) - Remove followers from a project
* [removeMembersForProject](docs/sdks/projects/README.md#removemembersforproject) - Remove users from a project
* [updateProject](docs/sdks/projects/README.md#updateproject) - Update a project

### [sections](docs/sdks/sections/README.md)

* [addTaskForSection](docs/sdks/sections/README.md#addtaskforsection) - Add task to section
* [createSectionForProject](docs/sdks/sections/README.md#createsectionforproject) - Create a section in a project
* [deleteSection](docs/sdks/sections/README.md#deletesection) - Delete a section
* [getSection](docs/sdks/sections/README.md#getsection) - Get a section
* [getSectionsForProject](docs/sdks/sections/README.md#getsectionsforproject) - Get sections in a project
* [insertSectionForProject](docs/sdks/sections/README.md#insertsectionforproject) - Move or Insert sections
* [updateSection](docs/sdks/sections/README.md#updatesection) - Update a section

### [statusUpdates](docs/sdks/statusupdates/README.md)

* [createStatusForObject](docs/sdks/statusupdates/README.md#createstatusforobject) - Create a status update
* [deleteStatus](docs/sdks/statusupdates/README.md#deletestatus) - Delete a status update
* [getStatus](docs/sdks/statusupdates/README.md#getstatus) - Get a status update
* [getStatusesForObject](docs/sdks/statusupdates/README.md#getstatusesforobject) - Get status updates from an object

### [stories](docs/sdks/stories/README.md)

* [createStoryForTask](docs/sdks/stories/README.md#createstoryfortask) - Create a story on a task
* [deleteStory](docs/sdks/stories/README.md#deletestory) - Delete a story
* [getStoriesForTask](docs/sdks/stories/README.md#getstoriesfortask) - Get stories from a task
* [getStory](docs/sdks/stories/README.md#getstory) - Get a story
* [updateStory](docs/sdks/stories/README.md#updatestory) - Update a story

### [tags](docs/sdks/tags/README.md)

* [createTag](docs/sdks/tags/README.md#createtag) - Create a tag
* [createTagForWorkspace](docs/sdks/tags/README.md#createtagforworkspace) - Create a tag in a workspace
* [deleteTag](docs/sdks/tags/README.md#deletetag) - Delete a tag
* [getTag](docs/sdks/tags/README.md#gettag) - Get a tag
* [getTags](docs/sdks/tags/README.md#gettags) - Get multiple tags
* [getTagsForTask](docs/sdks/tags/README.md#gettagsfortask) - Get a task's tags
* [getTagsForWorkspace](docs/sdks/tags/README.md#gettagsforworkspace) - Get tags in a workspace
* [updateTag](docs/sdks/tags/README.md#updatetag) - Update a tag

### [tasks](docs/sdks/tasks/README.md)

* [addDependenciesForTask](docs/sdks/tasks/README.md#adddependenciesfortask) - Set dependencies for a task
* [addDependentsForTask](docs/sdks/tasks/README.md#adddependentsfortask) - Set dependents for a task
* [addFollowersForTask](docs/sdks/tasks/README.md#addfollowersfortask) - Add followers to a task
* [addProjectForTask](docs/sdks/tasks/README.md#addprojectfortask) - Add a project to a task
* [addTagForTask](docs/sdks/tasks/README.md#addtagfortask) - Add a tag to a task
* [createSubtaskForTask](docs/sdks/tasks/README.md#createsubtaskfortask) - Create a subtask
* [createTask](docs/sdks/tasks/README.md#createtask) - Create a task
* [deleteTask](docs/sdks/tasks/README.md#deletetask) - Delete a task
* [duplicateTask](docs/sdks/tasks/README.md#duplicatetask) - Duplicate a task
* [getDependenciesForTask](docs/sdks/tasks/README.md#getdependenciesfortask) - Get dependencies from a task
* [getDependentsForTask](docs/sdks/tasks/README.md#getdependentsfortask) - Get dependents from a task
* [getSubtasksForTask](docs/sdks/tasks/README.md#getsubtasksfortask) - Get subtasks from a task
* [getTask](docs/sdks/tasks/README.md#gettask) - Get a task
* [getTasks](docs/sdks/tasks/README.md#gettasks) - Get multiple tasks
* [getTasksForProject](docs/sdks/tasks/README.md#gettasksforproject) - Get tasks from a project
* [getTasksForSection](docs/sdks/tasks/README.md#gettasksforsection) - Get tasks from a section
* [getTasksForTag](docs/sdks/tasks/README.md#gettasksfortag) - Get tasks from a tag
* [getTasksForUserTaskList](docs/sdks/tasks/README.md#gettasksforusertasklist) - Get tasks from a user task list
* [removeDependenciesForTask](docs/sdks/tasks/README.md#removedependenciesfortask) - Unlink dependencies from a task
* [removeDependentsForTask](docs/sdks/tasks/README.md#removedependentsfortask) - Unlink dependents from a task
* [removeFollowerForTask](docs/sdks/tasks/README.md#removefollowerfortask) - Remove followers from a task
* [removeProjectForTask](docs/sdks/tasks/README.md#removeprojectfortask) - Remove a project from a task
* [removeTagForTask](docs/sdks/tasks/README.md#removetagfortask) - Remove a tag from a task
* [searchTasksForWorkspace](docs/sdks/tasks/README.md#searchtasksforworkspace) - Search tasks in a workspace
* [setParentForTask](docs/sdks/tasks/README.md#setparentfortask) - Set the parent of a task
* [updateTask](docs/sdks/tasks/README.md#updatetask) - Update a task

### [teamMemberships](docs/sdks/teammemberships/README.md)

* [getTeamMembership](docs/sdks/teammemberships/README.md#getteammembership) - Get a team membership
* [getTeamMemberships](docs/sdks/teammemberships/README.md#getteammemberships) - Get team memberships
* [getTeamMembershipsForTeam](docs/sdks/teammemberships/README.md#getteammembershipsforteam) - Get memberships from a team
* [getTeamMembershipsForUser](docs/sdks/teammemberships/README.md#getteammembershipsforuser) - Get memberships from a user

### [teams](docs/sdks/teams/README.md)

* [addUserForTeam](docs/sdks/teams/README.md#adduserforteam) - Add a user to a team
* [createTeam](docs/sdks/teams/README.md#createteam) - Create a team
* [getTeam](docs/sdks/teams/README.md#getteam) - Get a team
* [getTeamsForUser](docs/sdks/teams/README.md#getteamsforuser) - Get teams for a user
* [getTeamsForWorkspace](docs/sdks/teams/README.md#getteamsforworkspace) - Get teams in a workspace
* [removeUserForTeam](docs/sdks/teams/README.md#removeuserforteam) - Remove a user from a team
* [updateTeam](docs/sdks/teams/README.md#updateteam) - Update a team

### [timePeriods](docs/sdks/timeperiods/README.md)

* [getTimePeriod](docs/sdks/timeperiods/README.md#gettimeperiod) - Get a time period
* [getTimePeriods](docs/sdks/timeperiods/README.md#gettimeperiods) - Get time periods

### [typeahead](docs/sdks/typeahead/README.md)

* [typeaheadForWorkspace](docs/sdks/typeahead/README.md#typeaheadforworkspace) - Get objects via typeahead

### [userTaskLists](docs/sdks/usertasklists/README.md)

* [getUserTaskList](docs/sdks/usertasklists/README.md#getusertasklist) - Get a user task list
* [getUserTaskListForUser](docs/sdks/usertasklists/README.md#getusertasklistforuser) - Get a user's task list

### [users](docs/sdks/users/README.md)

* [getFavoritesForUser](docs/sdks/users/README.md#getfavoritesforuser) - Get a user's favorites
* [getUser](docs/sdks/users/README.md#getuser) - Get a user
* [getUsers](docs/sdks/users/README.md#getusers) - Get multiple users
* [getUsersForTeam](docs/sdks/users/README.md#getusersforteam) - Get users in a team
* [getUsersForWorkspace](docs/sdks/users/README.md#getusersforworkspace) - Get users in a workspace or organization

### [webhooks](docs/sdks/webhooks/README.md)

* [createWebhook](docs/sdks/webhooks/README.md#createwebhook) - Establish a webhook
* [deleteWebhook](docs/sdks/webhooks/README.md#deletewebhook) - Delete a webhook
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Get a webhook
* [getWebhooks](docs/sdks/webhooks/README.md#getwebhooks) - Get multiple webhooks
* [updateWebhook](docs/sdks/webhooks/README.md#updatewebhook) - Update a webhook

### [workspaceMemberships](docs/sdks/workspacememberships/README.md)

* [getWorkspaceMembership](docs/sdks/workspacememberships/README.md#getworkspacemembership) - Get a workspace membership
* [getWorkspaceMembershipsForUser](docs/sdks/workspacememberships/README.md#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [getWorkspaceMembershipsForWorkspace](docs/sdks/workspacememberships/README.md#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

### [workspaces](docs/sdks/workspaces/README.md)

* [addUserForWorkspace](docs/sdks/workspaces/README.md#adduserforworkspace) - Add a user to a workspace or organization
* [getWorkspace](docs/sdks/workspaces/README.md#getworkspace) - Get a workspace
* [getWorkspaces](docs/sdks/workspaces/README.md#getworkspaces) - Get multiple workspaces
* [removeUserForWorkspace](docs/sdks/workspaces/README.md#removeuserforworkspace) - Remove a user from a workspace or organization
* [updateWorkspace](docs/sdks/workspaces/README.md#updateworkspace) - Update a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
