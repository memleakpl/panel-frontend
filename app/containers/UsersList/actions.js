/*
 *
 * UsersList actions
 *
 */

import { DEFAULT_ACTION, GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USERS, SET_SELECTED_USER } from './constants';

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    value: users,
  };
}

export function setSelectedUser(username) {
  return {
    type: SET_SELECTED_USER,
    value: username,
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
