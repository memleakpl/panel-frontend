/*
 *
 * GroupForm actions
 *
 */

import {
  SET_DESCRIPTION,
  SET_NAME,
} from './constants';

export function setDescription(description) {
  return {
    type: SET_DESCRIPTION,
    value: description,
  };
}

export function setName(name) {
  return {
    type: SET_NAME,
    value: name,
  };
}

