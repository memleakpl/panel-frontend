// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { CHANGE_PASSWORD_API_URL, CHANGE_PASSWORD_REQUEST } from './constants';
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
export function* changePasswordSaga() {
  yield* takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
}

// All sagas to be loaded
export default [
  changePasswordSaga,
];
