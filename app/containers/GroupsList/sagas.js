import { call, put, fork, take, cancel } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_GROUPS_API_URL, GET_GROUPS_REQUEST, DELETE_GROUPS_API_URL, DELETE_GROUP_REQUEST } from './constants';
import { getGroupsError, getGroupsSuccess, deleteGroupSuccess, deleteGroupError } from './actions';

function callGetGroups() {
  return fetch(GET_GROUPS_API_URL, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => response.json());
}

function callDeleteGroup(groupname) {
  return fetch(`${DELETE_GROUPS_API_URL}${groupname}`, {
    credentials: 'include',
    method: 'DELETE',
  }).then((response) => {
    if (response.status !== 204) throw new Error('Delete failed');
  });
}

function* getGroups() {
  try {
    const groups = yield call(callGetGroups);
    yield put(getGroupsSuccess(groups));
  } catch (e) {
    yield put(getGroupsError());
  }
}

function* deleteGroup(action) {
  try {
    yield call(callDeleteGroup, action.value);
    yield put(deleteGroupSuccess());
    yield getGroups();
  } catch (e) {
    yield put(deleteGroupError());
  }
}

function* deleteGroupWatcher() {
  yield fork(takeEvery, DELETE_GROUP_REQUEST, deleteGroup);
}

function* getGroupsWatcher() {
  yield fork(takeLatest, GET_GROUPS_REQUEST, getGroups);
}

function* groupsListBootstrap() {
  const getWatcher = yield fork(getGroupsWatcher);
  const deleteWatcher = yield fork(deleteGroupWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(getWatcher);
  yield cancel(deleteWatcher);
}

// All sagas to be loaded
export default [
  groupsListBootstrap,
];
