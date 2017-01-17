/*
 * EditGroup Messages
 *
 * This contains all the text for the EditGroup component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.EditGroup.header',
    defaultMessage: 'Edit group',
  },
  save: {
    id: 'app.containers.EditGroup.save',
    defaultMessage: 'Save',
  },
  getGroupErrorMessage: {
    id: 'app.containers.EditGroup.getGroupErrorMessage',
    defaultMessage: 'An error occurred during getting group "{groupName}".',
  },
  editGroupSuccessNotificationTitle: {
    id: 'app.containers.EditGroup.editGroupSuccessNotificationTitle',
    defaultMessage: 'Group "{groupname}" has been modified.',
  },
  editGroupErrorNotificationTitle: {
    id: 'app.containers.EditGroup.editGroupErrorNotificationTitle',
    defaultMessage: 'An error occurred during "{groupname}" edition.',
  },
});
