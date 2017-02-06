import { put } from 'redux-saga/effects';

import { bootstrap } from '../../utils/sagas';
import { clearForm } from './actions';

function* locationChange() {
  yield put(clearForm());
}

// All sagas to be loaded
export default bootstrap([], locationChange);
