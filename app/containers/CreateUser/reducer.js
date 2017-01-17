/*
 *
 * EditUser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
});

function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return state.set('loading', true);
    case CREATE_USER_ERROR:
    case CREATE_USER_SUCCESS:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default createUserReducer;
