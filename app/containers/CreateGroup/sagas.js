import { call, put, select } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import Notifications from 'react-notification-system-redux';

import { createGroupError, createGroupSuccess } from './actions';
import { CREATE_GROUP_API_URL, CREATE_GROUP_REQUEST, CREATE_GROUP_ERROR, CREATE_GROUP_SUCCESS } from './constants';
import { createGroupErrorNotification, createGroupSuccessNotification } from './notifications';

import selectGroupForm from '../GroupForm/selectors';

import { bootstrap, checkedFetch } from '../../utils/sagas';

function callCreate(group) {
  return checkedFetch(CREATE_GROUP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(group),
  });
}

function* createGroup() {
  const group = yield select(selectGroupForm());
  try {
    yield call(callCreate, group);
    yield put(createGroupSuccess(group));
  } catch (e) {
    yield put(createGroupError(group, e.message));
  }
}

function* fetchSaga() {
  yield takeLatest(CREATE_GROUP_REQUEST, createGroup);
}

function* notificationSaga() {
  yield takeEvery(CREATE_GROUP_SUCCESS, function* notifyCreateGroupSuccess(action) {
    yield put(Notifications.success(createGroupSuccessNotification(action.value)));
  });
  yield takeEvery(CREATE_GROUP_ERROR, function* notifyCreateGroupError(action) {
    yield put(Notifications.error(createGroupErrorNotification(action.value.group, action.value.message)));
  });
}

// All sagas to be loaded
export default bootstrap([
  fetchSaga,
  notificationSaga,
]);
