/**
 * Created by maxmati on 1/15/17.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';

import messages from './messages';

export function resetPasswordErrorNotification() {
  return Notifications.error({
    title: <FormattedMessage {...messages.resetPasswordError} />,
  });
}

export function resetPasswordSuccessNotification() {
  return Notifications.success({
    title: <FormattedMessage {...messages.resetPasswordSuccess} />,
  });
}
