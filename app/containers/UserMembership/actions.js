/*
 *
 * UserMembership actions
 *
 */

import {
  GET_GROUP_MEMBERSHIPS,
  GET_GROUP_MEMBERSHIPS_SUCCESS,
  GET_GROUP_MEMBERSHIPS_ERROR,
  SET_JOIN_GROUP,
  JOIN_GROUP,
  JOIN_GROUP_ERROR,
  JOIN_GROUP_SUCCESS,
  TOGGLE_LEAVE_GROUP,
  LEAVE_GROUPS,
  LEAVE_GROUP_ERROR,
  LEAVE_GROUP_SUCCESS,
} from './constants';

export function getGroupMemberships(user) {
  return {
    type: GET_GROUP_MEMBERSHIPS,
    value: user,
  };
}

export function getGroupMembershipsError() {
  return {
    type: GET_GROUP_MEMBERSHIPS_ERROR,
  };
}

export function getGroupMembershipsSuccess(availableGroups, currentGroups) {
  return {
    type: GET_GROUP_MEMBERSHIPS_SUCCESS,
    value: {
      availableGroups,
      currentGroups,
    },
  };
}

export function setJoinGroup(group) {
  return {
    type: SET_JOIN_GROUP,
    value: group,
  };
}

export function joinGroup(user, group) {
  return {
    type: JOIN_GROUP,
    value: {
      user,
      group,
    },
  };
}

export function joinGroupError(user, group) {
  return {
    type: JOIN_GROUP_ERROR,
    value: {
      user,
      group,
    },
  };
}

export function joinGroupSuccess(user, group) {
  return {
    type: JOIN_GROUP_SUCCESS,
    value: {
      user,
      group,
    },
  };
}

export function toggleLeaveGroup(group) {
  return {
    type: TOGGLE_LEAVE_GROUP,
    value: group,
  };
}

export function leaveGroups(user, groups) {
  return {
    type: LEAVE_GROUPS,
    value: {
      user,
      groups,
    },
  };
}

export function leaveGroupError(user, group) {
  return {
    type: LEAVE_GROUP_ERROR,
    value: {
      user,
      group,
    },
  };
}

export function leaveGroupSuccess(user, group) {
  return {
    type: LEAVE_GROUP_SUCCESS,
    value: {
      user,
      group,
    },
  };
}
