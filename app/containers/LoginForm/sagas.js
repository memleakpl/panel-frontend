import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_LOGIN, LOGIN_API_URL } from './constants';
import selectLoginForm from './selectors';
import { requestLoginSuccess, requestLoginError } from './actions';

function callLogin(username, password) {
  return fetch(LOGIN_API_URL, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json());
}

function* login() {
  try {
    const { username, password } = yield select(selectLoginForm());
    yield call(callLogin, username, password);
    yield put(requestLoginSuccess());
  } catch (e) {
    yield put(requestLoginError());
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeLatest(REQUEST_LOGIN, login);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
