/**
 * Created by oszust on 29.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Notifications from 'react-notification-system-redux';

import messages from './messages';

export function deleteGroupErrorNotification(groupname) {
  return Notifications.error({
    title: <FormattedMessage {...messages.deleteGroupError} values={{ group: groupname }} />,
  });
}

export function deleteGroupSuccessNotification(groupname) {
  return Notifications.success({
    title: <FormattedMessage {...messages.deleteGroupSuccess} values={{ group: groupname }} />,
  });
}
