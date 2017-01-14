import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import { LOGIN, LOGIN_API_URL, ISADMIN_API_URL, ADMIN_AFTER_LOGIN_URL, USER_AFTER_LOGIN_URL } from './constants';
import selectLoginForm from './selectors';
import { loginSuccess, loginError } from './actions';

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

// Individual exports for testing
export function* loginSaga() {
  yield* takeLatest(LOGIN, login);
}

// All sagas to be loaded
export default bootstrap([
  loginSaga,
]);
