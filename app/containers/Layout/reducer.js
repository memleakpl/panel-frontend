/*
 *
 * Layout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_ADMIN,
} from './constants';

const initialState = fromJS({
  admin: undefined,
});

function layoutReducer(state = initialState, action = null) {
  switch (action.type) {
    case SET_ADMIN:
      return state.set('admin', action.value);
    default:
      return state;
  }
}

export default layoutReducer;
