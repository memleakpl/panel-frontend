/*
 *
 * LoginForm constants
 *
 */
import { API_ROOT } from '../../constants';
import { USERS_LIST_URL } from '../UsersList/constants';
import { CHANGE_PASSWORD_URL } from '../ChangePasswordForm/constants';

export const SET_USERNAME = 'app/LoginForm/SET_USERNAME';
export const SET_PASSWORD = 'app/LoginForm/SET_PASSWORD';
export const LOGIN = 'app/LoginForm/LOGIN';
export const LOGIN_SUCCESS = 'app/LoginForm/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/LoginForm/LOGIN_ERROR';
export const LOGIN_URL = '/login';

export const RESET_PASSWORD = 'app/LoginForm/RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'app/LoginForm/RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'app/LoginForm/RESET_PASSWORD_ERROR';

export const LOGIN_API_URL = `${API_ROOT}/login`;
export const ISADMIN_API_URL = `${API_ROOT}/user/isAdmin`;

export const ADMIN_AFTER_LOGIN_URL = USERS_LIST_URL;
export const USER_AFTER_LOGIN_URL = CHANGE_PASSWORD_URL;
