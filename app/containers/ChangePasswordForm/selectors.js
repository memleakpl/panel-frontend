import { createSelector } from 'reselect';

/**
 * Direct selector to the changePasswordForm state domain
 */
const selectChangePasswordFormDomain = () => (state) => state.get('changePasswordForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChangePasswordForm
 */

const selectChangePasswordForm = () => createSelector(
  selectChangePasswordFormDomain(),
  (substate) => substate.toJS()
);

export default selectChangePasswordForm;
export {
  selectChangePasswordFormDomain,
};
