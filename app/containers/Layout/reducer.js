/*
 *
 * Layout reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGOUT,
  SET_ADMIN,
} from './constants';
import { LOGIN } from '../LoginForm/constants';

const initialState = fromJS({
  admin: undefined,
});

function layoutReducer(state = initialState, action = null) {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return initialState;
    case SET_ADMIN:
      return state.set('admin', action.value);
    default:
      return state;
  }
}

export default layoutReducer;
