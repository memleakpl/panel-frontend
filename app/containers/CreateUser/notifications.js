/**
 * Created by oszust on 31.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';


import messages from './messages';

export function createUserErrorNotification(user) {
  return Notifications.error({
    title: <FormattedMessage {...messages.errorNotificationTitle} values={{ username: user.username }} />,
  });
}

export function createUserSuccessNotification(user) {
  return Notifications.success({
    title: <FormattedMessage {...messages.successNotificationTitle} values={{ username: user.username }} />,
  });
}
