/*
 * UsersTable Messages
 *
 * This contains all the text for the UsersTable component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.UsersTable.header',
    defaultMessage: 'This is the UsersTable component !',
  },
  usersList: {
    id: 'app.components.UsersTable.usersList',
    defaultMessage: 'Users List',
  },
  username: {
    id: 'app.components.UsersTable.username',
    defaultMessage: 'Username',
  },
  firstName: {
    id: 'app.components.UsersTable.firstName',
    defaultMessage: 'First Name',
  },
  lastName: {
    id: 'app.components.UsersTable.lastName',
    defaultMessage: 'Last Name',
  },
  email: {
    id: 'app.components.UsersTable.usersList',
    defaultMessage: 'Email',
  },
  deleteDialogBody: {
    id: 'app.components.UsersTable.deleteDialogBody',
    defaultMessage: 'Do you want remove user {username}?',
  },
  deleteDialogCancel: {
    id: 'app.components.UsersTable.deleteDialogCancel',
    defaultMessage: 'No',
  },
  deleteDialogConfirm: {
    id: 'app.components.UsersTable.deleteDialogConfirm',
    defaultMessage: 'Yes',
  },
  getUsersErrorMessage: {
    id: 'app.components.UsersTable.getUsersErrorMessage',
    defaultMessage: 'Cannot get users list from server',
  },
});
