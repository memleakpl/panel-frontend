import { call, put, fork, take, cancel } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_GROUPS_API_URL, GET_GROUPS_REQUEST } from './constants';
import { getGroupsError, getGroupsSuccess } from './actions';

function callGetGroups() {
  return fetch(GET_GROUPS_API_URL, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => response.json());
}

function* getGroups() {
  try {
    const groups = yield call(callGetGroups);
    yield put(getGroupsSuccess(groups));
  } catch (e) {
    yield put(getGroupsError());
  }
}

function* getGroupsWatcher() {
  yield fork(takeLatest, GET_GROUPS_REQUEST, getGroups);
}

function* groupsListBootstrap() {
  const getWatcher = yield fork(getGroupsWatcher);

  yield take(LOCATION_CHANGE);
  yield cancel(getWatcher);
}

// All sagas to be loaded
export default [
  groupsListBootstrap,
];
