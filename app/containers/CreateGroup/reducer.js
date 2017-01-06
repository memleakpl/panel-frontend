/*
 *
 * CreateGroup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_GROUP,
  CREATE_GROUP_ERROR,
  CREATE_GROUP_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
});

function createGroupReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GROUP:
      return state.set('loading', true);
    case CREATE_GROUP_ERROR:
      return state.set('loading', false);
    case CREATE_GROUP_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default createGroupReducer;
