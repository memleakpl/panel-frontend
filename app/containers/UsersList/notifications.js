/**
 * Created by oszust on 29.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';

import messages from './messages';

export function deleteUserErrorNotification(username) {
  return Notifications.error({
    title: <FormattedMessage {...messages.deleteUserError} values={{ user: username }} />,
  });
}

export function deleteUserSuccessNotification(username) {
  return Notifications.success({
    title: <FormattedMessage {...messages.deleteUserSuccess} values={{ user: username }} />,
  });
}
