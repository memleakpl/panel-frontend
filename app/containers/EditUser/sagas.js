import { call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import { FETCH_USER_REQUEST, EDIT_USER_REQUEST, API_GET_USER, API_EDIT_USER, LIST_USERS_URL } from './constants';
import selectUserForm from '../UserForm/selectors';
import { setUser } from '../UserForm/actions';
import { fetchUserSuccess, fetchUserError, editUserSuccess, editUserError } from './actions';

function fetchUser(username) {
  return fetch(`${API_GET_USER}${username}`, {
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

function editUser(user) {
  return fetch(`${API_EDIT_USER}${user.username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
}

function* editUserSage() {
  try {
    const user = yield select(selectUserForm());
    yield call(editUser, user);
    yield put(editUserSuccess());
    yield put(push(LIST_USERS_URL));
  } catch (e) {
    yield put(editUserError());
  }
}

function* defaultSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
  yield takeEvery(EDIT_USER_REQUEST, editUserSage);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
