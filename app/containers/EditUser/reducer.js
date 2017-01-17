/*
 *
 * EditUser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  EDIT_USER,
  EDIT_USER_ERROR,
  EDIT_USER_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  getError: false,
  getLoading: false,
});

function editUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return state.merge({ getError: false, getLoading: true });
    case GET_USER_ERROR:
      return state.merge({ getError: true, getLoading: false });
    case GET_USER_SUCCESS:
      return state.merge({ getError: false, getLoading: false });
    case EDIT_USER:
      return state.set('loading', true);
    case EDIT_USER_ERROR:
    case EDIT_USER_SUCCESS:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default editUserReducer;
