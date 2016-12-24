/*
 *
 * NotificationsSystem
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import selectNotificationsSystem from './selectors';


export class NotificationsSystem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    notifications: React.PropTypes.array,
    children: React.PropTypes.element.isRequired,
  };
  render() {
    return (
      <div>
        <Notifications notifications={this.props.notifications} />
        {this.props.children}
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
