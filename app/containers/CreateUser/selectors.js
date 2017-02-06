import { createSelector } from 'reselect';

/**
 * Direct selector to the createGroup state domain
 */
const selectCreateUserDomain = () => (state) => state.get('createUser');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateGroup
 */

const selectCreateUser = () => createSelector(
  selectCreateUserDomain(),
  (substate) => substate.toJS()
);

export default selectCreateUser;
export {
  selectCreateUserDomain,
};
