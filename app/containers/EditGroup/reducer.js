/*
 *
 * EditGroup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_GROUP,
  GET_GROUP_SUCCESS,
  GET_GROUP_ERROR,
  EDIT_GROUP,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  getLoading: false,
  getError: false,
});

function editGroupReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUP:
      return state.set('getLoading', true);
    case GET_GROUP_ERROR:
      return state.merge({ getError: true, getLoading: false });
    case GET_GROUP_SUCCESS:
      return state.merge({ getLoading: false, getError: false });
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
