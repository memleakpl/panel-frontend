/*
 *
 * CreateUser actions
 *
 */
import {
  SET_USERNAME,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
  REQUEST_CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from './constants';

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    value: username,
  };
}

export function setFirstName(firstName) {
  return {
    type: SET_FIRST_NAME,
    value: firstName,
  };
}

export function setLastName(lastName) {
  return {
    type: SET_LAST_NAME,
    value: lastName,
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    value: email,
  };
}

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
