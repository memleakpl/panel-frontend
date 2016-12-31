/*
 *
 * EditUser actions
 *
 */

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
} from './constants';

export function getUser(username) {
  return {
    type: GET_USER,
    value: username,
  };
}

export function getUserSuccess() {
  return {
    type: GET_USER_SUCCESS,
  };
}

export function getUserError(username, message) {
  return {
    type: GET_USER_ERROR,
    value: {
      username,
      message,
    },
  };
}

export function editUser() {
  return {
    type: EDIT_USER,
  };
}

export function editUserSuccess(user) {
  return {
    type: EDIT_USER_SUCCESS,
    value: user,
  };
}

export function editUserError(user, message) {
  return {
    type: EDIT_USER_ERROR,
    value: {
      user,
      message,
    },
  };
}
