import { call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { push } from 'react-router-redux';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import {
  EDIT_GROUP,
  EDIT_GROUP_ERROR,
  EDIT_GROUP_SUCCESS,
  GET_GROUP,
  API_GET_GROUP,
  API_EDIT_GROUP,
  LIST_GROUPS_URL,
} from './constants';
import { setGroup } from '../GroupForm/actions';
import selectGroupForm from '../GroupForm/selectors';
import { getGroupSuccess, getGroupError, editGroupError, editGroupSuccess } from './actions';
import { editGroupErrorNotification, editGroupSuccessNotification } from './notifications';

function callFetchGroup(groupname) {
  return checkedFetch(`${API_GET_GROUP}${groupname}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    credentials: 'include',
  }).then((response) => response.json());
}

function* fetchGroup(action) {
  try {
    const group = yield call(callFetchGroup, action.value);
    yield put(getGroupSuccess());
    yield put(setGroup(group));
  } catch (e) {
    yield put(getGroupError(action.value));
  }
}

function callEditGroup(group) {
  return checkedFetch(`${API_EDIT_GROUP}${group.name}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(group),
  });
}

function* editGroup() {
  const group = yield select(selectGroupForm());
  try {
    yield call(callEditGroup, group);
    yield put(editGroupSuccess(group));
    yield put(push(LIST_GROUPS_URL));
  } catch (e) {
    yield put(editGroupError(group));
  }
}

function* fetchGroupSaga() {
  yield takeLatest(GET_GROUP, fetchGroup);
}

function* editGroupSaga() {
  yield takeLatest(EDIT_GROUP, editGroup);
}

function* notificationSaga() {
  yield takeEvery(EDIT_GROUP_ERROR, function* notifyEditGroupError(action) {
    yield put(editGroupErrorNotification(action.value));
  });
  yield takeEvery(EDIT_GROUP_SUCCESS, function* notifyEditGroupSuccess(action) {
    yield put(editGroupSuccessNotification(action.value));
  });
}

// All sagas to be loaded
export default bootstrap([
  fetchGroupSaga,
  notificationSaga,
  editGroupSaga,
]);
