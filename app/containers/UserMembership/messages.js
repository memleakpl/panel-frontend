/*
 * UserMembership Messages
 *
 * This contains all the text for the UserMembership component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  getGroupsErrorMessage: {
    id: 'app.components.GroupsTable.getGroupsErrorMessage',
    defaultMessage: 'Cannot get groups list from server.',
  },
  joinGroupErrorNotificationTitle: {
    id: 'app.components.GroupTable.joinGroupErrorNotificationTitle',
    defaultMessage: 'Failed to add user "{user}" to group "{group}".',
  },
  joinGroupSuccessNotificationTitle: {
    id: 'app.components.GroupTable.joinGroupSuccessNotificationTitle',
    defaultMessage: 'User "{user}" has been added to group "{group}".',
  },
  leaveGroupErrorNotificationTitle: {
    id: 'app.components.GroupTable.leaveGroupErrorNotificationTitle',
    defaultMessage: 'Failed to remove user "{user}" from group "{group}".',
  },
  leaveGroupSuccessNotificationTitle: {
    id: 'app.components.GroupTable.leaveGroupSuccessNotificationTitle',
    defaultMessage: 'User "{user}" has been removed from group "{group}".',
  },
});
