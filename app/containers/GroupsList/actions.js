/*
 *
 * GroupsList actions
 *
 */

import {
  GET_GROUPS,
  GET_GROUPS_ERROR,
  GET_GROUPS_SUCCESS,
  SET_DELETION_GROUP,
  DELETE_GROUP,
  DELETE_GROUP_ERROR,
  DELETE_GROUP_SUCCESS,
} from './constants';

export function getGroups() {
  return {
    type: GET_GROUPS,
  };
}

export function getGroupsSuccess(groups) {
  return {
    type: GET_GROUPS_SUCCESS,
    value: groups,
  };
}

export function getGroupsError() {
  return {
    type: GET_GROUPS_ERROR,
  };
}

export function setDeletionGroup(groupname) {
  return {
    type: SET_DELETION_GROUP,
    value: groupname,
  };
}

export function deleteGroup(groupname) {
  return {
    type: DELETE_GROUP,
    value: groupname,
  };
}

export function deleteGroupSuccess(groupname) {
  return {
    type: DELETE_GROUP_SUCCESS,
    value: groupname,
  };
}

export function deleteGroupError(groupname) {
  return {
    type: DELETE_GROUP_ERROR,
    value: groupname,
  };
}
