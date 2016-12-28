/*
 *
 * LoginForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USERNAME,
  SET_PASSWORD,
  REQUEST_LOGIN_ERROR,
  REQUEST_LOGIN_SUCCESS,
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
  error: false,
});

function loginFormReducer(state = initialState, action = null) {
  switch (action.type) {
    case SET_USERNAME:
      return state.set('username', action.value);
    case SET_PASSWORD:
      return state.set('password', action.value);
    case REQUEST_LOGIN_SUCCESS:
      return initialState;
    case REQUEST_LOGIN_ERROR:
      return state.merge({ error: true, password: '' });
    default:
      return state;
  }
}

export default loginFormReducer;
