/*
 *
 * UsersList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USERS_SUCCESS, GET_USERS_ERROR, SET_DELETION_USER, DELETE_USER_SUCCESS,
} from './constants';

const initialState = fromJS({
  users: [],
  error: false,
  deletionUser: null,
});

function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return state.set('users', action.value);
    case GET_USERS_ERROR:
      return state.set('error', true);
    case SET_DELETION_USER:
      return state.set('deletionUser', action.value);
    case DELETE_USER_SUCCESS:
      return state.set('deletionUser', null);
    default:
      return state;
  }
}

export default usersListReducer;
