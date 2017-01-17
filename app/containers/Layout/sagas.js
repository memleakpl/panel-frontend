import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

import { bootstrap, checkedFetch } from '../../utils/sagas';
import { LOGOUT, LOGOUT_API_URL, ISADMIN_API_URL, CHECK_ADMIN } from './constants';
import selectLayout from './selectors';
import { setAdmin } from './actions';
import { LOGIN_URL } from '../LoginForm/constants';

function callLogout() {
  return checkedFetch(LOGOUT_API_URL, {
    method: 'POST',
    credentials: 'include',
  });
}

function* logout() {
  yield call(callLogout);
  yield put(push(LOGIN_URL));
}

function* logoutSaga() {
  yield* takeLatest(LOGOUT, logout);
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

function* checkAdmin() {
  let { admin } = yield select(selectLayout());
  if (admin === undefined) {
    admin = yield call(callIsAdmin);
    yield put(setAdmin(admin));
  }
}

function* checkAdminSaga() {
  yield* takeLatest(CHECK_ADMIN, checkAdmin);
}
// All sagas to be loaded
export default bootstrap([
  logoutSaga,
  checkAdminSaga,
]);
