/*
 * UserMembership Messages
 *
 * This contains all the text for the UserMembership component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  getGroupsErrorMessage: {
    id: 'app.components.GroupsTable.getGroupsErrorMessage',
    defaultMessage: 'Cannot get groups list from the server.',
  },
  joinGroupErrorNotificationTitle: {
    id: 'app.components.GroupTable.joinGroupErrorNotificationTitle',
    defaultMessage: 'Failed to add user "{user}" to the group "{group}".',
  },
  joinGroupSuccessNotificationTitle: {
    id: 'app.components.GroupTable.joinGroupSuccessNotificationTitle',
    defaultMessage: 'User "{user}" has been added to the group "{group}".',
  },
  leaveGroupErrorNotificationTitle: {
    id: 'app.components.GroupTable.leaveGroupErrorNotificationTitle',
    defaultMessage: 'Failed to remove user "{user}" from the group "{group}".',
  },
  leaveGroupSuccessNotificationTitle: {
    id: 'app.components.GroupTable.leaveGroupSuccessNotificationTitle',
    defaultMessage: 'User "{user}" has been removed from the group "{group}".',
  },
});
