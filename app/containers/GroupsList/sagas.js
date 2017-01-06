import { call, put, fork } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import Notifications from 'react-notification-system-redux';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import {
  GET_GROUPS_API_URL,
  GET_GROUPS,
  DELETE_GROUPS_API_URL,
  DELETE_GROUP,
  DELETE_GROUP_ERROR,
  DELETE_GROUP_SUCCESS,
} from './constants';
import { getGroupsError, getGroupsSuccess, deleteGroupSuccess, deleteGroupError } from './actions';
import { deleteGroupErrorNotification, deleteGroupSuccessNotification } from './notifications';

function callGetGroups() {
  return checkedFetch(GET_GROUPS_API_URL, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => response.json());
}

function callDeleteGroup(groupname) {
  return checkedFetch(`${DELETE_GROUPS_API_URL}${groupname}`, {
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
    yield put(deleteGroupSuccess(action.value));
    yield getGroups();
  } catch (e) {
    yield put(deleteGroupError(action.value));
  }
}

function* notifyDeleteGroupSuccess(action) {
  yield put(Notifications.success(deleteGroupSuccessNotification(action.value)));
}

function* notifyDeleteGroupError(action) {
  yield put(Notifications.error(deleteGroupErrorNotification(action.value)));
}

function* notifyDeleteGroupSuccessSaga() {
  yield takeEvery(DELETE_GROUP_SUCCESS, notifyDeleteGroupSuccess);
}

function* notifyDeleteGroupErrorSaga() {
  yield takeEvery(DELETE_GROUP_ERROR, notifyDeleteGroupError);
}

function* deleteGroupSaga() {
  yield fork(takeLatest, DELETE_GROUP, deleteGroup);
}

function* getGroupsSaga() {
  yield fork(takeLatest, GET_GROUPS, getGroups);
}

// All sagas to be loaded
export default bootstrap([
  deleteGroupSaga,
  getGroupsSaga,
  notifyDeleteGroupErrorSaga,
  notifyDeleteGroupSuccessSaga,
]);
