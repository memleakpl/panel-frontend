/**
 * Created by oszust on 29.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function deleteGroupErrorNotification(groupname) {
  return ({
    title: <FormattedMessage {...messages.deleteGroupError} values={{ group: groupname }} />,
    position: 'tr',
    autoDismiss: 2,
  });
}

export function deleteGroupSuccessNotification(groupname) {
  return ({
    title: <FormattedMessage {...messages.deleteGroupSuccess} values={{ group: groupname }} />,
    position: 'tr',
    autoDismiss: 2,
  });
}
