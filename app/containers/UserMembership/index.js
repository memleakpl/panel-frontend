/*
 *
 * UserMembership
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { redA700 } from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

import { getGroupMemberships, setJoinGroup, joinGroup, toggleLeaveGroup, leaveGroups } from './actions';
import selectUserMembership from './selectors';
import messages from './messages';

import JoinGroupComponent from '../../components/JoinGroupComponent';
import LeaveGroupComponent from '../../components/LeaveGroupComponent';

export class UserMembership extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    user: React.PropTypes.string.isRequired,
    header: React.PropTypes.element,
    loading: React.PropTypes.bool.isRequired,
    error: React.PropTypes.bool.isRequired,
    group: React.PropTypes.string.isRequired,
    groups: React.PropTypes.array,
    currentGroups: React.PropTypes.array,
    leaveGroups: React.PropTypes.array,
    joinButtonDisabled: React.PropTypes.bool.isRequired,
    leaveButtonDisabled: React.PropTypes.bool.isRequired,
    dispatch: React.PropTypes.func,
  };

  componentDidMount() {
    this.props.dispatch(getGroupMemberships(this.props.user));
  }

  onLoad(elements) {
    if (this.props.loading) {
      return <div style={{ textAlign: 'center' }}><CircularProgress style={{ margin: '0 auto' }} /></div>;
    } else if (this.props.error) {
      return (
        <div style={{ textAlign: 'center', color: redA700 }}>
          <FormattedMessage {...messages.getGroupsErrorMessage} />
        </div>
      );
    }
    return elements();
  }

  render() {
    return (
      <div>
        {this.props.header}
        {this.onLoad(() =>
          <div>
            <JoinGroupComponent
              value={this.props.group}
              groups={this.props.groups}
              buttonDisabled={this.props.joinButtonDisabled}
              onUpdateInput={(group) => this.props.dispatch(setJoinGroup(group))}
              onSubmit={() => this.props.dispatch(joinGroup(this.props.user, this.props.group))}
            />
            <LeaveGroupComponent
              groups={this.props.currentGroups}
              checkedGroups={this.props.leaveGroups}
              buttonDisabled={this.props.leaveButtonDisabled}
              onCheck={(group) => this.props.dispatch(toggleLeaveGroup(group))}
              onSubmit={() => this.props.dispatch(leaveGroups(this.props.user, this.props.leaveGroups))}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = selectUserMembership();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMembership);
