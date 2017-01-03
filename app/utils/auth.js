import { API_ROOT } from '../constants';

export function requireAuth(nextState, replace, callback) {
  fetch(`${API_ROOT}/session`, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => {
    if (response.status !== 204) {
      replace('/login');
    }
    callback();
  });
}
