/*
 *
 * ChangePasswordForm actions
 *
 */

import {
  SET_REPEAT_PASSWORD,
  SET_NEW_PASSWORD,
  SET_OLD_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD,
} from './constants';

export function setOldPassword(oldPassword) {
  return {
    type: SET_OLD_PASSWORD,
    value: oldPassword,
  };
}

export function setNewPassword(newPassword) {
  return {
    type: SET_NEW_PASSWORD,
    value: newPassword,
  };
}

export function setRepeatPassword(repeatPassword) {
  return {
    type: SET_REPEAT_PASSWORD,
    value: repeatPassword,
  };
}

export function changePassword() {
  return {
    type: CHANGE_PASSWORD,
  };
}

export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
}

export function changePasswordError() {
  return {
    type: CHANGE_PASSWORD_ERROR,
  };
}
