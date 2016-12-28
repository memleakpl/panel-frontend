import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { createGroupError, createGroupSuccess } from './actions';
import { CREATE_GROUP_API_URL, CREATE_GROUP_REQUEST } from './constants';

import selectGroupForm from '../GroupForm/selectors';

function callCreate(group) {
  return fetch(CREATE_GROUP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(group),
  });
}

function* createGroup() {
  try {
    const group = yield select(selectGroupForm());
    yield call(callCreate, group);
    yield put(createGroupSuccess());
  } catch (e) {
    yield put(createGroupError());
  }
}

function* defaultSaga() {
  yield* takeLatest(CREATE_GROUP_REQUEST, createGroup);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
