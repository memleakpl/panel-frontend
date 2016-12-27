/*
 *
 * GroupsList actions
 *
 */

import {
  GET_GROUPS_REQUEST,
  GET_GROUPS_ERROR,
  GET_GROUPS_SUCCESS,
  SET_DELETION_GROUP,
  DELETE_GROUP_REQUEST,
  DELETE_GROUP_ERROR,
  DELETE_GROUP_SUCCESS,
} from './constants';

export function getGroupsRequest() {
  return {
    type: GET_GROUPS_REQUEST,
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

export function deleteGroupRequest(groupname) {
  return {
    type: DELETE_GROUP_REQUEST,
    value: groupname,
  };
}

export function deleteGroupSuccess() {
  return {
    type: DELETE_GROUP_SUCCESS,
  };
}

export function deleteGroupError() {
  return {
    type: DELETE_GROUP_ERROR,
  };
}
