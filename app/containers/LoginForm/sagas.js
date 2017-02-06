import { call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';

import { bootstrap, checkedFetch } from '../../utils/sagas';
import { RESET_PASSWORD_CONFIRM_API_URL } from '../../urls';

import {
  LOGIN,
  LOGIN_API_URL,
  ISADMIN_API_URL,
  ADMIN_AFTER_LOGIN_URL,
  USER_AFTER_LOGIN_URL,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
} from './constants';
import selectLoginForm from './selectors';
import { loginSuccess, loginError, resetPasswordSuccess, resetPasswordError } from './actions';
import { resetPasswordErrorNotification, resetPasswordSuccessNotification } from './notifications';

function callLogin(username, password) {
  return checkedFetch(LOGIN_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });
}

function callIsAdmin() {
  return checkedFetch(ISADMIN_API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json; charset=utf-8',
    },
    credentials: 'include',
  }).then((response) => response.json())
    .then((response) => response.admin);
}

function callResetPassword(token) {
  return checkedFetch(RESET_PASSWORD_CONFIRM_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify({ token }),
  });
}

function* resetPassword(action) {
  try {
    yield call(callResetPassword, action.value);
    yield put(resetPasswordSuccess());
  } catch (e) {
    yield put(resetPasswordError());
  }
}

function* login() {
  try {
    const { username, password } = yield select(selectLoginForm());
    yield call(callLogin, username, password);
    const isAdmin = yield call(callIsAdmin);
    yield put(loginSuccess());
    if (isAdmin) {
      yield put(push(ADMIN_AFTER_LOGIN_URL));
    } else {
      yield put(push(USER_AFTER_LOGIN_URL));
    }
  } catch (e) {
    yield put(loginError());
  }
}

function* resetPasswordSaga() {
  yield* takeLatest(RESET_PASSWORD, resetPassword);
}

function* loginSaga() {
  yield* takeLatest(LOGIN, login);
}

function* notificationsSaga() {
  yield takeEvery(RESET_PASSWORD_ERROR, function* errorNotification() {
    yield put(resetPasswordErrorNotification());
  });

  yield takeEvery(RESET_PASSWORD_SUCCESS, function* successNotification() {
    yield put(resetPasswordSuccessNotification());
  });
}

// All sagas to be loaded
export default bootstrap([
  loginSaga,
  resetPasswordSaga,
  notificationsSaga,
]);
