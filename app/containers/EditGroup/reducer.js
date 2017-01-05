/*
 *
 * EditGroup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  EDIT_GROUP,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
});

function editGroupReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_GROUP:
      return state.set('loading', true);
    case EDIT_GROUP_SUCCESS:
    case EDIT_GROUP_ERROR:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default editGroupReducer;
