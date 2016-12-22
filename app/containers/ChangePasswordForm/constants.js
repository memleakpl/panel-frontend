/*
 *
 * ChangePasswordForm constants
 *
 */
import { API_ROOT } from '../../constants';

export const SET_OLD_PASSWORD = 'app/ChangePasswordForm/SET_OLD_PASSWORD';
export const SET_NEW_PASSWORD = 'app/ChangePasswordForm/SET_NEW_PASSWORD';
export const SET_REPEAT_PASSWORD = 'app/ChangePasswordForm/SET_REPEAT_PASSWORD';
export const CHANGE_PASSWORD = 'app/ChangePasswordForm/CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'app/ChangePasswordForm/CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'app/ChangePasswordForm/CHANGE_PASSWORD_ERROR';

export const CHANGE_PASSWORD_API_URL = `${API_ROOT}/user/password`;

export const CHANGE_PASSWORD_URL = '/password/change';
