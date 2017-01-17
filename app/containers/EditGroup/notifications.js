/**
 * Created by oszust on 05.01.17.
 */

import React from 'react';
import Notifications from 'react-notification-system-redux';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function editGroupSuccessNotification(group) {
  return Notifications.success({
    title: <FormattedMessage {...messages.editGroupSuccessNotificationTitle} values={{ groupname: group.groupname }} />,
  });
}

export function editGroupErrorNotification(group) {
  return Notifications.error({
    title: <FormattedMessage {...messages.editGroupErrorNotificationTitle} values={{ groupname: group.groupname }} />,
  });
}
