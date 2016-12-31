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

export function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    value: user,
  };
}

export function getUserError() {
  return {
    type: GET_USER_ERROR,
  };
}

export function editUser() {
  return {
    type: EDIT_USER,
  };
}

export function editUserSuccess() {
  return {
    type: EDIT_USER_SUCCESS,
  };
}

export function editUserError() {
  return {
    type: EDIT_USER_ERROR,
  };
}
