/*
 *
 * EditUser actions
 *
 */

import {
  REQUEST_USER_FETCH,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from './constants';

export function requestUserFetch(username) {
  return {
    type: REQUEST_USER_FETCH,
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
