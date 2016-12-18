/*
 *
 * UserForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USER,
  SET_USERNAME,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
} from './constants';

const initialState = fromJS({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
});

function userFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return fromJS(action.value);
    case SET_USERNAME:
      return state.set('username', action.value);
    case SET_FIRST_NAME:
      return state.set('firstName', action.value);
    case SET_LAST_NAME:
      return state.set('lastName', action.value);
    case SET_EMAIL:
      return state.set('email', action.value);
    default:
      return state;
  }
}

export default userFormReducer;
