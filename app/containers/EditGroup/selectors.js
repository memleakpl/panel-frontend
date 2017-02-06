import { createSelector } from 'reselect';

/**
 * Direct selector to the editGroup state domain
 */
const selectEditGroupDomain = () => (state) => state.get('editGroup');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditGroup
 */

const selectEditGroup = () => createSelector(
  selectEditGroupDomain(),
  (substate) => substate.toJS()
);

export default selectEditGroup;
export {
  selectEditGroupDomain,
};
