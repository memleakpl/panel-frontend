/*
 *
 * CreateGroup notifications
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';

import messages from './messages';

export function createGroupErrorNotification(group, message) {
  return Notifications.error({
    title: <FormattedMessage {...messages.errorNotificationTitle} values={{ groupName: group.name }} />,
    message,
  });
}

export function createGroupSuccessNotification(group) {
  return Notifications.success({
    title: <FormattedMessage {...messages.successNotificationTitle} values={{ groupName: group.name }} />,
  });
}

