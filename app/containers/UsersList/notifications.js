/**
 * Created by oszust on 29.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function deleteUserErrorNotification(username) {
  return ({
    title: <FormattedMessage {...messages.deleteUserError} values={{ user: username }} />,
    position: 'tr',
    autoDismiss: 2,
  });
}
