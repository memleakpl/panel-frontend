/*
 *
 * UsersList actions
 *
 */

import {
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS,
  SET_DELETION_USER,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from './constants';

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

export function setDeletionUser(username) {
  return {
    type: SET_DELETION_USER,
    value: username,
  };
}

export function deleteUserRequest(username) {
  return {
    type: DELETE_USER_REQUEST,
    value: username,
  };
}

export function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
  };
}

export function deleteUserError() {
  return {
    type: DELETE_USER_ERROR,
  };
}
