/**
 * Created by maxmati on 12/28/16.
 */

import { fork, take, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

export function bootstrap(sagas) {
  function* bootstrapSaga() {
    const tasks = yield sagas.map((saga) => fork(saga));
    yield take(LOCATION_CHANGE);
    yield tasks.map((task) => cancel(task));
  }

  return [bootstrapSaga];
}
