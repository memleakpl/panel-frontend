/*
 *
 * ChangePasswordForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_REPEAT_PASSWORD,
  SET_NEW_PASSWORD,
  SET_OLD_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
} from './constants';

const initialState = fromJS({
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
  error: false,
});

function changePasswordFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OLD_PASSWORD:
      return state.set('oldPassword', action.value);
    case SET_NEW_PASSWORD:
      return state.set('newPassword', action.value);
    case SET_REPEAT_PASSWORD:
      return state.set('repeatPassword', action.value);
    case CHANGE_PASSWORD_SUCCESS:
      return state.set('error', false);
    case CHANGE_PASSWORD_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default changePasswordFormReducer;
