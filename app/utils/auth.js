import { replace } from 'react-router-redux';
import { API_ROOT } from '../constants';

export function requireAuth(store) {
  fetch(`${API_ROOT}/session`, {
    credentials: 'include',
    method: 'GET',
  }).then((response) => {
    if (response.status !== 204) {
      store.dispatch(replace('/login'));
    }
  });
}
