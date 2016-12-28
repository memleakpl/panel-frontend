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

export function createGroupError() {
  return {
    type: CREATE_GROUP_ERROR,
  };
}

export function createGroupSuccess() {
  return {
    type: CREATE_GROUP_SUCCESS,
  };
}

