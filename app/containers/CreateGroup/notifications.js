/*
 *
 * CreateGroup notifications
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function createGroupErrorNotification(group, message) {
  return {
    title: <FormattedMessage {...messages.errorNotificationTitle} values={{ groupName: group.name }} />,
    message,
  };
}

export function createGroupSuccessNotification(group) {
  return {
    title: <FormattedMessage {...messages.successNotificationTitle} values={{ groupName: group.name }} />,
  };
}

