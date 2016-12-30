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

function RestError(response) {
  this.status = response.status;
  this.message = `Server returned ${!response.ok ? 'error' : ''} code ${response.status}`;
  this.details = () => response.json().then(
    (details) => details,
    () => this.message);
}
RestError.prototype = Object.create(RestError.prototype);
RestError.prototype.constructor = RestError;

function throwMessageOnError(responsePromise) {
  return responsePromise.then((response) => {
    if (!response.ok) throw new RestError(response);
    return responsePromise;
  });
}

export function checkedFetch(input, init) {
  return throwMessageOnError(fetch(input, init));
}
