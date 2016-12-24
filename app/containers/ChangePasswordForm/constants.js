/*
 *
 * ChangePasswordForm constants
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { API_ROOT } from '../../constants';
import messages from './messages';

export const SET_OLD_PASSWORD = 'app/ChangePasswordForm/SET_OLD_PASSWORD';
export const SET_NEW_PASSWORD = 'app/ChangePasswordForm/SET_NEW_PASSWORD';
export const SET_REPEAT_PASSWORD = 'app/ChangePasswordForm/SET_REPEAT_PASSWORD';
export const CHANGE_PASSWORD_REQUEST = 'app/ChangePasswordForm/CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS = 'app/ChangePasswordForm/CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'app/ChangePasswordForm/CHANGE_PASSWORD_ERROR';

export const CHANGE_PASSWORD_API_URL = `${API_ROOT}/user/password`;

export const CHANGE_PASSWORD_URL = '/password/change';

export const CHANGE_PASSWORD_SUCCESS_NOTIFICATION = {
  title: <FormattedMessage {...messages.passwordChanged} />,
  position: 'tr',
  autoDismiss: 1.5,
};
