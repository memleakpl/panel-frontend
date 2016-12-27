/*
 *
 * GroupsList reducer
 *
 */
import { fromJS, Map } from 'immutable';
import {
  GET_GROUPS_SUCCESS, GET_GROUPS_ERROR,
} from './constants';

const initialState = fromJS({
  groups: [],
  error: false,
  loading: true,
});

function groupsListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS_SUCCESS:
      return state.merge(Map({
        groups: action.value,
        loading: false,
      }));
    case GET_GROUPS_ERROR:
      return state.merge(Map({
        error: true,
        loading: false,
      }));
    default:
      return state;
  }
}

export default groupsListReducer;
