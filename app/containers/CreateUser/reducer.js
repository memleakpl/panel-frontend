/*
 *
 * CreateUser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USERNAME,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
  CREATE_USER_SUCCESS,
} from './constants';

const initialState = fromJS({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
});

function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return state.set('username', action.value);
    case SET_FIRST_NAME:
      return state.set('firstName', action.value);
    case SET_LAST_NAME:
      return state.set('lastName', action.value);
    case SET_EMAIL:
      return state.set('email', action.value);
    case CREATE_USER_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default createUserReducer;
