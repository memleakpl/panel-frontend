/*
 * ChangePasswordForm Messages
 *
 * This contains all the text for the ChangePasswordForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.ChangePasswordForm.header',
    defaultMessage: 'Change password',
  },
  changePassword: {
    id: 'app.containers.ChangePasswordForm.changePassword',
    defaultMessage: 'Change password',
  },
  oldPassword: {
    id: 'app.containers.ChangePasswordForm.oldPassword',
    defaultMessage: 'Old password',
  },
  newPassword: {
    id: 'app.containers.ChangePasswordForm.newPassword',
    defaultMessage: 'New Password',
  },
  repeatNewPassword: {
    id: 'app.containers.ChangePasswordForm.repeatNewPassword',
    defaultMessage: 'Repeat new password',
  },
  error: {
    id: 'app.container.ChangePasswordForm.error',
    defaultMessage: 'Wrong password!',
  },
  notMatchingError: {
    id: 'app.container.ChangePasswordForm.notMatchingError',
    defaultMessage: 'Passwords are not the same!',
  },
  passwordChanged: {
    id: 'app.container.ChangePasswordForm.passwordChanged',
    defaultMessage: 'Password changed',
  },
});
