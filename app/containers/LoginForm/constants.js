/*
 *
 * LoginForm constants
 *
 */
import { API_ROOT } from '../../constants';
import { USERS_LIST_URL } from '../UsersList/constants';

export const SET_USERNAME = 'app/LoginForm/SET_USERNAME';
export const SET_PASSWORD = 'app/LoginForm/SET_PASSWORD';
export const LOGIN = 'app/LoginForm/LOGIN';
export const LOGIN_SUCCESS = 'app/LoginForm/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/LoginForm/LOGIN_ERROR';
export const LOGIN_URL = '/login';

export const LOGIN_API_URL = `${API_ROOT}/login`;
export const AFTER_LOGIN_URL = USERS_LIST_URL;
