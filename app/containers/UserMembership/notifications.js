/*
 *
 * UserMembership notifications
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function joinGroupErrorNotification(user, group) {
  return {
    title: <FormattedMessage {...messages.joinGroupErrorNotificationTitle} values={{ user, group }} />,
  };
}

export function joinGroupSuccessNotification(user, group) {
  return {
    title: <FormattedMessage {...messages.joinGroupSuccessNotificationTitle} values={{ user, group }} />,
  };
}

export function leaveGroupErrorNotification(user, group) {
  return {
    title: <FormattedMessage {...messages.leaveGroupErrorNotificationTitle} values={{ user, group }} />,
  };
}

export function leaveGroupSuccessNotification(user, group) {
  return {
    title: <FormattedMessage {...messages.leaveGroupSuccessNotificationTitle} values={{ user, group }} />,
  };
}
