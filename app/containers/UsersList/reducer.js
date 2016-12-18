/*
 *
 * UsersList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, GET_USERS_SUCCESS, GET_USERS_ERROR, SET_SELECTED_USER,
} from './constants';

const initialState = fromJS({
  users: [],
  error: false,
  selectedUser: '',
});

function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return state.set('users', action.value);
    case GET_USERS_ERROR:
      return state.set('error', true);
    case SET_SELECTED_USER:
      return state.set('selectedUser', action.value);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default usersListReducer;
