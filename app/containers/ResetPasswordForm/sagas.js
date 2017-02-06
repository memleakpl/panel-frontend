import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { bootstrap, checkedFetch } from '../../utils/sagas';
import { RESET_PASSWORD_API_URL } from '../../urls';

import selectResetPasswordForm from './selectors';
import { RESET_PASSWORD } from './constants';
import { resetPasswordSuccess, resetPasswordError } from './actions';

function callResetPassword(username, email) {
  return checkedFetch(RESET_PASSWORD_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify({ username, email }),
  });
}

function* login() {
  try {
    const { username, email } = yield select(selectResetPasswordForm());
    yield call(callResetPassword, username, email);
    yield put(resetPasswordSuccess());
  } catch (e) {
    yield put(resetPasswordError());
  }
}

export function* loginSaga() {
  yield* takeLatest(RESET_PASSWORD, login);
}

export default bootstrap([
  loginSaga,
]);
