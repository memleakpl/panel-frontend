import { createSelector } from 'reselect';

/**
 * Direct selector to the layout state domain
 */
const selectLayoutDomain = () => (state) => state.get('layout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Layout
 */

const selectLayout = () => createSelector(
  selectLayoutDomain(),
  (substate) => substate.toJS()
);

export default selectLayout;
export {
  selectLayoutDomain,
};
