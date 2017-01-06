import { createSelector } from 'reselect';

/**
 * Direct selector to the groupForm state domain
 */
const selectGroupFormDomain = () => (state) => state.get('groupForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GroupForm
 */

const selectGroupForm = () => createSelector(
  selectGroupFormDomain(),
  (substate) => substate.toJS()
);

export default selectGroupForm;
export {
  selectGroupFormDomain,
};
