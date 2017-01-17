/**
 * Created by oszust on 31.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';


import messages from './messages';

export function editUserErrorNotification(user) {
  return Notifications.error({
    title: <FormattedMessage {...messages.editUserErrorNotificationTitle} values={{ username: user.username }} />,
  });
}

export function editUserSuccessNotification(user) {
  return Notifications.success({
    title: <FormattedMessage {...messages.editUserSuccessNotificationTitle} values={{ username: user.username }} />,
  });
}
