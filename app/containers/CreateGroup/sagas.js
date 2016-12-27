import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { createGroupError, createGroupSuccess } from './actions';
import { CREATE_GROUP_API_URL, REQUEST_CREATE_GROUP } from './constants';

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
  yield* takeLatest(REQUEST_CREATE_GROUP, createGroup);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
