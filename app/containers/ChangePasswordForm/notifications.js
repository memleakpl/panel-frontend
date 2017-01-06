/**
 * Created by oszust on 24.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


export function changePasswordSuccessNotification() {
  return ({
    title: <FormattedMessage {...messages.passwordChanged} />,
    position: 'tr',
    autoDismiss: 1.5,
  });
}

export function changePasswordErrorNotification() {
  return ({
    title: <FormattedMessage {...messages.changePasswordError} />,
    position: 'tr',
    autoDismiss: 1.5,
  });
}
