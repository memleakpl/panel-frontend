import { createSelector } from 'reselect';

/**
 * Direct selector to the createUser state domain
 */
const selectCreateUserDomain = () => (state) => state.get('createUser');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateUser
 */

const selectCreateUser = () => createSelector(
  selectCreateUserDomain(),
  (substate) => substate.toJS()
);

export default selectCreateUser;
export {
  selectCreateUserDomain,
};
