/*
 *
 * GroupsList constants
 *
 */
import { API_ROOT } from '../../constants';

export const GET_GROUPS_API_URL = `${API_ROOT}/group`;
export const DELETE_GROUPS_API_URL = `${API_ROOT}/group/`;

export const GROUPS_LIST_URL = '/groups';

export const GET_GROUPS_SUCCESS = 'app/GroupsList/GET_GROUPS_SUCCESS';
export const GET_GROUPS_ERROR = 'app/GroupsList/GET_GROUPS_ERROR';
export const GET_GROUPS = 'app/GroupsList/GET_GROUPS';
export const SET_DELETION_GROUP = 'app/GroupsList/SET_DELETION_GROUP';
export const DELETE_GROUP = 'app/GroupsList/DELETE_GROUP';
export const DELETE_GROUP_SUCCESS = 'app/GroupsList/DELETE_GROUP_SUCCESS';
export const DELETE_GROUP_ERROR = 'app/GroupsList/DELETE_GROUP_ERROR';

