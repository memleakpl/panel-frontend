import { call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import { bootstrap, checkedFetch } from '../../utils/sagas';
import selectUserForm from '../UserForm/selectors';
import { clearForm } from '../UserForm/actions';
import { CREATE_USER_API_URL, CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_ERROR } from './constants';
import { createUserSuccess, createUserError } from './actions';
import { createUserErrorNotification, createUserSuccessNotification } from './notifications';


function callCreate(user) {
  return checkedFetch(CREATE_USER_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(user),
  });
}

function* createUser() {
  const user = yield select(selectUserForm());
  try {
    yield call(callCreate, user);
    yield put(createUserSuccess(user));
    yield put(clearForm());
  } catch (e) {
    yield put(createUserError(user));
  }
}

function* notificationSaga() {
  yield takeEvery(CREATE_USER_SUCCESS, function* notifyCreateUserSuccess(action) {
    yield put(createUserSuccessNotification(action.value));
  });
  yield takeEvery(CREATE_USER_ERROR, function* notifyCreateUserError(action) {
    yield put(createUserErrorNotification(action.value));
  });
}

function* createUserSaga() {
  yield* takeLatest(CREATE_USER, createUser);
}

// All sagas to be loaded
export default bootstrap([
  createUserSaga,
  notificationSaga,
]);
