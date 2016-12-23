/*
 *
 * NotificationsSystem
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import selectNotificationsSystem from './selectors';

// FIXME: Change to default specified usage.
export class NotificationsSystem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    notifications: React.PropTypes.array,
  };
  render() {
    console.log(this.props);
    console.log(this.props.notifications);
    return (
      <div>
        <Notifications notifications={this.props.notifications} />
      </div>
    );
  }
}

const mapStateToProps = selectNotificationsSystem();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsSystem);
