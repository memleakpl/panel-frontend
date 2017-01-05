/**
 * Created by oszust on 31.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function createUserErrorNotification(user) {
  return {
    title: <FormattedMessage {...messages.errorNotificationTitle} values={{ username: user.username }} />,
  };
}

export function createUserSuccessNotification(user) {
  return {
    title: <FormattedMessage {...messages.successNotificationTitle} values={{ username: user.username }} />,
  };
}