/*
 *
 * CreateUser actions
 *
 */
import {
  REQUEST_CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from './constants';

export function requestCreateUser() {
  return {
    type: REQUEST_CREATE_USER,
  };
}

export function requestCreateUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

export function requestCreateUserError() {
  return {
    type: CREATE_USER_ERROR,
  };
}
