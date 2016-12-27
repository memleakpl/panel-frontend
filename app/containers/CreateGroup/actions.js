/*
 *
 * CreateGroup actions
 *
 */

import {
  REQUEST_CREATE_GROUP,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
} from './constants';

export function requestCreateGroup() {
  return {
    type: REQUEST_CREATE_GROUP,
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

