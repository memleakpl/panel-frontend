import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

import { bootstrap, checkedFetch } from '../../utils/sagas';
import { LOGOUT, LOGOUT_API_URL } from './constants';

function callLogout() {
  return checkedFetch(LOGOUT_API_URL, {
    method: 'POST',
    credentials: 'include',
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
export default bootstrap([
  logoutSaga,
]);
