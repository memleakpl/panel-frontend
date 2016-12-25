/*
 *
 * GroupsList actions
 *
 */

import {
  GET_GROUPS_REQUEST,
  GET_GROUPS_ERROR,
  GET_GROUPS_SUCCESS,
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
