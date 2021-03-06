import { call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import {
  GET_USER,
  EDIT_USER,
  EDIT_USER_ERROR,
  EDIT_USER_SUCCESS,
  API_GET_USER,
  API_EDIT_USER,
  LIST_USERS_URL,
} from './constants';
import selectUserForm from '../UserForm/selectors';
import { setUser } from '../UserForm/actions';
import { getUserSuccess, getUserError, editUserSuccess, editUserError } from './actions';
import { editUserErrorNotification, editUserSuccessNotification } from './notifications';

function callFetchUser(username) {
  return checkedFetch(`${API_GET_USER}${username}`, {
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
    yield put(getUserSuccess());
    yield put(setUser(user));
  } catch (e) {
    yield put(getUserError(action.value));
  }
}

function callEditUser(user) {
  return checkedFetch(`${API_EDIT_USER}${user.username}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
}

function* editUser() {
  const user = yield select(selectUserForm());
  try {
    yield call(callEditUser, user);
    yield put(editUserSuccess(user));
    yield put(push(LIST_USERS_URL));
  } catch (e) {
    yield put(editUserError(user));
  }
}

function* notificationSaga() {
  yield takeEvery(EDIT_USER_SUCCESS, function* notifyEditUserSuccess(action) {
    yield put(editUserSuccessNotification(action.value));
  });
  yield takeEvery(EDIT_USER_ERROR, function* notifyEditUserError(action) {
    yield put(editUserErrorNotification(action.value));
  });
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
  notificationSaga,
]);
