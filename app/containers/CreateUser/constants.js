/*
 *
 * CreateUser constants
 *
 */
import { API_ROOT } from '../../constants';

export const SET_USERNAME = 'app/CreateUser/SET_USERNAME';
export const SET_FIRST_NAME = 'app/CreateUser/SET_FIRST_NAME';
export const SET_LAST_NAME = 'app/CreateUser/SET_LAST_NAME';
export const SET_EMAIL = 'app/CreateUser/SET_EMAIL';
export const REQUEST_CREATE_USER = 'app/CreateUser/REQUEST_CREATE_USER';
export const CREATE_USER_SUCCESS = 'app/CreateUser/CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'app/CreateUser/CREATE_USER_ERROR';

export const CREATE_USER_API_URL = `${API_ROOT}/user`;
