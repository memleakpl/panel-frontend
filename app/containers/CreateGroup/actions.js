/*
 *
 * CreateGroup actions
 *
 */

import {
  CREATE_GROUP,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
} from './constants';

export function createGroup() {
  return {
    type: CREATE_GROUP,
  };
}

export function createGroupError(group, message) {
  return {
    type: CREATE_GROUP_ERROR,
    value: {
      group,
      message,
    },
  };
}

export function createGroupSuccess(group) {
  return {
    type: CREATE_GROUP_SUCCESS,
    value: group,
  };
}

