/*
 * GroupsTable Messages
 *
 * This contains all the text for the GroupsTable component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.GroupsTable.header',
    defaultMessage: 'This is the GroupsTable component !',
  },
  groupsList: {
    id: 'app.components.GroupsTable.groupsList',
    defaultMessage: 'Groups list',
  },
  name: {
    id: 'app.components.GroupsTable.name',
    defaultMessage: 'Name',
  },
  owner: {
    id: 'app.components.GroupsTable.owner',
    defaultMessage: 'Owner',
  },
  description: {
    id: 'app.components.GroupsTable.description',
    defaultMessage: 'Description',
  },
  getGroupsErrorMessage: {
    id: 'app.components.GroupsTable.getGroupsErrorMessage',
    defaultMessage: 'Cannot get groups list from server',
  },
  deleteDialogBody: {
    id: 'app.components.GroupsTable.deleteDialogBody',
    defaultMessage: 'Do you want remove group {groupname}?',
  },
  deleteDialogCancel: {
    id: 'app.components.GroupsTable.deleteDialogCancel',
    defaultMessage: 'No',
  },
  deleteDialogConfirm: {
    id: 'app.components.GroupsTable.deleteDialogConfirm',
    defaultMessage: 'Yes',
  },
});
