/*
 *
 * CreateGroup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_GROUP_SUCCESS,
} from './constants';

const initialState = fromJS({});

function createGroupReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default createGroupReducer;
