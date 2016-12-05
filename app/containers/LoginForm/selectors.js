import { createSelector } from 'reselect';

/**
 * Direct selector to the loginForm state domain
 */
const selectLoginFormDomain = () => (state) => state.get('loginForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginForm
 */

const selectLoginForm = () => createSelector(
  selectLoginFormDomain(),
  (substate) => substate.toJS()
);

export default selectLoginForm;
export {
  selectLoginFormDomain,
};
