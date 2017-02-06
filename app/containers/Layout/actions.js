
import { LOGOUT, CHECK_ADMIN, SET_ADMIN } from './constants';

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function checkAdmin() {
  return {
    type: CHECK_ADMIN,
  };
}

export function setAdmin(isAdmin) {
  return {
    type: SET_ADMIN,
    value: isAdmin,
  };
}
