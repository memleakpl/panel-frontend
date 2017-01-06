/*
 *
 * UserMembership constants
 *
 */

import { API_ROOT } from '../../constants';

export const GET_GROUPS_API_URL = `${API_ROOT}/group`;

export const GET_GROUP_MEMBERSHIPS = 'app/UserMembership/GET_GROUP_MEMBERSHIPS';
export const GET_GROUP_MEMBERSHIPS_ERROR = 'app/UserMembership/GET_GROUP_MEMBERSHIPS_ERROR';
export const GET_GROUP_MEMBERSHIPS_SUCCESS = 'app/UserMembership/GET_GROUP_MEMBERSHIPS_SUCCESS';

export const SET_JOIN_GROUP = 'app/UserMembership/SET_JOIN_GROUP';
export const JOIN_GROUP = 'app/UserMembership/JOIN_GROUP';
export const JOIN_GROUP_ERROR = 'app/UserMembership/JOIN_GROUP_ERROR';
export const JOIN_GROUP_SUCCESS = 'app/UserMembership/JOIN_GROUP_SUCCESS';

export const TOGGLE_LEAVE_GROUP = 'app/UserMembership/TOGGLE_LEAVE_GROUP';
export const LEAVE_GROUPS = 'app/UserMembership/LEAVE_GROUPS';
export const LEAVE_GROUP_ERROR = 'app/UserMembership/LEAVE_GROUPS_ERROR';
export const LEAVE_GROUP_SUCCESS = 'app/UserMembership/LEAVE_GROUPS_SUCCESS';
