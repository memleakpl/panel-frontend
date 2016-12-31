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

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

export function createUserError() {
  return {
    type: CREATE_USER_ERROR,
  };
}
