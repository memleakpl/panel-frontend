import { createSelector } from 'reselect';

/**
 * Direct selector to the editUser state domain
 */
const selectEditUserDomain = () => (state) => state.get('editUser');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditUser
 */

const selectEditUser = () => createSelector(
  selectEditUserDomain(),
  (substate) => substate.toJS()
);

export default selectEditUser;
export {
  selectEditUserDomain,
};
