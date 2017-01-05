/*
 *
 * GroupForm actions
 *
 */

import {
  SET_GROUP,
  SET_DESCRIPTION,
  SET_NAME,
  SET_OWNER,
} from './constants';

export function setGroup(group) {
  return {
    type: SET_GROUP,
    value: group,
  };
}

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

export function setOwner(owner) {
  return {
    type: SET_OWNER,
    value: owner,
  };
}
