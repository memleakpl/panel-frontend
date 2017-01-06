/*
 *
 * CreateUser actions
 *
 */
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from './constants';

export function createUser() {
  return {
    type: CREATE_USER,
  };
}

export function createUserSuccess(user) {
  return {
    type: CREATE_USER_SUCCESS,
    value: user,
  };
}

export function createUserError(user) {
  return {
    type: CREATE_USER_ERROR,
    value: user,
  };
}
