/*
 *
 * UsersList actions
 *
 */

import { DEFAULT_ACTION, GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USERS } from './constants';

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    value: users,
  };
}

export function getUsers() {
  return {
    type: GET_USERS,
  };
}
export function getUsersError() {
  return {
    type: GET_USERS_ERROR,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
