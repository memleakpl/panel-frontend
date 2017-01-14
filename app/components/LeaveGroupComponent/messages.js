/*
 * LeaveGroupComponent Messages
 *
 * This contains all the text for the LeaveGroupComponent component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.LeaveGroupComponent.header',
    defaultMessage: 'Current user groups',
  },
  leaveButtonLabel: {
    id: 'app.components.LeaveGroupComponent.leaveButtonLabel',
    defaultMessage: 'Leave selected groups',
  },
  noMembershipMessage: {
    id: 'app.components.LeaveGroupComponent.noMembershipMessage',
    defaultMessage: 'User does not belong to any group.',
  },
});
