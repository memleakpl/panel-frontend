/*
 *
 * UserForm actions
 *
 */

import {
  SET_USER,
  SET_USERNAME,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
} from './constants';

export function setUser(user) {
  return {
    type: SET_USER,
    value: user,
  };
}

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
