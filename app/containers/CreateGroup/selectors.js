import { createSelector } from 'reselect';

/**
 * Direct selector to the createGroup state domain
 */
const selectCreateGroupDomain = () => (state) => state.get('createGroup');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateGroup
 */

const selectCreateGroup = () => createSelector(
  selectCreateGroupDomain(),
  (substate) => substate.toJS()
);

export default selectCreateGroup;
export {
  selectCreateGroupDomain,
};
