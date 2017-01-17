/**
 * Created by maxmati on 1/15/17.
 */
import { API_ROOT } from './constants';

export const PASSWORD_RESET_URL = '/password/reset';

export const RESET_PASSWORD_API_URL = `${API_ROOT}/password/reset`;
export const RESET_PASSWORD_CONFIRM_API_URL = `${API_ROOT}/password/reset/confirm`;

export function editUserUrl(username) {
  return `/user/${username}`;
}

export function editGroupUrl(groupname) {
  return `/group/${groupname}`;
}
