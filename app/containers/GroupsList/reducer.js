/*
 *
 * GroupsList reducer
 *
 */
import { fromJS, Map } from 'immutable';
import {
  GET_GROUPS_SUCCESS, GET_GROUPS_ERROR, SET_DELETION_GROUP, DELETE_GROUP_SUCCESS, DELETE_GROUP_ERROR,
} from './constants';

const initialState = fromJS({
  groups: [],
  error: false,
  loading: true,
  deletionGroup: null,
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
    case SET_DELETION_GROUP:
      return state.set('deletionGroup', action.value);
    case DELETE_GROUP_SUCCESS:
      return state.set('deletionGroup', null);
    case DELETE_GROUP_ERROR:
      return state.set('deletionGroup', null);
    default:
      return state;
  }
}

export default groupsListReducer;
