/*
 *
 * GroupForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_FORM,
  SET_GROUP,
  SET_DESCRIPTION,
  SET_NAME,
  SET_OWNER,
} from './constants';

const initialState = fromJS({
  description: '',
  name: '',
  owner: '',
});

function groupFormReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_FORM:
      return initialState;
    case SET_GROUP:
      return fromJS(action.value);
    case SET_DESCRIPTION:
      return state.set('description', action.value);
    case SET_NAME:
      return state.set('name', action.value);
    case SET_OWNER:
      return state.set('owner', action.value);
    default:
      return state;
  }
}

export default groupFormReducer;
