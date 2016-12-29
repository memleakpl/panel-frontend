import { put, call } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import Notifications from 'react-notification-system-redux';
import { bootstrap } from '../../utils/sagas';
import { GET_USERS_URL, GET_USERS, DELETE_USER_REQUEST, DELETE_USER_ERROR, API_DELETE_USER_URL } from './constants';
import { getUsersSuccess, getUsersError, deleteUserSuccess, deleteUserError } from './actions';
import { deleteUserErrorNotification } from './notifications';


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
    yield put(deleteUserSuccess());
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

function* getUsersSaga() {
  yield* takeLatest(GET_USERS, getUsers);
}

function* deleteSaga() {
  yield* takeEvery(DELETE_USER_REQUEST, deleteUser);
}

// All sagas to be loaded
export default bootstrap([
  getUsersSaga,
  deleteSaga,
  notifyDeleteUserErrorSaga,
]);
