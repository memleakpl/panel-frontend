/*
 *
 * EditUser actions
 *
 */

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
} from './constants';

export function requestUserFetch(username) {
  return {
    type: FETCH_USER_REQUEST,
    value: username,
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    value: user,
  };
}

export function fetchUserError() {
  return {
    type: FETCH_USER_ERROR,
  };
}

export function requestEditUser() {
  return {
    type: EDIT_USER_REQUEST,
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
