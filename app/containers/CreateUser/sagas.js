import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { bootstrap } from '../../utils/sagas';
import selectUserForm from '../UserForm/selectors';
import { CREATE_USER_API_URL, CREATE_USER } from './constants';
import { createUserSuccess, createUserError } from './actions';


function callCreate(user) {
  return fetch(CREATE_USER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
}

function* createUser() {
  try {
    const user = yield select(selectUserForm());
    yield call(callCreate, user);
    yield put(createUserSuccess());
  } catch (e) {
    yield put(createUserError());
  }
}

function* createUserSaga() {
  yield* takeLatest(CREATE_USER, createUser);
}

// All sagas to be loaded
export default bootstrap([createUserSaga]);
