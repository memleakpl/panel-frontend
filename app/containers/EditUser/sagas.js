import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_USER_FETCH } from './constants';
import { API_ROOT } from '../../constants';
import { setUser } from '../UserForm/actions';
import { fetchUserSuccess, fetchUserError } from './actions';

function fetchUser(username) {
  return fetch(`${API_ROOT}/user/${username}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());
}

function* fetchUserSaga(action) {
  try {
    const user = yield call(fetchUser, action.value);
    yield put(fetchUserSuccess(user));
    yield put(setUser(user));
  } catch (e) {
    yield put(fetchUserError());
  }
}

function* defaultSaga() {
  yield takeLatest(REQUEST_USER_FETCH, fetchUserSaga);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
