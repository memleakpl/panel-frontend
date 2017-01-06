/*
 *
 * CreateUser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_USER_SUCCESS,
} from './constants';

const initialState = fromJS({});

function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default createUserReducer;
