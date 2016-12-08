// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { GET_USERS_URL, GET_USERS } from './constants';
import { getUsersSuccess, getUsersError } from './actions';


export function callGetUsers() {
  return fetch(GET_USERS_URL, {
    method: 'GET',
  }).then((response) => response.json());
}

export function* getUsers() {
  try {
    const users = yield call(callGetUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError());
  }
}

export function* defaultSaga() {
  yield* takeLatest(GET_USERS, getUsers);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
