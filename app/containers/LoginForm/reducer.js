/*
 *
 * LoginForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USERNAME,
  SET_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
  loading: false,
  error: false,
});

function loginFormReducer(state = initialState, action = null) {
  switch (action.type) {
    case SET_USERNAME:
      return state.set('username', action.value);
    case SET_PASSWORD:
      return state.set('password', action.value);
    case LOGIN:
      return state.set('loading', true);
    case LOGIN_SUCCESS:
      return initialState;
    case LOGIN_ERROR:
      return state.merge({
        error: true,
        password: '',
        loading: false,
      });
    default:
      return state;
  }
}

export default loginFormReducer;
