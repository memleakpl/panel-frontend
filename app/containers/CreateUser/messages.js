/*
 * CreateUser Messages
 *
 * This contains all the text for the CreateUser component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.CreateUser.header',
    defaultMessage: 'Create new user',
  },
  create: {
    id: 'app.components.CreateUser.create',
    defaultMessage: 'Create',
  },
  successNotificationTitle: {
    id: 'app.containers.CreateGroup.successNotificationTitle',
    defaultMessage: 'User "{username}" has been created.',
  },
  errorNotificationTitle: {
    id: 'app.containers.CreateGroup.errorNotificationTitle',
    defaultMessage: 'An error occurred during "{username}" creation.',
  },
});
