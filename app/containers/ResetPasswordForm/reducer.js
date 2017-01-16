/*
 *
 * ResetPasswordForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_USERNAME,
  SET_EMAIL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './constants';

const initialState = fromJS({
  username: '',
  email: '',
  loading: false,
  error: false,
});
function resetPasswordFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return state.set('username', action.value);
    case SET_EMAIL:
      return state.set('email', action.value);
    case RESET_PASSWORD:
      return state.merge({ loading: true, error: false });
    case RESET_PASSWORD_SUCCESS:
      return initialState;
    case RESET_PASSWORD_ERROR:
      return state.merge({ error: true, loading: false });
    default:
      return state;
  }
}

export default resetPasswordFormReducer;
