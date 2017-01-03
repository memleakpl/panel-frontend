/**
 * Created by oszust on 31.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function editUserErrorNotification(user) {
  return {
    title: <FormattedMessage {...messages.editUserErrorNotificationTitle} values={{ username: user.username }} />,
  };
}

export function editUserSuccessNotification(user) {
  return {
    title: <FormattedMessage {...messages.editUserSuccessNotificationTitle} values={{ username: user.username }} />,
  };
}

export function getUserErrorNotification(username) {
  return {
    title: <FormattedMessage {...messages.getUserErrorNotificationTitle} values={{ userName: username }} />,
  };
}
