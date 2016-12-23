import { createSelector } from 'reselect';

/**
 * Direct selector to the notificationsSystem state domain
 */
const selectNotificationsSystemDomain = () => (state) => state.get('notifications');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NotificationsSystem
 */

const selectNotificationsSystem = () => createSelector(
  selectNotificationsSystemDomain(),
  (substate) => substate.toJS()
);

export default selectNotificationsSystem;
export {
  selectNotificationsSystemDomain,
};
