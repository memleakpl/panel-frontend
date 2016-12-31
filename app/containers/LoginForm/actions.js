/*
 *
 * LoginForm actions
 *
 */

import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    value: username,
  };
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    value: password,
  };
}

export function login() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginError() {
  return {
    type: LOGIN_ERROR,
  };
}
