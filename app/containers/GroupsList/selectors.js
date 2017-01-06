import { createSelector } from 'reselect';

/**
 * Direct selector to the groupsList state domain
 */
const selectGroupsListDomain = () => (state) => state.get('groupsList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GroupsList
 */

const selectGroupsList = () => createSelector(
  selectGroupsListDomain(),
  (substate) => substate.toJS()
);

export default selectGroupsList;
export {
  selectGroupsListDomain,
};
