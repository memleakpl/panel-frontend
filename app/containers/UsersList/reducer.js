/*
 *
 * UsersList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USERS_SUCCESS, GET_USERS_ERROR
} from './constants';

const initialState = fromJS({
  users: [],
  error: false,
});

function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return state.set('users', action.value);
    case GET_USERS_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default usersListReducer;
