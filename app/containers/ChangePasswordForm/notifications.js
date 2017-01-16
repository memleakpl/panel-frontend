/**
 * Created by oszust on 24.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';

import messages from './messages';


export function changePasswordSuccessNotification() {
  return Notifications.success({
    title: <FormattedMessage {...messages.passwordChanged} />,
  });
}

export function changePasswordErrorNotification() {
  return Notifications.error({
    title: <FormattedMessage {...messages.changePasswordError} />,
  });
}
