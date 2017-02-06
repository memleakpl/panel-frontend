import { createSelector } from 'reselect';

/**
 * Direct selector to the userMembership state domain
 */
const selectUserMembershipDomain = () => (state) => state.get('userMembership');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserMembership
 */

const selectUserMembership = () => createSelector(
  selectUserMembershipDomain(),
  (substate) => substate.toJS()
);

export default selectUserMembership;
export {
  selectUserMembershipDomain,
};
