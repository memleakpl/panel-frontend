import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { bootstrap } from '../../utils/sagas';
import selectUserForm from '../UserForm/selectors';
import { CREATE_USER_API_URL, REQUEST_CREATE_USER } from './constants';
import { requestCreateUserSuccess, requestCreateUserError } from './actions';


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
    yield put(requestCreateUserSuccess());
  } catch (e) {
    yield put(requestCreateUserError());
  }
}

function* createUserSaga() {
  yield* takeLatest(REQUEST_CREATE_USER, createUser);
}

// All sagas to be loaded
export default bootstrap([createUserSaga]);
