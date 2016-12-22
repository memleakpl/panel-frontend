import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { LOGOUT, LOGOUT_API_URL } from './constants';

function callLogout() {
  return fetch(LOGOUT_API_URL, {
    method: 'POST',
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 204) throw new Error('Login failed');
  });
}

function* logout() {
  yield call(callLogout);
  yield put(push('/login'));
}

function* logoutSaga() {
  yield* takeLatest(LOGOUT, logout);
}

// All sagas to be loaded
export default [
  logoutSaga,
];
