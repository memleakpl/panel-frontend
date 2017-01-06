/*
 *
 * UserMembership reducer
 *
 */

import { fromJS, Set } from 'immutable';
import {
  GET_GROUP_MEMBERSHIPS,
  GET_GROUP_MEMBERSHIPS_ERROR,
  GET_GROUP_MEMBERSHIPS_SUCCESS,
  SET_JOIN_GROUP,
  JOIN_GROUP_ERROR,
  JOIN_GROUP_SUCCESS,
  JOIN_GROUP,
  TOGGLE_LEAVE_GROUP,
  LEAVE_GROUPS,
  LEAVE_GROUP_ERROR,
  LEAVE_GROUP_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: true,
  error: false,
  joinButtonDisabled: false,
  leaveButtonDisabled: false,
  group: '',
  groups: undefined,
  currentGroups: undefined,
  checkedGroups: Set(), // TODO rename to leaveGroups
});

function userMembershipReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROUP_MEMBERSHIPS:
      return state.merge({ loading: true, error: false });
    case GET_GROUP_MEMBERSHIPS_ERROR:
      return state.merge({ loading: false, error: true });
    case GET_GROUP_MEMBERSHIPS_SUCCESS:
      return state.merge({
        loading: false,
        error: false,
        groups: action.value.availableGroups,
        currentGroups: action.value.currentGroups,
      });
    case SET_JOIN_GROUP:
      return state.set('group', action.value);
    case JOIN_GROUP:
      return state.set('joinButtonDisabled', true);
    case JOIN_GROUP_SUCCESS:
      return initialState;
    case JOIN_GROUP_ERROR:
      return state.set('joinButtonDisabled', false);
    case TOGGLE_LEAVE_GROUP: {
      const checkedGroups = state.get('checkedGroups');
      return state.set('checkedGroups', checkedGroups.includes(action.value) ?
        checkedGroups.remove(action.value) :
        checkedGroups.add(action.value));
    }
    case LEAVE_GROUPS:
      return state.set('leaveButtonDisabled', true);
    case LEAVE_GROUP_ERROR:
      return state.set('leaveButtonDisabled', false);
    case LEAVE_GROUP_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default userMembershipReducer;
