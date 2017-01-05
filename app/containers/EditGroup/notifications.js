/**
 * Created by oszust on 05.01.17.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function getGroupErrorNotification(groupname) {
  return {
    title: <FormattedMessage {...messages.getGroupErrorNotificationTitle} values={{ groupName: groupname }} />,
  };
}

export function editGroupSuccessNotification(group) {
  return {
    title: <FormattedMessage {...messages.editGroupSuccessNotificationTitle} values={{ groupname: group.groupname }} />,
  };
}

export function editGroupErrorNotification(group) {
  return {
    title: <FormattedMessage {...messages.editGroupErrorNotificationTitle} values={{ groupname: group.groupname }} />,
  };
}
