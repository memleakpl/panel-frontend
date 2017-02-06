import { createSelector } from 'reselect';

/**
 * Direct selector to the resetPasswordForm state domain
 */
const selectResetPasswordFormDomain = () => (state) => state.get('resetPasswordForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResetPasswordForm
 */

const selectResetPasswordForm = () => createSelector(
  selectResetPasswordFormDomain(),
  (substate) => substate.toJS()
);

export default selectResetPasswordForm;
export {
  selectResetPasswordFormDomain,
};
