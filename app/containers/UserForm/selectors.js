import { createSelector } from 'reselect';

/**
 * Direct selector to the userForm state domain
 */
const selectUserFormDomain = () => (state) => state.get('userForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserForm
 */

const selectUserForm = () => createSelector(
  selectUserFormDomain(),
  (substate) => substate.toJS()
);

export default selectUserForm;
export {
  selectUserFormDomain,
};
