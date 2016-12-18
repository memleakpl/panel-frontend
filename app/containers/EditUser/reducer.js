/*
 *
 * EditUser reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({});

function editUserReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default editUserReducer;
