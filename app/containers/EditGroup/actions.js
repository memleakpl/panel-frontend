/*
 *
 * EditGroup actions
 *
 */

import {
  GET_GROUP,
  GET_GROUP_SUCCESS,
  GET_GROUP_ERROR,
  EDIT_GROUP,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_ERROR,
} from './constants';

export function getGroup(groupname) {
  return {
    type: GET_GROUP,
    value: groupname,
  };
}

export function getGroupSuccess() {
  return {
    type: GET_GROUP_SUCCESS,
  };
}

export function getGroupError(groupname) {
  return {
    type: GET_GROUP_ERROR,
    value: groupname,
  };
}

export function editGroup() {
  return {
    type: EDIT_GROUP,
  };
}

export function editGroupSuccess(group) {
  return {
    type: EDIT_GROUP_SUCCESS,
    value: group,
  };
}

export function editGroupError(group) {
  return {
    type: EDIT_GROUP_ERROR,
    value: group,
  };
}
