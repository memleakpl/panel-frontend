import { takeLatest, takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Notifications from 'react-notification-system-redux';

import { checkedFetch, bootstrap } from '../../utils/sagas';
import {
  joinGroupErrorNotification,
  joinGroupSuccessNotification,
  leaveGroupErrorNotification,
  leaveGroupSuccessNotification,
} from './notifications';

import {
  GET_GROUPS_API_URL,
  USER_API_URL,
  GET_GROUP_MEMBERSHIPS,
  JOIN_GROUP,
  JOIN_GROUP_ERROR,
  JOIN_GROUP_SUCCESS,
  LEAVE_GROUPS,
  LEAVE_GROUP_ERROR,
  LEAVE_GROUP_SUCCESS,
} from './constants';
import {
  getGroupMemberships,
  getGroupMembershipsError,
  getGroupMembershipsSuccess,
  joinGroupError,
  joinGroupSuccess,
  leaveGroupError,
  leaveGroupSuccess,
} from './actions';

function callGetGroups() {
  return checkedFetch(GET_GROUPS_API_URL, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => response.json());
}

function callGetUserGroups(user) {
  return checkedFetch(`${USER_API_URL}/${user}/groups`, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => response.json());
}

function callJoinGroup(user, group) {
  return checkedFetch(`${GET_GROUPS_API_URL}/${group}/add/${user}`, {
    credentials: 'include',
    method: 'POST',
  });
}

function callLeaveGroup(user, group) {
  return checkedFetch(`${GET_GROUPS_API_URL}/${group}/remove/${user}`, {
    credentials: 'include',
    method: 'POST',
  }).then(() => ({ user, group }))
    .catch(() => ({ user, group, error: true }));
}

function* fetchGroupMemberships(action) {
  const user = action.value;
  try {
    const groups = yield call(callGetGroups);
    const userGroups = yield call(callGetUserGroups, user);
    const joinGroups = groups.map((group) => group.name).filter((group) => !userGroups.includes(group));
    yield put(getGroupMembershipsSuccess(joinGroups, userGroups));
  } catch (e) {
    yield put(getGroupMembershipsError());
  }
}

function* fetchJoinGroup(action) {
  const user = action.value.user;
  const group = action.value.group;
  try {
    yield call(callJoinGroup, user, group);
    yield put(joinGroupSuccess(user, group));
    yield put(getGroupMemberships(user));
  } catch (e) {
    yield put(joinGroupError(user, group));
  }
}

function* fetchLeaveGroups(action) {
  const user = action.value.user;
  const groups = action.value.groups;
  const results = yield groups.map((group) => call(callLeaveGroup, user, group));
  let success = false;
  yield results.map((result) => {
    if (result.error) return put(leaveGroupError(result.user, result.group));
    success = true;
    return put(leaveGroupSuccess(result.user, result.group));
  });
  if (success) yield put(getGroupMemberships(user));
}

export function* getGroupMembershipsSaga() {
  yield takeLatest(GET_GROUP_MEMBERSHIPS, fetchGroupMemberships);
}

export function* joinGroupSaga() {
  yield takeLatest(JOIN_GROUP, fetchJoinGroup);
}

export function* leaveGroupSaga() {
  yield takeLatest(LEAVE_GROUPS, fetchLeaveGroups);
}

export function* notificationSaga() {
  yield takeEvery(JOIN_GROUP_ERROR, function* notifyJoinGroupError(action) {
    yield put(Notifications.error(joinGroupErrorNotification(action.value.user, action.value.group)));
  });
  yield takeEvery(JOIN_GROUP_SUCCESS, function* notifyJoinGroupError(action) {
    yield put(Notifications.success(joinGroupSuccessNotification(action.value.user, action.value.group)));
  });
  yield takeEvery(LEAVE_GROUP_ERROR, function* notifyLeaveGroupError(action) {
    yield put(Notifications.error(leaveGroupErrorNotification(action.value.user, action.value.group)));
  });
  yield takeEvery(LEAVE_GROUP_SUCCESS, function* notifyLeaveGroupSuccess(action) {
    yield put(Notifications.success(leaveGroupSuccessNotification(action.value.user, action.value.group)));
  });
}

// All sagas to be loaded
export default bootstrap([
  getGroupMembershipsSaga,
  joinGroupSaga,
  leaveGroupSaga,
  notificationSaga,
]);
