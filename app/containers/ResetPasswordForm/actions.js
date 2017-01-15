/*
 *
 * ResetPasswordForm actions
 *
 */

import {
  SET_USERNAME,
  SET_EMAIL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './constants';

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    value: username,
  };
}

export function setEmail(password) {
  return {
    type: SET_EMAIL,
    value: password,
  };
}

export function resetPassword() {
  return {
    type: RESET_PASSWORD,
  };
}

export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
}

export function resetPasswordError() {
  return {
    type: RESET_PASSWORD_ERROR,
  };
}
