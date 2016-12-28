import { call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import { bootstrap } from '../../utils/sagas';
import { FETCH_USER_REQUEST, EDIT_USER_REQUEST, API_GET_USER, API_EDIT_USER, LIST_USERS_URL } from './constants';
import selectUserForm from '../UserForm/selectors';
import { setUser } from '../UserForm/actions';
import { fetchUserSuccess, fetchUserError, editUserSuccess, editUserError } from './actions';

function callFetchUser(username) {
  return fetch(`${API_GET_USER}${username}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());
}

function* fetchUser(action) {
  try {
    const user = yield call(callFetchUser, action.value);
    yield put(fetchUserSuccess(user));
    yield put(setUser(user));
  } catch (e) {
    yield put(fetchUserError());
  }
}

function callEditUser(user) {
  return fetch(`${API_EDIT_USER}${user.username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
}

function* editUser() {
  try {
    const user = yield select(selectUserForm());
    yield call(callEditUser, user);
    yield put(editUserSuccess());
    yield put(push(LIST_USERS_URL));
  } catch (e) {
    yield put(editUserError());
  }
}

function* fetchUserSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}

function* editUserSaga() {
  yield takeEvery(EDIT_USER_REQUEST, editUser);
}

// All sagas to be loaded
export default bootstrap([
  fetchUserSaga,
  editUserSaga,
]);
