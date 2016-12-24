// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { call, put, select, fork, take, cancel } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import Notifications from 'react-notification-system-redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CHANGE_PASSWORD_API_URL, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR } from './constants';
import { CHANGE_PASSWORD_SUCCESS_NOTIFICATION, CHANGE_PASSWORD_ERROR_NOTIFICATION } from './notifications';
import selectChangePasswordForm from './selectors';
import { changePasswordError, changePasswordSuccess } from './actions';


function callChangePassword(oldPassword, newPassword) {
  return fetch(CHANGE_PASSWORD_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify({ oldPassword, newPassword }),
  }).then((response) => {
    if (response.status !== 204) throw new Error('Changing password failed!');
  });
}

function* changePassword() {
  try {
    const { oldPassword, newPassword } = yield select(selectChangePasswordForm());
    yield call(callChangePassword, oldPassword, newPassword);
    yield put(changePasswordSuccess());
  } catch (e) {
    yield put(changePasswordError());
  }
}
export function* notifyChangePasswordSuccess() {
  yield put(Notifications.success(CHANGE_PASSWORD_SUCCESS_NOTIFICATION));
}

export function* notifyChangePasswordError() {
  yield put(Notifications.error(CHANGE_PASSWORD_ERROR_NOTIFICATION));
}

export function* changePasswordWatcher() {
  yield fork(takeLatest, CHANGE_PASSWORD_REQUEST, changePassword);
}

export function* notifyChangePasswordSuccessWatcher() {
  yield fork(takeEvery, CHANGE_PASSWORD_SUCCESS, notifyChangePasswordSuccess);
}

export function* notifyChangePasswordErrorWatcher() {
  yield fork(takeEvery, CHANGE_PASSWORD_ERROR, notifyChangePasswordError);
}

export function* changePasswordBootstrap() {
  const changeWatcher = yield fork(changePasswordWatcher);
  const notifySuccessWatcher = yield fork(notifyChangePasswordSuccessWatcher);
  const notifyErrorWatcher = yield fork(notifyChangePasswordErrorWatcher);


  yield take(LOCATION_CHANGE);
  yield cancel(changeWatcher);
  yield cancel(notifySuccessWatcher);
  yield cancel(notifyErrorWatcher);
}

// All sagas to be loaded
export default [
  changePasswordBootstrap,
];
