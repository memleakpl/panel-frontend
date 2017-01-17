/*
 * EditUser Messages
 *
 * This contains all the text for the EditUser component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.EditUser.header',
    defaultMessage: 'Edit user',
  },
  save: {
    id: 'app.components.EditUser.save',
    defaultMessage: 'Save',
  },
  editUserSuccessNotificationTitle: {
    id: 'app.containers.CreateGroup.editUserSuccessNotificationTitle',
    defaultMessage: 'User "{username}" has been modified.',
  },
  editUserErrorNotificationTitle: {
    id: 'app.containers.CreateGroup.editUserErrorNotificationTitle',
    defaultMessage: 'An error occurred during "{username}" edition.',
  },
  getUserErrorMessage: {
    id: 'app.containers.CreateGroup.getUserErrorMessage',
    defaultMessage: 'An error occurred during getting user "{userName}" .',
  },
  membershipHeader: {
    id: 'app.containers.UserMembership.header',
    defaultMessage: 'Manage user groups',
  },
});
