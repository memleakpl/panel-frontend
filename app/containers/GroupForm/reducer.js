/*
 *
 * GroupForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
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
