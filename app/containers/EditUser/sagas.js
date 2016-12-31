import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { bootstrap } from '../../utils/sagas';
import { GET_USER, EDIT_USER, API_GET_USER, API_EDIT_USER, LIST_USERS_URL } from './constants';
import selectUserForm from '../UserForm/selectors';
import { setUser } from '../UserForm/actions';
import { getUserSuccess, getUserError, editUserSuccess, editUserError } from './actions';

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
    yield put(getUserSuccess(user));
    yield put(setUser(user));
  } catch (e) {
    yield put(getUserError());
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
  yield takeLatest(GET_USER, fetchUser);
}

function* editUserSaga() {
  yield takeLatest(EDIT_USER, editUser);
}

// All sagas to be loaded
export default bootstrap([
  fetchUserSaga,
  editUserSaga,
]);
