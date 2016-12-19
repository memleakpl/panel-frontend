/*
 *
 * LoginForm constants
 *
 */
import { API_ROOT } from '../../constants';
import { USERS_LIST_URL } from '../UsersList/constants';

export const SET_USERNAME = 'app/LoginForm/SET_USERNAME';
export const SET_PASSWORD = 'app/LoginForm/SET_PASSWORD';
export const REQUEST_LOGIN = 'app/LoginForm/REQUEST_LOGIN';
export const REQUEST_LOGIN_SUCCESS = 'app/LoginForm/REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_ERROR = 'app/LoginForm/REQUEST_LOGIN_ERROR';

export const LOGIN_API_URL = `${API_ROOT}/login`;
export const AFTER_LOGIN_URL = USERS_LIST_URL;
