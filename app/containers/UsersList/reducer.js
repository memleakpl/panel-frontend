/*
 *
 * UsersList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SET_DELETION_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from './constants';

const initialState = fromJS({
  users: [],
  error: false,
  loading: false,
  deletionUser: null,
});

function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return state.set('loading', true);
    case GET_USERS_SUCCESS:
      return state.merge({ users: action.value, loading: false, error: false });
    case GET_USERS_ERROR:
      return state.merge({ error: true, loading: false });
    case SET_DELETION_USER:
      return state.set('deletionUser', action.value);
    case DELETE_USER_SUCCESS:
    case DELETE_USER_ERROR:
      return state.set('deletionUser', null);
    default:
      return state;
  }
}

export default usersListReducer;
