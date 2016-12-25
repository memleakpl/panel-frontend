/*
 *
 * GroupsList reducer
 *
 */
import { fromJS } from 'immutable';
import {
  GET_GROUPS_SUCCESS, GET_GROUPS_ERROR,
} from './constants';

const initialState = fromJS({
  groups: [],
  error: false,
});

function groupsListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS_SUCCESS:
      return state.set('groups', action.value);
    case GET_GROUPS_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default groupsListReducer;
