/*
 *
 * GroupForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_DESCRIPTION,
  SET_NAME,
} from './constants';

const initialState = fromJS({
  description: '',
  name: '',
});

function groupFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DESCRIPTION:
      return state.set('description', action.value);
    case SET_NAME:
      return state.set('name', action.value);
    default:
      return state;
  }
}

export default groupFormReducer;
