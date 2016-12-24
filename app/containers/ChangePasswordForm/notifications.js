/**
 * Created by oszust on 24.12.16.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


export const CHANGE_PASSWORD_SUCCESS_NOTIFICATION = {
  title: <FormattedMessage {...messages.passwordChanged} />,
  position: 'tr',
  autoDismiss: 1.5,
};
