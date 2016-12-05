/*
 *
 * LoginForm actions
 *
 */

import {
  SET_USERNAME,
  SET_PASSWORD,
  REQUEST_LOGIN,
  REQUEST_LOGIN_SUCCESS,
  REQUEST_LOGIN_ERROR,
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

export function requestLogin() {
  return {
    type: REQUEST_LOGIN,
  };
}

export function requestLoginSuccess() {
  return {
    type: REQUEST_LOGIN_SUCCESS,
  };
}

export function requestLoginError() {
  return {
    type: REQUEST_LOGIN_ERROR,
  };
}