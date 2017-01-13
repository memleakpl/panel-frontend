// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { call, put, select, fork } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import { CHANGE_PASSWORD_API_URL, CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERROR } from './constants';
import { changePasswordErrorNotification, changePasswordSuccessNotification } from './notifications';
import selectChangePasswordForm from './selectors';
import { changePasswordError, changePasswordSuccess } from './actions';


function callChangePassword(oldPassword, newPassword) {
  return checkedFetch(CHANGE_PASSWORD_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify({ oldPassword, newPassword }),
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
function* notifyChangePasswordSuccess() {
  yield put(changePasswordSuccessNotification());
}

function* notifyChangePasswordError() {
  yield put(changePasswordErrorNotification());
}

function* changePasswordSaga() {
  yield fork(takeLatest, CHANGE_PASSWORD, changePassword);
}

function* notifyChangePasswordSuccessSaga() {
  yield fork(takeEvery, CHANGE_PASSWORD_SUCCESS, notifyChangePasswordSuccess);
}

function* notifyChangePasswordErrorSaga() {
  yield fork(takeEvery, CHANGE_PASSWORD_ERROR, notifyChangePasswordError);
}

// All sagas to be loaded
export default bootstrap([
  changePasswordSaga,
  notifyChangePasswordSuccessSaga,
  notifyChangePasswordErrorSaga,
]);
