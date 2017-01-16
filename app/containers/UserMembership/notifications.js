/*
 *
 * UserMembership notifications
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';

import messages from './messages';

export function joinGroupErrorNotification(user, group) {
  return Notifications.error({
    title: <FormattedMessage {...messages.joinGroupErrorNotificationTitle} values={{ user, group }} />,
  });
}

export function joinGroupSuccessNotification(user, group) {
  return Notifications.success({
    title: <FormattedMessage {...messages.joinGroupSuccessNotificationTitle} values={{ user, group }} />,
  });
}

export function leaveGroupErrorNotification(user, group) {
  return Notifications.error({
    title: <FormattedMessage {...messages.leaveGroupErrorNotificationTitle} values={{ user, group }} />,
  });
}

export function leaveGroupSuccessNotification(user, group) {
  return Notifications.success({
    title: <FormattedMessage {...messages.leaveGroupSuccessNotificationTitle} values={{ user, group }} />,
  });
}
