import { put, call } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import Notifications from 'react-notification-system-redux';
import { bootstrap } from '../../utils/sagas';
import {
  GET_USERS_URL,
  GET_USERS,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  API_DELETE_USER_URL,
} from './constants';
import { getUsersSuccess, getUsersError, deleteUserSuccess, deleteUserError } from './actions';
import { deleteUserErrorNotification, deleteUserSuccessNotification } from './notifications';


function callGetUsers() {
  return fetch(GET_USERS_URL, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => response.json());
}

function callDeleteUser(username) {
  return fetch(`${API_DELETE_USER_URL}${username}`, {
    credentials: 'include',
    method: 'DELETE',
  }).then((response) => {
    if (response.status !== 204) throw new Error('Delete failed');
  });
}

function* getUsers() {
  try {
    const users = yield call(callGetUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError());
  }
}

function* deleteUser(action) {
  try {
    yield call(callDeleteUser, action.value);
    yield put(deleteUserSuccess(action.value));
    yield getUsers();
  } catch (e) {
    yield put(deleteUserError(action.value));
  }
}

function* notifyDeleteUserError(action) {
  yield put(Notifications.error(deleteUserErrorNotification(action.value)));
}

function* notifyDeleteUserErrorSaga() {
  yield* takeEvery(DELETE_USER_ERROR, notifyDeleteUserError);
}

function* notifyDeleteUserSuccess(action) {
  yield put(Notifications.error(deleteUserSuccessNotification(action.value)));
}

function* notifyDeleteUserSuccessSaga() {
  yield* takeEvery(DELETE_USER_SUCCESS, notifyDeleteUserSuccess);
}

function* getUsersSaga() {
  yield* takeLatest(GET_USERS, getUsers);
}

function* deleteSaga() {
  yield* takeLatest(DELETE_USER, deleteUser);
}

// All sagas to be loaded
export default bootstrap([
  getUsersSaga,
  deleteSaga,
  notifyDeleteUserErrorSaga,
  notifyDeleteUserSuccessSaga,
]);
