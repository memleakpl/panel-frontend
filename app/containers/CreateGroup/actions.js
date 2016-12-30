/*
 *
 * CreateGroup actions
 *
 */

import {
  CREATE_GROUP_REQUEST,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
} from './constants';

export function createGroupRequest() {
  return {
    type: CREATE_GROUP_REQUEST,
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

