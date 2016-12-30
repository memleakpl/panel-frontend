/*
 * CreateGroup Messages
 *
 * This contains all the text for the CreateGroup component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.CreateGroup.header',
    defaultMessage: 'Create new group',
  },
  create: {
    id: 'app.containers.CreateGroup.create',
    defaultMessage: 'Create',
  },
  successNotificationTitle: {
    id: 'app.containers.CreateGroup.successNotificationTitle',
    defaultMessage: 'Group "{groupName}" has been created.',
  },
  errorNotificationTitle: {
    id: 'app.containers.CreateGroup.errorNotificationTitle',
    defaultMessage: 'An error occurred during "{groupName}" creation.',
  },
});
